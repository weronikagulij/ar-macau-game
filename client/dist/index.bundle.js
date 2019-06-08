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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (2:0)\\nYou may need an appropriate loader to handle this file type.\\n| import Game from \\\"./game.js\\\";\\r\\n> <<<<<<< HEAD\\r\\n| import MessageManager from \\\"./message-manager.js\\\";\\r\\n| =======\\r\");\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\\n\\r\\n<<<<<<< HEAD\\r\\n^\\r\\n      Invalid CSS after \\\"<\\\": expected 1 selector or at-rule, was \\\"<<<<<<< HEAD\\\"\\r\\n      in C:\\\\Users\\\\weron\\\\OneDrive\\\\Pulpit\\\\node-babel-webpack-starter\\\\client\\\\src\\\\scss\\\\index.scss (line 1, column 1)\\n    at runLoaders (C:\\\\Users\\\\weron\\\\OneDrive\\\\Pulpit\\\\node-babel-webpack-starter\\\\client\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:286:20)\\n    at C:\\\\Users\\\\weron\\\\OneDrive\\\\Pulpit\\\\node-babel-webpack-starter\\\\client\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\weron\\\\OneDrive\\\\Pulpit\\\\node-babel-webpack-starter\\\\client\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at context.callback (C:\\\\Users\\\\weron\\\\OneDrive\\\\Pulpit\\\\node-babel-webpack-starter\\\\client\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:111:13)\\n    at Object.render [as callback] (C:\\\\Users\\\\weron\\\\OneDrive\\\\Pulpit\\\\node-babel-webpack-starter\\\\client\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js:52:13)\\n    at Object.done [as callback] (C:\\\\Users\\\\weron\\\\OneDrive\\\\Pulpit\\\\node-babel-webpack-starter\\\\client\\\\node_modules\\\\neo-async\\\\async.js:8067:18)\\n    at options.error (C:\\\\Users\\\\weron\\\\OneDrive\\\\Pulpit\\\\node-babel-webpack-starter\\\\client\\\\node_modules\\\\node-sass\\\\lib\\\\index.js:294:32)\");\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/index.scss */\"./src/scss/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/scss/index.scss?");

/***/ })

/******/ });