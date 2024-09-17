"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n // Import CSS-modulen\nfunction Home() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // Hold styr på gjeldende side\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // Hold styr på totalt antall sider\n    const resultsPerPage = 20; // Antall resultater per side\n    // Debounce function to avoid excessive API calls\n    const debounce = (func, delay)=>{\n        let timeoutId;\n        return function() {\n            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                args[_key] = arguments[_key];\n            }\n            if (timeoutId) clearTimeout(timeoutId);\n            timeoutId = setTimeout(()=>{\n                func(...args);\n            }, delay);\n        };\n    };\n    // Function to fetch data from BRREG API with pagination\n    const fetchEnheter = async function(searchQuery) {\n        let page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;\n        if (!searchQuery) {\n            setResults([]);\n            return;\n        }\n        setLoading(true);\n        setError(\"\");\n        try {\n            var _data__embedded;\n            // Fetch data from the BRREG API with pagination\n            const response = await fetch(\"https://data.brreg.no/enhetsregisteret/api/enheter?navn=\".concat(searchQuery, \"&page=\").concat(page, \"&size=\").concat(resultsPerPage));\n            if (!response.ok) {\n                throw new Error(\"Feil ved henting av data fra BRREG\");\n            }\n            const data = await response.json();\n            setResults(((_data__embedded = data._embedded) === null || _data__embedded === void 0 ? void 0 : _data__embedded.enheter) || []);\n            setTotalPages(data.page.totalPages); // Set total pages from API response\n        } catch (err) {\n            setError(err.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    // Create a debounced version of the fetchEnheter function\n    const debouncedFetchEnheter = debounce(fetchEnheter, 500);\n    // useEffect to trigger search as the user types or when the page changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        debouncedFetchEnheter(query, currentPage);\n    }, [\n        query,\n        currentPage\n    ]);\n    // Håndter bytte av side\n    const handlePageChange = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().hero),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroTitle),\n                        children: \"Finn Enheter fra Br\\xf8nn\\xf8ysundregistrene\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroSubtitle),\n                        children: \"Bruk v\\xe5r s\\xf8kefunksjon for \\xe5 finne informasjon om enheter registrert i Br\\xf8nn\\xf8ysundregistrene mens du skriver.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: query,\n                            onChange: (e)=>{\n                                setQuery(e.target.value);\n                                setCurrentPage(1); // Tilbakestill til side 1 ved nytt søk\n                            },\n                            placeholder: \"S\\xf8k p\\xe5 enhetsnavn\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchInput)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().loading),\n                children: \"Laster...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                lineNumber: 89,\n                columnNumber: 19\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().error),\n                children: [\n                    \"Feil: \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                lineNumber: 90,\n                columnNumber: 17\n            }, this),\n            results.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().results),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().resultsTitle),\n                        children: \"S\\xf8keresultater:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().resultsList),\n                        children: results.map((enhet)=>{\n                            var _enhet_forretningsadresse;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().resultItem),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: enhet.navn\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Organisasjonsnummer: \",\n                                            enhet.organisasjonsnummer\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Forretningsadresse:\",\n                                            \" \",\n                                            ((_enhet_forretningsadresse = enhet.forretningsadresse) === null || _enhet_forretningsadresse === void 0 ? void 0 : _enhet_forretningsadresse.adresse) || \"Ingen adresse tilgjengelig\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, enhet.organisasjonsnummer, true, {\n                                fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().pagination),\n                        children: Array.from({\n                            length: totalPages\n                        }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handlePageChange(index + 1),\n                                className: index + 1 === currentPage ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().activePageButton) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().pageButton),\n                                children: index + 1\n                            }, index + 1, false, {\n                                fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                                lineNumber: 113,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this),\n            results.length === 0 && !loading && query && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().noResults),\n                children: \"Ingen resultater funnet.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ydag\\\\Desktop\\\\brreg_api\\\\pages\\\\index.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jTnVX8dx9HZc8yZNXzv4h4Dsefg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7WUFHNUNKLFFBQVFtRCxNQUFNLEdBQUcsbUJBQ2hCLDhEQUFDakI7Z0JBQUlDLFdBQVd2Qyx3RUFBYzs7a0NBQzVCLDhEQUFDd0Q7d0JBQUdqQixXQUFXdkMsNkVBQW1CO2tDQUFFOzs7Ozs7a0NBQ3BDLDhEQUFDMEQ7d0JBQUduQixXQUFXdkMsNEVBQWtCO2tDQUM5QkksUUFBUXdELEdBQUcsQ0FBQyxDQUFDQztnQ0FNUEE7aURBTEwsOERBQUNDO2dDQUFtQ3ZCLFdBQVd2QywyRUFBaUI7O2tEQUM5RCw4REFBQ2dFO2tEQUFJSCxNQUFNSSxJQUFJOzs7Ozs7a0RBQ2YsOERBQUNyQjs7NENBQUU7NENBQXNCaUIsTUFBTUssbUJBQW1COzs7Ozs7O2tEQUNsRCw4REFBQ3RCOzs0Q0FBRTs0Q0FDbUI7NENBQ25CaUIsRUFBQUEsNEJBQUFBLE1BQU1NLGtCQUFrQixjQUF4Qk4sZ0RBQUFBLDBCQUEwQk8sT0FBTyxLQUNoQzs7Ozs7Ozs7K0JBTkdQLE1BQU1LLG1CQUFtQjs7Ozs7Ozs7Ozs7a0NBYXRDLDhEQUFDNUI7d0JBQUlDLFdBQVd2QywyRUFBaUI7a0NBQzlCc0UsTUFBTUMsSUFBSSxDQUFDOzRCQUFFaEIsUUFBUTNDO3dCQUFXLEdBQUcsQ0FBQzRELEdBQUdDLHNCQUN0Qyw4REFBQ0M7Z0NBRUNDLFNBQVMsSUFBTXZDLGlCQUFpQnFDLFFBQVE7Z0NBQ3hDbEMsV0FDRWtDLFFBQVEsTUFBTS9ELGNBQ1ZWLGlGQUF1QixHQUN2QkEsMkVBQWlCOzBDQUd0QnlFLFFBQVE7K0JBUkpBLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQnRCckUsUUFBUW1ELE1BQU0sS0FBSyxLQUFLLENBQUNqRCxXQUFXSix1QkFDbkMsOERBQUMwQztnQkFBRUwsV0FBV3ZDLDBFQUFnQjswQkFBRTs7Ozs7Ozs7Ozs7O0FBSXhDO0dBbkl3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjsgLy8gSW1wb3J0IENTUy1tb2R1bGVuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7IC8vIEhvbGQgc3R5ciBww6UgZ2plbGRlbmRlIHNpZGVcclxuICBjb25zdCBbdG90YWxQYWdlcywgc2V0VG90YWxQYWdlc10gPSB1c2VTdGF0ZSgxKTsgLy8gSG9sZCBzdHlyIHDDpSB0b3RhbHQgYW50YWxsIHNpZGVyXHJcbiAgY29uc3QgcmVzdWx0c1BlclBhZ2UgPSAyMDsgLy8gQW50YWxsIHJlc3VsdGF0ZXIgcGVyIHNpZGVcclxuXHJcbiAgLy8gRGVib3VuY2UgZnVuY3Rpb24gdG8gYXZvaWQgZXhjZXNzaXZlIEFQSSBjYWxsc1xyXG4gIGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIGRlbGF5KSA9PiB7XHJcbiAgICBsZXQgdGltZW91dElkO1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGlmICh0aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpO1xyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGZldGNoIGRhdGEgZnJvbSBCUlJFRyBBUEkgd2l0aCBwYWdpbmF0aW9uXHJcbiAgY29uc3QgZmV0Y2hFbmhldGVyID0gYXN5bmMgKHNlYXJjaFF1ZXJ5LCBwYWdlID0gMSkgPT4ge1xyXG4gICAgaWYgKCFzZWFyY2hRdWVyeSkge1xyXG4gICAgICBzZXRSZXN1bHRzKFtdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gRmV0Y2ggZGF0YSBmcm9tIHRoZSBCUlJFRyBBUEkgd2l0aCBwYWdpbmF0aW9uXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vZGF0YS5icnJlZy5uby9lbmhldHNyZWdpc3RlcmV0L2FwaS9lbmhldGVyP25hdm49JHtzZWFyY2hRdWVyeX0mcGFnZT0ke3BhZ2V9JnNpemU9JHtyZXN1bHRzUGVyUGFnZX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGZWlsIHZlZCBoZW50aW5nIGF2IGRhdGEgZnJhIEJSUkVHXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldFJlc3VsdHMoZGF0YS5fZW1iZWRkZWQ/LmVuaGV0ZXIgfHwgW10pO1xyXG4gICAgICBzZXRUb3RhbFBhZ2VzKGRhdGEucGFnZS50b3RhbFBhZ2VzKTsgLy8gU2V0IHRvdGFsIHBhZ2VzIGZyb20gQVBJIHJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgdGhlIGZldGNoRW5oZXRlciBmdW5jdGlvblxyXG4gIGNvbnN0IGRlYm91bmNlZEZldGNoRW5oZXRlciA9IGRlYm91bmNlKGZldGNoRW5oZXRlciwgNTAwKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0IHRvIHRyaWdnZXIgc2VhcmNoIGFzIHRoZSB1c2VyIHR5cGVzIG9yIHdoZW4gdGhlIHBhZ2UgY2hhbmdlc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkZWJvdW5jZWRGZXRjaEVuaGV0ZXIocXVlcnksIGN1cnJlbnRQYWdlKTtcclxuICB9LCBbcXVlcnksIGN1cnJlbnRQYWdlXSk7XHJcblxyXG4gIC8vIEjDpW5kdGVyIGJ5dHRlIGF2IHNpZGVcclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHsvKiBIZXJvIFNlY3Rpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9UaXRsZX0+XHJcbiAgICAgICAgICBGaW5uIEVuaGV0ZXIgZnJhIEJyw7hubsO4eXN1bmRyZWdpc3RyZW5lXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5oZXJvU3VidGl0bGV9PlxyXG4gICAgICAgICAgQnJ1ayB2w6VyIHPDuGtlZnVua3Nqb24gZm9yIMOlIGZpbm5lIGluZm9ybWFzam9uIG9tIGVuaGV0ZXIgcmVnaXN0cmVydCBpXHJcbiAgICAgICAgICBCcsO4bm7DuHlzdW5kcmVnaXN0cmVuZSBtZW5zIGR1IHNrcml2ZXIuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKDEpOyAvLyBUaWxiYWtlc3RpbGwgdGlsIHNpZGUgMSB2ZWQgbnl0dCBzw7hrXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU8O4ayBww6UgZW5oZXRzbmF2blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogTG9hZGluZyBhbmQgRXJyb3IgSGFuZGxpbmcgKi99XHJcbiAgICAgIHtsb2FkaW5nICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9Pkxhc3Rlci4uLjwvcD59XHJcbiAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+RmVpbDoge2Vycm9yfTwvcD59XHJcblxyXG4gICAgICB7LyogUmVzdWx0cyBTZWN0aW9uICovfVxyXG4gICAgICB7cmVzdWx0cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdHN9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdHNUaXRsZX0+U8O4a2VyZXN1bHRhdGVyOjwvaDI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0c0xpc3R9PlxyXG4gICAgICAgICAgICB7cmVzdWx0cy5tYXAoKGVuaGV0KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17ZW5oZXQub3JnYW5pc2Fzam9uc251bW1lcn0gY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2VuaGV0Lm5hdm59PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPk9yZ2FuaXNhc2pvbnNudW1tZXI6IHtlbmhldC5vcmdhbmlzYXNqb25zbnVtbWVyfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBGb3JyZXRuaW5nc2FkcmVzc2U6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7ZW5oZXQuZm9ycmV0bmluZ3NhZHJlc3NlPy5hZHJlc3NlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbmdlbiBhZHJlc3NlIHRpbGdqZW5nZWxpZ1wifVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICB7LyogUGFnaW5hdGlvbiBDb250cm9scyAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn0+XHJcbiAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiB0b3RhbFBhZ2VzIH0sIChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgaW5kZXggKyAxID09PSBjdXJyZW50UGFnZVxyXG4gICAgICAgICAgICAgICAgICAgID8gc3R5bGVzLmFjdGl2ZVBhZ2VCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5wYWdlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBObyBSZXN1bHRzIEhhbmRsaW5nICovfVxyXG4gICAgICB7cmVzdWx0cy5sZW5ndGggPT09IDAgJiYgIWxvYWRpbmcgJiYgcXVlcnkgJiYgKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vUmVzdWx0c30+SW5nZW4gcmVzdWx0YXRlciBmdW5uZXQuPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJIb21lIiwicXVlcnkiLCJzZXRRdWVyeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInRvdGFsUGFnZXMiLCJzZXRUb3RhbFBhZ2VzIiwicmVzdWx0c1BlclBhZ2UiLCJkZWJvdW5jZSIsImZ1bmMiLCJkZWxheSIsInRpbWVvdXRJZCIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZmV0Y2hFbmhldGVyIiwic2VhcmNoUXVlcnkiLCJwYWdlIiwiZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsIl9lbWJlZGRlZCIsImVuaGV0ZXIiLCJlcnIiLCJtZXNzYWdlIiwiZGVib3VuY2VkRmV0Y2hFbmhldGVyIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2VOdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoZXJvIiwiaDEiLCJoZXJvVGl0bGUiLCJwIiwiaGVyb1N1YnRpdGxlIiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInNlYXJjaElucHV0IiwibGVuZ3RoIiwiaDIiLCJyZXN1bHRzVGl0bGUiLCJ1bCIsInJlc3VsdHNMaXN0IiwibWFwIiwiZW5oZXQiLCJsaSIsInJlc3VsdEl0ZW0iLCJoMyIsIm5hdm4iLCJvcmdhbmlzYXNqb25zbnVtbWVyIiwiZm9ycmV0bmluZ3NhZHJlc3NlIiwiYWRyZXNzZSIsInBhZ2luYXRpb24iLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiYWN0aXZlUGFnZUJ1dHRvbiIsInBhZ2VCdXR0b24iLCJub1Jlc3VsdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});