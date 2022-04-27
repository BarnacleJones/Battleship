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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    display: grid;\n    text-align: center;\n    grid-template-columns: 1;\n    grid-template-rows: 1fr 4fr .25fr;\n    margin: 0;\n    background-color: rgb(75, 75, 142);\n}\n\nheader{\n    grid-area: 1 / 1 / span 1  /span 1;\n}\n\nmain{\n    grid-area: 2 / 1 / span 1  /span 1;\n    min-height: max-content;\n    display: flex;\n    /* align-items: center; */\n}\n\nfooter{\n    grid-area: 3 / 1 / span 0  /span 0;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(71, 68, 68);\n  color: white;\n  text-align: center;\n}\n\n#playerBoard, #computerBoard{\n    display: flex; \n    flex-grow: 1;\n    align-items:stretch;\n}\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n    width: 2em;\n    height: 2em;    \n}\n.playerCellsDiv, .computerCellsDiv{\n    border: 1px solid black;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,iCAAiC;IACjC,SAAS;IACT,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;IAClC,uBAAuB;IACvB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,kCAAkC;EACpC,eAAe;EACf,OAAO;EACP,SAAS;EACT,WAAW;EACX,iCAAiC;EACjC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,uBAAuB;AAC3B","sourcesContent":["body{\n    display: grid;\n    text-align: center;\n    grid-template-columns: 1;\n    grid-template-rows: 1fr 4fr .25fr;\n    margin: 0;\n    background-color: rgb(75, 75, 142);\n}\n\nheader{\n    grid-area: 1 / 1 / span 1  /span 1;\n}\n\nmain{\n    grid-area: 2 / 1 / span 1  /span 1;\n    min-height: max-content;\n    display: flex;\n    /* align-items: center; */\n}\n\nfooter{\n    grid-area: 3 / 1 / span 0  /span 0;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(71, 68, 68);\n  color: white;\n  text-align: center;\n}\n\n#playerBoard, #computerBoard{\n    display: flex; \n    flex-grow: 1;\n    align-items:stretch;\n}\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n    width: 2em;\n    height: 2em;    \n}\n.playerCellsDiv, .computerCellsDiv{\n    border: 1px solid black;\n}\n\n"],"sourceRoot":""}]);
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
 

function createBoards(){

    let playersBoard = document.getElementById('playerBoard');
    let computersBoard = document.getElementById('computerBoard');

    // //create a grid 10x10 for player  and computer
    //set the id of each box as the coordinates
    //access those coordinates for ship placement

    //player board
    for (let index = 0; index < _gameLoop__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board.length; index++) {
        //element is each row
        const element = _gameLoop__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[index];
        //create a div for the row
        let col = document.createElement('div');
        // row.className = 'row';
        col.setAttribute('class', 'playerColDiv')            
        //create the columns
        for (let i = 0; i < element.length; i++) {
            // const element2 = element[index];
            let column = document.createElement("div"); 
            column.setAttribute('id', `[ ${i}, ${element[index]} ]`);
            column.setAttribute('class', 'playerCellsDiv');
            column.innerText = "";
            col.appendChild(column);
        }
        //append to dom
        playersBoard.appendChild(col);            
    }

    //computer board
    for (let index = 0; index < _gameLoop__WEBPACK_IMPORTED_MODULE_0__.computerBoard.board.length; index++) {
        //element is each row
        const element = _gameLoop__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[index];
        //create a div for the row
        let row = document.createElement('div');
        // row.className = 'row';
        row.setAttribute('class', 'computerRowDiv')            
        //create the columns
        for (let i = 0; i < element.length; i++) {
            // const element2 = element[index];
            let column = document.createElement("div"); 
            // column.setAttribute('id', `[ ${i}, ${element[index]} ]`);
            column.setAttribute('class', 'computerCellsDiv');
            column.innerText = "";
            row.appendChild(column);
        }
        //append to dom
        computersBoard.appendChild(row);            
    } 

    //render each ship on the players board
    _gameLoop__WEBPACK_IMPORTED_MODULE_0__.playerBoard.shipArray.forEach(element => {        
        // let square = document.getElementById(element);
        //get the ships coordinates
        let coordArray = element.coordinates;
        //go through each coordinate, set the DOM value (same as coords) to red as the ship is placed there
        coordArray.forEach(item => {            
            document.getElementById(`[ ${item[0]}, ${item[1]} ]`).style.backgroundColor = 'red';
        });
    });

    //render missed shots on the players board
    _gameLoop__WEBPACK_IMPORTED_MODULE_0__.playerBoard.missedShots.forEach(element => {
        let id = `[ ${element[0]}, ${element[1]} ]`;
        document.getElementById(id).style.backgroundColor = 'grey';
    });

    //render hit shots on the players board
    let square;
    //go through each ship on the board
    _gameLoop__WEBPACK_IMPORTED_MODULE_0__.playerBoard.shipArray.forEach(element => {
        for (let index = 0; index < element.lengthArray.length; index++) {
            //go through the 1/0 values on the ships length (0 means hit)
            const value = element.lengthArray[index];
            if (value == 0) 
            {
                //assign coordinate values to 'square'
                square = element.coordinates[index];
            }
        }
    });
    document.getElementById(`[ ${square[0]}, ${square[1]} ]`).style.backgroundColor = 'green';

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

    //function to place the ship on the gameboard
    function placeShip(ShipName, alignment, positionRow, positionCol)
    {
        //if the alignment is horizontal and the length of the alignment + ship length is less than 10 (length of board)
        if (alignment == 'horizontal' && (positionCol + ShipName.ShipLength < 10) ) {  
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
                // board[positionRow][positionCol + index] = ShipName; 
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
                }     
            } 
            shipArray.push(ShipName);
            ShipName.coordinates.forEach(element => {allShipCoords.push(element);});            
        }
        //validation for if ships are not placed in the right spot
        else{alert('Bad ship placement')}
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

