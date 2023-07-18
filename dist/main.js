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

/***/ "./src/builder/builder.js":
/*!********************************!*\
  !*** ./src/builder/builder.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Plant {\n  constructor(name) {\n    this.name = name;\n  }\n\n  setSoil(soil) {\n    this.soil = soil;\n    return this;\n  }\n\n  withClayPot() {\n    this.pot = 'Clay pot';\n    return this;\n  }\n\n  withCeramicPot() {\n    this.pot = 'Ceramic pot';\n    return this;\n  }\n\n  setPotDecoration(style) {\n    this.style = style;\n    return this;\n  }\n\n  setPotColor(color) {\n    this.color = color;\n    return this;\n  }\n\n  setExtra(extra) {\n    this.extra = extra;\n    return this;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plant);\n\n\n//# sourceURL=webpack://javascript-3-grupo-1-heylin-loaiza/./src/builder/builder.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst typeOfPlants = {\n  lowLight: {\n    toxic: {\n      default: 'Sansevieria',\n      overwater: 'Peace lily',\n    },\n    noToxic: {\n      default: 'Boston Fern',\n    },\n  },\n  mediumLight: {\n    toxic: {\n      default: 'Aglaonema',\n      overwater: 'Peace lily',\n    },\n    noToxic: {\n      default: 'Monstera',\n      overwater: 'Peace lily',\n    },\n  },\n  outdoor: {\n    toxic: {\n      default: 'Aloe Vera',\n    },\n    noToxic: {\n      default: 'Cactus',\n    },\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeOfPlants);\n\n\n//# sourceURL=webpack://javascript-3-grupo-1-heylin-loaiza/./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _builder_builder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder/builder.js */ \"./src/builder/builder.js\");\n\n\n\nconst form = document.querySelector('#form');\n\nfunction getName(formData) {\n  const name = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][formData.location];\n  if (formData.location === 'lowLight') {\n    if (formData.pets === 'toxic' && formData.watering === 'default') {\n      return name[formData.pets].default;\n    }\n    if (formData.pets === 'toxic' && formData.watering === 'overwater') {\n      return name[formData.pets].overwater;\n    }\n    return name[formData.pets].default;\n  }\n\n  if (formData.location === 'mediumLight') {\n    if (formData.pets === 'toxic' && formData.watering === 'default') {\n      return name[formData.pets].default;\n    }\n    if (formData.pets === 'toxic' && formData.watering === 'overwater') {\n      return name[formData.pets].overwater;\n    }\n    if (formData.pets === 'noToxic' && formData.watering === 'overwater') {\n      return name[formData.pets].overwater;\n    }\n    return name[formData.pets].default;\n  }\n\n  if (formData.location === 'outdoor') {\n    if (formData.pets === 'toxic') {\n      return name[formData.pets].default;\n    }\n    return name[formData.pets].default;\n  }\n\n  return null;\n}\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const data = new FormData(e.target);\n  const dataExtras = [];\n  data.getAll('extras').forEach((value) => {\n    dataExtras.push(value);\n  });\n\n  const formData = Object.fromEntries(data);\n  formData.extras = dataExtras;\n\n  const plantName = getName(formData);\n  const { soil, style, extras } = formData;\n\n  const plant = new _builder_builder_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](plantName)\n    .setSoil(soil)\n    .setPotDecoration(style)\n    .setPotColor('clay')\n    .setExtra(extras);\n  if (formData.watering === 'overwater') {\n    plant.withClayPot();\n    plant.setSoil('Drainage');\n  } else {\n    plant.withCeramicPot();\n  }\n\n  // console.log(formData);\n});\n\n\n//# sourceURL=webpack://javascript-3-grupo-1-heylin-loaiza/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;