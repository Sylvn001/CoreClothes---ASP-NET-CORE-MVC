"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclientapp"]("areas/product/Index",{

/***/ "./src/views/areas/product/Index.js":
/*!******************************************!*\
  !*** ./src/views/areas/product/Index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar ProductList = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ProductList, _React$Component);\n\n  var _super = _createSuper(ProductList);\n\n  function ProductList() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ProductList);\n\n    _this = _super.call(this);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"search\", function () {\n      HTTPClient.get(\"Admin/Product/Search?name=\" + encodeURIComponent(_this.state.searchName)).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        console.log(r);\n\n        _this.setState({\n          products: r\n        });\n      }).catch(function (e) {\n        console.log(e);\n      });\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"delete\", function (id) {\n      HTTPClient.get(\"Admin/Product/Delete?id=\" + encodeURIComponent(id)).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        console.log(r);\n        if (r == true) _this.search();\n      }).catch(function (e) {\n        console.log(e);\n      });\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"render\", function () {\n      var view = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"table\", {\n        className: \"table tablesorter \",\n        id: \"\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"thead\", {\n        className: \" text-primary\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"th\", null, \"ID\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"th\", null, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"th\", null, \"Stock\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"th\", null, \"Price\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"th\", null, \"Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"th\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"i\", {\n        className: \"fas fa-cog\"\n      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"tbody\", null, _this.state.products.length == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"td\", {\n        className: \"text-center\",\n        colSpan: \"6\"\n      }, \"Empty Products\")), _this.state.products.map(function (item) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"tr\", {\n          key: \"category-\" + item.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"td\", null, item.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"td\", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"td\", null, item.stock), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"td\", null, item.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"td\", null, item.category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"a\", {\n          href: 'Product/Create?id=' + item.id,\n          className: \"mx-2\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"i\", {\n          className: \"fas fa-pencil-alt\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"a\", {\n          href: \"#\",\n          onClick: _this.delete(item.id),\n          className: \"mx-2\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"i\", {\n          className: \"fas fa-trash\"\n        }))));\n      }))));\n      return view;\n    });\n\n    _this.state = {\n      msg: '',\n      success: false,\n      searchName: '',\n      products: []\n    };\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ProductList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.search();\n    }\n  }]);\n\n  return ProductList;\n}(react__WEBPACK_IMPORTED_MODULE_7__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nreact_dom__WEBPACK_IMPORTED_MODULE_8__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(ProductList, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://clientapp/./src/views/areas/product/Index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3b9e8ca98c0d3214e998"; }
/******/ }();
/******/ 
/******/ }
);