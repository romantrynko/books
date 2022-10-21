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
exports.id = "pages/api/books";
exports.ids = ["pages/api/books"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./api-helper/controllers/books-controller.js":
/*!****************************************************!*\
  !*** ./api-helper/controllers/books-controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBook\": () => (/* binding */ addBook),\n/* harmony export */   \"deleteBook\": () => (/* binding */ deleteBook),\n/* harmony export */   \"getAllBooks\": () => (/* binding */ getAllBooks),\n/* harmony export */   \"getBook\": () => (/* binding */ getBook),\n/* harmony export */   \"updateBook\": () => (/* binding */ updateBook)\n/* harmony export */ });\n/* harmony import */ var _model_Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Book */ \"(api)/./api-helper/model/Book.js\");\n\nconst getAllBooks = async (req, res)=>{\n    let books;\n    try {\n        books = await _model_Book__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    } catch (err) {\n        return new Error(err);\n    }\n    if (!books) {\n        return res.status(500).json({\n            message: \"Internal Server Error\"\n        });\n    }\n    if (books.length === 0) {\n        return res.status(404).json({\n            message: \"No books found\"\n        });\n    }\n    return res.status(200).json({\n        books\n    });\n};\nconst addBook = async (req, res)=>{\n    const { title , author , price , imageUrl , featured  } = req.body;\n    if (!title && title.trim() === \"\" && !author && author.trim() === \"\" && !price && !imageUrl && imageUrl.trim() === \"\") {\n        return res.status(422).json({\n            message: \"Invalid inputs\"\n        });\n    }\n    let book;\n    try {\n        book = new _model_Book__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            title,\n            author,\n            price,\n            imageUrl,\n            featured\n        });\n        book = await book.save();\n    } catch (err) {\n        return new Error(err);\n    }\n    if (!book) {\n        return res.status(500).json({\n            message: \"Internal server error\"\n        });\n    }\n    return res.status(201).json({\n        book\n    });\n};\nconst updateBook = async (req, res)=>{\n    const { id  } = req.query;\n    console.log(id);\n    const { title , author , price , imageUrl , featured  } = req.body;\n    if (!title && title.trim() === \"\" && !author && author.trim() === \"\" && !price && !imageUrl && imageUrl.trim() === \"\") {\n        return res.status(422).json({\n            message: \"Invalid inputs\"\n        });\n    }\n    let book;\n    try {\n        book = await _model_Book__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(id, {\n            title,\n            author,\n            price,\n            imageUrl,\n            featured\n        });\n    } catch (err) {\n        return new Error(err);\n    }\n    if (!book) {\n        return res.status(500).json({\n            message: \"Internal server error\"\n        });\n    }\n    return res.status(200).json({\n        message: \"Successfully updated\"\n    });\n};\nconst deleteBook = async (req, res)=>{\n    const { id  } = req.query;\n    let book;\n    try {\n        book = await _model_Book__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndRemove(id);\n    } catch (err) {\n        return new Error(err);\n    }\n    if (!book) {\n        return res.status(500).json({\n            message: \"Unable to delete\"\n        });\n    }\n    return res.status(200).json({\n        message: \"Successfully Deleted\"\n    });\n};\nconst getBook = async (req, res)=>{\n    const { id  } = req.query;\n    let book;\n    try {\n        book = await _model_Book__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    } catch (err) {\n        return new Error(err);\n    }\n    if (!book) {\n        return res.status(404).json({\n            message: \"Book not found\"\n        });\n    }\n    return res.status(200).json({\n        book\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcGktaGVscGVyL2NvbnRyb2xsZXJzL2Jvb2tzLWNvbnRyb2xsZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBRTFCLE1BQU1DLFdBQVcsR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM3QyxJQUFJQyxLQUFLO0lBRVQsSUFBSTtRQUNGQSxLQUFLLEdBQUcsTUFBTUosd0RBQVMsRUFBRTtJQUMzQixFQUFFLE9BQU9NLEdBQUcsRUFBRTtRQUNaLE9BQU8sSUFBSUMsS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxDQUFDRixLQUFLLEVBQUU7UUFDVixPQUFPRCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSx1QkFBdUI7U0FBRSxDQUFDO0lBQ25FLENBQUM7SUFFRCxJQUFJTixLQUFLLENBQUNPLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdEIsT0FBT1IsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsZ0JBQWdCO1NBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsT0FBT1AsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFTCxLQUFLO0tBQUUsQ0FBQztBQUN4QyxDQUFDO0FBRU0sTUFBTVEsT0FBTyxHQUFHLE9BQU9WLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ3pDLE1BQU0sRUFBRVUsS0FBSyxHQUFFQyxNQUFNLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUUsR0FBR2YsR0FBRyxDQUFDZ0IsSUFBSTtJQUU3RCxJQUFJLENBQUNMLEtBQUssSUFBSUEsS0FBSyxDQUFDTSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQ0wsTUFBTSxJQUFJQSxNQUFNLENBQUNLLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDSixLQUFLLElBQUksQ0FBQ0MsUUFBUSxJQUFJQSxRQUFRLENBQUNHLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNySCxPQUFPaEIsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsZ0JBQWdCO1NBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsSUFBSVUsSUFBSTtJQUVSLElBQUk7UUFDRkEsSUFBSSxHQUFHLElBQUlwQixtREFBSSxDQUFDO1lBQUVhLEtBQUs7WUFBRUMsTUFBTTtZQUFFQyxLQUFLO1lBQUVDLFFBQVE7WUFBRUMsUUFBUTtTQUFFLENBQUM7UUFDN0RHLElBQUksR0FBRyxNQUFNQSxJQUFJLENBQUNDLElBQUksRUFBRSxDQUFDO0lBQzNCLEVBQUUsT0FBT2YsR0FBRyxFQUFFO1FBQ1osT0FBTyxJQUFJQyxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxDQUFDYyxJQUFJLEVBQUU7UUFDVCxPQUFPakIsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsdUJBQXVCO1NBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQsT0FBT1AsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFVyxJQUFJO0tBQUUsQ0FBQztBQUN2QyxDQUFDO0FBRU0sTUFBTUUsVUFBVSxHQUFHLE9BQU9wQixHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM1QyxNQUFNLEVBQUVvQixFQUFFLEdBQUUsR0FBR3JCLEdBQUcsQ0FBQ3NCLEtBQUs7SUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxFQUFFLENBQUMsQ0FBQztJQUVoQixNQUFNLEVBQUVWLEtBQUssR0FBRUMsTUFBTSxHQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRUMsUUFBUSxHQUFFLEdBQUdmLEdBQUcsQ0FBQ2dCLElBQUk7SUFDN0QsSUFBSSxDQUFDTCxLQUFLLElBQUlBLEtBQUssQ0FBQ00sSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUNMLE1BQU0sSUFBSUEsTUFBTSxDQUFDSyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQ0osS0FBSyxJQUFJLENBQUNDLFFBQVEsSUFBSUEsUUFBUSxDQUFDRyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDckgsT0FBT2hCLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGdCQUFnQjtTQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELElBQUlVLElBQUk7SUFDUixJQUFJO1FBQ0ZBLElBQUksR0FBRyxNQUFNcEIscUVBQXNCLENBQUN1QixFQUFFLEVBQUU7WUFDdENWLEtBQUs7WUFBRUMsTUFBTTtZQUFFQyxLQUFLO1lBQUVDLFFBQVE7WUFBRUMsUUFBUTtTQUN6QyxDQUFDO0lBQ0osRUFBRSxPQUFPWCxHQUFHLEVBQUU7UUFDWixPQUFPLElBQUlDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLENBQUNjLElBQUksRUFBRTtRQUNULE9BQU9qQixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSx1QkFBdUI7U0FBRSxDQUFDO0lBQ25FLENBQUM7SUFDRCxPQUFPUCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxzQkFBc0I7S0FBRSxDQUFDO0FBQ2xFLENBQUM7QUFFTSxNQUFNa0IsVUFBVSxHQUFHLE9BQU8xQixHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM1QyxNQUFNLEVBQUVvQixFQUFFLEdBQUUsR0FBR3JCLEdBQUcsQ0FBQ3NCLEtBQUs7SUFFeEIsSUFBSUosSUFBSTtJQUVSLElBQUk7UUFDRkEsSUFBSSxHQUFHLE1BQU1wQixxRUFBc0IsQ0FBQ3VCLEVBQUUsQ0FBQztJQUN6QyxFQUFFLE9BQU9qQixHQUFHLEVBQUU7UUFDWixPQUFPLElBQUlDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLENBQUNjLElBQUksRUFBRTtRQUNULE9BQU9qQixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxrQkFBa0I7U0FBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxPQUFPUCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxzQkFBc0I7S0FBRSxDQUFDO0FBQ2xFLENBQUM7QUFFTSxNQUFNb0IsT0FBTyxHQUFHLE9BQU81QixHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUN6QyxNQUFNLEVBQUVvQixFQUFFLEdBQUUsR0FBR3JCLEdBQUcsQ0FBQ3NCLEtBQUs7SUFFeEIsSUFBSUosSUFBSTtJQUVSLElBQUk7UUFDRkEsSUFBSSxHQUFHLE1BQU1wQiw0REFBYSxDQUFDdUIsRUFBRSxDQUFDO0lBQ2hDLEVBQUUsT0FBT2pCLEdBQUcsRUFBRTtRQUNaLE9BQU8sSUFBSUMsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksQ0FBQ2MsSUFBSSxFQUFFO1FBQ1QsT0FBT2pCLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGdCQUFnQjtTQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELE9BQU9QLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRVcsSUFBSTtLQUFFLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbXVpLWJvb2stc3RvcmUvLi9hcGktaGVscGVyL2NvbnRyb2xsZXJzL2Jvb2tzLWNvbnRyb2xsZXIuanM/NTdmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9vayBmcm9tICcuLi9tb2RlbC9Cb29rJztcblxuZXhwb3J0IGNvbnN0IGdldEFsbEJvb2tzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCBib29rcztcblxuICB0cnkge1xuICAgIGJvb2tzID0gYXdhaXQgQm9vay5maW5kKClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihlcnIpO1xuICB9XG5cbiAgaWYgKCFib29rcykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pXG4gIH1cblxuICBpZiAoYm9va3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ05vIGJvb2tzIGZvdW5kJyB9KVxuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgYm9va3MgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGFkZEJvb2sgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgYXV0aG9yLCBwcmljZSwgaW1hZ2VVcmwsIGZlYXR1cmVkIH0gPSByZXEuYm9keVxuXG4gIGlmICghdGl0bGUgJiYgdGl0bGUudHJpbSgpID09PSAnJyAmJiAhYXV0aG9yICYmIGF1dGhvci50cmltKCkgPT09ICcnICYmICFwcmljZSAmJiAhaW1hZ2VVcmwgJiYgaW1hZ2VVcmwudHJpbSgpID09PSAnJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0cycgfSlcbiAgfVxuXG4gIGxldCBib29rO1xuXG4gIHRyeSB7XG4gICAgYm9vayA9IG5ldyBCb29rKHsgdGl0bGUsIGF1dGhvciwgcHJpY2UsIGltYWdlVXJsLCBmZWF0dXJlZCB9KVxuICAgIGJvb2sgPSBhd2FpdCBib29rLnNhdmUoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihlcnIpXG4gIH1cblxuICBpZiAoIWJvb2spIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KVxuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgYm9vayB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQm9vayA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnlcbiAgY29uc29sZS5sb2coaWQpO1xuXG4gIGNvbnN0IHsgdGl0bGUsIGF1dGhvciwgcHJpY2UsIGltYWdlVXJsLCBmZWF0dXJlZCB9ID0gcmVxLmJvZHlcbiAgaWYgKCF0aXRsZSAmJiB0aXRsZS50cmltKCkgPT09ICcnICYmICFhdXRob3IgJiYgYXV0aG9yLnRyaW0oKSA9PT0gJycgJiYgIXByaWNlICYmICFpbWFnZVVybCAmJiBpbWFnZVVybC50cmltKCkgPT09ICcnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgaW5wdXRzJyB9KVxuICB9XG5cbiAgbGV0IGJvb2s7XG4gIHRyeSB7XG4gICAgYm9vayA9IGF3YWl0IEJvb2suZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHtcbiAgICAgIHRpdGxlLCBhdXRob3IsIHByaWNlLCBpbWFnZVVybCwgZmVhdHVyZWRcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGVycilcbiAgfVxuXG4gIGlmICghYm9vaykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0pXG4gIH1cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSB1cGRhdGVkJyB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQm9vayA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XG5cbiAgbGV0IGJvb2s7XG5cbiAgdHJ5IHtcbiAgICBib29rID0gYXdhaXQgQm9vay5maW5kQnlJZEFuZFJlbW92ZShpZClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihlcnIpXG4gIH1cblxuICBpZiAoIWJvb2spIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnVW5hYmxlIHRvIGRlbGV0ZScgfSlcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgRGVsZXRlZCcgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEJvb2sgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gIGxldCBib29rXG5cbiAgdHJ5IHtcbiAgICBib29rID0gYXdhaXQgQm9vay5maW5kQnlJZChpZClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihlcnIpXG4gIH1cblxuICBpZiAoIWJvb2spIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnQm9vayBub3QgZm91bmQnIH0pXG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBib29rIH0pXG59Il0sIm5hbWVzIjpbIkJvb2siLCJnZXRBbGxCb29rcyIsInJlcSIsInJlcyIsImJvb2tzIiwiZmluZCIsImVyciIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJsZW5ndGgiLCJhZGRCb29rIiwidGl0bGUiLCJhdXRob3IiLCJwcmljZSIsImltYWdlVXJsIiwiZmVhdHVyZWQiLCJib2R5IiwidHJpbSIsImJvb2siLCJzYXZlIiwidXBkYXRlQm9vayIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJkZWxldGVCb29rIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJnZXRCb29rIiwiZmluZEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./api-helper/controllers/books-controller.js\n");

