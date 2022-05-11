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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/images/battleshipBackground.gif */ "./dist/images/battleshipBackground.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    display: grid;\n    text-align: center;\n    grid-template-columns: 1;\n    grid-template-rows: 1fr 2fr .25fr;\n    margin: 0;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size:100% 130vh;\n    background-repeat:no-repeat;\n    font-family: 'Bangers', cursive;\n    color: #233B48;\n}\n\n#startButton, #restartButton{    \n    display: flex;\n    width: max-content;\n    font-size: 2rem;\n    align-self: center;\n    margin: auto;\n    background-color: #FBC874;\n    border-radius: 5px;\n    border: none;\n    opacity: 0.7;\n    font-family: 'Bangers', cursive;\n}\n\n#startButton:hover, #restartButton:hover{\n    opacity: 0.2;\n}\n\nheader{\n    grid-area: 1 / 1 / span 1  /span 1;  \n    height: min-content; \n}\n\nmain{\n    grid-area: 2 / 1 / span 1  /span 1;\n    display:flex;    \n    margin: auto;\n    height: min-content;\n    align-items: center;\n    background-image: linear-gradient(75deg, #FBC874, #5794A6) ;    \n    opacity: 0.8;\n    border-radius: 5px;   \n}\n\nfooter{\n  grid-area: 3 / 1 / span 0  /span 0;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #3A6572;\n  opacity: 0.4;  \n  z-index: -1;\n}\n\n#title{\n    font-size: 4rem;\n}\n#playerBoard, #computerBoard {\n    display: flex; \n    flex-direction: row;\n    flex-grow: 0;\n    background-color: black;\n    opacity: 0.8;\n}\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n    width: 2em;\n    height: 2em;  \n    text-align: center;    \n}\n.playerCellsDiv, .computerCellsDiv{\n    border: 1px solid white;\n}\n\n@media screen and (max-width: 815px) {\n    main {\n      flex-direction: column;\n      margin: none;\n      height: 115vh;\n      padding: none; \n      width: 80vw;\n    }\n\n    body{\n        background-repeat: repeat-y;\n        background-size: auto;\n        display: flex;\n        flex-direction: column;\n    }\n    footer{\n        z-index: 0;\n    }\n\n    .playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n        width: 1.5rem;\n        height: 1.5rem;  \n        \n         \n    }\n    #startButton, #restartButton{\n        font-size: 1rem;\n    }\n\n    #title{\n        font-size: 2rem;\n    } \n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,iCAAiC;IACjC,SAAS;IACT,yDAA4D;IAC5D,0BAA0B;IAC1B,2BAA2B;IAC3B,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,2DAA2D;IAC3D,YAAY;IACZ,kBAAkB;AACtB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,OAAO;EACP,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,WAAW;AACb;;AAEA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI;MACE,sBAAsB;MACtB,YAAY;MACZ,aAAa;MACb,aAAa;MACb,WAAW;IACb;;IAEA;QACI,2BAA2B;QAC3B,qBAAqB;QACrB,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,UAAU;IACd;;IAEA;QACI,aAAa;QACb,cAAc;;;IAGlB;IACA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;EACF","sourcesContent":["body{\n    display: grid;\n    text-align: center;\n    grid-template-columns: 1;\n    grid-template-rows: 1fr 2fr .25fr;\n    margin: 0;\n    background-image: url(/dist/images/battleshipBackground.gif);\n    background-size:100% 130vh;\n    background-repeat:no-repeat;\n    font-family: 'Bangers', cursive;\n    color: #233B48;\n}\n\n#startButton, #restartButton{    \n    display: flex;\n    width: max-content;\n    font-size: 2rem;\n    align-self: center;\n    margin: auto;\n    background-color: #FBC874;\n    border-radius: 5px;\n    border: none;\n    opacity: 0.7;\n    font-family: 'Bangers', cursive;\n}\n\n#startButton:hover, #restartButton:hover{\n    opacity: 0.2;\n}\n\nheader{\n    grid-area: 1 / 1 / span 1  /span 1;  \n    height: min-content; \n}\n\nmain{\n    grid-area: 2 / 1 / span 1  /span 1;\n    display:flex;    \n    margin: auto;\n    height: min-content;\n    align-items: center;\n    background-image: linear-gradient(75deg, #FBC874, #5794A6) ;    \n    opacity: 0.8;\n    border-radius: 5px;   \n}\n\nfooter{\n  grid-area: 3 / 1 / span 0  /span 0;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #3A6572;\n  opacity: 0.4;  \n  z-index: -1;\n}\n\n#title{\n    font-size: 4rem;\n}\n#playerBoard, #computerBoard {\n    display: flex; \n    flex-direction: row;\n    flex-grow: 0;\n    background-color: black;\n    opacity: 0.8;\n}\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n    width: 2em;\n    height: 2em;  \n    text-align: center;    \n}\n.playerCellsDiv, .computerCellsDiv{\n    border: 1px solid white;\n}\n\n@media screen and (max-width: 815px) {\n    main {\n      flex-direction: column;\n      margin: none;\n      height: 115vh;\n      padding: none; \n      width: 80vw;\n    }\n\n    body{\n        background-repeat: repeat-y;\n        background-size: auto;\n        display: flex;\n        flex-direction: column;\n    }\n    footer{\n        z-index: 0;\n    }\n\n    .playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n        width: 1.5rem;\n        height: 1.5rem;  \n        \n         \n    }\n    #startButton, #restartButton{\n        font-size: 1rem;\n    }\n\n    #title{\n        font-size: 2rem;\n    } \n  }"],"sourceRoot":""}]);
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
      if (i === 0) {
        column.innerText = "y" + index;
      }
      else if (index === 0) {
        column.innerText = "x" + i;
      }
      else{
      column.innerText = "";}
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
        // document.getElementById(
        //   `c[ ${item[0]}, ${item[1]} ]`
        // ).style.backgroundColor = "red";
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
    {

        //if the alignment is horizontal and the length of the alignment + ship length is less than 10 (length of board)
        if (alignment == 'horizontal' && (positionCol + ShipName.ShipLength < 10) && (positionRow < 10) ) {  
            //first check there are no clashes with ships already on board       
            let shipClash = false;
            allShipCoords.forEach(element => 
                { 
                    if ((positionRow == element[0]) && (positionCol == element[1])) 
                    {
                        shipClash = true;
                    } 
                    
                });
            for (let index = 0; index < ShipName.ShipLength; index++) {
                if (shipClash)               
                {                                    
                    alert('Ship overlaps with another')
                    break;
                }
                else{
                //update the ships coordinate array
                ShipName.coordinates.push([positionRow,(positionCol + index)]) 
                //update gameboard array
                board[positionRow][positionCol + index] = ShipName; 
                }                    
            }
            //then push this object to shipArray as a record of ships on board
            shipArray.push(ShipName);
            //then push all coordinates of this ship to allShipCoords      
            ShipName.coordinates.forEach(element => {allShipCoords.push(element);});
        }
       
        //if the alignment is vertical and the length of the alignment + ship length is less than 10 (length of board)
        else if (alignment == 'vertical' && (positionRow + ShipName.ShipLength < 10) && (positionCol < 10)) {
            //first check there are no clashes with ships already on board       
            let shipClash = false;
            allShipCoords.forEach(element => 
                { 
                    if ((positionRow == element[0]) && (positionCol == element[1])) 
                    {
                        shipClash = true;                        
                    }                   
                });
            for (let index = 0; index < ShipName.ShipLength; index++) 
            {
                if (shipClash)               
                {
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
                }     
            } 
                  
        }
        //validation for if ships are not placed in the right spot
        else{            
            alert('Bad ship placement, resetting the page');
            window.location.reload();
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

    // playerBoard.missedShots = [];
    // computerBoard.missedShots = [];

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

//Board placement for player
let battleshipRowCoord = Number(prompt("Please enter your Battleships x coordinate"));
let battleshipColCoord = Number(prompt("Please enter your Battleships y coordinate"));
let battleshipAlignment = prompt("Please enter your Battleships placement (horizontal or vertical)");        
playerBoard.placeShip(playerBattleship, battleshipAlignment, battleshipRowCoord,battleshipColCoord );
(0,_frontEnd__WEBPACK_IMPORTED_MODULE_3__.createBoards)();

let patrolRowCoord = Number(prompt("Please enter your Patrols x coordinate"));
let patrolColCoord = Number(prompt("Please enter your Patrols y coordinate"));
let patrolAlignment = prompt("Please enter your Patrols placement (horizontal or vertical)");        
playerBoard.placeShip(playerPatrol, patrolAlignment, patrolRowCoord, patrolColCoord );
(0,_frontEnd__WEBPACK_IMPORTED_MODULE_3__.createBoards)();

let submarineRowCoord = Number(prompt("Please enter your Submarine x coordinate"));
let submarineColCoord = Number(prompt("Please enter your Submarine y coordinate"));
let submarineAlignment = prompt("Please enter your Submarine placement (horizontal or vertical)");        
playerBoard.placeShip(playerSubmarine, submarineAlignment, submarineRowCoord,submarineColCoord );
(0,_frontEnd__WEBPACK_IMPORTED_MODULE_3__.createBoards)();

let DestroyerRowCoord = Number(prompt("Please enter your Destroyer x coordinate"));
let DestroyerColCoord = Number(prompt("Please enter your Destroyer y coordinate"));
let DestroyerAlignment = prompt("Please enter your Destroyer placement (horizontal or vertical)");        
playerBoard.placeShip(playerDestroyer, DestroyerAlignment, DestroyerRowCoord,DestroyerColCoord );
(0,_frontEnd__WEBPACK_IMPORTED_MODULE_3__.createBoards)();

let CarrierRowCoord = Number(prompt("Please enter your Carrier x coordinate"));
let CarrierColCoord = Number(prompt("Please enter your Carrier y coordinate"));
let CarrierAlignment = prompt("Please enter your Carrier placement (horizontal or vertical)");        
playerBoard.placeShip(playerCarrier, CarrierAlignment, CarrierRowCoord,CarrierColCoord );
(0,_frontEnd__WEBPACK_IMPORTED_MODULE_3__.createBoards)();

computerBoard.placeShip(computerBattleship, 'vertical', 3,3 );
computerBoard.placeShip(computerPatrol, 'horizontal', 0,3 );
computerBoard.placeShip(computerSubmarine, 'vertical', 3,6 );
computerBoard.placeShip(computerDestroyer, 'horizontal', 8,1);
computerBoard.placeShip(computerCarrier, 'horizontal', 9,1 );

(0,_frontEnd__WEBPACK_IMPORTED_MODULE_3__.createBoards)();
}

function playerTurn(row, col)
{
    player1.takeTurn(row, col); 

    //immediately after, the computer takes a turn - for testing anyway
    let col2 = Math.floor(Math.random() * 10);
    let row2 = Math.floor(Math.random() * 10);
    player2COMP.takeTurn(col2, row2);  


    //ensure game is started before congratulating winner...
    if (playerBoard.shipArray.length > 1) {
        
    
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

/***/ "./dist/images/battleshipBackground.gif":
/*!**********************************************!*\
  !*** ./dist/images/battleshipBackground.gif ***!
  \**********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvZnJvbnRFbmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Rpc3QvaW1hZ2VzL2JhdHRsZXNoaXBCYWNrZ3JvdW5kLmdpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgLjI1ZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTMwdmg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICMyMzNCNDg7XFxufVxcblxcbiNzdGFydEJ1dHRvbiwgI3Jlc3RhcnRCdXR0b257ICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkM4NzQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxufVxcblxcbiNzdGFydEJ1dHRvbjpob3ZlciwgI3Jlc3RhcnRCdXR0b246aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gc3BhbiAxICAvc3BhbiAxOyAgXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7IFxcbn1cXG5cXG5tYWlue1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gc3BhbiAxICAvc3BhbiAxO1xcbiAgICBkaXNwbGF5OmZsZXg7ICAgIFxcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgI0ZCQzg3NCwgIzU3OTRBNikgOyAgICBcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgXFxufVxcblxcbmZvb3RlcntcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyBzcGFuIDAgIC9zcGFuIDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E2NTcyO1xcbiAgb3BhY2l0eTogMC40OyAgXFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcbiNwbGF5ZXJCb2FyZCwgI2NvbXB1dGVyQm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG4ucGxheWVyQ2VsbHNEaXYsIC5wbGF5ZXJSb3dEaXYsIC5jb21wdXRlclJvd0RpdiAuY29tcHV0ZXJDZWxsc0RpdnsgICAgXFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtOyAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxufVxcbi5wbGF5ZXJDZWxsc0RpdiwgLmNvbXB1dGVyQ2VsbHNEaXZ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTVweCkge1xcbiAgICBtYWluIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIG1hcmdpbjogbm9uZTtcXG4gICAgICBoZWlnaHQ6IDExNXZoO1xcbiAgICAgIHBhZGRpbmc6IG5vbmU7IFxcbiAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICB9XFxuXFxuICAgIGJvZHl7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICBmb290ZXJ7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJDZWxsc0RpdiwgLnBsYXllclJvd0RpdiwgLmNvbXB1dGVyUm93RGl2IC5jb21wdXRlckNlbGxzRGl2eyAgICBcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTsgIFxcbiAgICAgICAgXFxuICAgICAgICAgXFxuICAgIH1cXG4gICAgI3N0YXJ0QnV0dG9uLCAjcmVzdGFydEJ1dHRvbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAjdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH0gXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QseURBQTREO0lBQzVELDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkRBQTJEO0lBQzNELFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtNQUNFLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osYUFBYTtNQUNiLGFBQWE7TUFDYixXQUFXO0lBQ2I7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7UUFDYixjQUFjOzs7SUFHbEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAuMjVmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Rpc3QvaW1hZ2VzL2JhdHRsZXNoaXBCYWNrZ3JvdW5kLmdpZik7XFxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEzMHZoO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjMjMzQjQ4O1xcbn1cXG5cXG4jc3RhcnRCdXR0b24sICNyZXN0YXJ0QnV0dG9ueyAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJDODc0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xcbn1cXG5cXG4jc3RhcnRCdXR0b246aG92ZXIsICNyZXN0YXJ0QnV0dG9uOmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbmhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTsgIFxcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50OyBcXG59XFxuXFxubWFpbntcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTtcXG4gICAgZGlzcGxheTpmbGV4OyAgICBcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsICNGQkM4NzQsICM1Nzk0QTYpIDsgICAgXFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgIFxcbn1cXG5cXG5mb290ZXJ7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gc3BhbiAwICAvc3BhbiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNjU3MjtcXG4gIG9wYWNpdHk6IDAuNDsgIFxcbiAgei1pbmRleDogLTE7XFxufVxcblxcbiN0aXRsZXtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4jcGxheWVyQm9hcmQsICNjb21wdXRlckJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuLnBsYXllckNlbGxzRGl2LCAucGxheWVyUm93RGl2LCAuY29tcHV0ZXJSb3dEaXYgLmNvbXB1dGVyQ2VsbHNEaXZ7ICAgIFxcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDJlbTsgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxcbn1cXG4ucGxheWVyQ2VsbHNEaXYsIC5jb21wdXRlckNlbGxzRGl2e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcXG4gICAgbWFpbiB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBtYXJnaW46IG5vbmU7XFxuICAgICAgaGVpZ2h0OiAxMTV2aDtcXG4gICAgICBwYWRkaW5nOiBub25lOyBcXG4gICAgICB3aWR0aDogODB2dztcXG4gICAgfVxcblxcbiAgICBib2R5e1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgZm9vdGVye1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgfVxcblxcbiAgICAucGxheWVyQ2VsbHNEaXYsIC5wbGF5ZXJSb3dEaXYsIC5jb21wdXRlclJvd0RpdiAuY29tcHV0ZXJDZWxsc0RpdnsgICAgXFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07ICBcXG4gICAgICAgIFxcbiAgICAgICAgIFxcbiAgICB9XFxuICAgICNzdGFydEJ1dHRvbiwgI3Jlc3RhcnRCdXR0b257XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI3RpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9IFxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCwgcGxheWVyVHVybiB9IGZyb20gXCIuL2dhbWVMb29wXCI7XG5cbi8vR2xvYmFsIHZhcmlhYmxlc1xubGV0IHBsYXllcnNCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyQm9hcmRcIik7XG5sZXQgY29tcHV0ZXJzQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyQm9hcmRcIik7XG5cbi8vRGlzcGxheXMgY2hvc2VuIGJvYXJkIG9uIERPTVxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKGJvYXJkVG9EaXNwbGF5KSB7XG4gIC8vZHJhdyBib2FyZFxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYm9hcmRUb0Rpc3BsYXkuYm9hcmQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgLy9lbGVtZW50IGlzIGVhY2ggcm93XG4gICAgY29uc3QgZWxlbWVudCA9IGJvYXJkVG9EaXNwbGF5LmJvYXJkW2luZGV4XTtcbiAgICAvL2NyZWF0ZSBhIGRpdiBmb3IgdGhlIHJvd1xuICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIHJvdy5jbGFzc05hbWUgPSAncm93JztcbiAgICBpZiAoYm9hcmRUb0Rpc3BsYXkgPT09IGNvbXB1dGVyQm9hcmQpIHtcbiAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXB1dGVyUm93RGl2XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5ZXJDb2xEaXZcIik7XG4gICAgfVxuICAgIC8vY3JlYXRlIHRoZSBjb2x1bW5zXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xuICAgICAgICBjb2x1bW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNbICR7aX0sICR7ZWxlbWVudFtpbmRleF19IF1gKTtcbiAgICAgICAgY29sdW1uLm9uY2xpY2sgPSAoKSA9PiBwbGF5ZXJUdXJuKGAke2l9YCwgYCR7ZWxlbWVudFtpbmRleF19YCk7ICAgICAgICBcbiAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29tcHV0ZXJDZWxsc0RpdlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgWyAke2l9LCAke2VsZW1lbnRbaW5kZXhdfSBdYCk7XG4gICAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBsYXllckNlbGxzRGl2XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgY29sdW1uLmlubmVyVGV4dCA9IFwieVwiICsgaW5kZXg7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb2x1bW4uaW5uZXJUZXh0ID0gXCJ4XCIgKyBpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgIGNvbHVtbi5pbm5lclRleHQgPSBcIlwiO31cbiAgICAgIGNvbC5hcHBlbmRDaGlsZChjb2x1bW4pO1xuICAgIH1cbiAgICAvL2FwcGVuZCB0byBkb21cbiAgICBpZiAoYm9hcmRUb0Rpc3BsYXkgPT09IGNvbXB1dGVyQm9hcmQpIHtcbiAgICAgIGNvbXB1dGVyc0JvYXJkLmFwcGVuZENoaWxkKGNvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllcnNCb2FyZC5hcHBlbmRDaGlsZChjb2wpO1xuICAgIH1cbiAgfVxuXG4gIC8vcmVuZGVyIGVhY2ggc2hpcCBvbiB0aGUgYm9hcmRcbiAgYm9hcmRUb0Rpc3BsYXkuc2hpcEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvL2dldCB0aGUgc2hpcHMgY29vcmRpbmF0ZXNcbiAgICBsZXQgY29vcmRBcnJheSA9IGVsZW1lbnQuY29vcmRpbmF0ZXM7XG4gICAgLy9nbyB0aHJvdWdoIGVhY2ggY29vcmRpbmF0ZSwgc2V0IHRoZSBET00gdmFsdWUgKHNhbWUgYXMgY29vcmRzKSB0byByZWQgYXMgdGhlIHNoaXAgaXMgcGxhY2VkIHRoZXJlXG4gICAgY29vcmRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoYm9hcmRUb0Rpc3BsYXkgPT09IGNvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIC8vICAgYGNbICR7aXRlbVswXX0sICR7aXRlbVsxXX0gXWBcbiAgICAgICAgLy8gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAvL2RvIG5vdGhpbmcgLSB1bmNvbW1lbnQgdG8gc2VlIGNvbXB1dGVyIGJvYXJkIHBsYWNlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgYFsgJHtpdGVtWzBdfSwgJHtpdGVtWzFdfSBdYFxuICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vcmVuZGVyIG1pc3NlZCBzaG90cyBvbiB0aGUgYm9hcmRcbiAgYm9hcmRUb0Rpc3BsYXkubWlzc2VkU2hvdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xuICAgICAgbGV0IGlkID0gYGNbICR7ZWxlbWVudFswXX0sICR7ZWxlbWVudFsxXX0gXWA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpZCA9IGBbICR7ZWxlbWVudFswXX0sICR7ZWxlbWVudFsxXX0gXWA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG4gICAgfVxuICB9KTtcblxuICAvL3JlbmRlciBoaXQgc2hvdHMgb24gdGhlIGJvYXJkXG4gIGxldCBzcXVhcmU7XG4gIC8vZ28gdGhyb3VnaCBlYWNoIHNoaXAgb24gdGhlIGJvYXJkXG4gIGJvYXJkVG9EaXNwbGF5LnNoaXBBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQubGVuZ3RoQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAvL2dvIHRocm91Z2ggdGhlIDEvMCB2YWx1ZXMgb24gdGhlIHNoaXBzIGxlbmd0aCAoMCBtZWFucyBoaXQpXG4gICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQubGVuZ3RoQXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKHZhbHVlID09IDApIHtcbiAgICAgICAgc3F1YXJlID0gZWxlbWVudC5jb29yZGluYXRlc1tpbmRleF07XG4gICAgICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgYGNbICR7c3F1YXJlWzBdfSwgJHtzcXVhcmVbMV19IF1gXG4gICAgICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9hc3NpZ24gY29vcmRpbmF0ZSB2YWx1ZXMgdG8gJ3NxdWFyZSdcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIGBbICR7c3F1YXJlWzBdfSwgJHtzcXVhcmVbMV19IF1gXG4gICAgICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZHMoKSB7ICBcbiAgcGxheWVyc0JvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbXB1dGVyc0JvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGRpc3BsYXlCb2FyZChjb21wdXRlckJvYXJkKTtcbiAgZGlzcGxheUJvYXJkKHBsYXllckJvYXJkKTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkcyB9O1xuIiwiLy9nYW1lYm9hcmQgZmFjdG9yeVxuY29uc3QgZ2FtZUJvYXJkID0gKCkgPT57XG4gICAgLy8yZCBhcnJheSAxMHgxMFxuICAgIC8vYWNjZXNzIHZhbHVlcyBsaWtlIGEgZ3JpZCBib2FyZFsxXVsxXSB3aWxsIGJlIDFcbiAgICBsZXQgYm9hcmQgPSBbLi4uQXJyYXkoMTApXS5tYXAoeCA9PiBbMCwxLDIsMyw0LDUsNiw3LDgsOV0pXG4gICAgLy9jcmVhdGUgYW4gYXJyYXkgb2Ygc2hpcCBuYW1lcywgc28gY2FuIGRldGVybWluZSB3aGljaCBvbmUgaXMgaGl0XG4gICAgbGV0IHNoaXBBcnJheSA9IFtdXG4gICAgLy9ib29sIHZhbHVlIGZvciBkZXRlcm1pbmluZyBpZiBhbGwgc2hpcHMgb24gYm9hcmQgYXJlIHN1bmtcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gZmFsc2U7XG4gICAgLy9hcnJheSBob2xkaW5nIGFsbCB0aGUgc2hpcCBjb29yZGluYXRlc1xuICAgIGxldCBhbGxTaGlwQ29vcmRzID0gW107XG4gICAgLy9hcnJheSBob2xkaW5nIGFsbCB0aGUgbWlzc2VkIHNob3RzXG4gICAgbGV0IG1pc3NlZFNob3RzID0gW107XG5cbiAgICAvL2NsYXNoIHNoaXAgYm9vbCBmb3IgcmFuZG9tIHBsYWNlbWVudFxuICAgIGxldCBhbnlTaGlwQ2xhc2ggPSBmYWxzZTtcblxuICAgIC8vZnVuY3Rpb24gdG8gcGxhY2UgdGhlIHNoaXAgb24gdGhlIGdhbWVib2FyZFxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChTaGlwTmFtZSwgYWxpZ25tZW50LCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAge1xuXG4gICAgICAgIC8vaWYgdGhlIGFsaWdubWVudCBpcyBob3Jpem9udGFsIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBhbGlnbm1lbnQgKyBzaGlwIGxlbmd0aCBpcyBsZXNzIHRoYW4gMTAgKGxlbmd0aCBvZiBib2FyZClcbiAgICAgICAgaWYgKGFsaWdubWVudCA9PSAnaG9yaXpvbnRhbCcgJiYgKHBvc2l0aW9uQ29sICsgU2hpcE5hbWUuU2hpcExlbmd0aCA8IDEwKSAmJiAocG9zaXRpb25Sb3cgPCAxMCkgKSB7ICBcbiAgICAgICAgICAgIC8vZmlyc3QgY2hlY2sgdGhlcmUgYXJlIG5vIGNsYXNoZXMgd2l0aCBzaGlwcyBhbHJlYWR5IG9uIGJvYXJkICAgICAgIFxuICAgICAgICAgICAgbGV0IHNoaXBDbGFzaCA9IGZhbHNlO1xuICAgICAgICAgICAgYWxsU2hpcENvb3Jkcy5mb3JFYWNoKGVsZW1lbnQgPT4gXG4gICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3NpdGlvblJvdyA9PSBlbGVtZW50WzBdKSAmJiAocG9zaXRpb25Db2wgPT0gZWxlbWVudFsxXSkpIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQ2xhc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBTaGlwTmFtZS5TaGlwTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDbGFzaCkgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTaGlwIG92ZXJsYXBzIHdpdGggYW5vdGhlcicpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBzaGlwcyBjb29yZGluYXRlIGFycmF5XG4gICAgICAgICAgICAgICAgU2hpcE5hbWUuY29vcmRpbmF0ZXMucHVzaChbcG9zaXRpb25Sb3csKHBvc2l0aW9uQ29sICsgaW5kZXgpXSkgXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgZ2FtZWJvYXJkIGFycmF5XG4gICAgICAgICAgICAgICAgYm9hcmRbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sICsgaW5kZXhdID0gU2hpcE5hbWU7IFxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy90aGVuIHB1c2ggdGhpcyBvYmplY3QgdG8gc2hpcEFycmF5IGFzIGEgcmVjb3JkIG9mIHNoaXBzIG9uIGJvYXJkXG4gICAgICAgICAgICBzaGlwQXJyYXkucHVzaChTaGlwTmFtZSk7XG4gICAgICAgICAgICAvL3RoZW4gcHVzaCBhbGwgY29vcmRpbmF0ZXMgb2YgdGhpcyBzaGlwIHRvIGFsbFNoaXBDb29yZHMgICAgICBcbiAgICAgICAgICAgIFNoaXBOYW1lLmNvb3JkaW5hdGVzLmZvckVhY2goZWxlbWVudCA9PiB7YWxsU2hpcENvb3Jkcy5wdXNoKGVsZW1lbnQpO30pO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIC8vaWYgdGhlIGFsaWdubWVudCBpcyB2ZXJ0aWNhbCBhbmQgdGhlIGxlbmd0aCBvZiB0aGUgYWxpZ25tZW50ICsgc2hpcCBsZW5ndGggaXMgbGVzcyB0aGFuIDEwIChsZW5ndGggb2YgYm9hcmQpXG4gICAgICAgIGVsc2UgaWYgKGFsaWdubWVudCA9PSAndmVydGljYWwnICYmIChwb3NpdGlvblJvdyArIFNoaXBOYW1lLlNoaXBMZW5ndGggPCAxMCkgJiYgKHBvc2l0aW9uQ29sIDwgMTApKSB7XG4gICAgICAgICAgICAvL2ZpcnN0IGNoZWNrIHRoZXJlIGFyZSBubyBjbGFzaGVzIHdpdGggc2hpcHMgYWxyZWFkeSBvbiBib2FyZCAgICAgICBcbiAgICAgICAgICAgIGxldCBzaGlwQ2xhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbFNoaXBDb29yZHMuZm9yRWFjaChlbGVtZW50ID0+IFxuICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zaXRpb25Sb3cgPT0gZWxlbWVudFswXSkgJiYgKHBvc2l0aW9uQ29sID09IGVsZW1lbnRbMV0pKSBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcENsYXNoID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBTaGlwTmFtZS5TaGlwTGVuZ3RoOyBpbmRleCsrKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcENsYXNoKSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NoaXAgb3ZlcmxhcHMgd2l0aCBhbm90aGVyJylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdGhlIHNoaXBzIGNvb3JkaW5hdGUgYXJyYXlcbiAgICAgICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5wdXNoKFsocG9zaXRpb25Sb3cgKyBpbmRleCkscG9zaXRpb25Db2xdKTtcbiAgICAgICAgICAgICAgICBhbnlTaGlwQ2xhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaGlwQXJyYXkucHVzaChTaGlwTmFtZSk7XG4gICAgICAgICAgICAgICAgU2hpcE5hbWUuY29vcmRpbmF0ZXMuZm9yRWFjaChlbGVtZW50ID0+IHthbGxTaGlwQ29vcmRzLnB1c2goZWxlbWVudCk7fSk7ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gICAgIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vdmFsaWRhdGlvbiBmb3IgaWYgc2hpcHMgYXJlIG5vdCBwbGFjZWQgaW4gdGhlIHJpZ2h0IHNwb3RcbiAgICAgICAgZWxzZXsgICAgICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0KCdCYWQgc2hpcCBwbGFjZW1lbnQsIHJlc2V0dGluZyB0aGUgcGFnZScpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0YWtlcyBhIHBhaXJcbiAgICAvLyBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXBcbiAgICAvLyBhbmQgdGhlbiBzZW5kcyB0aGUg4oCYaGl04oCZIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAsIFxuICAgIC8vb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBzaG90LlxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKVxuICAgIHsgICAgICAgICAgICAgICBcbiAgICAgICAgLy9ib29sIHZhbHVlIGlmIHRoZSBhdHRhY2sgY29vcmRpbmF0ZXMgaGl0IGEgc2hpcFxuICAgICAgICBsZXQgdGhpc0lzQUhpdCA9IGZhbHNlO1xuICAgICAgICAvL3ZhbHVlIGZvciBoaXQgc2hpcFxuICAgICAgICBsZXQgc2hpcEhpdDtcbiAgICAgICAgLy92YWx1ZSBmb3IgaW5kZXggb2YgdGhlIHNoaXAgdGhhdCBoYXMgYmVlbiBoaXRcbiAgICAgICAgbGV0IGhpdEluZGV4O1xuICAgICAgICBhbGxTaGlwQ29vcmRzLmZvckVhY2goZWxlbWVudCA9PiBcbiAgICAgICAgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9lYWNoIG9iamVjdCBpbiB0aGUgc2hpcCBhcnJheSBoYXMgYXJyYXkgb2YgY29vcmRzXG4gICAgICAgICAgICBpZiAoIChwb3NpdGlvblJvdyA9PSBlbGVtZW50WzBdKSAmJiAocG9zaXRpb25Db2wgPT0gZWxlbWVudFsxXSkpIFxuICAgICAgICAgICAgeyAgIC8vdGhpcyBpcyBhIGhpdCAtIHNlbmQgaGl0IHRvIGNvcnJlY3Qgc2hpcCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9kZXRlcm1pbmUgd2hpY2ggc2hpcCB3YXMgaGl0IGFuZCB3aGVyZVxuICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCBzaGlwIG9iamVjdHMgb24gYm9hcmRcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcEFycmF5Lmxlbmd0aDsgaW5kZXgrKykgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvL2xvb3Agd2l0aGluIHRoZSBvYmplY3RzIGNvb3JkaW5hdGVzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEFycmF5W2luZGV4XS5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29vcmRpbmF0ZSBmb3IgdGhpcyBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZCA9IHNoaXBBcnJheVtpbmRleF0uY29vcmRpbmF0ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoY29vcmRbMF0gPT0gcG9zaXRpb25Sb3cpICYmIChjb29yZFsxXSA9PSBwb3NpdGlvbkNvbCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2hpcEhpdCBpcyB0aGUgc2hpcCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwSGl0ID0gc2hpcEFycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21ha2UgaGl0IGluZGV4IHBvc2l0aW9uIG9mIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY2FsbCB0aGUgaGl0IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgc2hpcEhpdC5oaXQoaGl0SW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXNJc0FIaXQgPSB0cnVlOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9KTsgICAgXG4gICAgICAgIGlmICghdGhpc0lzQUhpdCkge1xuICAgICAgICAgICAgLy90aGlzIGlzIGEgbWlzcy4gcmVjb3JkIG1pc3NlZCBjb29yZGluYXRlcyBzbyB0aGV5IGNhbiBiZSByZW5kZXJlZCBpbiBmcm9udEVuZC5qc1xuICAgICAgICAgICAgbWlzc2VkU2hvdHMucHVzaChbcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sXSk7XG4gICAgICAgIH0gXG4gICAgfVxuXG5cbiAgICAvL0dhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcmVwb3J0IHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGVpciBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cbiAgICBmdW5jdGlvbiBjaGVja0lmQWxsU2hpcHNTdW5rKClcbiAgICB7XG4gICAgICAgIC8vY3JlYXRlIGJvb2xcbiAgICAgICAgYWxsU2hpcHNTdW5rID0gdHJ1ZTtcblxuICAgICAgICAvL2FycmF5IHRvIHN0b3JlIHRydWUvZmFsc2UgdmFsdWVzIGludG9cbiAgICAgICAgbGV0IGNoZWNrRm9yU2lua2FnZUFycmF5ID0gW107XG5cbiAgICAgICAgLy9zaGlwQXJyYXkgaGFzIGxpc3Qgb2Ygc2hpcCBvYmplY3RzLCBjaGVjayBlYWNoIGZvciBpZiB0aGV5IGFyZSBzdW5rXG4gICAgICAgIHNoaXBBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGlzU3VuayA9IGVsZW1lbnQuaXNTdW5rKClcbiAgICAgICAgICAgIGNoZWNrRm9yU2lua2FnZUFycmF5LnB1c2goaXNTdW5rKVxuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tGb3JTaW5rYWdlQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYWxsU2hpcHNTdW5rID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vY2hlY2sgZWFjaCB2YWx1ZSBvZiBzaGlwQXJyYXkuc3VuayBcbiAgICAgICAgLy9pZiB0aGV5IGFyZSBhbGwgXG4gICAgICAgIHJldHVybiBhbGxTaGlwc1N1bms7XG4gICAgfSAgICAgICBcblxucmV0dXJuIHtib2FyZCwgYWxsU2hpcENvb3JkcywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBzaGlwQXJyYXksIGNoZWNrSWZBbGxTaGlwc1N1bmssIG1pc3NlZFNob3RzLCBhbnlTaGlwQ2xhc2h9XG59XG5cbmV4cG9ydCB7Z2FtZUJvYXJkfTtcbiIsImltcG9ydCB7c2hpcEZhY3Rvcnl9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuaW1wb3J0IHtnYW1lQm9hcmR9IGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCB7cGxheWVyfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9mcm9udEVuZCdcblxuLy9jcmVhdGUgYm9hcmRzXG5sZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbmxldCBjb21wdXRlckJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbi8vY3JlYXRlIHBsYXllcnNcbmxldCBwbGF5ZXIxID0gcGxheWVyKFwiUGxheWVyMVwiLCBjb21wdXRlckJvYXJkKTtcbmxldCBwbGF5ZXIyQ09NUCA9IHBsYXllcihcIlBsYXllcjJDT01QXCIsIHBsYXllckJvYXJkKTtcblxuXG5mdW5jdGlvbiBnYW1lUGxheSgpe1xuXG4gICAgLy8gcGxheWVyQm9hcmQubWlzc2VkU2hvdHMgPSBbXTtcbiAgICAvLyBjb21wdXRlckJvYXJkLm1pc3NlZFNob3RzID0gW107XG5cbi8vY3JlYXRlIHBsYXllciBzaGlwc1xubGV0IHBsYXllckJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSg0LCAnYmF0dGxlc2hpcCcpO1xubGV0IHBsYXllclBhdHJvbCA9IHNoaXBGYWN0b3J5KDIsICdwYXRyb2wnKTtcbmxldCBwbGF5ZXJTdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgzLCAnc3VibWFyaW5lJyk7XG5sZXQgcGxheWVyRGVzdHJveWVyID0gc2hpcEZhY3RvcnkoNCwgJ2Rlc3Ryb3llcicpO1xubGV0IHBsYXllckNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1LCAnY2FycmllcicpO1xuXG4vL2NyZWF0ZSBjb21wdXRlciBzaGlwc1xubGV0IGNvbXB1dGVyQmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KDQsICdiYXR0bGVzaGlwJyk7XG5sZXQgY29tcHV0ZXJQYXRyb2wgPSBzaGlwRmFjdG9yeSgyLCAncGF0cm9sJyk7XG5sZXQgY29tcHV0ZXJTdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgzLCAnc3VibWFyaW5lJyk7XG5sZXQgY29tcHV0ZXJEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSg0LCAnZGVzdHJveWVyJyk7XG5sZXQgY29tcHV0ZXJDYXJyaWVyID0gc2hpcEZhY3RvcnkoNSwgJ2NhcnJpZXInKTtcblxuLy9Cb2FyZCBwbGFjZW1lbnQgZm9yIHBsYXllclxubGV0IGJhdHRsZXNoaXBSb3dDb29yZCA9IE51bWJlcihwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBCYXR0bGVzaGlwcyB4IGNvb3JkaW5hdGVcIikpO1xubGV0IGJhdHRsZXNoaXBDb2xDb29yZCA9IE51bWJlcihwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBCYXR0bGVzaGlwcyB5IGNvb3JkaW5hdGVcIikpO1xubGV0IGJhdHRsZXNoaXBBbGlnbm1lbnQgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBCYXR0bGVzaGlwcyBwbGFjZW1lbnQgKGhvcml6b250YWwgb3IgdmVydGljYWwpXCIpOyAgICAgICAgXG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQmF0dGxlc2hpcCwgYmF0dGxlc2hpcEFsaWdubWVudCwgYmF0dGxlc2hpcFJvd0Nvb3JkLGJhdHRsZXNoaXBDb2xDb29yZCApO1xuY3JlYXRlQm9hcmRzKCk7XG5cbmxldCBwYXRyb2xSb3dDb29yZCA9IE51bWJlcihwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBQYXRyb2xzIHggY29vcmRpbmF0ZVwiKSk7XG5sZXQgcGF0cm9sQ29sQ29vcmQgPSBOdW1iZXIocHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgUGF0cm9scyB5IGNvb3JkaW5hdGVcIikpO1xubGV0IHBhdHJvbEFsaWdubWVudCA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIFBhdHJvbHMgcGxhY2VtZW50IChob3Jpem9udGFsIG9yIHZlcnRpY2FsKVwiKTsgICAgICAgIFxucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclBhdHJvbCwgcGF0cm9sQWxpZ25tZW50LCBwYXRyb2xSb3dDb29yZCwgcGF0cm9sQ29sQ29vcmQgKTtcbmNyZWF0ZUJvYXJkcygpO1xuXG5sZXQgc3VibWFyaW5lUm93Q29vcmQgPSBOdW1iZXIocHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgU3VibWFyaW5lIHggY29vcmRpbmF0ZVwiKSk7XG5sZXQgc3VibWFyaW5lQ29sQ29vcmQgPSBOdW1iZXIocHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgU3VibWFyaW5lIHkgY29vcmRpbmF0ZVwiKSk7XG5sZXQgc3VibWFyaW5lQWxpZ25tZW50ID0gcHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgU3VibWFyaW5lIHBsYWNlbWVudCAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbClcIik7ICAgICAgICBcbnBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJTdWJtYXJpbmUsIHN1Ym1hcmluZUFsaWdubWVudCwgc3VibWFyaW5lUm93Q29vcmQsc3VibWFyaW5lQ29sQ29vcmQgKTtcbmNyZWF0ZUJvYXJkcygpO1xuXG5sZXQgRGVzdHJveWVyUm93Q29vcmQgPSBOdW1iZXIocHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgRGVzdHJveWVyIHggY29vcmRpbmF0ZVwiKSk7XG5sZXQgRGVzdHJveWVyQ29sQ29vcmQgPSBOdW1iZXIocHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgRGVzdHJveWVyIHkgY29vcmRpbmF0ZVwiKSk7XG5sZXQgRGVzdHJveWVyQWxpZ25tZW50ID0gcHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgRGVzdHJveWVyIHBsYWNlbWVudCAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbClcIik7ICAgICAgICBcbnBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJEZXN0cm95ZXIsIERlc3Ryb3llckFsaWdubWVudCwgRGVzdHJveWVyUm93Q29vcmQsRGVzdHJveWVyQ29sQ29vcmQgKTtcbmNyZWF0ZUJvYXJkcygpO1xuXG5sZXQgQ2FycmllclJvd0Nvb3JkID0gTnVtYmVyKHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIENhcnJpZXIgeCBjb29yZGluYXRlXCIpKTtcbmxldCBDYXJyaWVyQ29sQ29vcmQgPSBOdW1iZXIocHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgQ2FycmllciB5IGNvb3JkaW5hdGVcIikpO1xubGV0IENhcnJpZXJBbGlnbm1lbnQgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBDYXJyaWVyIHBsYWNlbWVudCAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbClcIik7ICAgICAgICBcbnBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJDYXJyaWVyLCBDYXJyaWVyQWxpZ25tZW50LCBDYXJyaWVyUm93Q29vcmQsQ2FycmllckNvbENvb3JkICk7XG5jcmVhdGVCb2FyZHMoKTtcblxuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJCYXR0bGVzaGlwLCAndmVydGljYWwnLCAzLDMgKTtcbmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyUGF0cm9sLCAnaG9yaXpvbnRhbCcsIDAsMyApO1xuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJTdWJtYXJpbmUsICd2ZXJ0aWNhbCcsIDMsNiApO1xuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJEZXN0cm95ZXIsICdob3Jpem9udGFsJywgOCwxKTtcbmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyQ2FycmllciwgJ2hvcml6b250YWwnLCA5LDEgKTtcblxuY3JlYXRlQm9hcmRzKCk7XG59XG5cbmZ1bmN0aW9uIHBsYXllclR1cm4ocm93LCBjb2wpXG57XG4gICAgcGxheWVyMS50YWtlVHVybihyb3csIGNvbCk7IFxuXG4gICAgLy9pbW1lZGlhdGVseSBhZnRlciwgdGhlIGNvbXB1dGVyIHRha2VzIGEgdHVybiAtIGZvciB0ZXN0aW5nIGFueXdheVxuICAgIGxldCBjb2wyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCByb3cyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHBsYXllcjJDT01QLnRha2VUdXJuKGNvbDIsIHJvdzIpOyAgXG5cblxuICAgIC8vZW5zdXJlIGdhbWUgaXMgc3RhcnRlZCBiZWZvcmUgY29uZ3JhdHVsYXRpbmcgd2lubmVyLi4uXG4gICAgaWYgKHBsYXllckJvYXJkLnNoaXBBcnJheS5sZW5ndGggPiAxKSB7XG4gICAgICAgIFxuICAgIFxuICAgIC8vY2hlY2sgaWYgYWxsIHNoaXBzIHN1bmtcbiAgICBsZXQgZ2FtZW92ZXJQbGF5ZXIgPSBwbGF5ZXJCb2FyZC5jaGVja0lmQWxsU2hpcHNTdW5rKCk7XG4gICAgbGV0IGdhbWVvdmVyQ29tcHV0ZXIgPSBjb21wdXRlckJvYXJkLmNoZWNrSWZBbGxTaGlwc1N1bmsoKVxuXG4gICAgaWYgKGdhbWVvdmVyUGxheWVyKSB7XG4gICAgICAgIGFsZXJ0KFwiQ29tcHV0ZXIgd2lucyFcIik7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICBpZiAoZ2FtZW92ZXJDb21wdXRlcikge1xuICAgICAgICBhbGVydChcIlBsYXllciB3aW5zIVwiKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxufVxufVxuXG5leHBvcnQge2dhbWVQbGF5LCBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCwgcGxheWVyVHVybn07XG4iLCJcbmNvbnN0IHsgcmVjZWl2ZUF0dGFjayB9ID0gcmVxdWlyZShcIi4vZ2FtZUJvYXJkXCIpO1xuaW1wb3J0IHtjcmVhdGVCb2FyZHN9IGZyb20gJy4vZnJvbnRFbmQnXG5cbmNvbnN0IHBsYXllciA9IChuYW1lLCBlbmVteUdhbWVib2FyZCkgPT5cbnsgICBcbiAgICAvL2xhYmVsIHdpdGggYSBuYW1lXG4gICAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xuICAgIGxldCBnYW1lQm9hcmRBdHRhY2tCb2FyZCA9IGVuZW15R2FtZWJvYXJkO1xuICAgIGxldCB0dXJuID0gZmFsc2U7XG4gICAgbGV0IGNvbXB1dGVyVHVybnNUYWtlbiA9IFtdO1xuXG4gICAgZnVuY3Rpb24gdGFrZVR1cm4oYVJvdywgYUNvbCl7XG4gICAgaWYgKHBsYXllck5hbWUgPT0gJ2NvbXB1dGVyJykge1xuXG4gICAgICAgIC8vbmVlZCB0byByYW5kb21pc2UgcGxheXNcbiAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgLy9ib29sIGZvciBpZiB0aGUgZ3Vlc3MgaGFzIGJlZW4gdGFrZW4gYWxyZWFkeSBpbiBnYW1lXG4gICAgICAgIGxldCBndWVzc1Rha2VuID0gZmFsc2U7XG4gICAgICAgIC8vY2hlY2sgdGhlIHByZXZpb3VzIGd1ZXNzZXMsIGlmIGl0IGhhcyBiZWVuIHRha2VuIGdvIHRvIHdoaWxlIGxvb3BcbiAgICAgICAgY29tcHV0ZXJUdXJuc1Rha2VuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudFswXSA9PSByb3cgJiYgZWxlbWVudFsxXSA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICBndWVzc1Rha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vbG9vcCB0aHJvdWdoIHVudGlsIGEgZ3Vlc3MgaXNudCB0YWtlblxuICAgICAgICB3aGlsZSAoZ3Vlc3NUYWtlbikge1xuICAgICAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29tcHV0ZXJUdXJuc1Rha2VuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbMF0gPT0gcm93ICYmIGVsZW1lbnRbMV0gPT0gY29sKSB7XG4gICAgICAgICAgICAgICAgICAgIGd1ZXNzVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vb25jZSB0aGUgY29vcmRpbmF0ZXMgYXJlIHZhbGlkLCBwdXNoIHRoZW0gdG8gdGhlIGd1ZXNzZXMgdGFrZW4gYXJyYXkgZm9yIHZhbGlkYXRpb25cbiAgICAgICAgY29tcHV0ZXJUdXJuc1Rha2VuLnB1c2goW3JvdywgY29sXSk7XG5cbiAgICAgICAgLy90aGUgYm9hcmQgdG8gYXR0YWNrIGlzIHRoZSBwbGF5ZXJzIGJvYXJkXG4gICAgICAgIGdhbWVCb2FyZEF0dGFja0JvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8vbm90IGEgY29tcHV0ZXJcbiAgICAgICAgZ2FtZUJvYXJkQXR0YWNrQm9hcmQucmVjZWl2ZUF0dGFjayhhUm93LCBhQ29sKVxuICAgICAgICAvL3RoZSBib2FyZCB0byBhdHRhY2sgaXMgdGhlIGNvbXB1dGVycyBib2FyZCAgICAgICAgXG4gICAgICAgIGNyZWF0ZUJvYXJkcygpO1xuICAgIH1cbn1cbnJldHVybnt0YWtlVHVybn1cblxufVxuXG5leHBvcnQge3BsYXllcn07IiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBuYW1lKSA9PntcbiAgLy9kZWZpbmUgbGVuZ3RoIG9mIHNoaXBcbiAgbGV0IFNoaXBMZW5ndGggPSBsZW5ndGg7XG4gIGxldCBTaGlwTmFtZSA9IG5hbWU7XG4gIC8vY3JlYXRlIGFuIGFycmF5IG9mIHRoZSBsZW5ndGgsIHJlcHJlc2VudGluZyBhIHNoaXBcbiAgbGV0IGxlbmd0aEFycmF5ID0gW107XG4gIGxlbmd0aEFycmF5ID0gWy4uLkFycmF5KFNoaXBMZW5ndGgpXS5tYXAoeCA9PiAxKTsgICBcbiAgLy9hcnJheSBmb3IgY29vcmRpbmF0ZXMgdG8gYmUgaGVsZFxuICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgLy9kZWZpbmUgaGl0IGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIGhpdChudW0pXG4gIHtcbiAgICAvL21hcmsgbnVtIGFzIGhpdFxuICAgIGxlbmd0aEFycmF5W251bV0gPSAwOyAgXG4gIH0gIFxuICAvL2RldGVybWluZSBpZiBzdW5rXG4gIGZ1bmN0aW9uIGlzU3VuaygpXG4gIHtcbiAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgbGVuZ3RoQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09IDEpIHtcbiAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgfSAgICAgIFxuICAgIH0pO1xuICAgIHJldHVybiBzdW5rO1xuICB9XG4gIHJldHVybntTaGlwTGVuZ3RoLCBTaGlwTmFtZSwgbGVuZ3RoQXJyYXksIGhpdCwgaXNTdW5rLCBjb29yZGluYXRlc31cbn1cblxuZXhwb3J0IHtzaGlwRmFjdG9yeX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdhbWVQbGF5IH0gZnJvbSAnLi9kZXBlbmRlbmNpZXMvZ2FtZUxvb3AnO1xuaW1wb3J0IHtjcmVhdGVCb2FyZHN9IGZyb20gJy4vZGVwZW5kZW5jaWVzL2Zyb250RW5kJ1xuXG5cbmxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpO1xuc3RhcnRCdXR0b24ub25jbGljayA9ICgpID0+IGdhbWVQbGF5KCk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydEJ1dHRvbicpLm9uY2xpY2sgPSAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKTtcbi8vIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lUGxheSlcbi8vY2FsbCB0aGUgZ2FtZSBsb29wIGZ1bmN0aW9uXG5jcmVhdGVCb2FyZHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=