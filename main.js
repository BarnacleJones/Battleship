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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../images/battleshipBackground.gif */ "./images/battleshipBackground.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    display: grid;\r\n    text-align: center;\r\n    grid-template-columns: 1;\r\n    grid-template-rows: 1fr 4fr .25fr;\r\n    margin: 0;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size:100% 100vh;\r\n    background-repeat:no-repeat;\r\n    font-family: 'Bangers', cursive;\r\n    color: #233B48;\r\n}\r\n\r\n#startButton, #restartButton{\r\n    \r\n    display: flex;\r\n    width: max-content;\r\n    /* flex-direction: row; */\r\n    font-size: 2rem;\r\n    align-self: center;\r\n    margin: auto;\r\n    background-color: #FBC874;\r\n    border-radius: 5px;\r\n    border: none;\r\n    opacity: 0.7;\r\n    font-family: 'Bangers', cursive;\r\n}\r\n\r\nheader{\r\n    grid-area: 1 / 1 / span 1  /span 1;   \r\n}\r\n\r\nmain{\r\n    grid-area: 2 / 1 / span 1  /span 1;\r\n    display:flex;    \r\n    margin: auto;\r\n    height: 60vh;\r\n    align-items: center;\r\n    padding: 2%;\r\n    background-image: linear-gradient(75deg, #FBC874, #5794A6) ;    \r\n    opacity: 0.8;\r\n    border-radius: 5px;   \r\n}\r\n\r\nfooter{\r\n  grid-area: 3 / 1 / span 0  /span 0;\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #3A6572;\r\n  opacity: 0.4;  \r\n}\r\n\r\n#title{\r\n    font-size: 4rem;\r\n}\r\n\r\n#playerBoard, #computerBoard{\r\n    display: flex; \r\n    flex-direction: row;\r\n    flex-grow: 0;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n}\r\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \r\n    width: 2em;\r\n    height: 2em;    \r\n}\r\n.playerCellsDiv, .computerCellsDiv{\r\n    border: 1px solid white;\r\n}\r\n\r\n@media screen and (max-width: 815px) {\r\n    main {\r\n      flex-direction: column;\r\n      margin: none;\r\n      height: 80vh;\r\n      padding: none; \r\n    }\r\n\r\n    body{\r\n        background-repeat: repeat-y;\r\n        background-size: auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \r\n        width: 1.5rem;\r\n        height: 1.5rem;    \r\n    }\r\n\r\n    #title{\r\n        font-size: 2rem;\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,iCAAiC;IACjC,SAAS;IACT,yDAAuD;IACvD,0BAA0B;IAC1B,2BAA2B;IAC3B,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;;IAEI,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,2DAA2D;IAC3D,YAAY;IACZ,kBAAkB;AACtB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,OAAO;EACP,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,YAAY;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI;MACE,sBAAsB;MACtB,YAAY;MACZ,YAAY;MACZ,aAAa;IACf;;IAEA;QACI,2BAA2B;QAC3B,qBAAqB;QACrB,aAAa;QACb,sBAAsB;IAC1B;;IAEA;QACI,aAAa;QACb,cAAc;IAClB;;IAEA;QACI,eAAe;IACnB;EACF","sourcesContent":["body{\r\n    display: grid;\r\n    text-align: center;\r\n    grid-template-columns: 1;\r\n    grid-template-rows: 1fr 4fr .25fr;\r\n    margin: 0;\r\n    background-image: url(/images/battleshipBackground.gif);\r\n    background-size:100% 100vh;\r\n    background-repeat:no-repeat;\r\n    font-family: 'Bangers', cursive;\r\n    color: #233B48;\r\n}\r\n\r\n#startButton, #restartButton{\r\n    \r\n    display: flex;\r\n    width: max-content;\r\n    /* flex-direction: row; */\r\n    font-size: 2rem;\r\n    align-self: center;\r\n    margin: auto;\r\n    background-color: #FBC874;\r\n    border-radius: 5px;\r\n    border: none;\r\n    opacity: 0.7;\r\n    font-family: 'Bangers', cursive;\r\n}\r\n\r\nheader{\r\n    grid-area: 1 / 1 / span 1  /span 1;   \r\n}\r\n\r\nmain{\r\n    grid-area: 2 / 1 / span 1  /span 1;\r\n    display:flex;    \r\n    margin: auto;\r\n    height: 60vh;\r\n    align-items: center;\r\n    padding: 2%;\r\n    background-image: linear-gradient(75deg, #FBC874, #5794A6) ;    \r\n    opacity: 0.8;\r\n    border-radius: 5px;   \r\n}\r\n\r\nfooter{\r\n  grid-area: 3 / 1 / span 0  /span 0;\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #3A6572;\r\n  opacity: 0.4;  \r\n}\r\n\r\n#title{\r\n    font-size: 4rem;\r\n}\r\n\r\n#playerBoard, #computerBoard{\r\n    display: flex; \r\n    flex-direction: row;\r\n    flex-grow: 0;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n}\r\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \r\n    width: 2em;\r\n    height: 2em;    \r\n}\r\n.playerCellsDiv, .computerCellsDiv{\r\n    border: 1px solid white;\r\n}\r\n\r\n@media screen and (max-width: 815px) {\r\n    main {\r\n      flex-direction: column;\r\n      margin: none;\r\n      height: 80vh;\r\n      padding: none; \r\n    }\r\n\r\n    body{\r\n        background-repeat: repeat-y;\r\n        background-size: auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \r\n        width: 1.5rem;\r\n        height: 1.5rem;    \r\n    }\r\n\r\n    #title{\r\n        font-size: 2rem;\r\n    }\r\n  }"],"sourceRoot":""}]);
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

    //clash ship bool
    // let shipClash = false;
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
        alert("Computer wins");
        location.reload();
    }
    if (gameoverComputer) {
        alert("Player wins");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9mcm9udEVuZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvaW1hZ2VzL2JhdHRsZXNoaXBCYWNrZ3JvdW5kLmdpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgLjI1ZnI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXHJcXG4gICAgY29sb3I6ICMyMzNCNDg7XFxyXFxufVxcclxcblxcclxcbiNzdGFydEJ1dHRvbiwgI3Jlc3RhcnRCdXR0b257XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkM4NzQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTsgICBcXHJcXG59XFxyXFxuXFxyXFxubWFpbntcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTtcXHJcXG4gICAgZGlzcGxheTpmbGV4OyAgICBcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsICNGQkM4NzQsICM1Nzk0QTYpIDsgICAgXFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICBncmlkLWFyZWE6IDMgLyAxIC8gc3BhbiAwICAvc3BhbiAwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNjU3MjtcXHJcXG4gIG9wYWNpdHk6IDAuNDsgIFxcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllckJvYXJkLCAjY29tcHV0ZXJCb2FyZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuLnBsYXllckNlbGxzRGl2LCAucGxheWVyUm93RGl2LCAuY29tcHV0ZXJSb3dEaXYgLmNvbXB1dGVyQ2VsbHNEaXZ7ICAgIFxcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTsgICAgXFxyXFxufVxcclxcbi5wbGF5ZXJDZWxsc0RpdiwgLmNvbXB1dGVyQ2VsbHNEaXZ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTVweCkge1xcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIG1hcmdpbjogbm9uZTtcXHJcXG4gICAgICBoZWlnaHQ6IDgwdmg7XFxyXFxuICAgICAgcGFkZGluZzogbm9uZTsgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYm9keXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wbGF5ZXJDZWxsc0RpdiwgLnBsYXllclJvd0RpdiwgLmNvbXB1dGVyUm93RGl2IC5jb21wdXRlckNlbGxzRGl2eyAgICBcXHJcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTsgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3RpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QseURBQXVEO0lBQ3ZELDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDJEQUEyRDtJQUMzRCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtNQUNFLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osWUFBWTtNQUNaLGFBQWE7SUFDZjs7SUFFQTtRQUNJLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgLjI1ZnI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWFnZXMvYmF0dGxlc2hpcEJhY2tncm91bmQuZ2lmKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXHJcXG4gICAgY29sb3I6ICMyMzNCNDg7XFxyXFxufVxcclxcblxcclxcbiNzdGFydEJ1dHRvbiwgI3Jlc3RhcnRCdXR0b257XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkM4NzQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTsgICBcXHJcXG59XFxyXFxuXFxyXFxubWFpbntcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTtcXHJcXG4gICAgZGlzcGxheTpmbGV4OyAgICBcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsICNGQkM4NzQsICM1Nzk0QTYpIDsgICAgXFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICBncmlkLWFyZWE6IDMgLyAxIC8gc3BhbiAwICAvc3BhbiAwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNjU3MjtcXHJcXG4gIG9wYWNpdHk6IDAuNDsgIFxcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllckJvYXJkLCAjY29tcHV0ZXJCb2FyZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuLnBsYXllckNlbGxzRGl2LCAucGxheWVyUm93RGl2LCAuY29tcHV0ZXJSb3dEaXYgLmNvbXB1dGVyQ2VsbHNEaXZ7ICAgIFxcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTsgICAgXFxyXFxufVxcclxcbi5wbGF5ZXJDZWxsc0RpdiwgLmNvbXB1dGVyQ2VsbHNEaXZ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTVweCkge1xcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIG1hcmdpbjogbm9uZTtcXHJcXG4gICAgICBoZWlnaHQ6IDgwdmg7XFxyXFxuICAgICAgcGFkZGluZzogbm9uZTsgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYm9keXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wbGF5ZXJDZWxsc0RpdiwgLnBsYXllclJvd0RpdiwgLmNvbXB1dGVyUm93RGl2IC5jb21wdXRlckNlbGxzRGl2eyAgICBcXHJcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTsgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3RpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCBwbGF5ZXJUdXJuIH0gZnJvbSBcIi4vZ2FtZUxvb3BcIjtcclxuXHJcbi8vR2xvYmFsIHZhcmlhYmxlc1xyXG5sZXQgcGxheWVyc0JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJCb2FyZFwiKTtcclxubGV0IGNvbXB1dGVyc0JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlckJvYXJkXCIpO1xyXG5cclxuLy9EaXNwbGF5cyBjaG9zZW4gYm9hcmQgb24gRE9NXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZChib2FyZFRvRGlzcGxheSkge1xyXG4gIC8vZHJhdyBib2FyZFxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib2FyZFRvRGlzcGxheS5ib2FyZC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIC8vZWxlbWVudCBpcyBlYWNoIHJvd1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGJvYXJkVG9EaXNwbGF5LmJvYXJkW2luZGV4XTtcclxuICAgIC8vY3JlYXRlIGEgZGl2IGZvciB0aGUgcm93XHJcbiAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIC8vIHJvdy5jbGFzc05hbWUgPSAncm93JztcclxuICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xyXG4gICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wdXRlclJvd0RpdlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBsYXllckNvbERpdlwiKTtcclxuICAgIH1cclxuICAgIC8vY3JlYXRlIHRoZSBjb2x1bW5zXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xyXG4gICAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY1sgJHtpfSwgJHtlbGVtZW50W2luZGV4XX0gXWApO1xyXG4gICAgICAgIGNvbHVtbi5vbmNsaWNrID0gKCkgPT4gcGxheWVyVHVybihgJHtpfWAsIGAke2VsZW1lbnRbaW5kZXhdfWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXB1dGVyQ2VsbHNEaXZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBbICR7aX0sICR7ZWxlbWVudFtpbmRleF19IF1gKTtcclxuICAgICAgICBjb2x1bW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5ZXJDZWxsc0RpdlwiKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29sdW1uLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgIGNvbC5hcHBlbmRDaGlsZChjb2x1bW4pO1xyXG4gICAgfVxyXG4gICAgLy9hcHBlbmQgdG8gZG9tXHJcbiAgICBpZiAoYm9hcmRUb0Rpc3BsYXkgPT09IGNvbXB1dGVyQm9hcmQpIHtcclxuICAgICAgY29tcHV0ZXJzQm9hcmQuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYXllcnNCb2FyZC5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9yZW5kZXIgZWFjaCBzaGlwIG9uIHRoZSBib2FyZFxyXG4gIGJvYXJkVG9EaXNwbGF5LnNoaXBBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAvL2dldCB0aGUgc2hpcHMgY29vcmRpbmF0ZXNcclxuICAgIGxldCBjb29yZEFycmF5ID0gZWxlbWVudC5jb29yZGluYXRlcztcclxuICAgIC8vZ28gdGhyb3VnaCBlYWNoIGNvb3JkaW5hdGUsIHNldCB0aGUgRE9NIHZhbHVlIChzYW1lIGFzIGNvb3JkcykgdG8gcmVkIGFzIHRoZSBzaGlwIGlzIHBsYWNlZCB0aGVyZVxyXG4gICAgY29vcmRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgYGNbICR7aXRlbVswXX0sICR7aXRlbVsxXX0gXWBcclxuICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgLy9kbyBub3RoaW5nIC0gdW5jb21tZW50IHRvIHNlZSBjb21wdXRlciBib2FyZCBwbGFjZW1lbnRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgIGBbICR7aXRlbVswXX0sICR7aXRlbVsxXX0gXWBcclxuICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvL3JlbmRlciBtaXNzZWQgc2hvdHMgb24gdGhlIGJvYXJkXHJcbiAgYm9hcmRUb0Rpc3BsYXkubWlzc2VkU2hvdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGJvYXJkVG9EaXNwbGF5ID09PSBjb21wdXRlckJvYXJkKSB7XHJcbiAgICAgIGxldCBpZCA9IGBjWyAke2VsZW1lbnRbMF19LCAke2VsZW1lbnRbMV19IF1gO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgaWQgPSBgWyAke2VsZW1lbnRbMF19LCAke2VsZW1lbnRbMV19IF1gO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vcmVuZGVyIGhpdCBzaG90cyBvbiB0aGUgYm9hcmRcclxuICBsZXQgc3F1YXJlO1xyXG4gIC8vZ28gdGhyb3VnaCBlYWNoIHNoaXAgb24gdGhlIGJvYXJkXHJcbiAgYm9hcmRUb0Rpc3BsYXkuc2hpcEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50Lmxlbmd0aEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAvL2dvIHRocm91Z2ggdGhlIDEvMCB2YWx1ZXMgb24gdGhlIHNoaXBzIGxlbmd0aCAoMCBtZWFucyBoaXQpXHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5sZW5ndGhBcnJheVtpbmRleF07XHJcbiAgICAgIGlmICh2YWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgc3F1YXJlID0gZWxlbWVudC5jb29yZGluYXRlc1tpbmRleF07XHJcbiAgICAgICAgaWYgKGJvYXJkVG9EaXNwbGF5ID09PSBjb21wdXRlckJvYXJkKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgYGNbICR7c3F1YXJlWzBdfSwgJHtzcXVhcmVbMV19IF1gXHJcbiAgICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9hc3NpZ24gY29vcmRpbmF0ZSB2YWx1ZXMgdG8gJ3NxdWFyZSdcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBgWyAke3NxdWFyZVswXX0sICR7c3F1YXJlWzFdfSBdYFxyXG4gICAgICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkcygpIHsgIFxyXG4gIHBsYXllcnNCb2FyZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbXB1dGVyc0JvYXJkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGlzcGxheUJvYXJkKGNvbXB1dGVyQm9hcmQpO1xyXG4gIGRpc3BsYXlCb2FyZChwbGF5ZXJCb2FyZCk7XHJcbn1cclxuZXhwb3J0IHsgY3JlYXRlQm9hcmRzIH07XHJcbiIsIi8vZ2FtZWJvYXJkIGZhY3RvcnlcclxuY29uc3QgZ2FtZUJvYXJkID0gKCkgPT57XHJcbiAgICAvLzJkIGFycmF5IDEweDEwXHJcbiAgICAvL2FjY2VzcyB2YWx1ZXMgbGlrZSBhIGdyaWQgYm9hcmRbMV1bMV0gd2lsbCBiZSAxXHJcbiAgICBsZXQgYm9hcmQgPSBbLi4uQXJyYXkoMTApXS5tYXAoeCA9PiBbMCwxLDIsMyw0LDUsNiw3LDgsOV0pXHJcbiAgICAvL2NyZWF0ZSBhbiBhcnJheSBvZiBzaGlwIG5hbWVzLCBzbyBjYW4gZGV0ZXJtaW5lIHdoaWNoIG9uZSBpcyBoaXRcclxuICAgIGxldCBzaGlwQXJyYXkgPSBbXVxyXG4gICAgLy9ib29sIHZhbHVlIGZvciBkZXRlcm1pbmluZyBpZiBhbGwgc2hpcHMgb24gYm9hcmQgYXJlIHN1bmtcclxuICAgIGxldCBhbGxTaGlwc1N1bmsgPSBmYWxzZTtcclxuICAgIC8vYXJyYXkgaG9sZGluZyBhbGwgdGhlIHNoaXAgY29vcmRpbmF0ZXNcclxuICAgIGxldCBhbGxTaGlwQ29vcmRzID0gW107XHJcbiAgICAvL2FycmF5IGhvbGRpbmcgYWxsIHRoZSBtaXNzZWQgc2hvdHNcclxuICAgIGxldCBtaXNzZWRTaG90cyA9IFtdO1xyXG5cclxuICAgIC8vY2xhc2ggc2hpcCBib29sXHJcbiAgICAvLyBsZXQgc2hpcENsYXNoID0gZmFsc2U7XHJcbiAgICBsZXQgYW55U2hpcENsYXNoID0gZmFsc2U7XHJcblxyXG4gICAgLy9mdW5jdGlvbiB0byBwbGFjZSB0aGUgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkXHJcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoU2hpcE5hbWUsIGFsaWdubWVudCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKVxyXG4gICAgLy8gZnVuY3Rpb24gcGxhY2VTaGlwKFNoaXBOYW1lLCBhbGlnbm1lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gLy9jb2RlIHRvIHJhbmRvbWlzZSBib2FyZCBwbGFjZW1lbnRcclxuICAgICAgICAvLyBsZXQgcG9zaXRpb25Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgLy8gbGV0IHBvc2l0aW9uQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuICAgICAgICAvL2lmIHRoZSBhbGlnbm1lbnQgaXMgaG9yaXpvbnRhbCBhbmQgdGhlIGxlbmd0aCBvZiB0aGUgYWxpZ25tZW50ICsgc2hpcCBsZW5ndGggaXMgbGVzcyB0aGFuIDEwIChsZW5ndGggb2YgYm9hcmQpXHJcbiAgICAgICAgaWYgKGFsaWdubWVudCA9PSAnaG9yaXpvbnRhbCcgJiYgKHBvc2l0aW9uQ29sICsgU2hpcE5hbWUuU2hpcExlbmd0aCA8IDEwKSApIHsgIFxyXG4gICAgICAgICAgICAvL2ZpcnN0IGNoZWNrIHRoZXJlIGFyZSBubyBjbGFzaGVzIHdpdGggc2hpcHMgYWxyZWFkeSBvbiBib2FyZCAgICAgICBcclxuICAgICAgICAgICAgbGV0IHNoaXBDbGFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhbGxTaGlwQ29vcmRzLmZvckVhY2goZWxlbWVudCA9PiBcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3NpdGlvblJvdyA9PSBlbGVtZW50WzBdKSAmJiAocG9zaXRpb25Db2wgPT0gZWxlbWVudFsxXSkpIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcENsYXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW55U2hpcENsYXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2V7YW55U2hpcENsYXNoID0gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFNoaXBOYW1lLlNoaXBMZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaGlwQ2xhc2gpICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW55U2hpcENsYXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU2hpcCBvdmVybGFwcyB3aXRoIGFub3RoZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBzaGlwcyBjb29yZGluYXRlIGFycmF5XHJcbiAgICAgICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5wdXNoKFtwb3NpdGlvblJvdywocG9zaXRpb25Db2wgKyBpbmRleCldKSBcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgZ2FtZWJvYXJkIGFycmF5XHJcbiAgICAgICAgICAgICAgICBib2FyZFtwb3NpdGlvblJvd11bcG9zaXRpb25Db2wgKyBpbmRleF0gPSBTaGlwTmFtZTsgXHJcbiAgICAgICAgICAgICAgICAvLyBhbnlTaGlwQ2xhc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vdGhlbiBwdXNoIHRoaXMgb2JqZWN0IHRvIHNoaXBBcnJheSBhcyBhIHJlY29yZCBvZiBzaGlwcyBvbiBib2FyZFxyXG4gICAgICAgICAgICBzaGlwQXJyYXkucHVzaChTaGlwTmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhlbiBwdXNoIGFsbCBjb29yZGluYXRlcyBvZiB0aGlzIHNoaXAgdG8gYWxsU2hpcENvb3JkcyAgICAgIFxyXG4gICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge2FsbFNoaXBDb29yZHMucHVzaChlbGVtZW50KTt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiB0aGUgYWxpZ25tZW50IGlzIHZlcnRpY2FsIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBhbGlnbm1lbnQgKyBzaGlwIGxlbmd0aCBpcyBsZXNzIHRoYW4gMTAgKGxlbmd0aCBvZiBib2FyZClcclxuICAgICAgICBlbHNlIGlmIChhbGlnbm1lbnQgPT0gJ3ZlcnRpY2FsJyAmJiAocG9zaXRpb25Sb3cgKyBTaGlwTmFtZS5TaGlwTGVuZ3RoIDwgMTApKSB7XHJcbiAgICAgICAgICAgIC8vZmlyc3QgY2hlY2sgdGhlcmUgYXJlIG5vIGNsYXNoZXMgd2l0aCBzaGlwcyBhbHJlYWR5IG9uIGJvYXJkICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgc2hpcENsYXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFsbFNoaXBDb29yZHMuZm9yRWFjaChlbGVtZW50ID0+IFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc2l0aW9uUm93ID09IGVsZW1lbnRbMF0pICYmIChwb3NpdGlvbkNvbCA9PSBlbGVtZW50WzFdKSkgXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQ2xhc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbnlTaGlwQ2xhc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZXthbnlTaGlwQ2xhc2ggPSBmYWxzZX1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgU2hpcE5hbWUuU2hpcExlbmd0aDsgaW5kZXgrKykgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaGlwQ2xhc2gpICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW55U2hpcENsYXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NoaXAgb3ZlcmxhcHMgd2l0aCBhbm90aGVyJylcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBzaGlwcyBjb29yZGluYXRlIGFycmF5XHJcbiAgICAgICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5wdXNoKFsocG9zaXRpb25Sb3cgKyBpbmRleCkscG9zaXRpb25Db2xdKTtcclxuICAgICAgICAgICAgICAgIGFueVNoaXBDbGFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goU2hpcE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgU2hpcE5hbWUuY29vcmRpbmF0ZXMuZm9yRWFjaChlbGVtZW50ID0+IHthbGxTaGlwQ29vcmRzLnB1c2goZWxlbWVudCk7fSk7ICAgXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YWxpZGF0aW9uIGZvciBpZiBzaGlwcyBhcmUgbm90IHBsYWNlZCBpbiB0aGUgcmlnaHQgc3BvdFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vIGFueVNoaXBDbGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdCYWQgc2hpcCBwbGFjZW1lbnQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9yZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHRha2VzIGEgcGFpclxyXG4gICAgLy8gb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwXHJcbiAgICAvLyBhbmQgdGhlbiBzZW5kcyB0aGUg4oCYaGl04oCZIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAsIFxyXG4gICAgLy9vciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbClcclxuICAgIHsgICAgICAgICAgICAgICBcclxuICAgICAgICAvL2Jvb2wgdmFsdWUgaWYgdGhlIGF0dGFjayBjb29yZGluYXRlcyBoaXQgYSBzaGlwXHJcbiAgICAgICAgbGV0IHRoaXNJc0FIaXQgPSBmYWxzZTtcclxuICAgICAgICAvL3ZhbHVlIGZvciBoaXQgc2hpcFxyXG4gICAgICAgIGxldCBzaGlwSGl0O1xyXG4gICAgICAgIC8vdmFsdWUgZm9yIGluZGV4IG9mIHRoZSBzaGlwIHRoYXQgaGFzIGJlZW4gaGl0XHJcbiAgICAgICAgbGV0IGhpdEluZGV4O1xyXG4gICAgICAgIGFsbFNoaXBDb29yZHMuZm9yRWFjaChlbGVtZW50ID0+IFxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9lYWNoIG9iamVjdCBpbiB0aGUgc2hpcCBhcnJheSBoYXMgYXJyYXkgb2YgY29vcmRzXHJcbiAgICAgICAgICAgIGlmICggKHBvc2l0aW9uUm93ID09IGVsZW1lbnRbMF0pICYmIChwb3NpdGlvbkNvbCA9PSBlbGVtZW50WzFdKSkgXHJcbiAgICAgICAgICAgIHsgICAvL3RoaXMgaXMgYSBoaXQgLSBzZW5kIGhpdCB0byBjb3JyZWN0IHNoaXAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9kZXRlcm1pbmUgd2hpY2ggc2hpcCB3YXMgaGl0IGFuZCB3aGVyZVxyXG4gICAgICAgICAgICAgICAgLy9sb29wIHRocm91Z2ggYWxsIHNoaXAgb2JqZWN0cyBvbiBib2FyZFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXBBcnJheS5sZW5ndGg7IGluZGV4KyspIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbG9vcCB3aXRoaW4gdGhlIG9iamVjdHMgY29vcmRpbmF0ZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBBcnJheVtpbmRleF0uY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb29yZGluYXRlIGZvciB0aGlzIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmQgPSBzaGlwQXJyYXlbaW5kZXhdLmNvb3JkaW5hdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoY29vcmRbMF0gPT0gcG9zaXRpb25Sb3cpICYmIChjb29yZFsxXSA9PSBwb3NpdGlvbkNvbCkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NoaXBIaXQgaXMgdGhlIHNoaXAgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwSGl0ID0gc2hpcEFycmF5W2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFrZSBoaXQgaW5kZXggcG9zaXRpb24gb2YgdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY2FsbCB0aGUgaGl0IGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICBzaGlwSGl0LmhpdChoaXRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzSXNBSGl0ID0gdHJ1ZTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgICBpZiAoIXRoaXNJc0FIaXQpIHtcclxuICAgICAgICAgICAgLy90aGlzIGlzIGEgbWlzcy4gcmVjb3JkIG1pc3NlZCBjb29yZGluYXRlcyBzbyB0aGV5IGNhbiBiZSByZW5kZXJlZCBpbiBmcm9udEVuZC5qc1xyXG4gICAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKFtwb3NpdGlvblJvdywgcG9zaXRpb25Db2xdKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0dhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcmVwb3J0IHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGVpciBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cclxuICAgIGZ1bmN0aW9uIGNoZWNrSWZBbGxTaGlwc1N1bmsoKVxyXG4gICAge1xyXG4gICAgICAgIC8vY3JlYXRlIGJvb2xcclxuICAgICAgICBhbGxTaGlwc1N1bmsgPSB0cnVlO1xyXG5cclxuICAgICAgICAvL2FycmF5IHRvIHN0b3JlIHRydWUvZmFsc2UgdmFsdWVzIGludG9cclxuICAgICAgICBsZXQgY2hlY2tGb3JTaW5rYWdlQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgLy9zaGlwQXJyYXkgaGFzIGxpc3Qgb2Ygc2hpcCBvYmplY3RzLCBjaGVjayBlYWNoIGZvciBpZiB0aGV5IGFyZSBzdW5rXHJcbiAgICAgICAgc2hpcEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpc1N1bmsgPSBlbGVtZW50LmlzU3VuaygpXHJcbiAgICAgICAgICAgIGNoZWNrRm9yU2lua2FnZUFycmF5LnB1c2goaXNTdW5rKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNoZWNrRm9yU2lua2FnZUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxTaGlwc1N1bmsgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGVhY2ggdmFsdWUgb2Ygc2hpcEFycmF5LnN1bmsgXHJcbiAgICAgICAgLy9pZiB0aGV5IGFyZSBhbGwgXHJcbiAgICAgICAgcmV0dXJuIGFsbFNoaXBzU3VuaztcclxuICAgIH0gICAgICAgXHJcblxyXG5yZXR1cm4ge2JvYXJkLCBhbGxTaGlwQ29vcmRzLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHNoaXBBcnJheSwgY2hlY2tJZkFsbFNoaXBzU3VuaywgbWlzc2VkU2hvdHMsIGFueVNoaXBDbGFzaH1cclxufVxyXG5cclxuZXhwb3J0IHtnYW1lQm9hcmR9O1xyXG4iLCJpbXBvcnQge3NoaXBGYWN0b3J5fSBmcm9tICcuL3NoaXBGYWN0b3J5JztcclxuaW1wb3J0IHtnYW1lQm9hcmR9IGZyb20gJy4vZ2FtZUJvYXJkJztcclxuaW1wb3J0IHtwbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHtjcmVhdGVCb2FyZHN9IGZyb20gJy4vZnJvbnRFbmQnXHJcblxyXG4vL2NyZWF0ZSBib2FyZHNcclxubGV0IHBsYXllckJvYXJkID0gZ2FtZUJvYXJkKCk7XHJcbmxldCBjb21wdXRlckJvYXJkID0gZ2FtZUJvYXJkKCk7XHJcblxyXG4vL2NyZWF0ZSBwbGF5ZXJzXHJcbmxldCBwbGF5ZXIxID0gcGxheWVyKFwiUGxheWVyMVwiLCBjb21wdXRlckJvYXJkKTtcclxubGV0IHBsYXllcjJDT01QID0gcGxheWVyKFwiUGxheWVyMkNPTVBcIiwgcGxheWVyQm9hcmQpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdhbWVQbGF5KCl7XHJcblxyXG4vL2NyZWF0ZSBwbGF5ZXIgc2hpcHNcclxubGV0IHBsYXllckJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSg0LCAnYmF0dGxlc2hpcCcpO1xyXG5sZXQgcGxheWVyUGF0cm9sID0gc2hpcEZhY3RvcnkoMiwgJ3BhdHJvbCcpO1xyXG5sZXQgcGxheWVyU3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMywgJ3N1Ym1hcmluZScpO1xyXG5sZXQgcGxheWVyRGVzdHJveWVyID0gc2hpcEZhY3RvcnkoNCwgJ2Rlc3Ryb3llcicpO1xyXG5sZXQgcGxheWVyQ2FycmllciA9IHNoaXBGYWN0b3J5KDUsICdjYXJyaWVyJyk7XHJcblxyXG4vL2NyZWF0ZSBjb21wdXRlciBzaGlwc1xyXG5sZXQgY29tcHV0ZXJCYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoNCwgJ2JhdHRsZXNoaXAnKTtcclxubGV0IGNvbXB1dGVyUGF0cm9sID0gc2hpcEZhY3RvcnkoMiwgJ3BhdHJvbCcpO1xyXG5sZXQgY29tcHV0ZXJTdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgzLCAnc3VibWFyaW5lJyk7XHJcbmxldCBjb21wdXRlckRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KDQsICdkZXN0cm95ZXInKTtcclxubGV0IGNvbXB1dGVyQ2FycmllciA9IHNoaXBGYWN0b3J5KDUsICdjYXJyaWVyJyk7XHJcblxyXG4gICAgLy8gcGxheWVyQm9hcmQuYW55U2hpcENsYXNoID0gdHJ1ZTtcclxuICAgIC8vICAgICB3aGlsZSAocGxheWVyQm9hcmQuYW55U2hpcENsYXNoKSB7XHJcbiAgICAvLyAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJCYXR0bGVzaGlwLCAndmVydGljYWwnKTtcclxuICAgIC8vICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclBhdHJvbCwgJ2hvcml6b250YWwnKTtcclxuICAgIC8vICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclN1Ym1hcmluZSwgJ3ZlcnRpY2FsJyk7XHJcbiAgICAvLyAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJEZXN0cm95ZXIsICdob3Jpem9udGFsJyk7XHJcbiAgICAvLyAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJDYXJyaWVyLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJCYXR0bGVzaGlwLCAndmVydGljYWwnLCAzLDMgKTtcclxuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyUGF0cm9sLCAnaG9yaXpvbnRhbCcsIDAsMyApO1xyXG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJTdWJtYXJpbmUsICd2ZXJ0aWNhbCcsIDMsNiApO1xyXG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJEZXN0cm95ZXIsICdob3Jpem9udGFsJywgOCwxKTtcclxuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQ2FycmllciwgJ2hvcml6b250YWwnLCA5LDEgKTtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBkbyB7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyQmF0dGxlc2hpcCwgJ3ZlcnRpY2FsJywgMywzICk7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyUGF0cm9sLCAnaG9yaXpvbnRhbCcsIDAsMyApO1xyXG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlclN1Ym1hcmluZSwgJ3ZlcnRpY2FsJywgMyw2ICk7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyRGVzdHJveWVyLCAnaG9yaXpvbnRhbCcsIDgsMSk7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyQ2FycmllciwgJ2hvcml6b250YWwnLCA5LDEgKTtcclxuICAgICAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJCYXR0bGVzaGlwLCAndmVydGljYWwnKTtcclxuICAgICAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJQYXRyb2wsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyU3VibWFyaW5lLCAndmVydGljYWwnKTtcclxuICAgICAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJEZXN0cm95ZXIsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyQ2FycmllciwgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAvLyB9IHdoaWxlIChjb21wdXRlckJvYXJkLmFueVNoaXBDbGFzaCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG5jcmVhdGVCb2FyZHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheWVyVHVybihyb3csIGNvbClcclxue1xyXG4gICAgcGxheWVyMS50YWtlVHVybihyb3csIGNvbCk7IFxyXG5cclxuICAgIC8vaW1tZWRpYXRlbHkgYWZ0ZXIsIHRoZSBjb21wdXRlciB0YWtlcyBhIHR1cm4gLSBmb3IgdGVzdGluZyBhbnl3YXlcclxuICAgIGxldCBjb2wyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgbGV0IHJvdzIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICBwbGF5ZXIyQ09NUC50YWtlVHVybihjb2wyLCByb3cyKTsgIFxyXG5cclxuXHJcbiAgICAvL2NoZWNrIGlmIGFsbCBzaGlwcyBzdW5rXHJcbiAgICBsZXQgZ2FtZW92ZXJQbGF5ZXIgPSBwbGF5ZXJCb2FyZC5jaGVja0lmQWxsU2hpcHNTdW5rKCk7XHJcbiAgICBsZXQgZ2FtZW92ZXJDb21wdXRlciA9IGNvbXB1dGVyQm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpXHJcblxyXG4gICAgaWYgKGdhbWVvdmVyUGxheWVyKSB7XHJcbiAgICAgICAgYWxlcnQoXCJDb21wdXRlciB3aW5zXCIpO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdhbWVvdmVyQ29tcHV0ZXIpIHtcclxuICAgICAgICBhbGVydChcIlBsYXllciB3aW5zXCIpO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2dhbWVQbGF5LCBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCwgcGxheWVyVHVybn07XHJcbiIsIlxyXG5jb25zdCB7IHJlY2VpdmVBdHRhY2sgfSA9IHJlcXVpcmUoXCIuL2dhbWVCb2FyZFwiKTtcclxuaW1wb3J0IHtjcmVhdGVCb2FyZHN9IGZyb20gJy4vZnJvbnRFbmQnXHJcblxyXG5jb25zdCBwbGF5ZXIgPSAobmFtZSwgZW5lbXlHYW1lYm9hcmQpID0+XHJcbnsgICBcclxuICAgIC8vbGFiZWwgd2l0aCBhIG5hbWVcclxuICAgIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcclxuICAgIGxldCBnYW1lQm9hcmRBdHRhY2tCb2FyZCA9IGVuZW15R2FtZWJvYXJkO1xyXG4gICAgbGV0IHR1cm4gPSBmYWxzZTtcclxuICAgIGxldCBjb21wdXRlclR1cm5zVGFrZW4gPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiB0YWtlVHVybihhUm93LCBhQ29sKXtcclxuICAgIGlmIChwbGF5ZXJOYW1lID09ICdjb21wdXRlcicpIHtcclxuXHJcbiAgICAgICAgLy9uZWVkIHRvIHJhbmRvbWlzZSBwbGF5c1xyXG4gICAgICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAvL2Jvb2wgZm9yIGlmIHRoZSBndWVzcyBoYXMgYmVlbiB0YWtlbiBhbHJlYWR5IGluIGdhbWVcclxuICAgICAgICBsZXQgZ3Vlc3NUYWtlbiA9IGZhbHNlO1xyXG4gICAgICAgIC8vY2hlY2sgdGhlIHByZXZpb3VzIGd1ZXNzZXMsIGlmIGl0IGhhcyBiZWVuIHRha2VuIGdvIHRvIHdoaWxlIGxvb3BcclxuICAgICAgICBjb21wdXRlclR1cm5zVGFrZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRbMF0gPT0gcm93ICYmIGVsZW1lbnRbMV0gPT0gY29sKSB7XHJcbiAgICAgICAgICAgICAgICBndWVzc1Rha2VuID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vbG9vcCB0aHJvdWdoIHVudGlsIGEgZ3Vlc3MgaXNudCB0YWtlblxyXG4gICAgICAgIHdoaWxlIChndWVzc1Rha2VuKSB7XHJcbiAgICAgICAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICBjb21wdXRlclR1cm5zVGFrZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50WzBdID09IHJvdyAmJiBlbGVtZW50WzFdID09IGNvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGd1ZXNzVGFrZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9vbmNlIHRoZSBjb29yZGluYXRlcyBhcmUgdmFsaWQsIHB1c2ggdGhlbSB0byB0aGUgZ3Vlc3NlcyB0YWtlbiBhcnJheSBmb3IgdmFsaWRhdGlvblxyXG4gICAgICAgIGNvbXB1dGVyVHVybnNUYWtlbi5wdXNoKFtyb3csIGNvbF0pO1xyXG5cclxuICAgICAgICAvL3RoZSBib2FyZCB0byBhdHRhY2sgaXMgdGhlIHBsYXllcnMgYm9hcmRcclxuICAgICAgICBnYW1lQm9hcmRBdHRhY2tCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy9ub3QgYSBjb21wdXRlclxyXG4gICAgICAgIGdhbWVCb2FyZEF0dGFja0JvYXJkLnJlY2VpdmVBdHRhY2soYVJvdywgYUNvbClcclxuICAgICAgICAvL3RoZSBib2FyZCB0byBhdHRhY2sgaXMgdGhlIGNvbXB1dGVycyBib2FyZCAgICAgICAgXHJcbiAgICAgICAgY3JlYXRlQm9hcmRzKCk7XHJcbiAgICB9XHJcbn1cclxucmV0dXJue3Rha2VUdXJufVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtwbGF5ZXJ9OyIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgbmFtZSkgPT57XHJcbiAgLy9kZWZpbmUgbGVuZ3RoIG9mIHNoaXBcclxuICBsZXQgU2hpcExlbmd0aCA9IGxlbmd0aDtcclxuICBsZXQgU2hpcE5hbWUgPSBuYW1lO1xyXG4gIC8vY3JlYXRlIGFuIGFycmF5IG9mIHRoZSBsZW5ndGgsIHJlcHJlc2VudGluZyBhIHNoaXBcclxuICBsZXQgbGVuZ3RoQXJyYXkgPSBbXTtcclxuICBsZW5ndGhBcnJheSA9IFsuLi5BcnJheShTaGlwTGVuZ3RoKV0ubWFwKHggPT4gMSk7ICAgXHJcbiAgLy9hcnJheSBmb3IgY29vcmRpbmF0ZXMgdG8gYmUgaGVsZFxyXG4gIGxldCBjb29yZGluYXRlcyA9IFtdO1xyXG4gIC8vZGVmaW5lIGhpdCBmdW5jdGlvblxyXG4gIGZ1bmN0aW9uIGhpdChudW0pXHJcbiAge1xyXG4gICAgLy9tYXJrIG51bSBhcyBoaXRcclxuICAgIGxlbmd0aEFycmF5W251bV0gPSAwOyAgXHJcbiAgfSAgXHJcbiAgLy9kZXRlcm1pbmUgaWYgc3Vua1xyXG4gIGZ1bmN0aW9uIGlzU3VuaygpXHJcbiAge1xyXG4gICAgbGV0IHN1bmsgPSB0cnVlO1xyXG4gICAgbGVuZ3RoQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQgPT0gMSkge1xyXG4gICAgICAgIHN1bmsgPSBmYWxzZTtcclxuICAgICAgfSAgICAgIFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3VuaztcclxuICB9XHJcbiAgcmV0dXJue1NoaXBMZW5ndGgsIFNoaXBOYW1lLCBsZW5ndGhBcnJheSwgaGl0LCBpc1N1bmssIGNvb3JkaW5hdGVzfVxyXG59XHJcblxyXG5leHBvcnQge3NoaXBGYWN0b3J5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBnYW1lUGxheSB9IGZyb20gJy4vZGVwZW5kZW5jaWVzL2dhbWVMb29wJztcclxuaW1wb3J0IHtjcmVhdGVCb2FyZHN9IGZyb20gJy4vZGVwZW5kZW5jaWVzL2Zyb250RW5kJ1xyXG5cclxuXHJcbmxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpO1xyXG5zdGFydEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gZ2FtZVBsYXkoKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnRCdXR0b24nKS5vbmNsaWNrID0gKCkgPT4gbG9jYXRpb24ucmVsb2FkKCk7XHJcbi8vIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lUGxheSlcclxuLy9jYWxsIHRoZSBnYW1lIGxvb3AgZnVuY3Rpb25cclxuY3JlYXRlQm9hcmRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9