/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_ImportContacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/ImportContacts */ \"@mui/icons-material/ImportContacts\");\n/* harmony import */ var _mui_icons_material_ImportContacts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ImportContacts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nconst Header = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const handleChange = (e, val)=>{\n        setValue(val);\n        switch(val){\n            case 0:\n                {\n                    router.push(\"/\");\n                    return;\n                }\n            case 1:\n                {\n                    router.push(\"/books\");\n                    return;\n                }\n            default:\n                return;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {\n        sx: {\n            bgcolor: \"#322dd3\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_ImportContacts__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        sx: {\n                            fontSize: \"26px\",\n                            color: \"whitesmoke\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/romantrynko/Documents/next-mui-books/components/Header.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/romantrynko/Documents/next-mui-books/components/Header.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    display: \"flex\",\n                    margin: \"auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                        onChange: handleChange,\n                        value: value,\n                        textColor: \"inherit\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                label: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/romantrynko/Documents/next-mui-books/components/Header.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                label: \"All Books\"\n                            }, void 0, false, {\n                                fileName: \"/Users/romantrynko/Documents/next-mui-books/components/Header.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/romantrynko/Documents/next-mui-books/components/Header.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/romantrynko/Documents/next-mui-books/components/Header.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/romantrynko/Documents/next-mui-books/components/Header.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/romantrynko/Documents/next-mui-books/components/Header.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFvRTtBQUM3QjtBQUNRO0FBQ0E7QUFDSjtBQUNIO0FBRXhDLE1BQU1VLE1BQU0sR0FBRyxJQUFNO0lBQ25CLE1BQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBRTtJQUMxQixNQUFNLEtBQUNHLEtBQUssTUFBRUMsUUFBUSxNQUFJWCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxNQUFNWSxZQUFZLEdBQUcsQ0FBQ0MsQ0FBQyxFQUFFQyxHQUFHLEdBQUs7UUFDL0JILFFBQVEsQ0FBQ0csR0FBRyxDQUFDO1FBQ2IsT0FBUUEsR0FBRztZQUNULEtBQUssQ0FBQztnQkFDSjtvQkFDRUwsTUFBTSxDQUFDTSxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUNoQixPQUFNO2dCQUNSLENBQUM7WUFDSCxLQUFLLENBQUM7Z0JBQ0o7b0JBQ0VOLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDckIsT0FBTTtnQkFDUixDQUFDO1lBQ0g7Z0JBQ0UsT0FBTTtTQUNUO0lBQ0gsQ0FBQztJQUVELHFCQUNFLDhEQUFDZCxpREFBTTtRQUFDZSxFQUFFLEVBQUU7WUFBQ0MsT0FBTyxFQUFFLFNBQVM7U0FBQztrQkFDOUIsNEVBQUNmLGtEQUFPOzs4QkFDTiw4REFBQ0kscURBQVU7OEJBQ1QsNEVBQUNSLDJFQUFrQjt3QkFBQ2tCLEVBQUUsRUFBRTs0QkFDdEJFLFFBQVEsRUFBRSxNQUFNOzRCQUNoQkMsS0FBSyxFQUFFLFlBQVk7eUJBQ3BCOzs7OztpQ0FBSTs7Ozs7NkJBQ007OEJBQ2IsOERBQUNoQiw4Q0FBRztvQkFBQ2lCLE9BQU8sRUFBQyxNQUFNO29CQUFDQyxNQUFNLEVBQUMsTUFBTTs4QkFDL0IsNEVBQUNoQiwrQ0FBSTt3QkFBQ2lCLFFBQVEsRUFBRVYsWUFBWTt3QkFBRUYsS0FBSyxFQUFFQSxLQUFLO3dCQUFFYSxTQUFTLEVBQUMsU0FBUzs7MENBQzdELDhEQUFDbkIsOENBQUc7Z0NBQUNvQixLQUFLLEVBQUMsTUFBTTs7Ozs7eUNBQUc7MENBQ3BCLDhEQUFDcEIsOENBQUc7Z0NBQUNvQixLQUFLLEVBQUMsV0FBVzs7Ozs7eUNBQUc7Ozs7OztpQ0FDcEI7Ozs7OzZCQUNIOzs7Ozs7cUJBQ0U7Ozs7O2lCQUNILENBQ1Y7QUFDSCxDQUFDO0FBRUQsaUVBQWVoQixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1tdWktYm9vay1zdG9yZS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzeD81NjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbXBvcnRDb250YWN0c0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9JbXBvcnRDb250YWN0cyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgeyBCb3gsIFRhYiwgVGFicyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgdmFsKSA9PiB7XG4gICAgc2V0VmFsdWUodmFsKVxuICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIGNhc2UgMTpcbiAgICAgICAge1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvYm9va3MnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBcHBCYXIgc3g9e3tiZ2NvbG9yOiAnIzMyMmRkMyd9fT5cbiAgICAgIDxUb29sYmFyPlxuICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICA8SW1wb3J0Q29udGFjdHNJY29uIHN4PXt7XG4gICAgICAgICAgICBmb250U2l6ZTogJzI2cHgnLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZXNtb2tlJ1xuICAgICAgICAgIH19IC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBtYXJnaW49J2F1dG8nID5cbiAgICAgICAgICA8VGFicyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWV9IHRleHRDb2xvcj0naW5oZXJpdCc+XG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiSG9tZVwiIC8+XG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiQWxsIEJvb2tzXCIgLz5cbiAgICAgICAgICA8L1RhYnM+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Ub29sYmFyPlxuICAgIDwvQXBwQmFyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJJbXBvcnRDb250YWN0c0ljb24iLCJSZWFjdCIsInVzZVN0YXRlIiwiQXBwQmFyIiwiVG9vbGJhciIsIkJveCIsIlRhYiIsIlRhYnMiLCJJY29uQnV0dG9uIiwidXNlUm91dGVyIiwiSGVhZGVyIiwicm91dGVyIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWwiLCJwdXNoIiwic3giLCJiZ2NvbG9yIiwiZm9udFNpemUiLCJjb2xvciIsImRpc3BsYXkiLCJtYXJnaW4iLCJvbkNoYW5nZSIsInRleHRDb2xvciIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/romantrynko/Documents/next-mui-books/pages/_app.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/romantrynko/Documents/next-mui-books/pages/_app.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNYO0FBRTlCLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFOzswQkFDRSw4REFBQ0gsMERBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNFLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7O29CQUMzQixDQUNKO0FBQ0gsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1tdWktYm9vay1zdG9yZS8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/icons-material/ImportContacts":
/*!*****************************************************!*\
  !*** external "@mui/icons-material/ImportContacts" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ImportContacts");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();