/***/ }),

/***/ "(api)/./api-helper/model/Book.js":
/*!**********************************!*\
  !*** ./api-helper/model/Book.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nconst bookSchema = new Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    author: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    imageUrl: {\n        type: String,\n        required: true\n    },\n    featured: {\n        type: Boolean\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Book) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Book\", bookSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcGktaGVscGVyL21vZGVsL0Jvb2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLE1BQU0sR0FBR0Qsd0RBQWU7QUFFOUIsTUFBTUUsVUFBVSxHQUFHLElBQUlELE1BQU0sQ0FBQztJQUM1QkUsS0FBSyxFQUFFO1FBQ0xDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0RDLE1BQU0sRUFBRTtRQUNOSCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNERSxLQUFLLEVBQUU7UUFDTEosSUFBSSxFQUFFSyxNQUFNO1FBQ1pILFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDREksUUFBUSxFQUFFO1FBQ1JOLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0RLLFFBQVEsRUFBRTtRQUNSUCxJQUFJLEVBQUVRLE9BQU87S0FDZDtDQUNGLENBQUM7QUFFRixpRUFBZVosNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsTUFBTSxFQUFFRSxVQUFVLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbXVpLWJvb2stc3RvcmUvLi9hcGktaGVscGVyL21vZGVsL0Jvb2suanM/MTYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbmNvbnN0IGJvb2tTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgYXV0aG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHByaWNlOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGltYWdlVXJsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGZlYXR1cmVkOiB7XG4gICAgdHlwZTogQm9vbGVhblxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkJvb2sgfHwgbW9uZ29vc2UubW9kZWwoJ0Jvb2snLCBib29rU2NoZW1hKTtcblxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiYm9va1NjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiYXV0aG9yIiwicHJpY2UiLCJOdW1iZXIiLCJpbWFnZVVybCIsImZlYXR1cmVkIiwiQm9vbGVhbiIsIm1vZGVscyIsIkJvb2siLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./api-helper/model/Book.js\n");

/***/ }),

