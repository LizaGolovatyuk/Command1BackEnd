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

/***/ "./components/game/HomePanel.jsx":
/*!***************************************!*\
  !*** ./components/game/HomePanel.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_HamePanel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/HamePanel.module.css */ \"./components/game/UI/HamePanel.module.css\");\n/* harmony import */ var _UI_HamePanel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_HamePanel_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./components/game/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction startGame() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    dispatch({\n        type: _store__WEBPACK_IMPORTED_MODULE_1__.Actions.StartLoad\n    });\n    dispatch({\n        type: _store__WEBPACK_IMPORTED_MODULE_1__.Actions.InitializeRound\n    });\n    dispatch({\n        type: _store__WEBPACK_IMPORTED_MODULE_1__.Actions.InitializeScore\n    });\n    dispatch({\n        type: _store__WEBPACK_IMPORTED_MODULE_1__.Actions.InitializeState\n    });\n}\n_s(startGame, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\nfunction HomePanel() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_HamePanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UI_HamePanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: \"Узнай птицу\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\HomePanel.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"../../../bird.png\",\n                    className: (_UI_HamePanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().bird)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\HomePanel.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UI_HamePanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().subTitle),\n                    children: [\n                        \"Угадайте \",\n                        _store__WEBPACK_IMPORTED_MODULE_1__.MaxCountRounds,\n                        \" птиц\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\HomePanel.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_UI_HamePanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().startButton),\n                    children: \"Начать игру\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\HomePanel.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\HomePanel.jsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = HomePanel;\nvar _c;\n$RefreshReg$(_c, \"HomePanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvSG9tZVBhbmVsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0M7QUFDQTtBQUNQO0FBRXhDLFNBQVNJOztJQUNMLE1BQU1DLFdBQVdGLHdEQUFXQTtJQUM1QkUsU0FBUztRQUFDQyxNQUFNSiwyQ0FBT0EsQ0FBQ0ssU0FBUztJQUFBO0lBQ2pDRixTQUFTO1FBQUNDLE1BQU1KLDJDQUFPQSxDQUFDTSxlQUFlO0lBQUE7SUFDdkNILFNBQVM7UUFBQ0MsTUFBTUosMkNBQU9BLENBQUNPLGVBQWU7SUFBQTtJQUN2Q0osU0FBUztRQUFDQyxNQUFNSiwyQ0FBT0EsQ0FBQ1EsZUFBZTtJQUFBO0FBRTNDO0dBUFNOOztRQUNZRCxvREFBV0E7OztBQVFqQixTQUFTUTtJQUNwQixxQkFDSTtrQkFDSSw0RUFBQ0M7WUFBSUMsV0FBV2IseUVBQWU7OzhCQUMzQiw4REFBQ1k7b0JBQUlDLFdBQVdiLHVFQUFhOzhCQUFFOzs7Ozs7OEJBRy9CLDhEQUFDZ0I7b0JBQUlDLEtBQUk7b0JBQW9CSixXQUFXYixzRUFBWTs7Ozs7OzhCQUNwRCw4REFBQ1k7b0JBQUlDLFdBQVdiLDBFQUFnQjs7d0JBQUU7d0JBQ3BCQyxrREFBY0E7d0JBQUM7Ozs7Ozs7OEJBRTdCLDhEQUFDbUI7b0JBQU9QLFdBQVdiLDZFQUFtQjs4QkFBRTs7Ozs7Ozs7Ozs7OztBQUl4RDtLQWZ3QlciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL0hvbWVQYW5lbC5qc3g/MTBmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9VSS9IYW1lUGFuZWwubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7TWF4Q291bnRSb3VuZHMsIEFjdGlvbnN9IGZyb20gXCIuL3N0b3JlXCJcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5TdGFydExvYWR9KVxyXG4gICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuSW5pdGlhbGl6ZVJvdW5kfSlcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBBY3Rpb25zLkluaXRpYWxpemVTY29yZX0pXHJcbiAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5Jbml0aWFsaXplU3RhdGV9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhbmVsKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICDQo9C30L3QsNC5INC/0YLQuNGG0YNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9iaXJkLnBuZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5iaXJkfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAg0KPQs9Cw0LTQsNC50YLQtSB7TWF4Q291bnRSb3VuZHN9INC/0YLQuNGGXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnN0YXJ0QnV0dG9ufT7QndCw0YfQsNGC0Ywg0LjQs9GA0YM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiY2xhc3NlcyIsIk1heENvdW50Um91bmRzIiwiQWN0aW9ucyIsInVzZURpc3BhdGNoIiwic3RhcnRHYW1lIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU3RhcnRMb2FkIiwiSW5pdGlhbGl6ZVJvdW5kIiwiSW5pdGlhbGl6ZVNjb3JlIiwiSW5pdGlhbGl6ZVN0YXRlIiwiSG9tZVBhbmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsInRpdGxlIiwiaW1nIiwic3JjIiwiYmlyZCIsInN1YlRpdGxlIiwiYnV0dG9uIiwic3RhcnRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/HomePanel.jsx\n"));

/***/ })

});