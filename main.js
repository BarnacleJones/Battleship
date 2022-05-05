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
    }
    if (gameoverComputer) {
        alert("Player wins");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL2Zyb250RW5kLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9pbWFnZXMvYmF0dGxlc2hpcEJhY2tncm91bmQuZ2lmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAuMjVmcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcclxcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjogIzIzM0I0ODtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXJ0QnV0dG9uLCAjcmVzdGFydEJ1dHRvbntcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IHJvdzsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCQzg3NDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gc3BhbiAxICAvc3BhbiAxOyAgIFxcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gc3BhbiAxICAvc3BhbiAxO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7ICAgIFxcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgI0ZCQzg3NCwgIzU3OTRBNikgOyAgICBcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgXFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyBzcGFuIDAgIC9zcGFuIDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E2NTcyO1xcclxcbiAgb3BhY2l0eTogMC40OyAgXFxyXFxufVxcclxcblxcclxcbiN0aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyQm9hcmQsICNjb21wdXRlckJvYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG4ucGxheWVyQ2VsbHNEaXYsIC5wbGF5ZXJSb3dEaXYsIC5jb21wdXRlclJvd0RpdiAuY29tcHV0ZXJDZWxsc0RpdnsgICAgXFxyXFxuICAgIHdpZHRoOiAyZW07XFxyXFxuICAgIGhlaWdodDogMmVtOyAgICBcXHJcXG59XFxyXFxuLnBsYXllckNlbGxzRGl2LCAuY29tcHV0ZXJDZWxsc0RpdntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxNXB4KSB7XFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgbWFyZ2luOiBub25lO1xcclxcbiAgICAgIGhlaWdodDogODB2aDtcXHJcXG4gICAgICBwYWRkaW5nOiBub25lOyBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBib2R5e1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBsYXllckNlbGxzRGl2LCAucGxheWVyUm93RGl2LCAuY29tcHV0ZXJSb3dEaXYgLmNvbXB1dGVyQ2VsbHNEaXZ7ICAgIFxcclxcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMS41cmVtOyAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLFNBQVM7SUFDVCx5REFBdUQ7SUFDdkQsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMkRBQTJEO0lBQzNELFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO01BQ0Usc0JBQXNCO01BQ3RCLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYTtJQUNmOztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAuMjVmcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltYWdlcy9iYXR0bGVzaGlwQmFja2dyb3VuZC5naWYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcclxcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjogIzIzM0I0ODtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXJ0QnV0dG9uLCAjcmVzdGFydEJ1dHRvbntcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IHJvdzsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCQzg3NDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gc3BhbiAxICAvc3BhbiAxOyAgIFxcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gc3BhbiAxICAvc3BhbiAxO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7ICAgIFxcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgI0ZCQzg3NCwgIzU3OTRBNikgOyAgICBcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgXFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyBzcGFuIDAgIC9zcGFuIDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E2NTcyO1xcclxcbiAgb3BhY2l0eTogMC40OyAgXFxyXFxufVxcclxcblxcclxcbiN0aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyQm9hcmQsICNjb21wdXRlckJvYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG4ucGxheWVyQ2VsbHNEaXYsIC5wbGF5ZXJSb3dEaXYsIC5jb21wdXRlclJvd0RpdiAuY29tcHV0ZXJDZWxsc0RpdnsgICAgXFxyXFxuICAgIHdpZHRoOiAyZW07XFxyXFxuICAgIGhlaWdodDogMmVtOyAgICBcXHJcXG59XFxyXFxuLnBsYXllckNlbGxzRGl2LCAuY29tcHV0ZXJDZWxsc0RpdntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxNXB4KSB7XFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgbWFyZ2luOiBub25lO1xcclxcbiAgICAgIGhlaWdodDogODB2aDtcXHJcXG4gICAgICBwYWRkaW5nOiBub25lOyBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBib2R5e1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBsYXllckNlbGxzRGl2LCAucGxheWVyUm93RGl2LCAuY29tcHV0ZXJSb3dEaXYgLmNvbXB1dGVyQ2VsbHNEaXZ7ICAgIFxcclxcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMS41cmVtOyAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQsIHBsYXllclR1cm4gfSBmcm9tIFwiLi9nYW1lTG9vcFwiO1xyXG5cclxuLy9HbG9iYWwgdmFyaWFibGVzXHJcbmxldCBwbGF5ZXJzQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckJvYXJkXCIpO1xyXG5sZXQgY29tcHV0ZXJzQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyQm9hcmRcIik7XHJcblxyXG4vL0Rpc3BsYXlzIGNob3NlbiBib2FyZCBvbiBET01cclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKGJvYXJkVG9EaXNwbGF5KSB7XHJcbiAgLy9kcmF3IGJvYXJkXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvYXJkVG9EaXNwbGF5LmJvYXJkLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgLy9lbGVtZW50IGlzIGVhY2ggcm93XHJcbiAgICBjb25zdCBlbGVtZW50ID0gYm9hcmRUb0Rpc3BsYXkuYm9hcmRbaW5kZXhdO1xyXG4gICAgLy9jcmVhdGUgYSBkaXYgZm9yIHRoZSByb3dcclxuICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xyXG4gICAgaWYgKGJvYXJkVG9EaXNwbGF5ID09PSBjb21wdXRlckJvYXJkKSB7XHJcbiAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXB1dGVyUm93RGl2XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGxheWVyQ29sRGl2XCIpO1xyXG4gICAgfVxyXG4gICAgLy9jcmVhdGUgdGhlIGNvbHVtbnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaWYgKGJvYXJkVG9EaXNwbGF5ID09PSBjb21wdXRlckJvYXJkKSB7XHJcbiAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBjWyAke2l9LCAke2VsZW1lbnRbaW5kZXhdfSBdYCk7XHJcbiAgICAgICAgY29sdW1uLm9uY2xpY2sgPSAoKSA9PiBwbGF5ZXJUdXJuKGAke2l9YCwgYCR7ZWxlbWVudFtpbmRleF19YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29tcHV0ZXJDZWxsc0RpdlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYFsgJHtpfSwgJHtlbGVtZW50W2luZGV4XX0gXWApO1xyXG4gICAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBsYXllckNlbGxzRGl2XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb2x1bW4uaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgY29sLmFwcGVuZENoaWxkKGNvbHVtbik7XHJcbiAgICB9XHJcbiAgICAvL2FwcGVuZCB0byBkb21cclxuICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xyXG4gICAgICBjb21wdXRlcnNCb2FyZC5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGxheWVyc0JvYXJkLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL3JlbmRlciBlYWNoIHNoaXAgb24gdGhlIGJvYXJkXHJcbiAgYm9hcmRUb0Rpc3BsYXkuc2hpcEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIC8vZ2V0IHRoZSBzaGlwcyBjb29yZGluYXRlc1xyXG4gICAgbGV0IGNvb3JkQXJyYXkgPSBlbGVtZW50LmNvb3JkaW5hdGVzO1xyXG4gICAgLy9nbyB0aHJvdWdoIGVhY2ggY29vcmRpbmF0ZSwgc2V0IHRoZSBET00gdmFsdWUgKHNhbWUgYXMgY29vcmRzKSB0byByZWQgYXMgdGhlIHNoaXAgaXMgcGxhY2VkIHRoZXJlXHJcbiAgICBjb29yZEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGJvYXJkVG9EaXNwbGF5ID09PSBjb21wdXRlckJvYXJkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICBgY1sgJHtpdGVtWzBdfSwgJHtpdGVtWzFdfSBdYFxyXG4gICAgICAgICkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAvL2RvIG5vdGhpbmcgLSB1bmNvbW1lbnQgdG8gc2VlIGNvbXB1dGVyIGJvYXJkIHBsYWNlbWVudFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgYFsgJHtpdGVtWzBdfSwgJHtpdGVtWzFdfSBdYFxyXG4gICAgICAgICkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcmVuZGVyIG1pc3NlZCBzaG90cyBvbiB0aGUgYm9hcmRcclxuICBib2FyZFRvRGlzcGxheS5taXNzZWRTaG90cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoYm9hcmRUb0Rpc3BsYXkgPT09IGNvbXB1dGVyQm9hcmQpIHtcclxuICAgICAgbGV0IGlkID0gYGNbICR7ZWxlbWVudFswXX0sICR7ZWxlbWVudFsxXX0gXWA7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBpZCA9IGBbICR7ZWxlbWVudFswXX0sICR7ZWxlbWVudFsxXX0gXWA7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9yZW5kZXIgaGl0IHNob3RzIG9uIHRoZSBib2FyZFxyXG4gIGxldCBzcXVhcmU7XHJcbiAgLy9nbyB0aHJvdWdoIGVhY2ggc2hpcCBvbiB0aGUgYm9hcmRcclxuICBib2FyZFRvRGlzcGxheS5zaGlwQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQubGVuZ3RoQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIC8vZ28gdGhyb3VnaCB0aGUgMS8wIHZhbHVlcyBvbiB0aGUgc2hpcHMgbGVuZ3RoICgwIG1lYW5zIGhpdClcclxuICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50Lmxlbmd0aEFycmF5W2luZGV4XTtcclxuICAgICAgaWYgKHZhbHVlID09IDApIHtcclxuICAgICAgICBzcXVhcmUgPSBlbGVtZW50LmNvb3JkaW5hdGVzW2luZGV4XTtcclxuICAgICAgICBpZiAoYm9hcmRUb0Rpc3BsYXkgPT09IGNvbXB1dGVyQm9hcmQpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBgY1sgJHtzcXVhcmVbMF19LCAke3NxdWFyZVsxXX0gXWBcclxuICAgICAgICAgICkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvL2Fzc2lnbiBjb29yZGluYXRlIHZhbHVlcyB0byAnc3F1YXJlJ1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIGBbICR7c3F1YXJlWzBdfSwgJHtzcXVhcmVbMV19IF1gXHJcbiAgICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQm9hcmRzKCkgeyAgXHJcbiAgcGxheWVyc0JvYXJkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY29tcHV0ZXJzQm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBkaXNwbGF5Qm9hcmQoY29tcHV0ZXJCb2FyZCk7XHJcbiAgZGlzcGxheUJvYXJkKHBsYXllckJvYXJkKTtcclxufVxyXG5leHBvcnQgeyBjcmVhdGVCb2FyZHMgfTtcclxuIiwiLy9nYW1lYm9hcmQgZmFjdG9yeVxyXG5jb25zdCBnYW1lQm9hcmQgPSAoKSA9PntcclxuICAgIC8vMmQgYXJyYXkgMTB4MTBcclxuICAgIC8vYWNjZXNzIHZhbHVlcyBsaWtlIGEgZ3JpZCBib2FyZFsxXVsxXSB3aWxsIGJlIDFcclxuICAgIGxldCBib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCh4ID0+IFswLDEsMiwzLDQsNSw2LDcsOCw5XSlcclxuICAgIC8vY3JlYXRlIGFuIGFycmF5IG9mIHNoaXAgbmFtZXMsIHNvIGNhbiBkZXRlcm1pbmUgd2hpY2ggb25lIGlzIGhpdFxyXG4gICAgbGV0IHNoaXBBcnJheSA9IFtdXHJcbiAgICAvL2Jvb2wgdmFsdWUgZm9yIGRldGVybWluaW5nIGlmIGFsbCBzaGlwcyBvbiBib2FyZCBhcmUgc3Vua1xyXG4gICAgbGV0IGFsbFNoaXBzU3VuayA9IGZhbHNlO1xyXG4gICAgLy9hcnJheSBob2xkaW5nIGFsbCB0aGUgc2hpcCBjb29yZGluYXRlc1xyXG4gICAgbGV0IGFsbFNoaXBDb29yZHMgPSBbXTtcclxuICAgIC8vYXJyYXkgaG9sZGluZyBhbGwgdGhlIG1pc3NlZCBzaG90c1xyXG4gICAgbGV0IG1pc3NlZFNob3RzID0gW107XHJcblxyXG4gICAgLy9jbGFzaCBzaGlwIGJvb2xcclxuICAgIC8vIGxldCBzaGlwQ2xhc2ggPSBmYWxzZTtcclxuICAgIGxldCBhbnlTaGlwQ2xhc2ggPSBmYWxzZTtcclxuXHJcbiAgICAvL2Z1bmN0aW9uIHRvIHBsYWNlIHRoZSBzaGlwIG9uIHRoZSBnYW1lYm9hcmRcclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChTaGlwTmFtZSwgYWxpZ25tZW50LCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXHJcbiAgICAvLyBmdW5jdGlvbiBwbGFjZVNoaXAoU2hpcE5hbWUsIGFsaWdubWVudClcclxuICAgIHtcclxuICAgICAgICAvLyAvL2NvZGUgdG8gcmFuZG9taXNlIGJvYXJkIHBsYWNlbWVudFxyXG4gICAgICAgIC8vIGxldCBwb3NpdGlvblJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAvLyBsZXQgcG9zaXRpb25Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG4gICAgICAgIC8vaWYgdGhlIGFsaWdubWVudCBpcyBob3Jpem9udGFsIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBhbGlnbm1lbnQgKyBzaGlwIGxlbmd0aCBpcyBsZXNzIHRoYW4gMTAgKGxlbmd0aCBvZiBib2FyZClcclxuICAgICAgICBpZiAoYWxpZ25tZW50ID09ICdob3Jpem9udGFsJyAmJiAocG9zaXRpb25Db2wgKyBTaGlwTmFtZS5TaGlwTGVuZ3RoIDwgMTApICkgeyAgXHJcbiAgICAgICAgICAgIC8vZmlyc3QgY2hlY2sgdGhlcmUgYXJlIG5vIGNsYXNoZXMgd2l0aCBzaGlwcyBhbHJlYWR5IG9uIGJvYXJkICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgc2hpcENsYXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFsbFNoaXBDb29yZHMuZm9yRWFjaChlbGVtZW50ID0+IFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc2l0aW9uUm93ID09IGVsZW1lbnRbMF0pICYmIChwb3NpdGlvbkNvbCA9PSBlbGVtZW50WzFdKSkgXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQ2xhc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbnlTaGlwQ2xhc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZXthbnlTaGlwQ2xhc2ggPSBmYWxzZX1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgU2hpcE5hbWUuU2hpcExlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDbGFzaCkgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbnlTaGlwQ2xhc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTaGlwIG92ZXJsYXBzIHdpdGggYW5vdGhlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdGhlIHNoaXBzIGNvb3JkaW5hdGUgYXJyYXlcclxuICAgICAgICAgICAgICAgIFNoaXBOYW1lLmNvb3JkaW5hdGVzLnB1c2goW3Bvc2l0aW9uUm93LChwb3NpdGlvbkNvbCArIGluZGV4KV0pIFxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBnYW1lYm9hcmQgYXJyYXlcclxuICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbCArIGluZGV4XSA9IFNoaXBOYW1lOyBcclxuICAgICAgICAgICAgICAgIC8vIGFueVNoaXBDbGFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy90aGVuIHB1c2ggdGhpcyBvYmplY3QgdG8gc2hpcEFycmF5IGFzIGEgcmVjb3JkIG9mIHNoaXBzIG9uIGJvYXJkXHJcbiAgICAgICAgICAgIHNoaXBBcnJheS5wdXNoKFNoaXBOYW1lKTtcclxuICAgICAgICAgICAgLy90aGVuIHB1c2ggYWxsIGNvb3JkaW5hdGVzIG9mIHRoaXMgc2hpcCB0byBhbGxTaGlwQ29vcmRzICAgICAgXHJcbiAgICAgICAgICAgIFNoaXBOYW1lLmNvb3JkaW5hdGVzLmZvckVhY2goZWxlbWVudCA9PiB7YWxsU2hpcENvb3Jkcy5wdXNoKGVsZW1lbnQpO30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIHRoZSBhbGlnbm1lbnQgaXMgdmVydGljYWwgYW5kIHRoZSBsZW5ndGggb2YgdGhlIGFsaWdubWVudCArIHNoaXAgbGVuZ3RoIGlzIGxlc3MgdGhhbiAxMCAobGVuZ3RoIG9mIGJvYXJkKVxyXG4gICAgICAgIGVsc2UgaWYgKGFsaWdubWVudCA9PSAndmVydGljYWwnICYmIChwb3NpdGlvblJvdyArIFNoaXBOYW1lLlNoaXBMZW5ndGggPCAxMCkpIHtcclxuICAgICAgICAgICAgLy9maXJzdCBjaGVjayB0aGVyZSBhcmUgbm8gY2xhc2hlcyB3aXRoIHNoaXBzIGFscmVhZHkgb24gYm9hcmQgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBzaGlwQ2xhc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgYWxsU2hpcENvb3Jkcy5mb3JFYWNoKGVsZW1lbnQgPT4gXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zaXRpb25Sb3cgPT0gZWxlbWVudFswXSkgJiYgKHBvc2l0aW9uQ29sID09IGVsZW1lbnRbMV0pKSBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBDbGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFueVNoaXBDbGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNle2FueVNoaXBDbGFzaCA9IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBTaGlwTmFtZS5TaGlwTGVuZ3RoOyBpbmRleCsrKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDbGFzaCkgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbnlTaGlwQ2xhc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU2hpcCBvdmVybGFwcyB3aXRoIGFub3RoZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdGhlIHNoaXBzIGNvb3JkaW5hdGUgYXJyYXlcclxuICAgICAgICAgICAgICAgIFNoaXBOYW1lLmNvb3JkaW5hdGVzLnB1c2goWyhwb3NpdGlvblJvdyArIGluZGV4KSxwb3NpdGlvbkNvbF0pO1xyXG4gICAgICAgICAgICAgICAgYW55U2hpcENsYXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaGlwQXJyYXkucHVzaChTaGlwTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge2FsbFNoaXBDb29yZHMucHVzaChlbGVtZW50KTt9KTsgICBcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhbGlkYXRpb24gZm9yIGlmIHNoaXBzIGFyZSBub3QgcGxhY2VkIGluIHRoZSByaWdodCBzcG90XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgLy8gYW55U2hpcENsYXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWxlcnQoJ0JhZCBzaGlwIHBsYWNlbWVudCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3JlY2VpdmVBdHRhY2sgZnVuY3Rpb24gdGFrZXMgYSBwYWlyXHJcbiAgICAvLyBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXBcclxuICAgIC8vIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgXHJcbiAgICAvL29yIHJlY29yZHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdC5cclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKVxyXG4gICAgeyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vYm9vbCB2YWx1ZSBpZiB0aGUgYXR0YWNrIGNvb3JkaW5hdGVzIGhpdCBhIHNoaXBcclxuICAgICAgICBsZXQgdGhpc0lzQUhpdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vdmFsdWUgZm9yIGhpdCBzaGlwXHJcbiAgICAgICAgbGV0IHNoaXBIaXQ7XHJcbiAgICAgICAgLy92YWx1ZSBmb3IgaW5kZXggb2YgdGhlIHNoaXAgdGhhdCBoYXMgYmVlbiBoaXRcclxuICAgICAgICBsZXQgaGl0SW5kZXg7XHJcbiAgICAgICAgYWxsU2hpcENvb3Jkcy5mb3JFYWNoKGVsZW1lbnQgPT4gXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2VhY2ggb2JqZWN0IGluIHRoZSBzaGlwIGFycmF5IGhhcyBhcnJheSBvZiBjb29yZHNcclxuICAgICAgICAgICAgaWYgKCAocG9zaXRpb25Sb3cgPT0gZWxlbWVudFswXSkgJiYgKHBvc2l0aW9uQ29sID09IGVsZW1lbnRbMV0pKSBcclxuICAgICAgICAgICAgeyAgIC8vdGhpcyBpcyBhIGhpdCAtIHNlbmQgaGl0IHRvIGNvcnJlY3Qgc2hpcCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2RldGVybWluZSB3aGljaCBzaGlwIHdhcyBoaXQgYW5kIHdoZXJlXHJcbiAgICAgICAgICAgICAgICAvL2xvb3AgdGhyb3VnaCBhbGwgc2hpcCBvYmplY3RzIG9uIGJvYXJkXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcEFycmF5Lmxlbmd0aDsgaW5kZXgrKykgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sb29wIHdpdGhpbiB0aGUgb2JqZWN0cyBjb29yZGluYXRlcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEFycmF5W2luZGV4XS5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykgXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Nvb3JkaW5hdGUgZm9yIHRoaXMgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZCA9IHNoaXBBcnJheVtpbmRleF0uY29vcmRpbmF0ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKChjb29yZFswXSA9PSBwb3NpdGlvblJvdykgJiYgKGNvb3JkWzFdID09IHBvc2l0aW9uQ29sKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2hpcEhpdCBpcyB0aGUgc2hpcCBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBIaXQgPSBzaGlwQXJyYXlbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYWtlIGhpdCBpbmRleCBwb3NpdGlvbiBvZiB0aGUgY29vcmRpbmF0ZXMgaW4gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jYWxsIHRoZSBoaXQgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgIHNoaXBIaXQuaGl0KGhpdEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXNJc0FIaXQgPSB0cnVlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgIGlmICghdGhpc0lzQUhpdCkge1xyXG4gICAgICAgICAgICAvL3RoaXMgaXMgYSBtaXNzLiByZWNvcmQgbWlzc2VkIGNvb3JkaW5hdGVzIHNvIHRoZXkgY2FuIGJlIHJlbmRlcmVkIGluIGZyb250RW5kLmpzXHJcbiAgICAgICAgICAgIG1pc3NlZFNob3RzLnB1c2goW3Bvc2l0aW9uUm93LCBwb3NpdGlvbkNvbF0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxyXG4gICAgZnVuY3Rpb24gY2hlY2tJZkFsbFNoaXBzU3VuaygpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jcmVhdGUgYm9vbFxyXG4gICAgICAgIGFsbFNoaXBzU3VuayA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vYXJyYXkgdG8gc3RvcmUgdHJ1ZS9mYWxzZSB2YWx1ZXMgaW50b1xyXG4gICAgICAgIGxldCBjaGVja0ZvclNpbmthZ2VBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICAvL3NoaXBBcnJheSBoYXMgbGlzdCBvZiBzaGlwIG9iamVjdHMsIGNoZWNrIGVhY2ggZm9yIGlmIHRoZXkgYXJlIHN1bmtcclxuICAgICAgICBzaGlwQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzU3VuayA9IGVsZW1lbnQuaXNTdW5rKClcclxuICAgICAgICAgICAgY2hlY2tGb3JTaW5rYWdlQXJyYXkucHVzaChpc1N1bmspXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2hlY2tGb3JTaW5rYWdlQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGFsbFNoaXBzU3VuayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY2hlY2sgZWFjaCB2YWx1ZSBvZiBzaGlwQXJyYXkuc3VuayBcclxuICAgICAgICAvL2lmIHRoZXkgYXJlIGFsbCBcclxuICAgICAgICByZXR1cm4gYWxsU2hpcHNTdW5rO1xyXG4gICAgfSAgICAgICBcclxuXHJcbnJldHVybiB7Ym9hcmQsIGFsbFNoaXBDb29yZHMsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgc2hpcEFycmF5LCBjaGVja0lmQWxsU2hpcHNTdW5rLCBtaXNzZWRTaG90cywgYW55U2hpcENsYXNofVxyXG59XHJcblxyXG5leHBvcnQge2dhbWVCb2FyZH07XHJcbiIsImltcG9ydCB7c2hpcEZhY3Rvcnl9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xyXG5pbXBvcnQge2dhbWVCb2FyZH0gZnJvbSAnLi9nYW1lQm9hcmQnO1xyXG5pbXBvcnQge3BsYXllcn0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9mcm9udEVuZCdcclxuXHJcbi8vY3JlYXRlIGJvYXJkc1xyXG5sZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcclxubGV0IGNvbXB1dGVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcclxuXHJcbi8vY3JlYXRlIHBsYXllcnNcclxubGV0IHBsYXllcjEgPSBwbGF5ZXIoXCJQbGF5ZXIxXCIsIGNvbXB1dGVyQm9hcmQpO1xyXG5sZXQgcGxheWVyMkNPTVAgPSBwbGF5ZXIoXCJQbGF5ZXIyQ09NUFwiLCBwbGF5ZXJCb2FyZCk7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2FtZVBsYXkoKXtcclxuXHJcbi8vY3JlYXRlIHBsYXllciBzaGlwc1xyXG5sZXQgcGxheWVyQmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KDQsICdiYXR0bGVzaGlwJyk7XHJcbmxldCBwbGF5ZXJQYXRyb2wgPSBzaGlwRmFjdG9yeSgyLCAncGF0cm9sJyk7XHJcbmxldCBwbGF5ZXJTdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgzLCAnc3VibWFyaW5lJyk7XHJcbmxldCBwbGF5ZXJEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSg0LCAnZGVzdHJveWVyJyk7XHJcbmxldCBwbGF5ZXJDYXJyaWVyID0gc2hpcEZhY3RvcnkoNSwgJ2NhcnJpZXInKTtcclxuXHJcbi8vY3JlYXRlIGNvbXB1dGVyIHNoaXBzXHJcbmxldCBjb21wdXRlckJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSg0LCAnYmF0dGxlc2hpcCcpO1xyXG5sZXQgY29tcHV0ZXJQYXRyb2wgPSBzaGlwRmFjdG9yeSgyLCAncGF0cm9sJyk7XHJcbmxldCBjb21wdXRlclN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KDMsICdzdWJtYXJpbmUnKTtcclxubGV0IGNvbXB1dGVyRGVzdHJveWVyID0gc2hpcEZhY3RvcnkoNCwgJ2Rlc3Ryb3llcicpO1xyXG5sZXQgY29tcHV0ZXJDYXJyaWVyID0gc2hpcEZhY3RvcnkoNSwgJ2NhcnJpZXInKTtcclxuXHJcbiAgICAvLyBwbGF5ZXJCb2FyZC5hbnlTaGlwQ2xhc2ggPSB0cnVlO1xyXG4gICAgLy8gICAgIHdoaWxlIChwbGF5ZXJCb2FyZC5hbnlTaGlwQ2xhc2gpIHtcclxuICAgIC8vICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJhdHRsZXNoaXAsICd2ZXJ0aWNhbCcpO1xyXG4gICAgLy8gICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyUGF0cm9sLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgLy8gICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyU3VibWFyaW5lLCAndmVydGljYWwnKTtcclxuICAgIC8vICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckRlc3Ryb3llciwgJ2hvcml6b250YWwnKTtcclxuICAgIC8vICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckNhcnJpZXIsICdob3Jpem9udGFsJyk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJhdHRsZXNoaXAsICd2ZXJ0aWNhbCcsIDMsMyApO1xyXG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJQYXRyb2wsICdob3Jpem9udGFsJywgMCwzICk7XHJcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclN1Ym1hcmluZSwgJ3ZlcnRpY2FsJywgMyw2ICk7XHJcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckRlc3Ryb3llciwgJ2hvcml6b250YWwnLCA4LDEpO1xyXG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJDYXJyaWVyLCAnaG9yaXpvbnRhbCcsIDksMSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGRvIHtcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJCYXR0bGVzaGlwLCAndmVydGljYWwnLCAzLDMgKTtcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJQYXRyb2wsICdob3Jpem9udGFsJywgMCwzICk7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyU3VibWFyaW5lLCAndmVydGljYWwnLCAzLDYgKTtcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJEZXN0cm95ZXIsICdob3Jpem9udGFsJywgOCwxKTtcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJDYXJyaWVyLCAnaG9yaXpvbnRhbCcsIDksMSApO1xyXG4gICAgICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlckJhdHRsZXNoaXAsICd2ZXJ0aWNhbCcpO1xyXG4gICAgICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlclBhdHJvbCwgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJTdWJtYXJpbmUsICd2ZXJ0aWNhbCcpO1xyXG4gICAgICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlckRlc3Ryb3llciwgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJDYXJyaWVyLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgIC8vIH0gd2hpbGUgKGNvbXB1dGVyQm9hcmQuYW55U2hpcENsYXNoKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbmNyZWF0ZUJvYXJkcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5ZXJUdXJuKHJvdywgY29sKVxyXG57XHJcbiAgICBwbGF5ZXIxLnRha2VUdXJuKHJvdywgY29sKTsgXHJcblxyXG4gICAgLy9pbW1lZGlhdGVseSBhZnRlciwgdGhlIGNvbXB1dGVyIHRha2VzIGEgdHVybiAtIGZvciB0ZXN0aW5nIGFueXdheVxyXG4gICAgbGV0IGNvbDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICBsZXQgcm93MiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIHBsYXllcjJDT01QLnRha2VUdXJuKGNvbDIsIHJvdzIpOyAgXHJcblxyXG5cclxuICAgIC8vY2hlY2sgaWYgYWxsIHNoaXBzIHN1bmtcclxuICAgIGxldCBnYW1lb3ZlclBsYXllciA9IHBsYXllckJvYXJkLmNoZWNrSWZBbGxTaGlwc1N1bmsoKTtcclxuICAgIGxldCBnYW1lb3ZlckNvbXB1dGVyID0gY29tcHV0ZXJCb2FyZC5jaGVja0lmQWxsU2hpcHNTdW5rKClcclxuXHJcbiAgICBpZiAoZ2FtZW92ZXJQbGF5ZXIpIHtcclxuICAgICAgICBhbGVydChcIkNvbXB1dGVyIHdpbnNcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2FtZW92ZXJDb21wdXRlcikge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxheWVyIHdpbnNcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2FtZVBsYXksIHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCBwbGF5ZXJUdXJufTtcclxuIiwiXHJcbmNvbnN0IHsgcmVjZWl2ZUF0dGFjayB9ID0gcmVxdWlyZShcIi4vZ2FtZUJvYXJkXCIpO1xyXG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9mcm9udEVuZCdcclxuXHJcbmNvbnN0IHBsYXllciA9IChuYW1lLCBlbmVteUdhbWVib2FyZCkgPT5cclxueyAgIFxyXG4gICAgLy9sYWJlbCB3aXRoIGEgbmFtZVxyXG4gICAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xyXG4gICAgbGV0IGdhbWVCb2FyZEF0dGFja0JvYXJkID0gZW5lbXlHYW1lYm9hcmQ7XHJcbiAgICBsZXQgdHVybiA9IGZhbHNlO1xyXG4gICAgbGV0IGNvbXB1dGVyVHVybnNUYWtlbiA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKGFSb3csIGFDb2wpe1xyXG4gICAgaWYgKHBsYXllck5hbWUgPT0gJ2NvbXB1dGVyJykge1xyXG5cclxuICAgICAgICAvL25lZWQgdG8gcmFuZG9taXNlIHBsYXlzXHJcbiAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIC8vYm9vbCBmb3IgaWYgdGhlIGd1ZXNzIGhhcyBiZWVuIHRha2VuIGFscmVhZHkgaW4gZ2FtZVxyXG4gICAgICAgIGxldCBndWVzc1Rha2VuID0gZmFsc2U7XHJcbiAgICAgICAgLy9jaGVjayB0aGUgcHJldmlvdXMgZ3Vlc3NlcywgaWYgaXQgaGFzIGJlZW4gdGFrZW4gZ28gdG8gd2hpbGUgbG9vcFxyXG4gICAgICAgIGNvbXB1dGVyVHVybnNUYWtlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFswXSA9PSByb3cgJiYgZWxlbWVudFsxXSA9PSBjb2wpIHtcclxuICAgICAgICAgICAgICAgIGd1ZXNzVGFrZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9sb29wIHRocm91Z2ggdW50aWwgYSBndWVzcyBpc250IHRha2VuXHJcbiAgICAgICAgd2hpbGUgKGd1ZXNzVGFrZW4pIHtcclxuICAgICAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyVHVybnNUYWtlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbMF0gPT0gcm93ICYmIGVsZW1lbnRbMV0gPT0gY29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3NUYWtlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL29uY2UgdGhlIGNvb3JkaW5hdGVzIGFyZSB2YWxpZCwgcHVzaCB0aGVtIHRvIHRoZSBndWVzc2VzIHRha2VuIGFycmF5IGZvciB2YWxpZGF0aW9uXHJcbiAgICAgICAgY29tcHV0ZXJUdXJuc1Rha2VuLnB1c2goW3JvdywgY29sXSk7XHJcblxyXG4gICAgICAgIC8vdGhlIGJvYXJkIHRvIGF0dGFjayBpcyB0aGUgcGxheWVycyBib2FyZFxyXG4gICAgICAgIGdhbWVCb2FyZEF0dGFja0JvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvL25vdCBhIGNvbXB1dGVyXHJcbiAgICAgICAgZ2FtZUJvYXJkQXR0YWNrQm9hcmQucmVjZWl2ZUF0dGFjayhhUm93LCBhQ29sKVxyXG4gICAgICAgIC8vdGhlIGJvYXJkIHRvIGF0dGFjayBpcyB0aGUgY29tcHV0ZXJzIGJvYXJkICAgICAgICBcclxuICAgICAgICBjcmVhdGVCb2FyZHMoKTtcclxuICAgIH1cclxufVxyXG5yZXR1cm57dGFrZVR1cm59XHJcblxyXG59XHJcblxyXG5leHBvcnQge3BsYXllcn07IiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBuYW1lKSA9PntcclxuICAvL2RlZmluZSBsZW5ndGggb2Ygc2hpcFxyXG4gIGxldCBTaGlwTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIGxldCBTaGlwTmFtZSA9IG5hbWU7XHJcbiAgLy9jcmVhdGUgYW4gYXJyYXkgb2YgdGhlIGxlbmd0aCwgcmVwcmVzZW50aW5nIGEgc2hpcFxyXG4gIGxldCBsZW5ndGhBcnJheSA9IFtdO1xyXG4gIGxlbmd0aEFycmF5ID0gWy4uLkFycmF5KFNoaXBMZW5ndGgpXS5tYXAoeCA9PiAxKTsgICBcclxuICAvL2FycmF5IGZvciBjb29yZGluYXRlcyB0byBiZSBoZWxkXHJcbiAgbGV0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgLy9kZWZpbmUgaGl0IGZ1bmN0aW9uXHJcbiAgZnVuY3Rpb24gaGl0KG51bSlcclxuICB7XHJcbiAgICAvL21hcmsgbnVtIGFzIGhpdFxyXG4gICAgbGVuZ3RoQXJyYXlbbnVtXSA9IDA7ICBcclxuICB9ICBcclxuICAvL2RldGVybWluZSBpZiBzdW5rXHJcbiAgZnVuY3Rpb24gaXNTdW5rKClcclxuICB7XHJcbiAgICBsZXQgc3VuayA9IHRydWU7XHJcbiAgICBsZW5ndGhBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudCA9PSAxKSB7XHJcbiAgICAgICAgc3VuayA9IGZhbHNlO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdW5rO1xyXG4gIH1cclxuICByZXR1cm57U2hpcExlbmd0aCwgU2hpcE5hbWUsIGxlbmd0aEFycmF5LCBoaXQsIGlzU3VuaywgY29vcmRpbmF0ZXN9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hpcEZhY3Rvcnl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGdhbWVQbGF5IH0gZnJvbSAnLi9kZXBlbmRlbmNpZXMvZ2FtZUxvb3AnO1xyXG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9kZXBlbmRlbmNpZXMvZnJvbnRFbmQnXHJcblxyXG5cclxubGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnV0dG9uJyk7XHJcbnN0YXJ0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBnYW1lUGxheSgpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydEJ1dHRvbicpLm9uY2xpY2sgPSAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKTtcclxuLy8gc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVQbGF5KVxyXG4vL2NhbGwgdGhlIGdhbWUgbG9vcCBmdW5jdGlvblxyXG5jcmVhdGVCb2FyZHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=