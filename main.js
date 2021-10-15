/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var _node_modules_bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n\n\n\n\nvar calculateMaxArray = function calculateMaxArray() {\n  var arrayInputs = Array.from(document.querySelectorAll('.array'));\n  var elementWithoutString = 0; // Existencia de elementos vacios\n\n  var fullArray = new Array(0);\n  arrayInputs.forEach(function (arrayInput) {\n    var arrayValue = arrayInput.value.trim();\n\n    if (arrayValue === '') {\n      arrayInput.classList.add('border-alert');\n      elementWithoutString += 1;\n      return;\n    }\n\n    fullArray.push([arrayInput.value]);\n  });\n\n  if (!(elementWithoutString > 0)) {\n    var maxIndexElement = maxArray(fullArray);\n    equalMaxSrtingLength(arrayInputs, maxIndexElement);\n  }\n};\n\nvar equalMaxSrtingLength = function equalMaxSrtingLength(array, indexMaxString) {\n  var searchEqualArrayLength = array.filter(function (item, index) {\n    return item.value.trim().length === array[indexMaxString].value.trim().length;\n  });\n  searchEqualArrayLength.forEach(function (element) {\n    element.classList.add('border-string-largger');\n  });\n};\n\nvar maxArray = function maxArray(fullArray) {\n  var fullArrayInput = fullArray;\n  var arrayMaxLengthPosition = 0;\n  fullArrayInput.forEach(function (element, index, array) {\n    if (index > 0) {\n      var actualElementLength = element[0].length;\n      var pastElementLength = array[arrayMaxLengthPosition][0]; // Comparación entre el elemento actual, el que tuvo la cadena mas larga anteriormente\n\n      if (actualElementLength > pastElementLength.length) {\n        arrayMaxLengthPosition = index;\n      }\n\n      return;\n    }\n\n    arrayMaxLengthPosition = index;\n  });\n  return arrayMaxLengthPosition;\n};\n\nvar createArayInput = function createArayInput() {\n  var inputGroup = document.querySelector('.input-group');\n  var inputArray = document.createElement('input');\n  inputArray.classList.add('form-control');\n  inputArray.classList.add('array');\n  inputArray.placeholder = 'texto';\n  inputArray.type = 'text';\n  inputGroup.appendChild(inputArray);\n};\n\nvar removeLastArrayInput = function removeLastArrayInput() {\n  var inputGroup = Array.from(document.querySelectorAll('.array'));\n  var inputGroupLength = inputGroup.length;\n\n  if (inputGroupLength < 3) {\n    return;\n  }\n\n  inputGroup[inputGroupLength - 1].remove();\n};\n\nvar addEvents = function addEvents() {\n  var addArray = document.querySelector('.add-array');\n  var removeArray = document.querySelector('.remove-array');\n  var calculateArray = document.querySelector('.calculate-array');\n  addArray.addEventListener('click', function () {\n    console.log('add');\n    removeBorderAlert();\n    removeBorderSuccess();\n    createArayInput();\n  });\n  removeArray.addEventListener('click', function () {\n    console.log('remove');\n    removeBorderAlert();\n    removeBorderSuccess();\n    removeLastArrayInput();\n  });\n  calculateArray.addEventListener('click', function () {\n    console.log('calculate');\n    removeBorderAlert();\n    removeBorderSuccess();\n    calculateMaxArray();\n  });\n};\n\nvar removeBorderAlert = function removeBorderAlert() {\n  var arrayInputs = Array.from(document.querySelectorAll('.array'));\n  arrayInputs.forEach(function (arrayInput) {\n    if (arrayInput.classList.contains('border-alert')) {\n      arrayInput.classList.remove('border-alert');\n    }\n  });\n};\n\nvar removeBorderSuccess = function removeBorderSuccess() {\n  var arrayInputs = Array.from(document.querySelectorAll('.array'));\n  arrayInputs.forEach(function (arrayInput) {\n    if (arrayInput.classList.contains('border-string-largger')) {\n      arrayInput.classList.remove('border-string-largger');\n    }\n  });\n};\n\naddEvents();\n\n//# sourceURL=webpack://cadena_mas_larga/./src/index.js?");

/***/ }),

/***/ "./node_modules/bootstrap-icons/font/bootstrap-icons.css":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-icons/font/bootstrap-icons.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cadena_mas_larga/./node_modules/bootstrap-icons/font/bootstrap-icons.css?");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cadena_mas_larga/./node_modules/bootstrap/dist/css/bootstrap.css?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cadena_mas_larga/./src/styles/index.css?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;