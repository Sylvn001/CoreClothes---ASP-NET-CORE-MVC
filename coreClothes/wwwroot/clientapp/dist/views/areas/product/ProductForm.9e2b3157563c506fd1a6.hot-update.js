"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclientapp"]("areas/product/ProductForm",{

/***/ "./src/views/areas/product/ProductForm.js":
/*!************************************************!*\
  !*** ./src/views/areas/product/ProductForm.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar ProductForm = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ProductForm, _React$Component);\n\n  var _super = _createSuper(ProductForm);\n\n  function ProductForm() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ProductForm);\n\n    _this = _super.call(this);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"save\", function () {\n      if (_this.state.name.trim() == \"\" || _this.state.price.trim() == \"\" || _this.state.stock.trim() == \"\" || _this.state.category.trim() == \"\") {\n        _this.setState({\n          msg: \"all fields are required\",\n          success: false\n        });\n      } else {\n        var data = {\n          id: _this.state.id,\n          name: _this.state.name,\n          stock: _this.state.stock,\n          price: _this.state.price,\n          category: _this.state.category,\n          urlImg: _this.state.urlImg\n        };\n        HTTPClient.post(\"Admin/Product/Store\", data).then(function (r) {\n          return r.json();\n        }).then(function (r) {\n          console.log(r);\n\n          if (r.success) {\n            location.href = \"/admin/Product\";\n          } else {\n            _this.setState({\n              msg: r.msg,\n              success: r.success\n            });\n\n            console.log(_this.state.msg);\n          }\n        }).finally(function () {});\n      }\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"search\", function () {\n      HTTPClient.get(\"Admin/Category/Search?name=\" + encodeURIComponent(\"\")).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        console.log(r);\n\n        _this.setState({\n          categories: r\n        });\n      }).catch(function (e) {\n        console.log(e);\n      });\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"checkID\", function () {\n      alert(window.location.search.substr(2));\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"render\", function () {\n      var view = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"card-header\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"h3\", {\n        className: \"title\"\n      }, \"New Category\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"card-body\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"form\", {\n        className: \"\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"form-group col-4\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"label\", {\n        htmlFor: \"productName\"\n      }, \"ID\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control text-white bg-dark\",\n        placeholder: _this.state.id,\n        disabled: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"form-group col-4\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"label\", {\n        htmlFor: \"productName\"\n      }, \"Product Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control bg-dark\",\n        id: \"productName\",\n        name: \"name\",\n        value: _this.state.name,\n        onChange: function onChange(e) {\n          return _this.setState({\n            name: e.target.value\n          });\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"form-group col-4\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"label\", {\n        htmlFor: \"productPrice\"\n      }, \"Product Price\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control bg-dark\",\n        id: \"price\",\n        name: \"price\",\n        value: _this.state.price,\n        onChange: function onChange(e) {\n          return _this.setState({\n            price: e.target.value\n          });\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"form-group col-4\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"label\", {\n        htmlFor: \"productStock\"\n      }, \"Product Stock\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control bg-dark\",\n        id: \"productStock\",\n        name: \"stock\",\n        placeholder: \"0\",\n        value: _this.state.stock,\n        onChange: function onChange(e) {\n          return _this.setState({\n            stock: e.target.value\n          });\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"form-group col-4 \"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"label\", {\n        htmlFor: \"urlImg\"\n      }, \"URL IMG\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control bg-dark\",\n        id: \"urlIMG\",\n        name: \"urlImg\",\n        placeholder: \"\",\n        value: _this.state.urlImg,\n        onChange: function onChange(e) {\n          return _this.setState({\n            urlImg: e.target.value\n          });\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"form-group col-4\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"label\", {\n        htmlFor: \"productCategory\"\n      }, \"Select a Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"select\", {\n        className: \"form-control bg-dark \",\n        id: \"productCategory\",\n        name: \"category\",\n        value: _this.state.category,\n        onChange: function onChange(e) {\n          return _this.setState({\n            category: e.target.value\n          });\n        }\n      }, _this.state.categories.map(function (item) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"option\", {\n          value: item.id,\n          key: \"category-\" + item.id\n        }, item.name);\n      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"div\", {\n        className: \"card-footer\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"a\", {\n        className: \"text-white font-weight-bold\",\n        href: \"/admin/Product\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn btn-fill btn-info\"\n      }, \"CANCEL\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(\"button\", {\n        type: \"button\",\n        onClick: _this.save,\n        className: \"btn btn-fill btn-primary\"\n      }, \"Save\")));\n      return view;\n    });\n\n    _this.state = {\n      msg: '',\n      success: false,\n      name: '',\n      id: 0,\n      stock: '',\n      price: '',\n      category: '',\n      urlImg: '',\n      categories: []\n    };\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ProductForm, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.checkID();\n      this.search();\n    }\n  }]);\n\n  return ProductForm;\n}(react__WEBPACK_IMPORTED_MODULE_7__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductForm);\nreact_dom__WEBPACK_IMPORTED_MODULE_8__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(ProductForm, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://clientapp/./src/views/areas/product/ProductForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f61d8680116d133a66ca"; }
/******/ }();
/******/ 
/******/ }
);