return {board, placeShip, receiveAttack, shipArray, checkIfAllShipsSunk, missedShots}
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
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/dependencies/shipFactory.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/dependencies/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/dependencies/player.js");
/* harmony import */ var _frontEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontEnd */ "./src/dependencies/frontEnd.js");






//create boards
let playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
let computerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
    
function gamePlay(){

    //create players
    let player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)("Player1", computerBoard);
    let player2COMP = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)("Player2COMP", playerBoard);

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

    //place player ships
    playerBoard.placeShip(playerBattleship, 'vertical', 3,3 );
    playerBoard.placeShip(playerPatrol, 'horizontal', 0,3 );
    playerBoard.placeShip(playerSubmarine, 'vertical', 3,6 );
    playerBoard.placeShip(playerDestroyer, 'horizontal', 8,1);
    playerBoard.placeShip(playerCarrier, 'horizontal', 9,1 );

    playerBoard.receiveAttack(7,3);
    // let gameOver = playerBoard.checkIfAllShipsSunk();
    // while (!gameOver) {
        (0,_frontEnd__WEBPACK_IMPORTED_MODULE_3__.createBoards)();
        // gameOver = playerBoard.checkIfAllShipsSunk();
    // }
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
    }
}

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



//call the game loop function
(0,_dependencies_gameLoop__WEBPACK_IMPORTED_MODULE_1__.gamePlay)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDs7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDOEI7O0FBRW5EO0FBQ0EsZ0VBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL2Zyb250RW5kLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAuMjVmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCAxNDIpO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyBzcGFuIDEgIC9zcGFuIDE7XFxufVxcblxcbm1haW57XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyBzcGFuIDEgIC9zcGFuIDE7XFxuICAgIG1pbi1oZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyBzcGFuIDAgIC9zcGFuIDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDY4LCA2OCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCwgI2NvbXB1dGVyQm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XFxufVxcbi5wbGF5ZXJDZWxsc0RpdiwgLnBsYXllclJvd0RpdiwgLmNvbXB1dGVyUm93RGl2IC5jb21wdXRlckNlbGxzRGl2eyAgICBcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07ICAgIFxcbn1cXG4ucGxheWVyQ2VsbHNEaXYsIC5jb21wdXRlckNlbGxzRGl2e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1Qsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0VBQ3BDLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAuMjVmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCAxNDIpO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyBzcGFuIDEgIC9zcGFuIDE7XFxufVxcblxcbm1haW57XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyBzcGFuIDEgIC9zcGFuIDE7XFxuICAgIG1pbi1oZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyBzcGFuIDAgIC9zcGFuIDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDY4LCA2OCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCwgI2NvbXB1dGVyQm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XFxufVxcbi5wbGF5ZXJDZWxsc0RpdiwgLnBsYXllclJvd0RpdiwgLmNvbXB1dGVyUm93RGl2IC5jb21wdXRlckNlbGxzRGl2eyAgICBcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07ICAgIFxcbn1cXG4ucGxheWVyQ2VsbHNEaXYsIC5jb21wdXRlckNlbGxzRGl2e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2dhbWVQbGF5LCBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZH0gZnJvbSAnLi9nYW1lTG9vcCc7IFxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZHMoKXtcblxuICAgIGxldCBwbGF5ZXJzQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKTtcbiAgICBsZXQgY29tcHV0ZXJzQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJCb2FyZCcpO1xuXG4gICAgLy8gLy9jcmVhdGUgYSBncmlkIDEweDEwIGZvciBwbGF5ZXIgIGFuZCBjb21wdXRlclxuICAgIC8vc2V0IHRoZSBpZCBvZiBlYWNoIGJveCBhcyB0aGUgY29vcmRpbmF0ZXNcbiAgICAvL2FjY2VzcyB0aG9zZSBjb29yZGluYXRlcyBmb3Igc2hpcCBwbGFjZW1lbnRcblxuICAgIC8vcGxheWVyIGJvYXJkXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBsYXllckJvYXJkLmJvYXJkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAvL2VsZW1lbnQgaXMgZWFjaCByb3dcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHBsYXllckJvYXJkLmJvYXJkW2luZGV4XTtcbiAgICAgICAgLy9jcmVhdGUgYSBkaXYgZm9yIHRoZSByb3dcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BsYXllckNvbERpdicpICAgICAgICAgICAgXG4gICAgICAgIC8vY3JlYXRlIHRoZSBjb2x1bW5zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc3QgZWxlbWVudDIgPSBlbGVtZW50W2luZGV4XTtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAgICAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYFsgJHtpfSwgJHtlbGVtZW50W2luZGV4XX0gXWApO1xuICAgICAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGxheWVyQ2VsbHNEaXYnKTtcbiAgICAgICAgICAgIGNvbHVtbi5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICAgICAgY29sLmFwcGVuZENoaWxkKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgLy9hcHBlbmQgdG8gZG9tXG4gICAgICAgIHBsYXllcnNCb2FyZC5hcHBlbmRDaGlsZChjb2wpOyAgICAgICAgICAgIFxuICAgIH1cblxuICAgIC8vY29tcHV0ZXIgYm9hcmRcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZXJCb2FyZC5ib2FyZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgLy9lbGVtZW50IGlzIGVhY2ggcm93XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwbGF5ZXJCb2FyZC5ib2FyZFtpbmRleF07XG4gICAgICAgIC8vY3JlYXRlIGEgZGl2IGZvciB0aGUgcm93XG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21wdXRlclJvd0RpdicpICAgICAgICAgICAgXG4gICAgICAgIC8vY3JlYXRlIHRoZSBjb2x1bW5zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc3QgZWxlbWVudDIgPSBlbGVtZW50W2luZGV4XTtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAgICAgICAgIC8vIGNvbHVtbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYFsgJHtpfSwgJHtlbGVtZW50W2luZGV4XX0gXWApO1xuICAgICAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tcHV0ZXJDZWxsc0RpdicpO1xuICAgICAgICAgICAgY29sdW1uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICAvL2FwcGVuZCB0byBkb21cbiAgICAgICAgY29tcHV0ZXJzQm9hcmQuYXBwZW5kQ2hpbGQocm93KTsgICAgICAgICAgICBcbiAgICB9IFxuXG4gICAgLy9yZW5kZXIgZWFjaCBzaGlwIG9uIHRoZSBwbGF5ZXJzIGJvYXJkXG4gICAgcGxheWVyQm9hcmQuc2hpcEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7ICAgICAgICBcbiAgICAgICAgLy8gbGV0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuICAgICAgICAvL2dldCB0aGUgc2hpcHMgY29vcmRpbmF0ZXNcbiAgICAgICAgbGV0IGNvb3JkQXJyYXkgPSBlbGVtZW50LmNvb3JkaW5hdGVzO1xuICAgICAgICAvL2dvIHRocm91Z2ggZWFjaCBjb29yZGluYXRlLCBzZXQgdGhlIERPTSB2YWx1ZSAoc2FtZSBhcyBjb29yZHMpIHRvIHJlZCBhcyB0aGUgc2hpcCBpcyBwbGFjZWQgdGhlcmVcbiAgICAgICAgY29vcmRBcnJheS5mb3JFYWNoKGl0ZW0gPT4geyAgICAgICAgICAgIFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFsgJHtpdGVtWzBdfSwgJHtpdGVtWzFdfSBdYCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy9yZW5kZXIgbWlzc2VkIHNob3RzIG9uIHRoZSBwbGF5ZXJzIGJvYXJkXG4gICAgcGxheWVyQm9hcmQubWlzc2VkU2hvdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGlkID0gYFsgJHtlbGVtZW50WzBdfSwgJHtlbGVtZW50WzFdfSBdYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmV5JztcbiAgICB9KTtcblxuICAgIC8vcmVuZGVyIGhpdCBzaG90cyBvbiB0aGUgcGxheWVycyBib2FyZFxuICAgIGxldCBzcXVhcmU7XG4gICAgLy9nbyB0aHJvdWdoIGVhY2ggc2hpcCBvbiB0aGUgYm9hcmRcbiAgICBwbGF5ZXJCb2FyZC5zaGlwQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQubGVuZ3RoQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvL2dvIHRocm91Z2ggdGhlIDEvMCB2YWx1ZXMgb24gdGhlIHNoaXBzIGxlbmd0aCAoMCBtZWFucyBoaXQpXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQubGVuZ3RoQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IDApIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vYXNzaWduIGNvb3JkaW5hdGUgdmFsdWVzIHRvICdzcXVhcmUnXG4gICAgICAgICAgICAgICAgc3F1YXJlID0gZWxlbWVudC5jb29yZGluYXRlc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyAke3NxdWFyZVswXX0sICR7c3F1YXJlWzFdfSBdYCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcblxuICAgIH1cbmV4cG9ydCB7Y3JlYXRlQm9hcmRzfTsiLCIvL2dhbWVib2FyZCBmYWN0b3J5XG5jb25zdCBnYW1lQm9hcmQgPSAoKSA9PntcbiAgICAvLzJkIGFycmF5IDEweDEwXG4gICAgLy9hY2Nlc3MgdmFsdWVzIGxpa2UgYSBncmlkIGJvYXJkWzFdWzFdIHdpbGwgYmUgMVxuICAgIGxldCBib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCh4ID0+IFswLDEsMiwzLDQsNSw2LDcsOCw5XSlcbiAgICAvL2NyZWF0ZSBhbiBhcnJheSBvZiBzaGlwIG5hbWVzLCBzbyBjYW4gZGV0ZXJtaW5lIHdoaWNoIG9uZSBpcyBoaXRcbiAgICBsZXQgc2hpcEFycmF5ID0gW11cbiAgICAvL2Jvb2wgdmFsdWUgZm9yIGRldGVybWluaW5nIGlmIGFsbCBzaGlwcyBvbiBib2FyZCBhcmUgc3Vua1xuICAgIGxldCBhbGxTaGlwc1N1bmsgPSBmYWxzZTtcbiAgICAvL2FycmF5IGhvbGRpbmcgYWxsIHRoZSBzaGlwIGNvb3JkaW5hdGVzXG4gICAgbGV0IGFsbFNoaXBDb29yZHMgPSBbXTtcbiAgICAvL2FycmF5IGhvbGRpbmcgYWxsIHRoZSBtaXNzZWQgc2hvdHNcbiAgICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcblxuICAgIC8vZnVuY3Rpb24gdG8gcGxhY2UgdGhlIHNoaXAgb24gdGhlIGdhbWVib2FyZFxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChTaGlwTmFtZSwgYWxpZ25tZW50LCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAge1xuICAgICAgICAvL2lmIHRoZSBhbGlnbm1lbnQgaXMgaG9yaXpvbnRhbCBhbmQgdGhlIGxlbmd0aCBvZiB0aGUgYWxpZ25tZW50ICsgc2hpcCBsZW5ndGggaXMgbGVzcyB0aGFuIDEwIChsZW5ndGggb2YgYm9hcmQpXG4gICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnICYmIChwb3NpdGlvbkNvbCArIFNoaXBOYW1lLlNoaXBMZW5ndGggPCAxMCkgKSB7ICBcbiAgICAgICAgICAgIC8vZmlyc3QgY2hlY2sgdGhlcmUgYXJlIG5vIGNsYXNoZXMgd2l0aCBzaGlwcyBhbHJlYWR5IG9uIGJvYXJkICAgICAgIFxuICAgICAgICAgICAgbGV0IHNoaXBDbGFzaCA9IGZhbHNlO1xuICAgICAgICAgICAgYWxsU2hpcENvb3Jkcy5mb3JFYWNoKGVsZW1lbnQgPT4gXG4gICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3NpdGlvblJvdyA9PSBlbGVtZW50WzBdKSAmJiAocG9zaXRpb25Db2wgPT0gZWxlbWVudFsxXSkpIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQ2xhc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFNoaXBOYW1lLlNoaXBMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcENsYXNoKSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NoaXAgb3ZlcmxhcHMgd2l0aCBhbm90aGVyJylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdGhlIHNoaXBzIGNvb3JkaW5hdGUgYXJyYXlcbiAgICAgICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5wdXNoKFtwb3NpdGlvblJvdywocG9zaXRpb25Db2wgKyBpbmRleCldKSBcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBnYW1lYm9hcmQgYXJyYXlcbiAgICAgICAgICAgICAgICAvLyBib2FyZFtwb3NpdGlvblJvd11bcG9zaXRpb25Db2wgKyBpbmRleF0gPSBTaGlwTmFtZTsgXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3RoZW4gcHVzaCB0aGlzIG9iamVjdCB0byBzaGlwQXJyYXkgYXMgYSByZWNvcmQgb2Ygc2hpcHMgb24gYm9hcmRcbiAgICAgICAgICAgIHNoaXBBcnJheS5wdXNoKFNoaXBOYW1lKTtcbiAgICAgICAgICAgIC8vdGhlbiBwdXNoIGFsbCBjb29yZGluYXRlcyBvZiB0aGlzIHNoaXAgdG8gYWxsU2hpcENvb3JkcyAgICAgIFxuICAgICAgICAgICAgU2hpcE5hbWUuY29vcmRpbmF0ZXMuZm9yRWFjaChlbGVtZW50ID0+IHthbGxTaGlwQ29vcmRzLnB1c2goZWxlbWVudCk7fSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB0aGUgYWxpZ25tZW50IGlzIHZlcnRpY2FsIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBhbGlnbm1lbnQgKyBzaGlwIGxlbmd0aCBpcyBsZXNzIHRoYW4gMTAgKGxlbmd0aCBvZiBib2FyZClcbiAgICAgICAgZWxzZSBpZiAoYWxpZ25tZW50ID09ICd2ZXJ0aWNhbCcgJiYgKHBvc2l0aW9uUm93ICsgU2hpcE5hbWUuU2hpcExlbmd0aCA8IDEwKSkge1xuICAgICAgICAgICAgLy9maXJzdCBjaGVjayB0aGVyZSBhcmUgbm8gY2xhc2hlcyB3aXRoIHNoaXBzIGFscmVhZHkgb24gYm9hcmQgICAgICAgXG4gICAgICAgICAgICBsZXQgc2hpcENsYXNoID0gZmFsc2U7XG4gICAgICAgICAgICBhbGxTaGlwQ29vcmRzLmZvckVhY2goZWxlbWVudCA9PiBcbiAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICBpZiAoKHBvc2l0aW9uUm93ID09IGVsZW1lbnRbMF0pICYmIChwb3NpdGlvbkNvbCA9PSBlbGVtZW50WzFdKSkgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBDbGFzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgU2hpcE5hbWUuU2hpcExlbmd0aDsgaW5kZXgrKykgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDbGFzaCkgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTaGlwIG92ZXJsYXBzIHdpdGggYW5vdGhlcicpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBzaGlwcyBjb29yZGluYXRlIGFycmF5XG4gICAgICAgICAgICAgICAgU2hpcE5hbWUuY29vcmRpbmF0ZXMucHVzaChbKHBvc2l0aW9uUm93ICsgaW5kZXgpLHBvc2l0aW9uQ29sXSk7XG4gICAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goU2hpcE5hbWUpO1xuICAgICAgICAgICAgU2hpcE5hbWUuY29vcmRpbmF0ZXMuZm9yRWFjaChlbGVtZW50ID0+IHthbGxTaGlwQ29vcmRzLnB1c2goZWxlbWVudCk7fSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy92YWxpZGF0aW9uIGZvciBpZiBzaGlwcyBhcmUgbm90IHBsYWNlZCBpbiB0aGUgcmlnaHQgc3BvdFxuICAgICAgICBlbHNle2FsZXJ0KCdCYWQgc2hpcCBwbGFjZW1lbnQnKX1cbiAgICB9XG4gICAgXG4gICAgLy9yZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHRha2VzIGEgcGFpclxuICAgIC8vIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcFxuICAgIC8vIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgXG4gICAgLy9vciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAgeyAgICAgICAgICAgICAgIFxuICAgICAgICAvL2Jvb2wgdmFsdWUgaWYgdGhlIGF0dGFjayBjb29yZGluYXRlcyBoaXQgYSBzaGlwXG4gICAgICAgIGxldCB0aGlzSXNBSGl0ID0gZmFsc2U7XG4gICAgICAgIC8vdmFsdWUgZm9yIGhpdCBzaGlwXG4gICAgICAgIGxldCBzaGlwSGl0O1xuICAgICAgICAvL3ZhbHVlIGZvciBpbmRleCBvZiB0aGUgc2hpcCB0aGF0IGhhcyBiZWVuIGhpdFxuICAgICAgICBsZXQgaGl0SW5kZXg7XG4gICAgICAgIGFsbFNoaXBDb29yZHMuZm9yRWFjaChlbGVtZW50ID0+IFxuICAgICAgICB7ICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2VhY2ggb2JqZWN0IGluIHRoZSBzaGlwIGFycmF5IGhhcyBhcnJheSBvZiBjb29yZHNcbiAgICAgICAgICAgIGlmICggKHBvc2l0aW9uUm93ID09IGVsZW1lbnRbMF0pICYmIChwb3NpdGlvbkNvbCA9PSBlbGVtZW50WzFdKSkgXG4gICAgICAgICAgICB7ICAgLy90aGlzIGlzIGEgaGl0IC0gc2VuZCBoaXQgdG8gY29ycmVjdCBzaGlwICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2RldGVybWluZSB3aGljaCBzaGlwIHdhcyBoaXQgYW5kIHdoZXJlXG4gICAgICAgICAgICAgICAgLy9sb29wIHRocm91Z2ggYWxsIHNoaXAgb2JqZWN0cyBvbiBib2FyZFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwQXJyYXkubGVuZ3RoOyBpbmRleCsrKSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vbG9vcCB3aXRoaW4gdGhlIG9iamVjdHMgY29vcmRpbmF0ZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQXJyYXlbaW5kZXhdLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb29yZGluYXRlIGZvciB0aGlzIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gc2hpcEFycmF5W2luZGV4XS5jb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKChjb29yZFswXSA9PSBwb3NpdGlvblJvdykgJiYgKGNvb3JkWzFdID09IHBvc2l0aW9uQ29sKSApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zaGlwSGl0IGlzIHRoZSBzaGlwIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBIaXQgPSBzaGlwQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFrZSBoaXQgaW5kZXggcG9zaXRpb24gb2YgdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jYWxsIHRoZSBoaXQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBzaGlwSGl0LmhpdChoaXRJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpc0lzQUhpdCA9IHRydWU7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH0pOyAgICBcbiAgICAgICAgaWYgKCF0aGlzSXNBSGl0KSB7XG4gICAgICAgICAgICAvL3RoaXMgaXMgYSBtaXNzLiByZWNvcmQgbWlzc2VkIGNvb3JkaW5hdGVzIHNvIHRoZXkgY2FuIGJlIHJlbmRlcmVkIGluIGZyb250RW5kLmpzXG4gICAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKFtwb3NpdGlvblJvdywgcG9zaXRpb25Db2xdKTtcbiAgICAgICAgfSBcbiAgICB9XG5cblxuICAgIC8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuICAgIGZ1bmN0aW9uIGNoZWNrSWZBbGxTaGlwc1N1bmsoKVxuICAgIHtcbiAgICAgICAgLy9jcmVhdGUgYm9vbFxuICAgICAgICBhbGxTaGlwc1N1bmsgPSB0cnVlO1xuXG4gICAgICAgIC8vYXJyYXkgdG8gc3RvcmUgdHJ1ZS9mYWxzZSB2YWx1ZXMgaW50b1xuICAgICAgICBsZXQgY2hlY2tGb3JTaW5rYWdlQXJyYXkgPSBbXTtcblxuICAgICAgICAvL3NoaXBBcnJheSBoYXMgbGlzdCBvZiBzaGlwIG9iamVjdHMsIGNoZWNrIGVhY2ggZm9yIGlmIHRoZXkgYXJlIHN1bmtcbiAgICAgICAgc2hpcEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgaXNTdW5rID0gZWxlbWVudC5pc1N1bmsoKVxuICAgICAgICAgICAgY2hlY2tGb3JTaW5rYWdlQXJyYXkucHVzaChpc1N1bmspXG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja0ZvclNpbmthZ2VBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBhbGxTaGlwc1N1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jaGVjayBlYWNoIHZhbHVlIG9mIHNoaXBBcnJheS5zdW5rIFxuICAgICAgICAvL2lmIHRoZXkgYXJlIGFsbCBcbiAgICAgICAgcmV0dXJuIGFsbFNoaXBzU3VuaztcbiAgICB9ICAgICAgIFxuXG5yZXR1cm4ge2JvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHNoaXBBcnJheSwgY2hlY2tJZkFsbFNoaXBzU3VuaywgbWlzc2VkU2hvdHN9XG59XG5cbmV4cG9ydCB7Z2FtZUJvYXJkfTtcbiIsImltcG9ydCB7c2hpcEZhY3Rvcnl9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuaW1wb3J0IHtnYW1lQm9hcmR9IGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCB7cGxheWVyfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9mcm9udEVuZCdcblxuXG4vL2NyZWF0ZSBib2FyZHNcbmxldCBwbGF5ZXJCb2FyZCA9IGdhbWVCb2FyZCgpO1xubGV0IGNvbXB1dGVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgICBcbmZ1bmN0aW9uIGdhbWVQbGF5KCl7XG5cbiAgICAvL2NyZWF0ZSBwbGF5ZXJzXG4gICAgbGV0IHBsYXllcjEgPSBwbGF5ZXIoXCJQbGF5ZXIxXCIsIGNvbXB1dGVyQm9hcmQpO1xuICAgIGxldCBwbGF5ZXIyQ09NUCA9IHBsYXllcihcIlBsYXllcjJDT01QXCIsIHBsYXllckJvYXJkKTtcblxuICAgIC8vY3JlYXRlIHBsYXllciBzaGlwc1xuICAgIGxldCBwbGF5ZXJCYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgICBsZXQgcGxheWVyUGF0cm9sID0gc2hpcEZhY3RvcnkoMiwgJ3BhdHJvbCcpO1xuICAgIGxldCBwbGF5ZXJTdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgzLCAnc3VibWFyaW5lJyk7XG4gICAgbGV0IHBsYXllckRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KDQsICdkZXN0cm95ZXInKTtcbiAgICBsZXQgcGxheWVyQ2FycmllciA9IHNoaXBGYWN0b3J5KDUsICdjYXJyaWVyJyk7XG5cbiAgICAvL2NyZWF0ZSBjb21wdXRlciBzaGlwc1xuICAgIGxldCBjb21wdXRlckJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSg0LCAnYmF0dGxlc2hpcCcpO1xuICAgIGxldCBjb21wdXRlclBhdHJvbCA9IHNoaXBGYWN0b3J5KDIsICdwYXRyb2wnKTtcbiAgICBsZXQgY29tcHV0ZXJTdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgzLCAnc3VibWFyaW5lJyk7XG4gICAgbGV0IGNvbXB1dGVyRGVzdHJveWVyID0gc2hpcEZhY3RvcnkoNCwgJ2Rlc3Ryb3llcicpO1xuICAgIGxldCBjb21wdXRlckNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1LCAnY2FycmllcicpO1xuXG4gICAgLy9wbGFjZSBwbGF5ZXIgc2hpcHNcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQmF0dGxlc2hpcCwgJ3ZlcnRpY2FsJywgMywzICk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclBhdHJvbCwgJ2hvcml6b250YWwnLCAwLDMgKTtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyU3VibWFyaW5lLCAndmVydGljYWwnLCAzLDYgKTtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyRGVzdHJveWVyLCAnaG9yaXpvbnRhbCcsIDgsMSk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckNhcnJpZXIsICdob3Jpem9udGFsJywgOSwxICk7XG5cbiAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKDcsMyk7XG4gICAgLy8gbGV0IGdhbWVPdmVyID0gcGxheWVyQm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpO1xuICAgIC8vIHdoaWxlICghZ2FtZU92ZXIpIHtcbiAgICAgICAgY3JlYXRlQm9hcmRzKCk7XG4gICAgICAgIC8vIGdhbWVPdmVyID0gcGxheWVyQm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpO1xuICAgIC8vIH1cbn1cblxuZXhwb3J0IHtnYW1lUGxheSwgcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmR9OyIsIlxuY29uc3QgeyByZWNlaXZlQXR0YWNrIH0gPSByZXF1aXJlKFwiLi9nYW1lQm9hcmRcIik7XG5cbmNvbnN0IHBsYXllciA9IChuYW1lLCBlbmVteUdhbWVib2FyZCkgPT5cbnsgICBcbiAgICAvL2xhYmVsIHdpdGggYSBuYW1lXG4gICAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xuICAgIGxldCBnYW1lQm9hcmRBdHRhY2tCb2FyZCA9IGVuZW15R2FtZWJvYXJkO1xuICAgIGxldCB0dXJuID0gZmFsc2U7XG4gICAgbGV0IGNvbXB1dGVyVHVybnNUYWtlbiA9IFtdO1xuXG4gICAgZnVuY3Rpb24gdGFrZVR1cm4oYVJvdywgYUNvbCl7XG4gICAgaWYgKHBsYXllck5hbWUgPT0gJ2NvbXB1dGVyJykge1xuXG4gICAgICAgIC8vbmVlZCB0byByYW5kb21pc2UgcGxheXNcbiAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgLy9ib29sIGZvciBpZiB0aGUgZ3Vlc3MgaGFzIGJlZW4gdGFrZW4gYWxyZWFkeSBpbiBnYW1lXG4gICAgICAgIGxldCBndWVzc1Rha2VuID0gZmFsc2U7XG4gICAgICAgIC8vY2hlY2sgdGhlIHByZXZpb3VzIGd1ZXNzZXMsIGlmIGl0IGhhcyBiZWVuIHRha2VuIGdvIHRvIHdoaWxlIGxvb3BcbiAgICAgICAgY29tcHV0ZXJUdXJuc1Rha2VuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudFswXSA9PSByb3cgJiYgZWxlbWVudFsxXSA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICBndWVzc1Rha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vbG9vcCB0aHJvdWdoIHVudGlsIGEgZ3Vlc3MgaXNudCB0YWtlblxuICAgICAgICB3aGlsZSAoZ3Vlc3NUYWtlbikge1xuICAgICAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29tcHV0ZXJUdXJuc1Rha2VuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbMF0gPT0gcm93ICYmIGVsZW1lbnRbMV0gPT0gY29sKSB7XG4gICAgICAgICAgICAgICAgICAgIGd1ZXNzVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vb25jZSB0aGUgY29vcmRpbmF0ZXMgYXJlIHZhbGlkLCBwdXNoIHRoZW0gdG8gdGhlIGd1ZXNzZXMgdGFrZW4gYXJyYXkgZm9yIHZhbGlkYXRpb25cbiAgICAgICAgY29tcHV0ZXJUdXJuc1Rha2VuLnB1c2goW3JvdywgY29sXSk7XG5cbiAgICAgICAgLy90aGUgYm9hcmQgdG8gYXR0YWNrIGlzIHRoZSBwbGF5ZXJzIGJvYXJkXG4gICAgICAgIGdhbWVCb2FyZEF0dGFja0JvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8vbm90IGEgY29tcHV0ZXJcbiAgICAgICAgZ2FtZUJvYXJkQXR0YWNrQm9hcmQucmVjZWl2ZUF0dGFjayhhUm93LCBhQ29sKVxuICAgICAgICAvL3RoZSBib2FyZCB0byBhdHRhY2sgaXMgdGhlIGNvbXB1dGVycyBib2FyZFxuICAgIH1cbn1cblxufVxuXG5leHBvcnQge3BsYXllcn07IiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBuYW1lKSA9PntcbiAgLy9kZWZpbmUgbGVuZ3RoIG9mIHNoaXBcbiAgbGV0IFNoaXBMZW5ndGggPSBsZW5ndGg7XG4gIGxldCBTaGlwTmFtZSA9IG5hbWU7XG4gIC8vY3JlYXRlIGFuIGFycmF5IG9mIHRoZSBsZW5ndGgsIHJlcHJlc2VudGluZyBhIHNoaXBcbiAgbGV0IGxlbmd0aEFycmF5ID0gW107XG4gIGxlbmd0aEFycmF5ID0gWy4uLkFycmF5KFNoaXBMZW5ndGgpXS5tYXAoeCA9PiAxKTsgICBcbiAgLy9hcnJheSBmb3IgY29vcmRpbmF0ZXMgdG8gYmUgaGVsZFxuICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgLy9kZWZpbmUgaGl0IGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIGhpdChudW0pXG4gIHtcbiAgICAvL21hcmsgbnVtIGFzIGhpdFxuICAgIGxlbmd0aEFycmF5W251bV0gPSAwOyAgXG4gIH0gIFxuICAvL2RldGVybWluZSBpZiBzdW5rXG4gIGZ1bmN0aW9uIGlzU3VuaygpXG4gIHtcbiAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgbGVuZ3RoQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09IDEpIHtcbiAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgfSAgICAgIFxuICAgIH0pO1xuICAgIHJldHVybiBzdW5rO1xuICB9XG4gIHJldHVybntTaGlwTGVuZ3RoLCBTaGlwTmFtZSwgbGVuZ3RoQXJyYXksIGhpdCwgaXNTdW5rLCBjb29yZGluYXRlc31cbn1cblxuZXhwb3J0IHtzaGlwRmFjdG9yeX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2FtZVBsYXkgfSBmcm9tICcuL2RlcGVuZGVuY2llcy9nYW1lTG9vcCc7XG5cbi8vY2FsbCB0aGUgZ2FtZSBsb29wIGZ1bmN0aW9uXG5nYW1lUGxheSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==