/***/ "(api)/./api-helper/utils.js":
/*!*****************************!*\
  !*** ./api-helper/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDB\": () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0])) {\n        return;\n    }\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://trynkoroman:left4dead88@cluster0.zgcq7g8.mongodb.net/?retryWrites=true&w=majority\").then(()=>console.log(\"Connected to db\")).catch((err)=>console.log(err));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcGktaGVscGVyL3V0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUV4QixNQUFNQyxXQUFXLEdBQUcsVUFBWTtJQUNyQyxJQUFJRCxnRUFBdUIsRUFBRTtRQUMzQixPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU1BLHVEQUNJLENBQUMsaUdBQWlHLENBQUMsQ0FDMUdJLElBQUksQ0FBQyxJQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQzFDQyxLQUFLLENBQUNDLENBQUFBLEdBQUcsR0FBSUgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW11aS1ib29rLXN0b3JlLy4vYXBpLWhlbHBlci91dGlscy5qcz9jMzZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RCID0gYXN5bmMgKCkgPT4ge1xuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGF3YWl0IG1vbmdvb3NlXG4gICAgLmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vdHJ5bmtvcm9tYW46bGVmdDRkZWFkODhAY2x1c3RlcjAuemdjcTdnOC5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JylcbiAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIGRiJykpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RUb0RCIiwiY29ubmVjdGlvbnMiLCJjb25uZWN0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./api-helper/utils.js\n");

/***/ }),

