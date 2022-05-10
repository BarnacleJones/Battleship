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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    display: grid;\n    text-align: center;\n    grid-template-columns: 1;\n    grid-template-rows: 1fr 2fr .25fr;\n    margin: 0;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size:100% 130vh;\n    background-repeat:no-repeat;\n    font-family: 'Bangers', cursive;\n    color: #233B48;\n}\n\n#startButton, #restartButton{    \n    display: flex;\n    width: max-content;\n    font-size: 2rem;\n    align-self: center;\n    margin: auto;\n    background-color: #FBC874;\n    border-radius: 5px;\n    border: none;\n    opacity: 0.7;\n    font-family: 'Bangers', cursive;\n}\n\n#startButton:hover, #restartButton:hover{\n    opacity: 0.2;\n}\n\nheader{\n    grid-area: 1 / 1 / span 1  /span 1;  \n    height: min-content; \n}\n\nmain{\n    grid-area: 2 / 1 / span 1  /span 1;\n    display:flex;    \n    margin: auto;\n    height: min-content;\n    align-items: center;\n    background-image: linear-gradient(75deg, #FBC874, #5794A6) ;    \n    opacity: 0.8;\n    border-radius: 5px;   \n}\n\nfooter{\n  grid-area: 3 / 1 / span 0  /span 0;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #3A6572;\n  opacity: 0.4;  \n  z-index: -1;\n}\n\n#title{\n    font-size: 4rem;\n}\n#playerBoard, #computerBoard {\n    display: flex; \n    flex-direction: row;\n    flex-grow: 0;\n    background-color: black;\n    opacity: 0.8;\n}\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n    width: 2em;\n    height: 2em;  \n    text-align: center;    \n}\n.playerCellsDiv, .computerCellsDiv{\n    border: 1px solid white;\n}\n\n@media screen and (max-width: 815px) {\n    main {\n      flex-direction: column;\n      margin: none;\n      height: 115vh;\n      padding: none; \n      width: 80vw;\n    }\n\n    body{\n        background-repeat: repeat-y;\n        background-size: auto;\n        display: flex;\n        flex-direction: column;\n    }\n    footer{\n        z-index: 0;\n    }\n\n    .playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n        width: 1.5rem;\n        height: 1.5rem;  \n        \n         \n    }\n    #startButton, #restartButton{\n        font-size: 1rem;\n    }\n\n    #title{\n        font-size: 2rem;\n    } \n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,iCAAiC;IACjC,SAAS;IACT,yDAAuD;IACvD,0BAA0B;IAC1B,2BAA2B;IAC3B,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,2DAA2D;IAC3D,YAAY;IACZ,kBAAkB;AACtB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,OAAO;EACP,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,WAAW;AACb;;AAEA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI;MACE,sBAAsB;MACtB,YAAY;MACZ,aAAa;MACb,aAAa;MACb,WAAW;IACb;;IAEA;QACI,2BAA2B;QAC3B,qBAAqB;QACrB,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,UAAU;IACd;;IAEA;QACI,aAAa;QACb,cAAc;;;IAGlB;IACA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;EACF","sourcesContent":["body{\n    display: grid;\n    text-align: center;\n    grid-template-columns: 1;\n    grid-template-rows: 1fr 2fr .25fr;\n    margin: 0;\n    background-image: url(/images/battleshipBackground.gif);\n    background-size:100% 130vh;\n    background-repeat:no-repeat;\n    font-family: 'Bangers', cursive;\n    color: #233B48;\n}\n\n#startButton, #restartButton{    \n    display: flex;\n    width: max-content;\n    font-size: 2rem;\n    align-self: center;\n    margin: auto;\n    background-color: #FBC874;\n    border-radius: 5px;\n    border: none;\n    opacity: 0.7;\n    font-family: 'Bangers', cursive;\n}\n\n#startButton:hover, #restartButton:hover{\n    opacity: 0.2;\n}\n\nheader{\n    grid-area: 1 / 1 / span 1  /span 1;  \n    height: min-content; \n}\n\nmain{\n    grid-area: 2 / 1 / span 1  /span 1;\n    display:flex;    \n    margin: auto;\n    height: min-content;\n    align-items: center;\n    background-image: linear-gradient(75deg, #FBC874, #5794A6) ;    \n    opacity: 0.8;\n    border-radius: 5px;   \n}\n\nfooter{\n  grid-area: 3 / 1 / span 0  /span 0;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #3A6572;\n  opacity: 0.4;  \n  z-index: -1;\n}\n\n#title{\n    font-size: 4rem;\n}\n#playerBoard, #computerBoard {\n    display: flex; \n    flex-direction: row;\n    flex-grow: 0;\n    background-color: black;\n    opacity: 0.8;\n}\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n    width: 2em;\n    height: 2em;  \n    text-align: center;    \n}\n.playerCellsDiv, .computerCellsDiv{\n    border: 1px solid white;\n}\n\n@media screen and (max-width: 815px) {\n    main {\n      flex-direction: column;\n      margin: none;\n      height: 115vh;\n      padding: none; \n      width: 80vw;\n    }\n\n    body{\n        background-repeat: repeat-y;\n        background-size: auto;\n        display: flex;\n        flex-direction: column;\n    }\n    footer{\n        z-index: 0;\n    }\n\n    .playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n        width: 1.5rem;\n        height: 1.5rem;  \n        \n         \n    }\n    #startButton, #restartButton{\n        font-size: 1rem;\n    }\n\n    #title{\n        font-size: 2rem;\n    } \n  }"],"sourceRoot":""}]);
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

    playerBoard.missedShots = [];
    computerBoard.missedShots = [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvZnJvbnRFbmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2ltYWdlcy9iYXR0bGVzaGlwQmFja2dyb3VuZC5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIC4yNWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEzMHZoO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjMjMzQjQ4O1xcbn1cXG5cXG4jc3RhcnRCdXR0b24sICNyZXN0YXJ0QnV0dG9ueyAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJDODc0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xcbn1cXG5cXG4jc3RhcnRCdXR0b246aG92ZXIsICNyZXN0YXJ0QnV0dG9uOmhvdmVye1xcbiAgICBvcGFjaXR5OiAwLjI7XFxufVxcblxcbmhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTsgIFxcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50OyBcXG59XFxuXFxubWFpbntcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTtcXG4gICAgZGlzcGxheTpmbGV4OyAgICBcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsICNGQkM4NzQsICM1Nzk0QTYpIDsgICAgXFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgIFxcbn1cXG5cXG5mb290ZXJ7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gc3BhbiAwICAvc3BhbiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNjU3MjtcXG4gIG9wYWNpdHk6IDAuNDsgIFxcbiAgei1pbmRleDogLTE7XFxufVxcblxcbiN0aXRsZXtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4jcGxheWVyQm9hcmQsICNjb21wdXRlckJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuLnBsYXllckNlbGxzRGl2LCAucGxheWVyUm93RGl2LCAuY29tcHV0ZXJSb3dEaXYgLmNvbXB1dGVyQ2VsbHNEaXZ7ICAgIFxcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDJlbTsgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxcbn1cXG4ucGxheWVyQ2VsbHNEaXYsIC5jb21wdXRlckNlbGxzRGl2e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcXG4gICAgbWFpbiB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBtYXJnaW46IG5vbmU7XFxuICAgICAgaGVpZ2h0OiAxMTV2aDtcXG4gICAgICBwYWRkaW5nOiBub25lOyBcXG4gICAgICB3aWR0aDogODB2dztcXG4gICAgfVxcblxcbiAgICBib2R5e1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgZm9vdGVye1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgfVxcblxcbiAgICAucGxheWVyQ2VsbHNEaXYsIC5wbGF5ZXJSb3dEaXYsIC5jb21wdXRlclJvd0RpdiAuY29tcHV0ZXJDZWxsc0RpdnsgICAgXFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07ICBcXG4gICAgICAgIFxcbiAgICAgICAgIFxcbiAgICB9XFxuICAgICNzdGFydEJ1dHRvbiwgI3Jlc3RhcnRCdXR0b257XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI3RpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9IFxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsU0FBUztJQUNULHlEQUF1RDtJQUN2RCwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJEQUEyRDtJQUMzRCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7TUFDRSxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGFBQWE7TUFDYixhQUFhO01BQ2IsV0FBVztJQUNiOztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsY0FBYzs7O0lBR2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgLjI1ZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWFnZXMvYmF0dGxlc2hpcEJhY2tncm91bmQuZ2lmKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTMwdmg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICMyMzNCNDg7XFxufVxcblxcbiNzdGFydEJ1dHRvbiwgI3Jlc3RhcnRCdXR0b257ICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkM4NzQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxufVxcblxcbiNzdGFydEJ1dHRvbjpob3ZlciwgI3Jlc3RhcnRCdXR0b246aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gc3BhbiAxICAvc3BhbiAxOyAgXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7IFxcbn1cXG5cXG5tYWlue1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gc3BhbiAxICAvc3BhbiAxO1xcbiAgICBkaXNwbGF5OmZsZXg7ICAgIFxcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgI0ZCQzg3NCwgIzU3OTRBNikgOyAgICBcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgXFxufVxcblxcbmZvb3RlcntcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyBzcGFuIDAgIC9zcGFuIDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E2NTcyO1xcbiAgb3BhY2l0eTogMC40OyAgXFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcbiNwbGF5ZXJCb2FyZCwgI2NvbXB1dGVyQm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG4ucGxheWVyQ2VsbHNEaXYsIC5wbGF5ZXJSb3dEaXYsIC5jb21wdXRlclJvd0RpdiAuY29tcHV0ZXJDZWxsc0RpdnsgICAgXFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtOyAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxufVxcbi5wbGF5ZXJDZWxsc0RpdiwgLmNvbXB1dGVyQ2VsbHNEaXZ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTVweCkge1xcbiAgICBtYWluIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIG1hcmdpbjogbm9uZTtcXG4gICAgICBoZWlnaHQ6IDExNXZoO1xcbiAgICAgIHBhZGRpbmc6IG5vbmU7IFxcbiAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICB9XFxuXFxuICAgIGJvZHl7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICBmb290ZXJ7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXJDZWxsc0RpdiwgLnBsYXllclJvd0RpdiwgLmNvbXB1dGVyUm93RGl2IC5jb21wdXRlckNlbGxzRGl2eyAgICBcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTsgIFxcbiAgICAgICAgXFxuICAgICAgICAgXFxuICAgIH1cXG4gICAgI3N0YXJ0QnV0dG9uLCAjcmVzdGFydEJ1dHRvbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAjdGl0bGV7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH0gXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCBwbGF5ZXJUdXJuIH0gZnJvbSBcIi4vZ2FtZUxvb3BcIjtcblxuLy9HbG9iYWwgdmFyaWFibGVzXG5sZXQgcGxheWVyc0JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJCb2FyZFwiKTtcbmxldCBjb21wdXRlcnNCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXJCb2FyZFwiKTtcblxuLy9EaXNwbGF5cyBjaG9zZW4gYm9hcmQgb24gRE9NXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoYm9hcmRUb0Rpc3BsYXkpIHtcbiAgLy9kcmF3IGJvYXJkXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib2FyZFRvRGlzcGxheS5ib2FyZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAvL2VsZW1lbnQgaXMgZWFjaCByb3dcbiAgICBjb25zdCBlbGVtZW50ID0gYm9hcmRUb0Rpc3BsYXkuYm9hcmRbaW5kZXhdO1xuICAgIC8vY3JlYXRlIGEgZGl2IGZvciB0aGUgcm93XG4gICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xuICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29tcHV0ZXJSb3dEaXZcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBsYXllckNvbERpdlwiKTtcbiAgICB9XG4gICAgLy9jcmVhdGUgdGhlIGNvbHVtbnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWYgKGJvYXJkVG9EaXNwbGF5ID09PSBjb21wdXRlckJvYXJkKSB7XG4gICAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY1sgJHtpfSwgJHtlbGVtZW50W2luZGV4XX0gXWApO1xuICAgICAgICBjb2x1bW4ub25jbGljayA9ICgpID0+IHBsYXllclR1cm4oYCR7aX1gLCBgJHtlbGVtZW50W2luZGV4XX1gKTsgICAgICAgIFxuICAgICAgICBjb2x1bW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wdXRlckNlbGxzRGl2XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBbICR7aX0sICR7ZWxlbWVudFtpbmRleF19IF1gKTtcbiAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGxheWVyQ2VsbHNEaXZcIik7XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBjb2x1bW4uaW5uZXJUZXh0ID0gXCJ5XCIgKyBpbmRleDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbHVtbi5pbm5lclRleHQgPSBcInhcIiArIGk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgY29sdW1uLmlubmVyVGV4dCA9IFwiXCI7fVxuICAgICAgY29sLmFwcGVuZENoaWxkKGNvbHVtbik7XG4gICAgfVxuICAgIC8vYXBwZW5kIHRvIGRvbVxuICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xuICAgICAgY29tcHV0ZXJzQm9hcmQuYXBwZW5kQ2hpbGQoY29sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyc0JvYXJkLmFwcGVuZENoaWxkKGNvbCk7XG4gICAgfVxuICB9XG5cbiAgLy9yZW5kZXIgZWFjaCBzaGlwIG9uIHRoZSBib2FyZFxuICBib2FyZFRvRGlzcGxheS5zaGlwQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vZ2V0IHRoZSBzaGlwcyBjb29yZGluYXRlc1xuICAgIGxldCBjb29yZEFycmF5ID0gZWxlbWVudC5jb29yZGluYXRlcztcbiAgICAvL2dvIHRocm91Z2ggZWFjaCBjb29yZGluYXRlLCBzZXQgdGhlIERPTSB2YWx1ZSAoc2FtZSBhcyBjb29yZHMpIHRvIHJlZCBhcyB0aGUgc2hpcCBpcyBwbGFjZWQgdGhlcmVcbiAgICBjb29yZEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgLy8gICBgY1sgJHtpdGVtWzBdfSwgJHtpdGVtWzFdfSBdYFxuICAgICAgICAvLyApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIC8vZG8gbm90aGluZyAtIHVuY29tbWVudCB0byBzZWUgY29tcHV0ZXIgYm9hcmQgcGxhY2VtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICBgWyAke2l0ZW1bMF19LCAke2l0ZW1bMV19IF1gXG4gICAgICAgICkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy9yZW5kZXIgbWlzc2VkIHNob3RzIG9uIHRoZSBib2FyZFxuICBib2FyZFRvRGlzcGxheS5taXNzZWRTaG90cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGJvYXJkVG9EaXNwbGF5ID09PSBjb21wdXRlckJvYXJkKSB7XG4gICAgICBsZXQgaWQgPSBgY1sgJHtlbGVtZW50WzBdfSwgJHtlbGVtZW50WzFdfSBdYDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGlkID0gYFsgJHtlbGVtZW50WzBdfSwgJHtlbGVtZW50WzFdfSBdYDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIjtcbiAgICB9XG4gIH0pO1xuXG4gIC8vcmVuZGVyIGhpdCBzaG90cyBvbiB0aGUgYm9hcmRcbiAgbGV0IHNxdWFyZTtcbiAgLy9nbyB0aHJvdWdoIGVhY2ggc2hpcCBvbiB0aGUgYm9hcmRcbiAgYm9hcmRUb0Rpc3BsYXkuc2hpcEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5sZW5ndGhBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIC8vZ28gdGhyb3VnaCB0aGUgMS8wIHZhbHVlcyBvbiB0aGUgc2hpcHMgbGVuZ3RoICgwIG1lYW5zIGhpdClcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5sZW5ndGhBcnJheVtpbmRleF07XG4gICAgICBpZiAodmFsdWUgPT0gMCkge1xuICAgICAgICBzcXVhcmUgPSBlbGVtZW50LmNvb3JkaW5hdGVzW2luZGV4XTtcbiAgICAgICAgaWYgKGJvYXJkVG9EaXNwbGF5ID09PSBjb21wdXRlckJvYXJkKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICBgY1sgJHtzcXVhcmVbMF19LCAke3NxdWFyZVsxXX0gXWBcbiAgICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2Fzc2lnbiBjb29yZGluYXRlIHZhbHVlcyB0byAnc3F1YXJlJ1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgYFsgJHtzcXVhcmVbMF19LCAke3NxdWFyZVsxXX0gXWBcbiAgICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkcygpIHsgIFxuICBwbGF5ZXJzQm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29tcHV0ZXJzQm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgZGlzcGxheUJvYXJkKGNvbXB1dGVyQm9hcmQpO1xuICBkaXNwbGF5Qm9hcmQocGxheWVyQm9hcmQpO1xufVxuZXhwb3J0IHsgY3JlYXRlQm9hcmRzIH07XG4iLCIvL2dhbWVib2FyZCBmYWN0b3J5XG5jb25zdCBnYW1lQm9hcmQgPSAoKSA9PntcbiAgICAvLzJkIGFycmF5IDEweDEwXG4gICAgLy9hY2Nlc3MgdmFsdWVzIGxpa2UgYSBncmlkIGJvYXJkWzFdWzFdIHdpbGwgYmUgMVxuICAgIGxldCBib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCh4ID0+IFswLDEsMiwzLDQsNSw2LDcsOCw5XSlcbiAgICAvL2NyZWF0ZSBhbiBhcnJheSBvZiBzaGlwIG5hbWVzLCBzbyBjYW4gZGV0ZXJtaW5lIHdoaWNoIG9uZSBpcyBoaXRcbiAgICBsZXQgc2hpcEFycmF5ID0gW11cbiAgICAvL2Jvb2wgdmFsdWUgZm9yIGRldGVybWluaW5nIGlmIGFsbCBzaGlwcyBvbiBib2FyZCBhcmUgc3Vua1xuICAgIGxldCBhbGxTaGlwc1N1bmsgPSBmYWxzZTtcbiAgICAvL2FycmF5IGhvbGRpbmcgYWxsIHRoZSBzaGlwIGNvb3JkaW5hdGVzXG4gICAgbGV0IGFsbFNoaXBDb29yZHMgPSBbXTtcbiAgICAvL2FycmF5IGhvbGRpbmcgYWxsIHRoZSBtaXNzZWQgc2hvdHNcbiAgICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcblxuICAgIC8vY2xhc2ggc2hpcCBib29sIGZvciByYW5kb20gcGxhY2VtZW50XG4gICAgbGV0IGFueVNoaXBDbGFzaCA9IGZhbHNlO1xuXG4gICAgLy9mdW5jdGlvbiB0byBwbGFjZSB0aGUgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKFNoaXBOYW1lLCBhbGlnbm1lbnQsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbClcbiAgICB7XG5cbiAgICAgICAgLy9pZiB0aGUgYWxpZ25tZW50IGlzIGhvcml6b250YWwgYW5kIHRoZSBsZW5ndGggb2YgdGhlIGFsaWdubWVudCArIHNoaXAgbGVuZ3RoIGlzIGxlc3MgdGhhbiAxMCAobGVuZ3RoIG9mIGJvYXJkKVxuICAgICAgICBpZiAoYWxpZ25tZW50ID09ICdob3Jpem9udGFsJyAmJiAocG9zaXRpb25Db2wgKyBTaGlwTmFtZS5TaGlwTGVuZ3RoIDwgMTApICYmIChwb3NpdGlvblJvdyA8IDEwKSApIHsgIFxuICAgICAgICAgICAgLy9maXJzdCBjaGVjayB0aGVyZSBhcmUgbm8gY2xhc2hlcyB3aXRoIHNoaXBzIGFscmVhZHkgb24gYm9hcmQgICAgICAgXG4gICAgICAgICAgICBsZXQgc2hpcENsYXNoID0gZmFsc2U7XG4gICAgICAgICAgICBhbGxTaGlwQ29vcmRzLmZvckVhY2goZWxlbWVudCA9PiBcbiAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc2l0aW9uUm93ID09IGVsZW1lbnRbMF0pICYmIChwb3NpdGlvbkNvbCA9PSBlbGVtZW50WzFdKSkgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBDbGFzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFNoaXBOYW1lLlNoaXBMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcENsYXNoKSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NoaXAgb3ZlcmxhcHMgd2l0aCBhbm90aGVyJylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdGhlIHNoaXBzIGNvb3JkaW5hdGUgYXJyYXlcbiAgICAgICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5wdXNoKFtwb3NpdGlvblJvdywocG9zaXRpb25Db2wgKyBpbmRleCldKSBcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBnYW1lYm9hcmQgYXJyYXlcbiAgICAgICAgICAgICAgICBib2FyZFtwb3NpdGlvblJvd11bcG9zaXRpb25Db2wgKyBpbmRleF0gPSBTaGlwTmFtZTsgXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3RoZW4gcHVzaCB0aGlzIG9iamVjdCB0byBzaGlwQXJyYXkgYXMgYSByZWNvcmQgb2Ygc2hpcHMgb24gYm9hcmRcbiAgICAgICAgICAgIHNoaXBBcnJheS5wdXNoKFNoaXBOYW1lKTtcbiAgICAgICAgICAgIC8vdGhlbiBwdXNoIGFsbCBjb29yZGluYXRlcyBvZiB0aGlzIHNoaXAgdG8gYWxsU2hpcENvb3JkcyAgICAgIFxuICAgICAgICAgICAgU2hpcE5hbWUuY29vcmRpbmF0ZXMuZm9yRWFjaChlbGVtZW50ID0+IHthbGxTaGlwQ29vcmRzLnB1c2goZWxlbWVudCk7fSk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgLy9pZiB0aGUgYWxpZ25tZW50IGlzIHZlcnRpY2FsIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBhbGlnbm1lbnQgKyBzaGlwIGxlbmd0aCBpcyBsZXNzIHRoYW4gMTAgKGxlbmd0aCBvZiBib2FyZClcbiAgICAgICAgZWxzZSBpZiAoYWxpZ25tZW50ID09ICd2ZXJ0aWNhbCcgJiYgKHBvc2l0aW9uUm93ICsgU2hpcE5hbWUuU2hpcExlbmd0aCA8IDEwKSAmJiAocG9zaXRpb25Db2wgPCAxMCkpIHtcbiAgICAgICAgICAgIC8vZmlyc3QgY2hlY2sgdGhlcmUgYXJlIG5vIGNsYXNoZXMgd2l0aCBzaGlwcyBhbHJlYWR5IG9uIGJvYXJkICAgICAgIFxuICAgICAgICAgICAgbGV0IHNoaXBDbGFzaCA9IGZhbHNlO1xuICAgICAgICAgICAgYWxsU2hpcENvb3Jkcy5mb3JFYWNoKGVsZW1lbnQgPT4gXG4gICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3NpdGlvblJvdyA9PSBlbGVtZW50WzBdKSAmJiAocG9zaXRpb25Db2wgPT0gZWxlbWVudFsxXSkpIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQ2xhc2ggPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFNoaXBOYW1lLlNoaXBMZW5ndGg7IGluZGV4KyspIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwQ2xhc2gpICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU2hpcCBvdmVybGFwcyB3aXRoIGFub3RoZXInKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSB0aGUgc2hpcHMgY29vcmRpbmF0ZSBhcnJheVxuICAgICAgICAgICAgICAgIFNoaXBOYW1lLmNvb3JkaW5hdGVzLnB1c2goWyhwb3NpdGlvblJvdyArIGluZGV4KSxwb3NpdGlvbkNvbF0pO1xuICAgICAgICAgICAgICAgIGFueVNoaXBDbGFzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNoaXBBcnJheS5wdXNoKFNoaXBOYW1lKTtcbiAgICAgICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge2FsbFNoaXBDb29yZHMucHVzaChlbGVtZW50KTt9KTsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy92YWxpZGF0aW9uIGZvciBpZiBzaGlwcyBhcmUgbm90IHBsYWNlZCBpbiB0aGUgcmlnaHQgc3BvdFxuICAgICAgICBlbHNleyAgICAgICAgICAgIFxuICAgICAgICAgICAgYWxlcnQoJ0JhZCBzaGlwIHBsYWNlbWVudCwgcmVzZXR0aW5nIHRoZSBwYWdlJyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy9yZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHRha2VzIGEgcGFpclxuICAgIC8vIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcFxuICAgIC8vIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgXG4gICAgLy9vciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAgeyAgICAgICAgICAgICAgIFxuICAgICAgICAvL2Jvb2wgdmFsdWUgaWYgdGhlIGF0dGFjayBjb29yZGluYXRlcyBoaXQgYSBzaGlwXG4gICAgICAgIGxldCB0aGlzSXNBSGl0ID0gZmFsc2U7XG4gICAgICAgIC8vdmFsdWUgZm9yIGhpdCBzaGlwXG4gICAgICAgIGxldCBzaGlwSGl0O1xuICAgICAgICAvL3ZhbHVlIGZvciBpbmRleCBvZiB0aGUgc2hpcCB0aGF0IGhhcyBiZWVuIGhpdFxuICAgICAgICBsZXQgaGl0SW5kZXg7XG4gICAgICAgIGFsbFNoaXBDb29yZHMuZm9yRWFjaChlbGVtZW50ID0+IFxuICAgICAgICB7ICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2VhY2ggb2JqZWN0IGluIHRoZSBzaGlwIGFycmF5IGhhcyBhcnJheSBvZiBjb29yZHNcbiAgICAgICAgICAgIGlmICggKHBvc2l0aW9uUm93ID09IGVsZW1lbnRbMF0pICYmIChwb3NpdGlvbkNvbCA9PSBlbGVtZW50WzFdKSkgXG4gICAgICAgICAgICB7ICAgLy90aGlzIGlzIGEgaGl0IC0gc2VuZCBoaXQgdG8gY29ycmVjdCBzaGlwICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2RldGVybWluZSB3aGljaCBzaGlwIHdhcyBoaXQgYW5kIHdoZXJlXG4gICAgICAgICAgICAgICAgLy9sb29wIHRocm91Z2ggYWxsIHNoaXAgb2JqZWN0cyBvbiBib2FyZFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwQXJyYXkubGVuZ3RoOyBpbmRleCsrKSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vbG9vcCB3aXRoaW4gdGhlIG9iamVjdHMgY29vcmRpbmF0ZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQXJyYXlbaW5kZXhdLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb29yZGluYXRlIGZvciB0aGlzIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gc2hpcEFycmF5W2luZGV4XS5jb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKChjb29yZFswXSA9PSBwb3NpdGlvblJvdykgJiYgKGNvb3JkWzFdID09IHBvc2l0aW9uQ29sKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zaGlwSGl0IGlzIHRoZSBzaGlwIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBIaXQgPSBzaGlwQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFrZSBoaXQgaW5kZXggcG9zaXRpb24gb2YgdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jYWxsIHRoZSBoaXQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBzaGlwSGl0LmhpdChoaXRJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpc0lzQUhpdCA9IHRydWU7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH0pOyAgICBcbiAgICAgICAgaWYgKCF0aGlzSXNBSGl0KSB7XG4gICAgICAgICAgICAvL3RoaXMgaXMgYSBtaXNzLiByZWNvcmQgbWlzc2VkIGNvb3JkaW5hdGVzIHNvIHRoZXkgY2FuIGJlIHJlbmRlcmVkIGluIGZyb250RW5kLmpzXG4gICAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKFtwb3NpdGlvblJvdywgcG9zaXRpb25Db2xdKTtcbiAgICAgICAgfSBcbiAgICB9XG5cblxuICAgIC8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuICAgIGZ1bmN0aW9uIGNoZWNrSWZBbGxTaGlwc1N1bmsoKVxuICAgIHtcbiAgICAgICAgLy9jcmVhdGUgYm9vbFxuICAgICAgICBhbGxTaGlwc1N1bmsgPSB0cnVlO1xuXG4gICAgICAgIC8vYXJyYXkgdG8gc3RvcmUgdHJ1ZS9mYWxzZSB2YWx1ZXMgaW50b1xuICAgICAgICBsZXQgY2hlY2tGb3JTaW5rYWdlQXJyYXkgPSBbXTtcblxuICAgICAgICAvL3NoaXBBcnJheSBoYXMgbGlzdCBvZiBzaGlwIG9iamVjdHMsIGNoZWNrIGVhY2ggZm9yIGlmIHRoZXkgYXJlIHN1bmtcbiAgICAgICAgc2hpcEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgaXNTdW5rID0gZWxlbWVudC5pc1N1bmsoKVxuICAgICAgICAgICAgY2hlY2tGb3JTaW5rYWdlQXJyYXkucHVzaChpc1N1bmspXG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja0ZvclNpbmthZ2VBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBhbGxTaGlwc1N1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jaGVjayBlYWNoIHZhbHVlIG9mIHNoaXBBcnJheS5zdW5rIFxuICAgICAgICAvL2lmIHRoZXkgYXJlIGFsbCBcbiAgICAgICAgcmV0dXJuIGFsbFNoaXBzU3VuaztcbiAgICB9ICAgICAgIFxuXG5yZXR1cm4ge2JvYXJkLCBhbGxTaGlwQ29vcmRzLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHNoaXBBcnJheSwgY2hlY2tJZkFsbFNoaXBzU3VuaywgbWlzc2VkU2hvdHMsIGFueVNoaXBDbGFzaH1cbn1cblxuZXhwb3J0IHtnYW1lQm9hcmR9O1xuIiwiaW1wb3J0IHtzaGlwRmFjdG9yeX0gZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG5pbXBvcnQge2dhbWVCb2FyZH0gZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IHtwbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7Y3JlYXRlQm9hcmRzfSBmcm9tICcuL2Zyb250RW5kJ1xuXG4vL2NyZWF0ZSBib2FyZHNcbmxldCBwbGF5ZXJCb2FyZCA9IGdhbWVCb2FyZCgpO1xubGV0IGNvbXB1dGVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuLy9jcmVhdGUgcGxheWVyc1xubGV0IHBsYXllcjEgPSBwbGF5ZXIoXCJQbGF5ZXIxXCIsIGNvbXB1dGVyQm9hcmQpO1xubGV0IHBsYXllcjJDT01QID0gcGxheWVyKFwiUGxheWVyMkNPTVBcIiwgcGxheWVyQm9hcmQpO1xuXG5cbmZ1bmN0aW9uIGdhbWVQbGF5KCl7XG5cbiAgICBwbGF5ZXJCb2FyZC5taXNzZWRTaG90cyA9IFtdO1xuICAgIGNvbXB1dGVyQm9hcmQubWlzc2VkU2hvdHMgPSBbXTtcblxuLy9jcmVhdGUgcGxheWVyIHNoaXBzXG5sZXQgcGxheWVyQmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KDQsICdiYXR0bGVzaGlwJyk7XG5sZXQgcGxheWVyUGF0cm9sID0gc2hpcEZhY3RvcnkoMiwgJ3BhdHJvbCcpO1xubGV0IHBsYXllclN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KDMsICdzdWJtYXJpbmUnKTtcbmxldCBwbGF5ZXJEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSg0LCAnZGVzdHJveWVyJyk7XG5sZXQgcGxheWVyQ2FycmllciA9IHNoaXBGYWN0b3J5KDUsICdjYXJyaWVyJyk7XG5cbi8vY3JlYXRlIGNvbXB1dGVyIHNoaXBzXG5sZXQgY29tcHV0ZXJCYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoNCwgJ2JhdHRsZXNoaXAnKTtcbmxldCBjb21wdXRlclBhdHJvbCA9IHNoaXBGYWN0b3J5KDIsICdwYXRyb2wnKTtcbmxldCBjb21wdXRlclN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KDMsICdzdWJtYXJpbmUnKTtcbmxldCBjb21wdXRlckRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KDQsICdkZXN0cm95ZXInKTtcbmxldCBjb21wdXRlckNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1LCAnY2FycmllcicpO1xuXG4vL0JvYXJkIHBsYWNlbWVudCBmb3IgcGxheWVyXG5sZXQgYmF0dGxlc2hpcFJvd0Nvb3JkID0gTnVtYmVyKHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIEJhdHRsZXNoaXBzIHggY29vcmRpbmF0ZVwiKSk7XG5sZXQgYmF0dGxlc2hpcENvbENvb3JkID0gTnVtYmVyKHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIEJhdHRsZXNoaXBzIHkgY29vcmRpbmF0ZVwiKSk7XG5sZXQgYmF0dGxlc2hpcEFsaWdubWVudCA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIEJhdHRsZXNoaXBzIHBsYWNlbWVudCAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbClcIik7ICAgICAgICBcbnBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJCYXR0bGVzaGlwLCBiYXR0bGVzaGlwQWxpZ25tZW50LCBiYXR0bGVzaGlwUm93Q29vcmQsYmF0dGxlc2hpcENvbENvb3JkICk7XG5jcmVhdGVCb2FyZHMoKTtcblxubGV0IHBhdHJvbFJvd0Nvb3JkID0gTnVtYmVyKHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIFBhdHJvbHMgeCBjb29yZGluYXRlXCIpKTtcbmxldCBwYXRyb2xDb2xDb29yZCA9IE51bWJlcihwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBQYXRyb2xzIHkgY29vcmRpbmF0ZVwiKSk7XG5sZXQgcGF0cm9sQWxpZ25tZW50ID0gcHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgUGF0cm9scyBwbGFjZW1lbnQgKGhvcml6b250YWwgb3IgdmVydGljYWwpXCIpOyAgICAgICAgXG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyUGF0cm9sLCBwYXRyb2xBbGlnbm1lbnQsIHBhdHJvbFJvd0Nvb3JkLCBwYXRyb2xDb2xDb29yZCApO1xuY3JlYXRlQm9hcmRzKCk7XG5cbmxldCBzdWJtYXJpbmVSb3dDb29yZCA9IE51bWJlcihwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBTdWJtYXJpbmUgeCBjb29yZGluYXRlXCIpKTtcbmxldCBzdWJtYXJpbmVDb2xDb29yZCA9IE51bWJlcihwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBTdWJtYXJpbmUgeSBjb29yZGluYXRlXCIpKTtcbmxldCBzdWJtYXJpbmVBbGlnbm1lbnQgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBTdWJtYXJpbmUgcGxhY2VtZW50IChob3Jpem9udGFsIG9yIHZlcnRpY2FsKVwiKTsgICAgICAgIFxucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclN1Ym1hcmluZSwgc3VibWFyaW5lQWxpZ25tZW50LCBzdWJtYXJpbmVSb3dDb29yZCxzdWJtYXJpbmVDb2xDb29yZCApO1xuY3JlYXRlQm9hcmRzKCk7XG5cbmxldCBEZXN0cm95ZXJSb3dDb29yZCA9IE51bWJlcihwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBEZXN0cm95ZXIgeCBjb29yZGluYXRlXCIpKTtcbmxldCBEZXN0cm95ZXJDb2xDb29yZCA9IE51bWJlcihwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBEZXN0cm95ZXIgeSBjb29yZGluYXRlXCIpKTtcbmxldCBEZXN0cm95ZXJBbGlnbm1lbnQgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBEZXN0cm95ZXIgcGxhY2VtZW50IChob3Jpem9udGFsIG9yIHZlcnRpY2FsKVwiKTsgICAgICAgIFxucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckRlc3Ryb3llciwgRGVzdHJveWVyQWxpZ25tZW50LCBEZXN0cm95ZXJSb3dDb29yZCxEZXN0cm95ZXJDb2xDb29yZCApO1xuY3JlYXRlQm9hcmRzKCk7XG5cbmxldCBDYXJyaWVyUm93Q29vcmQgPSBOdW1iZXIocHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgQ2FycmllciB4IGNvb3JkaW5hdGVcIikpO1xubGV0IENhcnJpZXJDb2xDb29yZCA9IE51bWJlcihwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBDYXJyaWVyIHkgY29vcmRpbmF0ZVwiKSk7XG5sZXQgQ2FycmllckFsaWdubWVudCA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIENhcnJpZXIgcGxhY2VtZW50IChob3Jpem9udGFsIG9yIHZlcnRpY2FsKVwiKTsgICAgICAgIFxucGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckNhcnJpZXIsIENhcnJpZXJBbGlnbm1lbnQsIENhcnJpZXJSb3dDb29yZCxDYXJyaWVyQ29sQ29vcmQgKTtcbmNyZWF0ZUJvYXJkcygpO1xuXG5jb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlckJhdHRsZXNoaXAsICd2ZXJ0aWNhbCcsIDMsMyApO1xuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJQYXRyb2wsICdob3Jpem9udGFsJywgMCwzICk7XG5jb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlclN1Ym1hcmluZSwgJ3ZlcnRpY2FsJywgMyw2ICk7XG5jb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlckRlc3Ryb3llciwgJ2hvcml6b250YWwnLCA4LDEpO1xuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJDYXJyaWVyLCAnaG9yaXpvbnRhbCcsIDksMSApO1xuXG5jcmVhdGVCb2FyZHMoKTtcbn1cblxuZnVuY3Rpb24gcGxheWVyVHVybihyb3csIGNvbClcbntcbiAgICBwbGF5ZXIxLnRha2VUdXJuKHJvdywgY29sKTsgXG5cbiAgICAvL2ltbWVkaWF0ZWx5IGFmdGVyLCB0aGUgY29tcHV0ZXIgdGFrZXMgYSB0dXJuIC0gZm9yIHRlc3RpbmcgYW55d2F5XG4gICAgbGV0IGNvbDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IHJvdzIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcGxheWVyMkNPTVAudGFrZVR1cm4oY29sMiwgcm93Mik7ICBcblxuXG4gICAgLy9lbnN1cmUgZ2FtZSBpcyBzdGFydGVkIGJlZm9yZSBjb25ncmF0dWxhdGluZyB3aW5uZXIuLi5cbiAgICBpZiAocGxheWVyQm9hcmQuc2hpcEFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgXG4gICAgXG4gICAgLy9jaGVjayBpZiBhbGwgc2hpcHMgc3Vua1xuICAgIGxldCBnYW1lb3ZlclBsYXllciA9IHBsYXllckJvYXJkLmNoZWNrSWZBbGxTaGlwc1N1bmsoKTtcbiAgICBsZXQgZ2FtZW92ZXJDb21wdXRlciA9IGNvbXB1dGVyQm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpXG5cbiAgICBpZiAoZ2FtZW92ZXJQbGF5ZXIpIHtcbiAgICAgICAgYWxlcnQoXCJDb21wdXRlciB3aW5zIVwiKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIGlmIChnYW1lb3ZlckNvbXB1dGVyKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxheWVyIHdpbnMhXCIpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG59XG59XG5cbmV4cG9ydCB7Z2FtZVBsYXksIHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCBwbGF5ZXJUdXJufTtcbiIsIlxuY29uc3QgeyByZWNlaXZlQXR0YWNrIH0gPSByZXF1aXJlKFwiLi9nYW1lQm9hcmRcIik7XG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9mcm9udEVuZCdcblxuY29uc3QgcGxheWVyID0gKG5hbWUsIGVuZW15R2FtZWJvYXJkKSA9PlxueyAgIFxuICAgIC8vbGFiZWwgd2l0aCBhIG5hbWVcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWU7XG4gICAgbGV0IGdhbWVCb2FyZEF0dGFja0JvYXJkID0gZW5lbXlHYW1lYm9hcmQ7XG4gICAgbGV0IHR1cm4gPSBmYWxzZTtcbiAgICBsZXQgY29tcHV0ZXJUdXJuc1Rha2VuID0gW107XG5cbiAgICBmdW5jdGlvbiB0YWtlVHVybihhUm93LCBhQ29sKXtcbiAgICBpZiAocGxheWVyTmFtZSA9PSAnY29tcHV0ZXInKSB7XG5cbiAgICAgICAgLy9uZWVkIHRvIHJhbmRvbWlzZSBwbGF5c1xuICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAvL2Jvb2wgZm9yIGlmIHRoZSBndWVzcyBoYXMgYmVlbiB0YWtlbiBhbHJlYWR5IGluIGdhbWVcbiAgICAgICAgbGV0IGd1ZXNzVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgLy9jaGVjayB0aGUgcHJldmlvdXMgZ3Vlc3NlcywgaWYgaXQgaGFzIGJlZW4gdGFrZW4gZ28gdG8gd2hpbGUgbG9vcFxuICAgICAgICBjb21wdXRlclR1cm5zVGFrZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50WzBdID09IHJvdyAmJiBlbGVtZW50WzFdID09IGNvbCkge1xuICAgICAgICAgICAgICAgIGd1ZXNzVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy9sb29wIHRocm91Z2ggdW50aWwgYSBndWVzcyBpc250IHRha2VuXG4gICAgICAgIHdoaWxlIChndWVzc1Rha2VuKSB7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb21wdXRlclR1cm5zVGFrZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFswXSA9PSByb3cgJiYgZWxlbWVudFsxXSA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3NUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9vbmNlIHRoZSBjb29yZGluYXRlcyBhcmUgdmFsaWQsIHB1c2ggdGhlbSB0byB0aGUgZ3Vlc3NlcyB0YWtlbiBhcnJheSBmb3IgdmFsaWRhdGlvblxuICAgICAgICBjb21wdXRlclR1cm5zVGFrZW4ucHVzaChbcm93LCBjb2xdKTtcblxuICAgICAgICAvL3RoZSBib2FyZCB0byBhdHRhY2sgaXMgdGhlIHBsYXllcnMgYm9hcmRcbiAgICAgICAgZ2FtZUJvYXJkQXR0YWNrQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG5cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgLy9ub3QgYSBjb21wdXRlclxuICAgICAgICBnYW1lQm9hcmRBdHRhY2tCb2FyZC5yZWNlaXZlQXR0YWNrKGFSb3csIGFDb2wpXG4gICAgICAgIC8vdGhlIGJvYXJkIHRvIGF0dGFjayBpcyB0aGUgY29tcHV0ZXJzIGJvYXJkICAgICAgICBcbiAgICAgICAgY3JlYXRlQm9hcmRzKCk7XG4gICAgfVxufVxucmV0dXJue3Rha2VUdXJufVxuXG59XG5cbmV4cG9ydCB7cGxheWVyfTsiLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgsIG5hbWUpID0+e1xuICAvL2RlZmluZSBsZW5ndGggb2Ygc2hpcFxuICBsZXQgU2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IFNoaXBOYW1lID0gbmFtZTtcbiAgLy9jcmVhdGUgYW4gYXJyYXkgb2YgdGhlIGxlbmd0aCwgcmVwcmVzZW50aW5nIGEgc2hpcFxuICBsZXQgbGVuZ3RoQXJyYXkgPSBbXTtcbiAgbGVuZ3RoQXJyYXkgPSBbLi4uQXJyYXkoU2hpcExlbmd0aCldLm1hcCh4ID0+IDEpOyAgIFxuICAvL2FycmF5IGZvciBjb29yZGluYXRlcyB0byBiZSBoZWxkXG4gIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAvL2RlZmluZSBoaXQgZnVuY3Rpb25cbiAgZnVuY3Rpb24gaGl0KG51bSlcbiAge1xuICAgIC8vbWFyayBudW0gYXMgaGl0XG4gICAgbGVuZ3RoQXJyYXlbbnVtXSA9IDA7ICBcbiAgfSAgXG4gIC8vZGV0ZXJtaW5lIGlmIHN1bmtcbiAgZnVuY3Rpb24gaXNTdW5rKClcbiAge1xuICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICBsZW5ndGhBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT0gMSkge1xuICAgICAgICBzdW5rID0gZmFsc2U7XG4gICAgICB9ICAgICAgXG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bms7XG4gIH1cbiAgcmV0dXJue1NoaXBMZW5ndGgsIFNoaXBOYW1lLCBsZW5ndGhBcnJheSwgaGl0LCBpc1N1bmssIGNvb3JkaW5hdGVzfVxufVxuXG5leHBvcnQge3NoaXBGYWN0b3J5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2FtZVBsYXkgfSBmcm9tICcuL2RlcGVuZGVuY2llcy9nYW1lTG9vcCc7XG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9kZXBlbmRlbmNpZXMvZnJvbnRFbmQnXG5cblxubGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnV0dG9uJyk7XG5zdGFydEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gZ2FtZVBsYXkoKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0QnV0dG9uJykub25jbGljayA9ICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpO1xuLy8gc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVQbGF5KVxuLy9jYWxsIHRoZSBnYW1lIGxvb3AgZnVuY3Rpb25cbmNyZWF0ZUJvYXJkcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==