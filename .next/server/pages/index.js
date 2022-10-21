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

/***/ "./components/BookItem.jsx":
/*!*********************************!*\
  !*** ./components/BookItem.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst BookItem = ({ title , author , id , price , imageUrl , featured  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        sx: {\n            width: \"100%\",\n            height: \"100%\",\n            \":hover\": {\n                boxShadow: \"0 10px 20px #ccc\",\n                transform: \"scale(1.01)\"\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActionArea, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    sx: {\n                        position: \"relative\"\n                    },\n                    children: [\n                        featured && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            sx: {\n                                position: \"absolute\",\n                                top: 0,\n                                left: 0,\n                                padding: \"10px 20px 10px 10px\",\n                                background: \"red\",\n                                boxShadow: \"0 4px 8px 3px rgba(0,0,0,0.7)\",\n                                borderBottomRightRadius: 40,\n                                color: \"white\",\n                                letterSpacing: 2,\n                                fontSize: 16\n                            },\n                            children: \"Featured\"\n                        }, void 0, false, {\n                            fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardMedia, {\n                            component: \"img\",\n                            height: \"340\",\n                            image: imageUrl,\n                            alt: \"green iguana\"\n                        }, void 0, false, {\n                            fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                    sx: {\n                        padding: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                            gutterBottom: true,\n                            variant: \"h5\",\n                            component: \"div\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                            gutterBottom: true,\n                            variant: \"subtitle2\",\n                            component: \"div\",\n                            children: [\n                                \"Author: \",\n                                author\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                            variant: \"body2\",\n                            color: \"text.secondary\",\n                            children: [\n                                \"Cost: $\",\n                                price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            sx: {\n                                display: \"flex\",\n                                justifyContent: \"space-between\",\n                                marginTop: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    type: \"button\",\n                                    color: \"secondary\",\n                                    variant: \"outlined\",\n                                    children: \"Edit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    type: \"button\",\n                                    variant: \"outlined\",\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookItem.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tJdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFRdUI7QUFDRztBQUUxQixNQUFNUSxRQUFRLEdBQUcsQ0FBQyxFQUFFQyxLQUFLLEdBQUVDLE1BQU0sR0FBRUMsRUFBRSxHQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRUMsUUFBUSxHQUFFLEdBQUs7SUFDckUscUJBQ0UsOERBQUNaLCtDQUFJO1FBQ0hhLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsTUFBTTtZQUNiQyxNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRTtnQkFDUkMsU0FBUyxFQUFFLGtCQUFrQjtnQkFDN0JDLFNBQVMsRUFBRSxhQUFhO2FBQ3pCO1NBQ0Y7a0JBQ0QsNEVBQUNoQix5REFBYzs7OEJBQ2IsOERBQUNILDhDQUFHO29CQUFDZSxFQUFFLEVBQUU7d0JBQUVLLFFBQVEsRUFBRSxVQUFVO3FCQUFFOzt3QkFDOUJOLFFBQVEsa0JBQ1AsOERBQUNkLDhDQUFHOzRCQUNGZSxFQUFFLEVBQUU7Z0NBQ0ZLLFFBQVEsRUFBRSxVQUFVO2dDQUNwQkMsR0FBRyxFQUFFLENBQUM7Z0NBQ05DLElBQUksRUFBRSxDQUFDO2dDQUNQQyxPQUFPLEVBQUUscUJBQXFCO2dDQUM5QkMsVUFBVSxFQUFFLEtBQUs7Z0NBQ2hCTixTQUFTLEVBQUUsK0JBQStCO2dDQUMzQ08sdUJBQXVCLEVBQUUsRUFBRTtnQ0FDM0JDLEtBQUssRUFBRSxPQUFPO2dDQUNkQyxhQUFhLEVBQUUsQ0FBQztnQ0FDaEJDLFFBQVEsRUFBRSxFQUFFOzZCQUNiO3NDQUFFLFVBRUw7Ozs7O3FDQUFNO3NDQUVSLDhEQUFDdkIsb0RBQVM7NEJBQ1J3QixTQUFTLEVBQUMsS0FBSzs0QkFDZlosTUFBTSxFQUFDLEtBQUs7NEJBQ1phLEtBQUssRUFBRWpCLFFBQVE7NEJBQ2ZrQixHQUFHLEVBQUMsY0FBYzs7Ozs7cUNBQ2xCOzs7Ozs7NkJBQ0U7OEJBQ04sOERBQUMzQixzREFBVztvQkFBQ1csRUFBRSxFQUFFO3dCQUFFUSxPQUFPLEVBQUUsTUFBTTtxQkFBRTs7c0NBQ2xDLDhEQUFDakIscURBQVU7NEJBQ1QwQixZQUFZOzRCQUNaQyxPQUFPLEVBQUMsSUFBSTs0QkFDWkosU0FBUyxFQUFDLEtBQUs7c0NBQ2RwQixLQUFLOzs7OztxQ0FDSztzQ0FDYiw4REFBQ0gscURBQVU7NEJBQ1QwQixZQUFZOzRCQUNaQyxPQUFPLEVBQUMsV0FBVzs0QkFDbkJKLFNBQVMsRUFBQyxLQUFLOztnQ0FBQyxVQUNSO2dDQUFDbkIsTUFBTTs7Ozs7O3FDQUNKO3NDQUNiLDhEQUFDSixxREFBVTs0QkFDVDJCLE9BQU8sRUFBQyxPQUFPOzRCQUNmUCxLQUFLLEVBQUMsZ0JBQWdCOztnQ0FBQyxTQUNoQjtnQ0FBQ2QsS0FBSzs7Ozs7O3FDQUNGO3NDQUNiLDhEQUFDWiw4Q0FBRzs0QkFDRmUsRUFBRSxFQUFFO2dDQUNGbUIsT0FBTyxFQUFFLE1BQU07Z0NBQ2ZDLGNBQWMsRUFBRSxlQUFlO2dDQUMvQkMsU0FBUyxFQUFFLENBQUM7NkJBQ2I7OzhDQUNELDhEQUFDbkMsaURBQU07b0NBQ0xvQyxJQUFJLEVBQUMsUUFBUTtvQ0FDYlgsS0FBSyxFQUFDLFdBQVc7b0NBQ2pCTyxPQUFPLEVBQUMsVUFBVTs4Q0FBQyxNQUVyQjs7Ozs7NkNBQVM7OENBQ1QsOERBQUNoQyxpREFBTTtvQ0FDTG9DLElBQUksRUFBQyxRQUFRO29DQUNiSixPQUFPLEVBQUMsVUFBVTs4Q0FBQyxRQUVyQjs7Ozs7NkNBQVM7Ozs7OztxQ0FDTDs7Ozs7OzZCQUNNOzs7Ozs7cUJBQ0M7Ozs7O2lCQUNaLENBQ1A7QUFDSixDQUFDO0FBRUQsaUVBQWV6QixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW11aS1ib29rLXN0b3JlLy4vY29tcG9uZW50cy9Cb29rSXRlbS5qc3g/NjE1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbkFyZWEsXG4gIENhcmRDb250ZW50LFxuICBDYXJkTWVkaWEsXG4gIFR5cG9ncmFwaHlcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBCb29rSXRlbSA9ICh7IHRpdGxlLCBhdXRob3IsIGlkLCBwcmljZSwgaW1hZ2VVcmwsIGZlYXR1cmVkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgc3g9e3tcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnMCAxMHB4IDIwcHggI2NjYycsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wMSknXG4gICAgICAgIH1cbiAgICAgIH19PlxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICA8Qm94IHN4PXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIHtmZWF0dXJlZCAmJiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMjBweCAxMHB4IDEwcHgnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZWQnLFxuICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDRweCA4cHggM3B4IHJnYmEoMCwwLDAsMC43KScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDQwLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IDIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE2XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBGZWF0dXJlZFxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMzQwXCJcbiAgICAgICAgICAgIGltYWdlPXtpbWFnZVVybH1cbiAgICAgICAgICAgIGFsdD1cImdyZWVuIGlndWFuYVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxDYXJkQ29udGVudCBzeD17eyBwYWRkaW5nOiAnMTBweCcgfX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUyXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgQXV0aG9yOiB7YXV0aG9yfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIENvc3Q6ICR7cHJpY2V9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxuICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb29rSXRlbTtcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJDYXJkIiwiQ2FyZEFjdGlvbkFyZWEiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsIkJvb2tJdGVtIiwidGl0bGUiLCJhdXRob3IiLCJpZCIsInByaWNlIiwiaW1hZ2VVcmwiLCJmZWF0dXJlZCIsInN4Iiwid2lkdGgiLCJoZWlnaHQiLCJib3hTaGFkb3ciLCJ0cmFuc2Zvcm0iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJjb21wb25lbnQiLCJpbWFnZSIsImFsdCIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BookItem.jsx\n");

/***/ }),

