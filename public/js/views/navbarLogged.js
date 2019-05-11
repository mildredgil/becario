/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 437);
/******/ })
/************************************************************************/
/******/ ({

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(438);


/***/ }),

/***/ 438:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/Arely/Documents/GitHub/becario/resources/assets/js/views/navbarLogged.jsx: Unexpected token (76:1)\n\n\u001b[0m \u001b[90m 74 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 75 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mnav\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 76 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 77 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mPerfilEstudiantes\u001b[39m  open\u001b[33m=\u001b[39m{open} handleClose\u001b[33m=\u001b[39m{handleClosePerfil} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 78 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\n \u001b[90m 79 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mPerfilColaboradores\u001b[39m  open\u001b[33m=\u001b[39m{open} handleClose\u001b[33m=\u001b[39m{handleClosePerfil} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ })

/******/ });