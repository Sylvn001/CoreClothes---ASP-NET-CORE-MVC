"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclientapp"]("product/ToolBox",{

/***/ "./src/views/product/ToolBox.js":
/*!**************************************!*\
  !*** ./src/views/product/ToolBox.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar ProductsNavigation = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ProductsNavigation, _React$Component);\n\n  var _super = _createSuper(ProductsNavigation);\n\n  function ProductsNavigation() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ProductsNavigation);\n\n    _this = _super.call(this);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"render\", function () {\n      var view = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"toolbox\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"toolbox-left\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"toolbox-info\"\n      }, \"Showing \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"span\", null, \"9 of 56\"), \" Products\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"toolbox-right\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"toolbox-sort\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"label\", {\n        htmlFor: \"sortby\"\n      }, \"Sort by:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"select-custom\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"select\", {\n        value: \"\",\n        name: \"sortby\",\n        id: \"sortby\",\n        className: \"form-control\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"option\", {\n        value: \"popularity\",\n        selected: \"selected\"\n      }, \"Most Popular\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"option\", {\n        value: \"rating\"\n      }, \"Most Rated\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"option\", {\n        value: \"date\"\n      }, \"Date\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"toolbox-layout\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"category-list.html\",\n        className: \"btn-layout\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"svg\", {\n        width: \"16\",\n        height: \"10\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"0\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"6\",\n        y: \"0\",\n        width: \"10\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"0\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"6\",\n        y: \"6\",\n        width: \"10\",\n        height: \"4\"\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"category-2cols.html\",\n        className: \"btn-layout\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"svg\", {\n        width: \"10\",\n        height: \"10\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"0\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"6\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"0\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"6\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"category.html\",\n        className: \"btn-layout\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"svg\", {\n        width: \"16\",\n        height: \"10\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"0\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"6\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"12\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"0\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"6\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"12\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"category-4cols.html\",\n        className: \"btn-layout active\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"svg\", {\n        width: \"22\",\n        height: \"10\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"0\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"6\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"12\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"18\",\n        y: \"0\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"0\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"6\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"12\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"rect\", {\n        x: \"18\",\n        y: \"6\",\n        width: \"4\",\n        height: \"4\"\n      })))))));\n      return view;\n    });\n\n    return _this;\n  }\n\n  return ProductsNavigation;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsNavigation);\n\n//# sourceURL=webpack://clientapp/./src/views/product/ToolBox.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1f883ef2e4168013b704"; }
/******/ }();
/******/ 
/******/ }
);