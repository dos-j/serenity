/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _injector = __webpack_require__(1);\n\nvar _injector2 = _interopRequireDefault(_injector);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar singletonInjector = new _injector2.default();\nexports.default = singletonInjector;\n\nif (window) {\n  window.serenity = singletonInjector;\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGlCQUFpQixHQUFHLHdCQUFjLENBQUM7a0JBQzFCLGlCQUFpQjs7QUFFaEMsSUFBRyxNQUFNLEVBQUU7QUFDVCxRQUFNLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5qZWN0b3IgZnJvbSAnLi9kaS9pbmplY3Rvcic7XG5cbmNvbnN0IHNpbmdsZXRvbkluamVjdG9yID0gbmV3IGluamVjdG9yKCk7XG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25JbmplY3RvcjtcblxuaWYod2luZG93KSB7XG4gIHdpbmRvdy5zZXJlbml0eSA9IHNpbmdsZXRvbkluamVjdG9yO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Injector = function Injector() {\n  var _this = this;\n\n  _classCallCheck(this, Injector);\n\n  this.register = function (service, name, dependencies) {\n    var _services$name;\n\n    if (typeof service !== 'function') {\n      throw 'Tried to register a service which is not a function';\n    }\n\n    if (_this.service.hasOwnProperty(name)) {\n      throw 'Service with name ' + name + ' already registered';\n    }\n\n    _this.services[name] = {\n      service: service,\n      dependencies: dependencies\n    };\n\n    var injectables = _this.services[name].dependencies.map(function (injectName) {\n      return _this.services[injectName].service();\n    });\n    (_services$name = _this.services[name]).service.apply(_services$name, _toConsumableArray(injectables));\n  };\n\n  this.services = {};\n};\n\nexports.default = Injector;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGkvaW5qZWN0b3IuanM/OGRiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ3FCLFFBQVEsR0FFM0IsU0FGbUIsUUFBUSxHQUViOzs7d0JBRkssUUFBUTs7T0FNM0IsUUFBUSxHQUFHLFVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUs7OztBQUMxQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFVBQVUsRUFBRTtBQUNqQyxrRUFBNEQ7S0FDN0Q7O0FBRUQsUUFBSSxNQUFLLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDckMsbUNBQTJCLElBQUkseUJBQXNCO0tBQ3REOztBQUVELFVBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQ3BCLGFBQU8sRUFBUCxPQUFPO0FBQ1Asa0JBQVksRUFBWixZQUFZO0tBQ2IsQ0FBQzs7QUFFRixRQUFNLFdBQVcsR0FBRyxNQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLG9CQUFVO2FBQUksTUFBSyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFO0tBQUEsQ0FBQyxDQUFDO0FBQzVHLDRCQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLDBDQUFJLFdBQVcsRUFBQyxDQUFDO0dBQzdDOztBQW5CQyxNQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztDQUNwQjs7a0JBSmtCLFFBQVEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5qZWN0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VydmljZXMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyID0gKHNlcnZpY2UsIG5hbWUsIGRlcGVuZGVuY2llcykgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2VydmljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgYFRyaWVkIHRvIHJlZ2lzdGVyIGEgc2VydmljZSB3aGljaCBpcyBub3QgYSBmdW5jdGlvbmA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VydmljZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgdGhyb3cgYFNlcnZpY2Ugd2l0aCBuYW1lICR7bmFtZX0gYWxyZWFkeSByZWdpc3RlcmVkYDtcbiAgICB9XG5cbiAgICB0aGlzLnNlcnZpY2VzW25hbWVdID0ge1xuICAgICAgc2VydmljZSxcbiAgICAgIGRlcGVuZGVuY2llc1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgaW5qZWN0YWJsZXMgPSB0aGlzLnNlcnZpY2VzW25hbWVdLmRlcGVuZGVuY2llcy5tYXAoaW5qZWN0TmFtZSA9PiB0aGlzLnNlcnZpY2VzW2luamVjdE5hbWVdLnNlcnZpY2UoKSk7XG4gICAgdGhpcy5zZXJ2aWNlc1tuYW1lXS5zZXJ2aWNlKC4uLmluamVjdGFibGVzKTtcbiAgfTtcblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGkvaW5qZWN0b3IuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);