/***/ "./components/BookList.jsx":
/*!*********************************!*\
  !*** ./components/BookList.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BookItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookItem */ \"./components/BookItem.jsx\");\n\n\n\n\nconst BookList = ({ data  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n            sx: {\n                display: \"flex\",\n                justifyContent: \"center\"\n            },\n            marginTop: 10,\n            container: true,\n            gap: 3,\n            children: data.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    xs: 6,\n                    sm: 4,\n                    md: 3,\n                    height: 500,\n                    width: \"100%\",\n                    item: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...book\n                    }, void 0, false, {\n                        fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookList.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookList.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookList.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/romantrynko/Documents/next-mui-books/components/BookList.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tMaXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3NCO0FBQ2Q7QUFFbEMsTUFBTUksUUFBUSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFFLEdBQUs7SUFDN0IscUJBQ0UsOERBQUNKLG9EQUFTO2tCQUNSLDRFQUFDQywrQ0FBSTtZQUNISSxFQUFFLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRSxNQUFNO2dCQUFFQyxjQUFjLEVBQUUsUUFBUTthQUFFO1lBQ2pEQyxTQUFTLEVBQUUsRUFBRTtZQUNiQyxTQUFTO1lBQ1RDLEdBQUcsRUFBRSxDQUFDO3NCQUNMTixJQUFJLENBQUNPLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLEtBQUssaUJBQ3BCLDhEQUFDWiwrQ0FBSTtvQkFDSGEsRUFBRSxFQUFFLENBQUM7b0JBQ0xDLEVBQUUsRUFBRSxDQUFDO29CQUNMQyxFQUFFLEVBQUUsQ0FBQztvQkFDTEMsTUFBTSxFQUFFLEdBQUc7b0JBQ1hDLEtBQUssRUFBRSxNQUFNO29CQUViQyxJQUFJOzhCQUNKLDRFQUFDakIsaURBQVE7d0JBQUUsR0FBR1UsSUFBSTs7Ozs7aUNBQUk7bUJBRmpCQyxLQUFLOzs7OzZCQUdMLENBQ1A7Ozs7O3FCQUNHOzs7OztpQkFDRyxDQUNaO0FBQ0osQ0FBQztBQUVELGlFQUFlVixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW11aS1ib29rLXN0b3JlLy4vY29tcG9uZW50cy9Cb29rTGlzdC5qc3g/OGQ1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgQm9va0l0ZW0gZnJvbSAnLi9Cb29rSXRlbSc7XG5cbmNvbnN0IEJvb2tMaXN0ID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkXG4gICAgICAgIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG4gICAgICAgIG1hcmdpblRvcD17MTB9XG4gICAgICAgIGNvbnRhaW5lclxuICAgICAgICBnYXA9ezN9PlxuICAgICAgICB7ZGF0YS5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIHhzPXs2fVxuICAgICAgICAgICAgc209ezR9XG4gICAgICAgICAgICBtZD17M31cbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBpdGVtPlxuICAgICAgICAgICAgPEJvb2tJdGVtIHsuLi5ib29rfSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIkdyaWQiLCJCb29rSXRlbSIsIkJvb2tMaXN0IiwiZGF0YSIsInN4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiY29udGFpbmVyIiwiZ2FwIiwibWFwIiwiYm9vayIsImluZGV4IiwieHMiLCJzbSIsIm1kIiwiaGVpZ2h0Iiwid2lkdGgiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BookList.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_helper_frontend_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-helper/frontend/utils */ \"./api-helper/frontend/utils.js\");\n/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BookList */ \"./components/BookList.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_helper_frontend_utils__WEBPACK_IMPORTED_MODULE_1__]);\n_api_helper_frontend_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home({ books  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: books\n    }, void 0, false, {\n        fileName: \"/Users/romantrynko/Documents/next-mui-books/pages/index.jsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\nconst getStaticProps = async ()=>{\n    const books = await (0,_api_helper_frontend_utils__WEBPACK_IMPORTED_MODULE_1__.getFeaturedBooks)();\n    return {\n        props: {\n            books\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0U7QUFDbEI7QUFFL0IsU0FBU0UsSUFBSSxDQUFDLEVBQUVDLEtBQUssR0FBRSxFQUFFO0lBQ3RDLHFCQUFPLDhEQUFDRiw0REFBUTtRQUFDRyxJQUFJLEVBQUVELEtBQUs7Ozs7O1lBQUksQ0FBQztBQUNuQyxDQUFDO0FBRU0sTUFBTUUsY0FBYyxHQUFHLFVBQVk7SUFDeEMsTUFBTUYsS0FBSyxHQUFHLE1BQU1ILDRFQUFnQixFQUFFO0lBQ3RDLE9BQU87UUFDTE0sS0FBSyxFQUFFO1lBQ0xILEtBQUs7U0FDTjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW11aS1ib29rLXN0b3JlLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RmVhdHVyZWRCb29rcyB9IGZyb20gJy4uL2FwaS1oZWxwZXIvZnJvbnRlbmQvdXRpbHMnO1xuaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQm9va0xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYm9va3MgfSkge1xuICByZXR1cm4gPEJvb2tMaXN0IGRhdGE9e2Jvb2tzfSAvPjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBib29rcyA9IGF3YWl0IGdldEZlYXR1cmVkQm9va3MoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYm9va3NcbiAgICB9XG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImdldEZlYXR1cmVkQm9va3MiLCJCb29rTGlzdCIsIkhvbWUiLCJib29rcyIsImRhdGEiLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();