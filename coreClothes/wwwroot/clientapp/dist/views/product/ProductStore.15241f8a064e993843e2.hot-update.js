"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclientapp"]("product/ProductStore",{

/***/ "./src/views/product/ProductStore.js":
/*!*******************************************!*\
  !*** ./src/views/product/ProductStore.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar ProductStore = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ProductStore, _React$Component);\n\n  var _super = _createSuper(ProductStore);\n\n  function ProductStore(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ProductStore);\n\n    _this = _super.call(this, props);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"addToCart\", function () {\n      // let products = this.props.father.state.productsCart;\n      var product = _this.props.product;\n      console.log(\"Produtos\");\n      console.log(products);\n      console.log(\"Produto!\");\n      console.log(product);\n      var i = products.findIndex(function (item) {\n        return item.id == product.id;\n      });\n\n      if (i == -1) {\n        products.push(product);\n      } else products[i].stock++;\n\n      _this.setState({\n        productsCart: products\n      });\n\n      document.getElementById(\"cart-count\").innerText = products.length;\n      localStorage.setItem(\"products\", JSON.stringify(products));\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"render\", function () {\n      var view = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"col-6 col-md-4 col-lg-4 col-xl-3\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"product product-7 text-center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"figure\", {\n        className: \"product-media\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"/Product/Details\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"img\", {\n        src: _this.props.product.urlImg,\n        alt: \"Product image\",\n        style: {\n          height: 200,\n          objectFit: 'fill'\n        },\n        className: \"product-image\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"product-action-vertical\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"#\",\n        className: \"btn-product-icon btn-wishlist btn-expandable\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"span\", null, \"add to wishlist\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"product-action\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        style: {\n          cursor: 'pointer'\n        },\n        onClick: function onClick() {\n          return _this.addToCart(_this.props.product);\n        },\n        className: \"btn-product btn-cart\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"span\", null, \"add to cart\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"product-body\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"product-cat\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"#\"\n      }, _this.props.product.category.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"h3\", {\n        className: \"product-title\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"/Product/Details\"\n      }, _this.props.product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"product-price\"\n      }, \"$\", _this.props.product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"text-sm\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"span\", {\n        style: {\n          opacity: \"55%\"\n        }\n      }, \"Stock: \", _this.props.product.stock)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"ratings-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"ratings\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"ratings-val\",\n        style: {\n          width: 100 + '%'\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"span\", {\n        className: \"ratings-text\"\n      }, \"( 100 Reviews )\"))))));\n      return view;\n    });\n\n    if (localStorage.getItem(\"products\") != null) _this.props.father.this.setState({\n      productsCart: JSON.parse(localStorage.getItem(\"products\"))\n    });\n    return _this;\n  }\n\n  return ProductStore;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductStore);\n\n//# sourceURL=webpack://clientapp/./src/views/product/ProductStore.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "114b243e46ce9dc8ef59"; }
/******/ }();
/******/ 
/******/ }
);