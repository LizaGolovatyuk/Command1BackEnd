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

/***/ "./components/game/Main.jsx":
/*!**********************************!*\
  !*** ./components/game/Main.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./components/game/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_game_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/game/Loading */ \"./components/game/Loading.jsx\");\n/* harmony import */ var _components_game_HomePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/game/HomePanel */ \"./components/game/HomePanel.jsx\");\n/* harmony import */ var _components_game_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/game/Panel */ \"./components/game/Panel.jsx\");\n/* harmony import */ var _components_game_EndPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/game/EndPanel */ \"./components/game/EndPanel.jsx\");\n/* harmony import */ var next_dist_client_components_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/components/error */ \"./node_modules/next/dist/client/components/error.js\");\n/* harmony import */ var next_dist_client_components_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.panelState);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.loading);\n    let component;\n    component = loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Main.jsx\",\n        lineNumber: 13,\n        columnNumber: 28\n    }, this);\n    if (!loading) {\n        switch(state){\n            case _store__WEBPACK_IMPORTED_MODULE_1__.PanelStates.StartGame:\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_HomePanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Main.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 29\n                }, this);\n                break;\n            case _store__WEBPACK_IMPORTED_MODULE_1__.PanelStates.Game:\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Panel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Main.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 29\n                }, this);\n                break;\n            case _store__WEBPACK_IMPORTED_MODULE_1__.PanelStates.EndGame:\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_EndPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Main.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 29\n                }, this);\n                break;\n            default:\n                component = (0,next_dist_client_components_error__WEBPACK_IMPORTED_MODULE_7__.NotFound)();\n                break;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Главная страница\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Main.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(Main, \"j/Ei4ohU27UBpKcAesJxJVfZW2I=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvTWFpbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNJO0FBQ1M7QUFDSTtBQUNSO0FBQ007QUFDUztBQUU1QyxTQUFTTzs7SUFDcEIsTUFBTUMsUUFBUVAsd0RBQVdBLENBQUNPLENBQUFBLFFBQVNBLE1BQU1DLFVBQVU7SUFDbkQsTUFBTUMsVUFBVVQsd0RBQVdBLENBQUNPLENBQUFBLFFBQVNBLE1BQU1FLE9BQU87SUFDbEQsSUFBSUM7SUFDSkEsWUFBWUQseUJBQVcsOERBQUNSLGdFQUFPQTs7Ozs7SUFDL0IsSUFBSSxDQUFDUSxTQUFTO1FBQ1YsT0FBUUY7WUFDSixLQUFLUiwrQ0FBV0EsQ0FBQ1ksU0FBUztnQkFDdEJELDBCQUFZLDhEQUFDUixrRUFBU0E7Ozs7O2dCQUN0QjtZQUVKLEtBQUtILCtDQUFXQSxDQUFDYSxJQUFJO2dCQUNqQkYsMEJBQVksOERBQUNQLDhEQUFLQTs7Ozs7Z0JBQ2xCO1lBRUosS0FBS0osK0NBQVdBLENBQUNjLE9BQU87Z0JBQ3BCSCwwQkFBWSw4REFBQ04saUVBQVFBOzs7OztnQkFDckI7WUFFSjtnQkFDSU0sWUFBWUwsMkVBQVFBO2dCQUNwQjtRQUNSO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ1M7a0JBQUc7Ozs7OztBQUVaO0dBM0J3QlI7O1FBQ05OLG9EQUFXQTtRQUNUQSxvREFBV0E7OztLQUZQTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvTWFpbi5qc3g/NTdkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BhbmVsU3RhdGVzfSBmcm9tIFwiLi9zdG9yZVwiXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9Mb2FkaW5nXCI7XHJcbmltcG9ydCBIb21lUGFuZWwgZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL0hvbWVQYW5lbFwiO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL1BhbmVsXCI7XHJcbmltcG9ydCBFbmRQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL2dhbWUvRW5kUGFuZWxcIjtcclxuaW1wb3J0IHtOb3RGb3VuZH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9lcnJvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGFuZWxTdGF0ZSk7XHJcbiAgICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubG9hZGluZyk7XHJcbiAgICBsZXQgY29tcG9uZW50O1xyXG4gICAgY29tcG9uZW50ID0gbG9hZGluZyAmJiA8TG9hZGluZy8+XHJcbiAgICBpZiAoIWxvYWRpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUGFuZWxTdGF0ZXMuU3RhcnRHYW1lOlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gPEhvbWVQYW5lbC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUGFuZWxTdGF0ZXMuR2FtZTpcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IDxQYW5lbC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUGFuZWxTdGF0ZXMuRW5kR2FtZTpcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IDxFbmRQYW5lbC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBOb3RGb3VuZCgpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMT7Qk9C70LDQstC90LDRjyDRgdGC0YDQsNC90LjRhtCwPC9oMT5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJQYW5lbFN0YXRlcyIsInVzZVNlbGVjdG9yIiwiTG9hZGluZyIsIkhvbWVQYW5lbCIsIlBhbmVsIiwiRW5kUGFuZWwiLCJOb3RGb3VuZCIsIk1haW4iLCJzdGF0ZSIsInBhbmVsU3RhdGUiLCJsb2FkaW5nIiwiY29tcG9uZW50IiwiU3RhcnRHYW1lIiwiR2FtZSIsIkVuZEdhbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Main.jsx\n"));

/***/ })

});