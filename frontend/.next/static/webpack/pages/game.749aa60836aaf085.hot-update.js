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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./components/game/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_game_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/game/Loading */ \"./components/game/Loading.jsx\");\n/* harmony import */ var _components_game_HomePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/game/HomePanel */ \"./components/game/HomePanel.jsx\");\n/* harmony import */ var _components_game_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/game/Panel */ \"./components/game/Panel.jsx\");\n/* harmony import */ var _components_game_EndPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/game/EndPanel */ \"./components/game/EndPanel.jsx\");\n/* harmony import */ var next_dist_client_components_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/components/error */ \"./node_modules/next/dist/client/components/error.js\");\n/* harmony import */ var next_dist_client_components_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.panelState);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.loading);\n    let component;\n    component = loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Main.jsx\",\n        lineNumber: 13,\n        columnNumber: 28\n    }, this);\n    if (!loading) {\n        switch(state){\n            case _store__WEBPACK_IMPORTED_MODULE_1__.PanelStates.StartGame:\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_HomePanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Main.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 29\n                }, this);\n                break;\n            case _store__WEBPACK_IMPORTED_MODULE_1__.PanelStates.Game:\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Panel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Main.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 29\n                }, this);\n                break;\n            case _store__WEBPACK_IMPORTED_MODULE_1__.PanelStates.EndGame:\n                component = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_EndPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Main.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 29\n                }, this);\n                break;\n            default:\n                component = (0,next_dist_client_components_error__WEBPACK_IMPORTED_MODULE_7__.NotFound)();\n                break;\n        }\n    }\n    return {\n        component\n    };\n}\n_s(Main, \"j/Ei4ohU27UBpKcAesJxJVfZW2I=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvTWFpbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNJO0FBQ1M7QUFDSTtBQUNSO0FBQ007QUFDUztBQUU1QyxTQUFTTzs7SUFDcEIsTUFBTUMsUUFBUVAsd0RBQVdBLENBQUNPLENBQUFBLFFBQVNBLE1BQU1DLFVBQVU7SUFDbkQsTUFBTUMsVUFBVVQsd0RBQVdBLENBQUNPLENBQUFBLFFBQVNBLE1BQU1FLE9BQU87SUFDbEQsSUFBSUM7SUFDSkEsWUFBWUQseUJBQVcsOERBQUNSLGdFQUFPQTs7Ozs7SUFDL0IsSUFBSSxDQUFDUSxTQUFTO1FBQ1YsT0FBUUY7WUFDSixLQUFLUiwrQ0FBV0EsQ0FBQ1ksU0FBUztnQkFDdEJELDBCQUFZLDhEQUFDUixrRUFBU0E7Ozs7O2dCQUN0QjtZQUVKLEtBQUtILCtDQUFXQSxDQUFDYSxJQUFJO2dCQUNqQkYsMEJBQVksOERBQUNQLDhEQUFLQTs7Ozs7Z0JBQ2xCO1lBRUosS0FBS0osK0NBQVdBLENBQUNjLE9BQU87Z0JBQ3BCSCwwQkFBWSw4REFBQ04saUVBQVFBOzs7OztnQkFDckI7WUFFSjtnQkFDSU0sWUFBWUwsMkVBQVFBO2dCQUNwQjtRQUNSO0lBQ0o7SUFDQSxPQUNJO1FBQUNLO0lBQVM7QUFFbEI7R0EzQndCSjs7UUFDTk4sb0RBQVdBO1FBQ1RBLG9EQUFXQTs7O0tBRlBNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9NYWluLmpzeD81N2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFuZWxTdGF0ZXN9IGZyb20gXCIuL3N0b3JlXCJcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL0xvYWRpbmdcIjtcclxuaW1wb3J0IEhvbWVQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL2dhbWUvSG9tZVBhbmVsXCI7XHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL2dhbWUvUGFuZWxcIjtcclxuaW1wb3J0IEVuZFBhbmVsIGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9FbmRQYW5lbFwiO1xyXG5pbXBvcnQge05vdEZvdW5kfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2Vycm9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wYW5lbFN0YXRlKTtcclxuICAgIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKTtcclxuICAgIGxldCBjb21wb25lbnQ7XHJcbiAgICBjb21wb25lbnQgPSBsb2FkaW5nICYmIDxMb2FkaW5nLz5cclxuICAgIGlmICghbG9hZGluZykge1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBQYW5lbFN0YXRlcy5TdGFydEdhbWU6XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSA8SG9tZVBhbmVsLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBQYW5lbFN0YXRlcy5HYW1lOlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gPFBhbmVsLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBQYW5lbFN0YXRlcy5FbmRHYW1lOlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gPEVuZFBhbmVsLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IE5vdEZvdW5kKClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAge2NvbXBvbmVudH1cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJQYW5lbFN0YXRlcyIsInVzZVNlbGVjdG9yIiwiTG9hZGluZyIsIkhvbWVQYW5lbCIsIlBhbmVsIiwiRW5kUGFuZWwiLCJOb3RGb3VuZCIsIk1haW4iLCJzdGF0ZSIsInBhbmVsU3RhdGUiLCJsb2FkaW5nIiwiY29tcG9uZW50IiwiU3RhcnRHYW1lIiwiR2FtZSIsIkVuZEdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Main.jsx\n"));

/***/ })

});