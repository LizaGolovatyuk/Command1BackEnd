"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./components/game/EndPanel.jsx":
/*!**************************************!*\
  !*** ./components/game/EndPanel.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EndPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_EndPanel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/EndPanel.module.css */ \"./components/game/UI/EndPanel.module.css\");\n/* harmony import */ var _UI_EndPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_EndPanel_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./components/game/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction EndPanel() {\n    _s();\n    const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.score);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: (_UI_EndPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UI_EndPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: \"Конец игры\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\EndPanel.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"feather.png\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\EndPanel.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UI_EndPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().subTitle),\n                    children: [\n                        \"Вы узнали \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            class: (_UI_EndPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                            children: [\n                                count,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\EndPanel.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 31\n                        }, this),\n                        \"птиц из \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_UI_EndPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                            children: _store__WEBPACK_IMPORTED_MODULE_2__.MaxCountRounds\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\EndPanel.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\EndPanel.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\EndPanel.jsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(EndPanel, \"zCIbAOHEFyLamDMbTjXjegsHGUk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = EndPanel;\nvar _c;\n$RefreshReg$(_c, \"EndPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvRW5kUGFuZWwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNOO0FBQ0Y7QUFFdkIsU0FBU0c7O0lBQ3BCLE1BQU1DLFFBQVFILHdEQUFXQSxDQUFDSSxDQUFBQSxRQUFTQSxNQUFNQyxLQUFLO0lBQzlDLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxPQUFPUix3RUFBZTs7OEJBQ3ZCLDhEQUFDTztvQkFBSUcsV0FBV1Ysc0VBQWE7OEJBQUU7Ozs7Ozs4QkFHL0IsOERBQUNZO29CQUFJQyxLQUFJOzs7Ozs7OEJBQ1QsOERBQUNOO29CQUFJRyxXQUFXVix5RUFBZ0I7O3dCQUFFO3NDQUNwQiw4REFBQ2U7NEJBQUtQLE9BQU9SLHVFQUFjOztnQ0FBR0k7Z0NBQU07Ozs7Ozs7d0JBQVE7c0NBQzlDLDhEQUFDVzs0QkFBS0wsV0FBV1YsdUVBQWM7c0NBQUdFLGtEQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RTtHQWhCd0JDOztRQUNORixvREFBV0E7OztLQURMRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvRW5kUGFuZWwuanN4P2Q1ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vVUkvRW5kUGFuZWwubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge01heENvdW50Um91bmRzfSBmcm9tIFwiLi9zdG9yZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbmRQYW5lbCgpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2NvcmUpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAg0JrQvtC90LXRhiDQuNCz0YDRi1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImZlYXRoZXIucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3ViVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgINCS0Ysg0YPQt9C90LDQu9C4IDxzcGFuIGNsYXNzPXtjbGFzc2VzLm51bWJlcn0+e2NvdW50fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAg0L/RgtC40YYg0LjQtyA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubnVtYmVyfT57TWF4Q291bnRSb3VuZHN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImNsYXNzZXMiLCJ1c2VTZWxlY3RvciIsIk1heENvdW50Um91bmRzIiwiRW5kUGFuZWwiLCJjb3VudCIsInN0YXRlIiwic2NvcmUiLCJkaXYiLCJjbGFzcyIsIndyYXBwZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImltZyIsInNyYyIsInN1YlRpdGxlIiwic3BhbiIsIm51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/EndPanel.jsx\n"));

/***/ })

});