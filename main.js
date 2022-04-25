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

/***/ "./src/dependencies/frontend.js":
/*!**************************************!*\
  !*** ./src/dependencies/frontend.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoards": () => (/* binding */ createBoards)
/* harmony export */ });
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/dependencies/gameLoop.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/dependencies/shipFactory.js");
 


function createBoards(){

    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_0__.gamePlay)();

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
            console.log(item)
            document.getElementById(`[ ${item[0]}, ${item[1]} ]`).style.backgroundColor = 'red';
        });
    });



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
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/dependencies/shipFactory.js");
// const { ShipName, coordinates, default: shipFactory } = require("./shipFactory");


//gameboard factory
const gameBoard = () =>{
    //2d array 10x10
    //access values like a grid board[1][1] will be 1
    let board = [...Array(10)].map(x => [0,1,2,3,4,5,6,7,8,9])
    //create an array of ship names, so can determine which one is hit
    let shipArray = []
    //bool value for determining if all ships on board are sunk
    let allShipsSunk = false;
    //function to place the ship
    //remembering the 0 index value, so coords 4,3 (row,col), horiz will end up as
    //[4,3],[4,4],[4,5],[4,6]]
    function placeShip(ShipName, alignment,positionRow, positionCol)
    {
        //if the alignment is horizontal and the length of the alignment + ship length is less than 10 (length of board)
        if (alignment == 'horizontal' && (positionCol + ShipName.ShipLength < 10) ) {

            //need validation for if ships are overlapping
            // if (document.getElementById(`[${positionRow}, ${positionCol + index}]`).style.backgroundColor != 'red') {
               //this doesnt work as the document hasnt yet been rendered.... 
            // }            
            
            for (let index = 0; index < ShipName.ShipLength; index++) {
                if (
                    //validation for if ships are overlapping (the value would be ship name, not a number)
                    board[positionRow][positionCol + index] != 0 && 
                    board[positionRow][positionCol + index] != 1 && 
                    board[positionRow][positionCol + index] != 2 && 
                    board[positionRow][positionCol + index] != 3 && 
                    board[positionRow][positionCol + index] != 4 &&
                    board[positionRow][positionCol + index] != 5 && 
                    board[positionRow][positionCol + index] != 6 &&
                    board[positionRow][positionCol + index] != 7 &&
                    board[positionRow][positionCol + index] != 8 &&
                    board[positionRow][positionCol + index] != 9) 
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
                shipArray.push(ShipName);      
            }
        }
        //if the alignment is vertical and the length of the alignment + ship length is less than 10 (length of board)
        else if (alignment == 'vertical' && (positionRow + ShipName.ShipLength < 10)) {
            for (let index = 0; index < ShipName.ShipLength; index++) 
            {
                if (board[positionRow  + index][positionCol] != 0 && 
                    board[positionRow  + index][positionCol] != 1 && 
                    board[positionRow  + index][positionCol] != 2 && 
                    board[positionRow  + index][positionCol] != 3 && 
                    board[positionRow  + index][positionCol] != 4 && 
                    board[positionRow  + index][positionCol] != 5 && 
                    board[positionRow  + index][positionCol] != 6 && 
                    board[positionRow  + index][positionCol] != 7 &&
                    board[positionRow  + index][positionCol] != 8 &&
                    board[positionRow  + index][positionCol] != 9) 
                {
                    alert('Ship overlaps with another');
                    break;
                }
                else
                {
                //update the ships coordinate array
                ShipName.coordinates.push([(positionRow + index),positionCol]);


                //had to take this out, as it was breaking the rendering of the ships on the boaard
                //need another solution here
                
                //update gameboard array
                // board[positionRow + index][positionCol] = ShipName;   
                 
                }            
                       
            } 
            console.log(ShipName.coordinates)
            shipArray.push(ShipName);
            
        }

        //need some validation for if ships are not placed in the right spot
        else{alert('Bad ship placement')}
        // else{return false;}
    }
    //receiveAttack function that takes a pair
    // of coordinates, determines whether or not the attack hit a ship
    // and then sends the ‘hit’ function to the correct ship, 
    //or records the coordinates of the missed shot.
    function receiveAttack(positionRow, positionCol)
    {
        let ship;
            if(board[positionRow][positionCol].ShipName == undefined)
            {
                //missed the shot
                // ship = 'missed';
                console.log("missed")

            }
            else{
                //assign object into 'ship'
                ship = board[positionRow][positionCol];
                //get the coordinates array
                let shipCoordinates = ship.coordinates;  
                //loop through that array, and see which index is the same as row/col
                let indexofShip;
                for (let i = 0; i < shipCoordinates.length; i++) {
                    let element = shipCoordinates[i];
                    if (element[0] == positionRow && element[1] == positionCol) {
                        //return index of shipCoordinates array,
                        //that is the value of the hit
                        indexofShip = i;
                    }
                }      
                //hit the ship at index   
                ship.hit(indexofShip);
                
            }
        //not doing anything with a missed shot at this stage, until I have a DOM
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
return {board, placeShip, receiveAttack, shipArray, checkIfAllShipsSunk}
}



// module.exports = playBoard;

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



    

}


