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

/***/ "./components/game/Option.jsx":
/*!************************************!*\
  !*** ./components/game/Option.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OptionTypes: function() { return /* binding */ OptionTypes; },\n/* harmony export */   \"default\": function() { return /* binding */ Option; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Option_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Option.module.css */ \"./components/game/UI/Option.module.css\");\n/* harmony import */ var _UI_Option_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_Option_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n\n\n\n\nconst OptionTypes = {\n    Normal: \"Normal\",\n    Correct: \"Correct\",\n    Incorrect: \"Incorrect\",\n    Undefined: undefined\n};\nfunction getClass(type) {\n    switch(type){\n        case OptionTypes.Normal:\n            return \"\";\n        case OptionTypes.Correct:\n            return (_UI_Option_module_css__WEBPACK_IMPORTED_MODULE_3___default().correctAnswer);\n        case OptionTypes.Incorrect:\n            return (_UI_Option_module_css__WEBPACK_IMPORTED_MODULE_3___default().incorrectAnswer);\n        case OptionTypes.Undefined:\n            return \"\";\n        default:\n            return \"\";\n    }\n}\nfunction Option(param) {\n    let { type, blocked, value, onClick, ind } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: [\n                (_UI_Option_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                blocked ? (_UI_Option_module_css__WEBPACK_IMPORTED_MODULE_3___default().blocked) : \"\",\n                getClass(type)\n            ].join(\" \"),\n            onClick: onClick,\n            ind: ind,\n            children: value\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Option.jsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = Option;\nvar _c;\n$RefreshReg$(_c, \"Option\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDUjtBQUNHO0FBRXpDLE1BQU1JLGNBQWM7SUFDdkJDLFFBQVE7SUFDUkMsU0FBUztJQUNUQyxXQUFXO0lBQ1hDLFdBQVdDO0FBQ2YsRUFBQztBQUVELFNBQVNDLFNBQVNDLElBQUk7SUFDbEIsT0FBUUE7UUFDSixLQUFLUCxZQUFZQyxNQUFNO1lBQ25CLE9BQU87UUFFWCxLQUFLRCxZQUFZRSxPQUFPO1lBQ3BCLE9BQU9KLDRFQUFxQjtRQUVoQyxLQUFLRSxZQUFZRyxTQUFTO1lBQ3RCLE9BQU9MLDhFQUF1QjtRQUVsQyxLQUFLRSxZQUFZSSxTQUFTO1lBQ3RCLE9BQU87UUFFWDtZQUNJLE9BQU87SUFDZjtBQUNKO0FBRWUsU0FBU00sT0FBTyxLQUFvQztRQUFwQyxFQUFDSCxJQUFJLEVBQUVJLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLEdBQUcsRUFBQyxHQUFwQztJQUMzQixxQkFDSTtrQkFDSSw0RUFBQ0M7WUFDR0MsV0FBVztnQkFDUGxCLHFFQUFjO2dCQUNkYSxVQUFVYixzRUFBZSxHQUFHO2dCQUM1QlEsU0FBU0M7YUFDWixDQUFDVyxJQUFJLENBQUM7WUFDUEwsU0FBU0E7WUFDVEMsS0FBS0E7c0JBRUpGOzs7Ozs7O0FBSWpCO0tBaEJ3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL09wdGlvbi5qc3g/ZjA0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1VJL09wdGlvbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7QWN0aW9uc30gZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3B0aW9uVHlwZXMgPSB7XHJcbiAgICBOb3JtYWw6IFwiTm9ybWFsXCIsXHJcbiAgICBDb3JyZWN0OiBcIkNvcnJlY3RcIixcclxuICAgIEluY29ycmVjdDogXCJJbmNvcnJlY3RcIixcclxuICAgIFVuZGVmaW5lZDogdW5kZWZpbmVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENsYXNzKHR5cGUpIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgT3B0aW9uVHlwZXMuTm9ybWFsOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAgICAgY2FzZSBPcHRpb25UeXBlcy5Db3JyZWN0OlxyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3Nlcy5jb3JyZWN0QW5zd2VyO1xyXG5cclxuICAgICAgICBjYXNlIE9wdGlvblR5cGVzLkluY29ycmVjdDpcclxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXMuaW5jb3JyZWN0QW5zd2VyO1xyXG5cclxuICAgICAgICBjYXNlIE9wdGlvblR5cGVzLlVuZGVmaW5lZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCJcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3B0aW9uKHt0eXBlLCBibG9ja2VkLCB2YWx1ZSwgb25DbGljaywgaW5kfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLm9wdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBibG9ja2VkID8gY2xhc3Nlcy5ibG9ja2VkIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBnZXRDbGFzcyh0eXBlKVxyXG4gICAgICAgICAgICAgICAgXS5qb2luKCcgJyl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgaW5kPXtpbmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImNsYXNzZXMiLCJBY3Rpb25zIiwiT3B0aW9uVHlwZXMiLCJOb3JtYWwiLCJDb3JyZWN0IiwiSW5jb3JyZWN0IiwiVW5kZWZpbmVkIiwidW5kZWZpbmVkIiwiZ2V0Q2xhc3MiLCJ0eXBlIiwiY29ycmVjdEFuc3dlciIsImluY29ycmVjdEFuc3dlciIsIk9wdGlvbiIsImJsb2NrZWQiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJpbmQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvcHRpb24iLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/Option.jsx\n"));

/***/ })

});