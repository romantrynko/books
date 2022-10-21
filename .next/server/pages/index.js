"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api-helper/frontend/utils.js":
/*!**************************************!*\
  !*** ./api-helper/frontend/utils.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllBooks\": () => (/* binding */ getAllBooks),\n/* harmony export */   \"getFeaturedBooks\": () => (/* binding */ getFeaturedBooks)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getAllBooks = async ()=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:3000/api/books\");\n    if (res.status !== 200) {\n        return new Error(\"Internal server error\");\n    }\n    const data = await res.data?.books;\n    return data;\n};\nconst getFeaturedBooks = async ()=>{\n    const books = await getAllBooks();\n    if (books.length === 0) {\n        return [];\n    }\n    const featuredBooks = books.filter((book)=>book.featured === true);\n    return featuredBooks;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGktaGVscGVyL2Zyb250ZW5kL3V0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUVsQixNQUFNQyxXQUFXLEdBQUcsVUFBWTtJQUNyQyxNQUFNQyxHQUFHLEdBQUcsTUFBTUYsaURBQVMsQ0FBQyxpQ0FBaUMsQ0FBQztJQUU5RCxJQUFJRSxHQUFHLENBQUNFLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDdEIsT0FBTyxJQUFJQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7SUFDM0MsQ0FBQztJQUNELE1BQU1DLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNJLElBQUksRUFBRUMsS0FBSztJQUVsQyxPQUFPRCxJQUFJO0FBQ2IsQ0FBQztBQUVNLE1BQU1FLGdCQUFnQixHQUFHLFVBQVk7SUFDMUMsTUFBTUQsS0FBSyxHQUFHLE1BQU1OLFdBQVcsRUFBRTtJQUVqQyxJQUFJTSxLQUFLLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdEIsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUVELE1BQU1DLGFBQWEsR0FBR0gsS0FBSyxDQUFDSSxNQUFNLENBQUNDLENBQUFBLElBQUksR0FBSUEsSUFBSSxDQUFDQyxRQUFRLEtBQUssSUFBSSxDQUFDO0lBRWxFLE9BQU9ILGFBQWE7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbXVpLWJvb2stc3RvcmUvLi9hcGktaGVscGVyL2Zyb250ZW5kL3V0aWxzLmpzP2RhMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQm9va3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rcycpXG5cbiAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludGVybmFsIHNlcnZlciBlcnJvcicpXG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhPy5ib29rcztcblxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RmVhdHVyZWRCb29rcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYm9va3MgPSBhd2FpdCBnZXRBbGxCb29rcygpO1xuXG4gIGlmIChib29rcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGNvbnN0IGZlYXR1cmVkQm9va3MgPSBib29rcy5maWx0ZXIoYm9vayA9PiBib29rLmZlYXR1cmVkID09PSB0cnVlKTtcblxuICByZXR1cm4gZmVhdHVyZWRCb29rc1xufSJdLCJuYW1lcyI6WyJheGlvcyIsImdldEFsbEJvb2tzIiwicmVzIiwiZ2V0Iiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwiYm9va3MiLCJnZXRGZWF0dXJlZEJvb2tzIiwibGVuZ3RoIiwiZmVhdHVyZWRCb29rcyIsImZpbHRlciIsImJvb2siLCJmZWF0dXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api-helper/frontend/utils.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_helper_frontend_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-helper/frontend/utils */ \"./api-helper/frontend/utils.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_helper_frontend_utils__WEBPACK_IMPORTED_MODULE_1__]);\n_api_helper_frontend_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Home({ books  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"home\"\n    }, void 0, false, {\n        fileName: \"/Users/romantrynko/Documents/next-mui-books/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\nconst getStaticProps = async ()=>{\n    const books = await (0,_api_helper_frontend_utils__WEBPACK_IMPORTED_MODULE_1__.getFeaturedBooks)();\n    return {\n        props: {\n            books\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQStEO0FBRWhELFNBQVNDLElBQUksQ0FBQyxFQUFFQyxLQUFLLEdBQUUsRUFBRTtJQUd0QyxxQkFDRSw4REFBQ0MsS0FBRztrQkFBQyxNQUVMOzs7OztZQUFNLENBQ1A7QUFDSCxDQUFDO0FBRU0sTUFBTUMsY0FBYyxHQUFHLFVBQVk7SUFFeEMsTUFBTUYsS0FBSyxHQUFHLE1BQU1GLDRFQUFnQixFQUFFO0lBQ3RDLE9BQU87UUFDTEssS0FBSyxFQUFFO1lBQ0xILEtBQUs7U0FDTjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbXVpLWJvb2stc3RvcmUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEZlYXR1cmVkQm9va3MgfSBmcm9tICcuLi9hcGktaGVscGVyL2Zyb250ZW5kL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYm9va3MgfSkge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgaG9tZVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuICBjb25zdCBib29rcyA9IGF3YWl0IGdldEZlYXR1cmVkQm9va3MoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBib29rc1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJnZXRGZWF0dXJlZEJvb2tzIiwiSG9tZSIsImJvb2tzIiwiZGl2IiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();