// //attack x 4 to see if all ships are sunk - this is working
// playBoard.receiveAttack(4,4);
// playBoard.receiveAttack(3,4);
// playBoard.receiveAttack(5,4);
// playBoard.receiveAttack(6,4);
// let gameover = playBoard.checkIfAllShipsSunk();
// console.log(gameover)



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
/* harmony import */ var _dependencies_frontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencies/frontend */ "./src/dependencies/frontend.js");




(0,_dependencies_frontend__WEBPACK_IMPORTED_MODULE_1__.createBoards)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDs7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0M7OztBQUdyRCxvRUFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIC4yNWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDE0Mik7XFxufVxcblxcbmhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTtcXG59XFxuXFxubWFpbntcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTtcXG4gICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcbmZvb3RlcntcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIHNwYW4gMCAgL3NwYW4gMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgNjgsIDY4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllckJvYXJkLCAjY29tcHV0ZXJCb2FyZHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcXG59XFxuLnBsYXllckNlbGxzRGl2LCAucGxheWVyUm93RGl2LCAuY29tcHV0ZXJSb3dEaXYgLmNvbXB1dGVyQ2VsbHNEaXZ7ICAgIFxcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDJlbTsgICAgXFxufVxcbi5wbGF5ZXJDZWxsc0RpdiwgLmNvbXB1dGVyQ2VsbHNEaXZ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLFNBQVM7SUFDVCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQ0FBa0M7RUFDcEMsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIC4yNWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDE0Mik7XFxufVxcblxcbmhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTtcXG59XFxuXFxubWFpbntcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIHNwYW4gMSAgL3NwYW4gMTtcXG4gICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcbmZvb3RlcntcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIHNwYW4gMCAgL3NwYW4gMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgNjgsIDY4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllckJvYXJkLCAjY29tcHV0ZXJCb2FyZHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcXG59XFxuLnBsYXllckNlbGxzRGl2LCAucGxheWVyUm93RGl2LCAuY29tcHV0ZXJSb3dEaXYgLmNvbXB1dGVyQ2VsbHNEaXZ7ICAgIFxcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDJlbTsgICAgXFxufVxcbi5wbGF5ZXJDZWxsc0RpdiwgLmNvbXB1dGVyQ2VsbHNEaXZ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Z2FtZVBsYXksIHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkfSBmcm9tICcuL2dhbWVMb29wJzsgXG5pbXBvcnQgeyBTaGlwTmFtZSwgY29vcmRpbmF0ZXMsIHNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRzKCl7XG5cbiAgICBnYW1lUGxheSgpO1xuXG4gICAgbGV0IHBsYXllcnNCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJCb2FyZCcpO1xuICAgIGxldCBjb21wdXRlcnNCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlckJvYXJkJyk7XG5cbiAgICAvLyAvL2NyZWF0ZSBhIGdyaWQgMTB4MTAgZm9yIHBsYXllciAgYW5kIGNvbXB1dGVyXG4gICAgLy9zZXQgdGhlIGlkIG9mIGVhY2ggYm94IGFzIHRoZSBjb29yZGluYXRlc1xuICAgIC8vYWNjZXNzIHRob3NlIGNvb3JkaW5hdGVzIGZvciBzaGlwIHBsYWNlbWVudFxuXG4gICAgLy9wbGF5ZXIgYm9hcmRcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyQm9hcmQuYm9hcmQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIC8vZWxlbWVudCBpcyBlYWNoIHJvd1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcGxheWVyQm9hcmQuYm9hcmRbaW5kZXhdO1xuICAgICAgICAvL2NyZWF0ZSBhIGRpdiBmb3IgdGhlIHJvd1xuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIHJvdy5jbGFzc05hbWUgPSAncm93JztcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGxheWVyQ29sRGl2JykgICAgICAgICAgICBcbiAgICAgICAgLy9jcmVhdGUgdGhlIGNvbHVtbnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBlbGVtZW50MiA9IGVsZW1lbnRbaW5kZXhdO1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgICAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZSgnaWQnLCBgWyAke2l9LCAke2VsZW1lbnRbaW5kZXhdfSBdYCk7XG4gICAgICAgICAgICBjb2x1bW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwbGF5ZXJDZWxsc0RpdicpO1xuICAgICAgICAgICAgY29sdW1uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICAvL2FwcGVuZCB0byBkb21cbiAgICAgICAgcGxheWVyc0JvYXJkLmFwcGVuZENoaWxkKGNvbCk7ICAgICAgICAgICAgXG4gICAgfVxuICAgIC8vY29tcHV0ZXIgYm9hcmRcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZXJCb2FyZC5ib2FyZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgLy9lbGVtZW50IGlzIGVhY2ggcm93XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwbGF5ZXJCb2FyZC5ib2FyZFtpbmRleF07XG4gICAgICAgIC8vY3JlYXRlIGEgZGl2IGZvciB0aGUgcm93XG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21wdXRlclJvd0RpdicpICAgICAgICAgICAgXG4gICAgICAgIC8vY3JlYXRlIHRoZSBjb2x1bW5zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc3QgZWxlbWVudDIgPSBlbGVtZW50W2luZGV4XTtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAgICAgICAgIC8vIGNvbHVtbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYFsgJHtpfSwgJHtlbGVtZW50W2luZGV4XX0gXWApO1xuICAgICAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tcHV0ZXJDZWxsc0RpdicpO1xuICAgICAgICAgICAgY29sdW1uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICAvL2FwcGVuZCB0byBkb21cbiAgICAgICAgY29tcHV0ZXJzQm9hcmQuYXBwZW5kQ2hpbGQocm93KTsgICAgICAgICAgICBcbiAgICB9IFxuXG4gICAgLy9yZW5kZXIgZWFjaCBzaGlwIG9uIHRoZSBwbGF5ZXJzIGJvYXJkXG4gICAgcGxheWVyQm9hcmQuc2hpcEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7ICAgICAgICBcbiAgICAgICAgLy8gbGV0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuICAgICAgICAvL2dldCB0aGUgc2hpcHMgY29vcmRpbmF0ZXNcbiAgICAgICAgbGV0IGNvb3JkQXJyYXkgPSBlbGVtZW50LmNvb3JkaW5hdGVzO1xuICAgICAgICAvL2dvIHRocm91Z2ggZWFjaCBjb29yZGluYXRlLCBzZXQgdGhlIERPTSB2YWx1ZSAoc2FtZSBhcyBjb29yZHMpIHRvIHJlZCBhcyB0aGUgc2hpcCBpcyBwbGFjZWQgdGhlcmVcbiAgICAgICAgY29vcmRBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbICR7aXRlbVswXX0sICR7aXRlbVsxXX0gXWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG5cbiAgICAgICAgfVxuICAgICBcblxuXG5leHBvcnQge2NyZWF0ZUJvYXJkc307IiwiLy8gY29uc3QgeyBTaGlwTmFtZSwgY29vcmRpbmF0ZXMsIGRlZmF1bHQ6IHNoaXBGYWN0b3J5IH0gPSByZXF1aXJlKFwiLi9zaGlwRmFjdG9yeVwiKTtcbmltcG9ydCB7IFNoaXBOYW1lLCBjb29yZGluYXRlcywgc2hpcEZhY3RvcnkgfSBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xuXG4vL2dhbWVib2FyZCBmYWN0b3J5XG5jb25zdCBnYW1lQm9hcmQgPSAoKSA9PntcbiAgICAvLzJkIGFycmF5IDEweDEwXG4gICAgLy9hY2Nlc3MgdmFsdWVzIGxpa2UgYSBncmlkIGJvYXJkWzFdWzFdIHdpbGwgYmUgMVxuICAgIGxldCBib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCh4ID0+IFswLDEsMiwzLDQsNSw2LDcsOCw5XSlcbiAgICAvL2NyZWF0ZSBhbiBhcnJheSBvZiBzaGlwIG5hbWVzLCBzbyBjYW4gZGV0ZXJtaW5lIHdoaWNoIG9uZSBpcyBoaXRcbiAgICBsZXQgc2hpcEFycmF5ID0gW11cbiAgICAvL2Jvb2wgdmFsdWUgZm9yIGRldGVybWluaW5nIGlmIGFsbCBzaGlwcyBvbiBib2FyZCBhcmUgc3Vua1xuICAgIGxldCBhbGxTaGlwc1N1bmsgPSBmYWxzZTtcbiAgICAvL2Z1bmN0aW9uIHRvIHBsYWNlIHRoZSBzaGlwXG4gICAgLy9yZW1lbWJlcmluZyB0aGUgMCBpbmRleCB2YWx1ZSwgc28gY29vcmRzIDQsMyAocm93LGNvbCksIGhvcml6IHdpbGwgZW5kIHVwIGFzXG4gICAgLy9bNCwzXSxbNCw0XSxbNCw1XSxbNCw2XV1cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoU2hpcE5hbWUsIGFsaWdubWVudCxwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAge1xuICAgICAgICAvL2lmIHRoZSBhbGlnbm1lbnQgaXMgaG9yaXpvbnRhbCBhbmQgdGhlIGxlbmd0aCBvZiB0aGUgYWxpZ25tZW50ICsgc2hpcCBsZW5ndGggaXMgbGVzcyB0aGFuIDEwIChsZW5ndGggb2YgYm9hcmQpXG4gICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnICYmIChwb3NpdGlvbkNvbCArIFNoaXBOYW1lLlNoaXBMZW5ndGggPCAxMCkgKSB7XG5cbiAgICAgICAgICAgIC8vbmVlZCB2YWxpZGF0aW9uIGZvciBpZiBzaGlwcyBhcmUgb3ZlcmxhcHBpbmdcbiAgICAgICAgICAgIC8vIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7cG9zaXRpb25Sb3d9LCAke3Bvc2l0aW9uQ29sICsgaW5kZXh9XWApLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPSAncmVkJykge1xuICAgICAgICAgICAgICAgLy90aGlzIGRvZXNudCB3b3JrIGFzIHRoZSBkb2N1bWVudCBoYXNudCB5ZXQgYmVlbiByZW5kZXJlZC4uLi4gXG4gICAgICAgICAgICAvLyB9ICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBTaGlwTmFtZS5TaGlwTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAvL3ZhbGlkYXRpb24gZm9yIGlmIHNoaXBzIGFyZSBvdmVybGFwcGluZyAodGhlIHZhbHVlIHdvdWxkIGJlIHNoaXAgbmFtZSwgbm90IGEgbnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICBib2FyZFtwb3NpdGlvblJvd11bcG9zaXRpb25Db2wgKyBpbmRleF0gIT0gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sICsgaW5kZXhdICE9IDEgJiYgXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbCArIGluZGV4XSAhPSAyICYmIFxuICAgICAgICAgICAgICAgICAgICBib2FyZFtwb3NpdGlvblJvd11bcG9zaXRpb25Db2wgKyBpbmRleF0gIT0gMyAmJiBcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sICsgaW5kZXhdICE9IDQgJiZcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sICsgaW5kZXhdICE9IDUgJiYgXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbCArIGluZGV4XSAhPSA2ICYmXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbCArIGluZGV4XSAhPSA3ICYmXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbCArIGluZGV4XSAhPSA4ICYmXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbCArIGluZGV4XSAhPSA5KSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTaGlwIG92ZXJsYXBzIHdpdGggYW5vdGhlcicpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBzaGlwcyBjb29yZGluYXRlIGFycmF5XG4gICAgICAgICAgICAgICAgU2hpcE5hbWUuY29vcmRpbmF0ZXMucHVzaChbcG9zaXRpb25Sb3csKHBvc2l0aW9uQ29sICsgaW5kZXgpXSkgXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgZ2FtZWJvYXJkIGFycmF5XG4gICAgICAgICAgICAgICAgYm9hcmRbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sICsgaW5kZXhdID0gU2hpcE5hbWU7ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goU2hpcE5hbWUpOyAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgdGhlIGFsaWdubWVudCBpcyB2ZXJ0aWNhbCBhbmQgdGhlIGxlbmd0aCBvZiB0aGUgYWxpZ25tZW50ICsgc2hpcCBsZW5ndGggaXMgbGVzcyB0aGFuIDEwIChsZW5ndGggb2YgYm9hcmQpXG4gICAgICAgIGVsc2UgaWYgKGFsaWdubWVudCA9PSAndmVydGljYWwnICYmIChwb3NpdGlvblJvdyArIFNoaXBOYW1lLlNoaXBMZW5ndGggPCAxMCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBTaGlwTmFtZS5TaGlwTGVuZ3RoOyBpbmRleCsrKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbcG9zaXRpb25Sb3cgICsgaW5kZXhdW3Bvc2l0aW9uQ29sXSAhPSAwICYmIFxuICAgICAgICAgICAgICAgICAgICBib2FyZFtwb3NpdGlvblJvdyAgKyBpbmRleF1bcG9zaXRpb25Db2xdICE9IDEgJiYgXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93ICArIGluZGV4XVtwb3NpdGlvbkNvbF0gIT0gMiAmJiBcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbcG9zaXRpb25Sb3cgICsgaW5kZXhdW3Bvc2l0aW9uQ29sXSAhPSAzICYmIFxuICAgICAgICAgICAgICAgICAgICBib2FyZFtwb3NpdGlvblJvdyAgKyBpbmRleF1bcG9zaXRpb25Db2xdICE9IDQgJiYgXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93ICArIGluZGV4XVtwb3NpdGlvbkNvbF0gIT0gNSAmJiBcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbcG9zaXRpb25Sb3cgICsgaW5kZXhdW3Bvc2l0aW9uQ29sXSAhPSA2ICYmIFxuICAgICAgICAgICAgICAgICAgICBib2FyZFtwb3NpdGlvblJvdyAgKyBpbmRleF1bcG9zaXRpb25Db2xdICE9IDcgJiZcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbcG9zaXRpb25Sb3cgICsgaW5kZXhdW3Bvc2l0aW9uQ29sXSAhPSA4ICYmXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93ICArIGluZGV4XVtwb3NpdGlvbkNvbF0gIT0gOSkgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU2hpcCBvdmVybGFwcyB3aXRoIGFub3RoZXInKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdGhlIHNoaXBzIGNvb3JkaW5hdGUgYXJyYXlcbiAgICAgICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5wdXNoKFsocG9zaXRpb25Sb3cgKyBpbmRleCkscG9zaXRpb25Db2xdKTtcblxuXG4gICAgICAgICAgICAgICAgLy9oYWQgdG8gdGFrZSB0aGlzIG91dCwgYXMgaXQgd2FzIGJyZWFraW5nIHRoZSByZW5kZXJpbmcgb2YgdGhlIHNoaXBzIG9uIHRoZSBib2FhcmRcbiAgICAgICAgICAgICAgICAvL25lZWQgYW5vdGhlciBzb2x1dGlvbiBoZXJlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgZ2FtZWJvYXJkIGFycmF5XG4gICAgICAgICAgICAgICAgLy8gYm9hcmRbcG9zaXRpb25Sb3cgKyBpbmRleF1bcG9zaXRpb25Db2xdID0gU2hpcE5hbWU7ICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgY29uc29sZS5sb2coU2hpcE5hbWUuY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICBzaGlwQXJyYXkucHVzaChTaGlwTmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbmVlZCBzb21lIHZhbGlkYXRpb24gZm9yIGlmIHNoaXBzIGFyZSBub3QgcGxhY2VkIGluIHRoZSByaWdodCBzcG90XG4gICAgICAgIGVsc2V7YWxlcnQoJ0JhZCBzaGlwIHBsYWNlbWVudCcpfVxuICAgICAgICAvLyBlbHNle3JldHVybiBmYWxzZTt9XG4gICAgfVxuICAgIC8vcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFpclxuICAgIC8vIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcFxuICAgIC8vIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgXG4gICAgLy9vciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAge1xuICAgICAgICBsZXQgc2hpcDtcbiAgICAgICAgICAgIGlmKGJvYXJkW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbF0uU2hpcE5hbWUgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vbWlzc2VkIHRoZSBzaG90XG4gICAgICAgICAgICAgICAgLy8gc2hpcCA9ICdtaXNzZWQnO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWlzc2VkXCIpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgLy9hc3NpZ24gb2JqZWN0IGludG8gJ3NoaXAnXG4gICAgICAgICAgICAgICAgc2hpcCA9IGJvYXJkW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbF07XG4gICAgICAgICAgICAgICAgLy9nZXQgdGhlIGNvb3JkaW5hdGVzIGFycmF5XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlcyA9IHNoaXAuY29vcmRpbmF0ZXM7ICBcbiAgICAgICAgICAgICAgICAvL2xvb3AgdGhyb3VnaCB0aGF0IGFycmF5LCBhbmQgc2VlIHdoaWNoIGluZGV4IGlzIHRoZSBzYW1lIGFzIHJvdy9jb2xcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXhvZlNoaXA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBzaGlwQ29vcmRpbmF0ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50WzBdID09IHBvc2l0aW9uUm93ICYmIGVsZW1lbnRbMV0gPT0gcG9zaXRpb25Db2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIGluZGV4IG9mIHNoaXBDb29yZGluYXRlcyBhcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhhdCBpcyB0aGUgdmFsdWUgb2YgdGhlIGhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhvZlNoaXAgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICAgICAgICAgIC8vaGl0IHRoZSBzaGlwIGF0IGluZGV4ICAgXG4gICAgICAgICAgICAgICAgc2hpcC5oaXQoaW5kZXhvZlNoaXApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAvL25vdCBkb2luZyBhbnl0aGluZyB3aXRoIGEgbWlzc2VkIHNob3QgYXQgdGhpcyBzdGFnZSwgdW50aWwgSSBoYXZlIGEgRE9NXG4gICAgfVxuICAgIC8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuICAgIGZ1bmN0aW9uIGNoZWNrSWZBbGxTaGlwc1N1bmsoKVxuICAgIHtcbiAgICAgICAgLy9jcmVhdGUgYm9vbFxuICAgICAgICBhbGxTaGlwc1N1bmsgPSB0cnVlO1xuXG4gICAgICAgIC8vYXJyYXkgdG8gc3RvcmUgdHJ1ZS9mYWxzZSB2YWx1ZXMgaW50b1xuICAgICAgICBsZXQgY2hlY2tGb3JTaW5rYWdlQXJyYXkgPSBbXTtcblxuICAgICAgICAvL3NoaXBBcnJheSBoYXMgbGlzdCBvZiBzaGlwIG9iamVjdHMsIGNoZWNrIGVhY2ggZm9yIGlmIHRoZXkgYXJlIHN1bmtcbiAgICAgICAgc2hpcEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgaXNTdW5rID0gZWxlbWVudC5pc1N1bmsoKVxuICAgICAgICAgICAgY2hlY2tGb3JTaW5rYWdlQXJyYXkucHVzaChpc1N1bmspXG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja0ZvclNpbmthZ2VBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBhbGxTaGlwc1N1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jaGVjayBlYWNoIHZhbHVlIG9mIHNoaXBBcnJheS5zdW5rIFxuICAgICAgICAvL2lmIHRoZXkgYXJlIGFsbCBcbiAgICAgICAgcmV0dXJuIGFsbFNoaXBzU3VuaztcbiAgICB9ICAgXG5yZXR1cm4ge2JvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHNoaXBBcnJheSwgY2hlY2tJZkFsbFNoaXBzU3Vua31cbn1cblxuZXhwb3J0IHtnYW1lQm9hcmR9O1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHBsYXlCb2FyZDsiLCJpbXBvcnQge3NoaXBGYWN0b3J5fSBmcm9tICcuL3NoaXBGYWN0b3J5JztcbmltcG9ydCB7Z2FtZUJvYXJkfSBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQge3BsYXllcn0gZnJvbSAnLi9wbGF5ZXInO1xuXG5cbiAgICAvL2NyZWF0ZSBib2FyZHNcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGdhbWVCb2FyZCgpO1xuICAgIFxuZnVuY3Rpb24gZ2FtZVBsYXkoKXtcblxuXG4gICAgLy9jcmVhdGUgcGxheWVyc1xuICAgIGxldCBwbGF5ZXIxID0gcGxheWVyKFwiUGxheWVyMVwiLCBjb21wdXRlckJvYXJkKTtcbiAgICBsZXQgcGxheWVyMkNPTVAgPSBwbGF5ZXIoXCJQbGF5ZXIyQ09NUFwiLCBwbGF5ZXJCb2FyZCk7XG5cbiAgICAvL2NyZWF0ZSBwbGF5ZXIgc2hpcHNcbiAgICBsZXQgcGxheWVyQmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KDQsICdiYXR0bGVzaGlwJyk7XG4gICAgbGV0IHBsYXllclBhdHJvbCA9IHNoaXBGYWN0b3J5KDIsICdwYXRyb2wnKTtcbiAgICBsZXQgcGxheWVyU3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMywgJ3N1Ym1hcmluZScpO1xuICAgIGxldCBwbGF5ZXJEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSg0LCAnZGVzdHJveWVyJyk7XG4gICAgbGV0IHBsYXllckNhcnJpZXIgPSBzaGlwRmFjdG9yeSg1LCAnY2FycmllcicpO1xuXG4gICAgLy9jcmVhdGUgY29tcHV0ZXIgc2hpcHNcbiAgICBsZXQgY29tcHV0ZXJCYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgICBsZXQgY29tcHV0ZXJQYXRyb2wgPSBzaGlwRmFjdG9yeSgyLCAncGF0cm9sJyk7XG4gICAgbGV0IGNvbXB1dGVyU3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMywgJ3N1Ym1hcmluZScpO1xuICAgIGxldCBjb21wdXRlckRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KDQsICdkZXN0cm95ZXInKTtcbiAgICBsZXQgY29tcHV0ZXJDYXJyaWVyID0gc2hpcEZhY3RvcnkoNSwgJ2NhcnJpZXInKTtcblxuICAgIC8vcGxhY2UgcGxheWVyIHNoaXBzXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJhdHRsZXNoaXAsICd2ZXJ0aWNhbCcsIDMsMyApO1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJQYXRyb2wsICdob3Jpem9udGFsJywgMCwzICk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclN1Ym1hcmluZSwgJ3ZlcnRpY2FsJywgMyw2ICk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckRlc3Ryb3llciwgJ2hvcml6b250YWwnLCA4LDEpO1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJDYXJyaWVyLCAnaG9yaXpvbnRhbCcsIDksMSApO1xuXG5cblxuICAgIFxuXG59XG5cblxuLy8gLy9hdHRhY2sgeCA0IHRvIHNlZSBpZiBhbGwgc2hpcHMgYXJlIHN1bmsgLSB0aGlzIGlzIHdvcmtpbmdcbi8vIHBsYXlCb2FyZC5yZWNlaXZlQXR0YWNrKDQsNCk7XG4vLyBwbGF5Qm9hcmQucmVjZWl2ZUF0dGFjaygzLDQpO1xuLy8gcGxheUJvYXJkLnJlY2VpdmVBdHRhY2soNSw0KTtcbi8vIHBsYXlCb2FyZC5yZWNlaXZlQXR0YWNrKDYsNCk7XG4vLyBsZXQgZ2FtZW92ZXIgPSBwbGF5Qm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpO1xuLy8gY29uc29sZS5sb2coZ2FtZW92ZXIpXG5cbmV4cG9ydCB7Z2FtZVBsYXksIHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkfTsiLCJcbmNvbnN0IHsgcmVjZWl2ZUF0dGFjayB9ID0gcmVxdWlyZShcIi4vZ2FtZUJvYXJkXCIpO1xuXG5jb25zdCBwbGF5ZXIgPSAobmFtZSwgZW5lbXlHYW1lYm9hcmQpID0+XG57ICAgXG4gICAgLy9sYWJlbCB3aXRoIGEgbmFtZVxuICAgIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcbiAgICBsZXQgZ2FtZUJvYXJkQXR0YWNrQm9hcmQgPSBlbmVteUdhbWVib2FyZDtcbiAgICBsZXQgdHVybiA9IGZhbHNlO1xuICAgIGxldCBjb21wdXRlclR1cm5zVGFrZW4gPSBbXTtcblxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKGFSb3csIGFDb2wpe1xuICAgIGlmIChwbGF5ZXJOYW1lID09ICdjb21wdXRlcicpIHtcblxuICAgICAgICAvL25lZWQgdG8gcmFuZG9taXNlIHBsYXlzXG4gICAgICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIC8vYm9vbCBmb3IgaWYgdGhlIGd1ZXNzIGhhcyBiZWVuIHRha2VuIGFscmVhZHkgaW4gZ2FtZVxuICAgICAgICBsZXQgZ3Vlc3NUYWtlbiA9IGZhbHNlO1xuICAgICAgICAvL2NoZWNrIHRoZSBwcmV2aW91cyBndWVzc2VzLCBpZiBpdCBoYXMgYmVlbiB0YWtlbiBnbyB0byB3aGlsZSBsb29wXG4gICAgICAgIGNvbXB1dGVyVHVybnNUYWtlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRbMF0gPT0gcm93ICYmIGVsZW1lbnRbMV0gPT0gY29sKSB7XG4gICAgICAgICAgICAgICAgZ3Vlc3NUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvL2xvb3AgdGhyb3VnaCB1bnRpbCBhIGd1ZXNzIGlzbnQgdGFrZW5cbiAgICAgICAgd2hpbGUgKGd1ZXNzVGFrZW4pIHtcbiAgICAgICAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGNvbXB1dGVyVHVybnNUYWtlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50WzBdID09IHJvdyAmJiBlbGVtZW50WzFdID09IGNvbCkge1xuICAgICAgICAgICAgICAgICAgICBndWVzc1Rha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL29uY2UgdGhlIGNvb3JkaW5hdGVzIGFyZSB2YWxpZCwgcHVzaCB0aGVtIHRvIHRoZSBndWVzc2VzIHRha2VuIGFycmF5IGZvciB2YWxpZGF0aW9uXG4gICAgICAgIGNvbXB1dGVyVHVybnNUYWtlbi5wdXNoKFtyb3csIGNvbF0pO1xuXG4gICAgICAgIC8vdGhlIGJvYXJkIHRvIGF0dGFjayBpcyB0aGUgcGxheWVycyBib2FyZFxuICAgICAgICBnYW1lQm9hcmRBdHRhY2tCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcblxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvL25vdCBhIGNvbXB1dGVyXG4gICAgICAgIGdhbWVCb2FyZEF0dGFja0JvYXJkLnJlY2VpdmVBdHRhY2soYVJvdywgYUNvbClcbiAgICAgICAgLy90aGUgYm9hcmQgdG8gYXR0YWNrIGlzIHRoZSBjb21wdXRlcnMgYm9hcmRcbiAgICB9XG59XG5cbn1cblxuZXhwb3J0IHtwbGF5ZXJ9OyIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgbmFtZSkgPT57XG4gIC8vZGVmaW5lIGxlbmd0aCBvZiBzaGlwXG4gIGxldCBTaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgU2hpcE5hbWUgPSBuYW1lO1xuICAvL2NyZWF0ZSBhbiBhcnJheSBvZiB0aGUgbGVuZ3RoLCByZXByZXNlbnRpbmcgYSBzaGlwXG4gIGxldCBsZW5ndGhBcnJheSA9IFtdO1xuICBsZW5ndGhBcnJheSA9IFsuLi5BcnJheShTaGlwTGVuZ3RoKV0ubWFwKHggPT4gMSk7ICAgXG4gIC8vYXJyYXkgZm9yIGNvb3JkaW5hdGVzIHRvIGJlIGhlbGRcbiAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gIC8vZGVmaW5lIGhpdCBmdW5jdGlvblxuICBmdW5jdGlvbiBoaXQobnVtKVxuICB7XG4gICAgLy9tYXJrIG51bSBhcyBoaXRcbiAgICBsZW5ndGhBcnJheVtudW1dID0gMDsgIFxuICB9ICBcbiAgLy9kZXRlcm1pbmUgaWYgc3Vua1xuICBmdW5jdGlvbiBpc1N1bmsoKVxuICB7XG4gICAgbGV0IHN1bmsgPSB0cnVlO1xuICAgIGxlbmd0aEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PSAxKSB7XG4gICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgIH0gICAgICBcbiAgICB9KTtcbiAgICByZXR1cm4gc3VuaztcbiAgfVxuICByZXR1cm57U2hpcExlbmd0aCwgU2hpcE5hbWUsIGxlbmd0aEFycmF5LCBoaXQsIGlzU3VuaywgY29vcmRpbmF0ZXN9XG59XG5cbmV4cG9ydCB7c2hpcEZhY3Rvcnl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7Y3JlYXRlQm9hcmRzfSBmcm9tICcuL2RlcGVuZGVuY2llcy9mcm9udGVuZCc7XG5cblxuY3JlYXRlQm9hcmRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9