/***/ "(api)/./pages/api/books.js":
/*!****************************!*\
  !*** ./pages/api/books.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _api_helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api-helper/utils */ \"(api)/./api-helper/utils.js\");\n/* harmony import */ var _api_helper_controllers_books_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-helper/controllers/books-controller */ \"(api)/./api-helper/controllers/books-controller.js\");\n\n\nasync function handler(req, res) {\n    await (0,_api_helper_utils__WEBPACK_IMPORTED_MODULE_0__.connectToDB)();\n    if (req.method === \"GET\") {\n        return (0,_api_helper_controllers_books_controller__WEBPACK_IMPORTED_MODULE_1__.getAllBooks)(req, res);\n    } else if (req.method === \"POST\") {\n        return (0,_api_helper_controllers_books_controller__WEBPACK_IMPORTED_MODULE_1__.addBook)(req, res);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYm9va3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBQ2dDO0FBRXRFLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUwsOERBQVcsRUFBRTtJQUVuQixJQUFJSSxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0wscUZBQVcsQ0FBQ0csR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDOUIsT0FBTyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDaEMsT0FBT0osaUZBQU8sQ0FBQ0UsR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDMUIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW11aS1ib29rLXN0b3JlLy4vcGFnZXMvYXBpL2Jvb2tzLmpzP2ViOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvREIgfSBmcm9tICcuLi8uLi9hcGktaGVscGVyL3V0aWxzJztcbmltcG9ydCB7IGdldEFsbEJvb2tzLCBhZGRCb29rIH0gZnJvbSAnLi4vLi4vYXBpLWhlbHBlci9jb250cm9sbGVycy9ib29rcy1jb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBhd2FpdCBjb25uZWN0VG9EQigpXG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgcmV0dXJuIGdldEFsbEJvb2tzKHJlcSwgcmVzKVxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHJldHVybiBhZGRCb29rKHJlcSwgcmVzKVxuICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3RUb0RCIiwiZ2V0QWxsQm9va3MiLCJhZGRCb29rIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/books.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/books.js"));
module.exports = __webpack_exports__;

})();