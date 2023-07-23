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

/***/ "./components/game/RoundIndicator.jsx":
/*!********************************************!*\
  !*** ./components/game/RoundIndicator.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IndicatorTypes: function() { return /* binding */ IndicatorTypes; },\n/* harmony export */   \"default\": function() { return /* binding */ RoundIndicator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/RoundIndicator.module.css */ \"./components/game/UI/RoundIndicator.module.css\");\n/* harmony import */ var _UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst IndicatorTypes = {\n    Correct: \"Correct\",\n    Incorrect: \"Incorrect\",\n    Current: \"Current\",\n    Disabled: \"Disabled\",\n    Undefined: undefined\n};\nfunction RoundIndicator(type) {\n    let index = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;\n    let birdClass, markerClass;\n    switch(type){\n        case IndicatorTypes.Correct:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().birdCorrect),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().markerCorrect)\n            ];\n            break;\n        case IndicatorTypes.Incorrect:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().birdIncorrect),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().markerIncorrect)\n            ];\n            break;\n        case IndicatorTypes.Current:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().birdCurrent),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().markerCurrent)\n            ];\n            break;\n        case IndicatorTypes.Disabled:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().birdDisabled),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().markerDisabled)\n            ];\n            break;\n        default:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().birdCurrent),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().markerCurrent)\n            ];\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: [\n                        (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().bird),\n                        birdClass\n                    ].join(\" \")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\RoundIndicator.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: [\n                        (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default().marker),\n                        markerClass\n                    ].join(\" \")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\RoundIndicator.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\RoundIndicator.jsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = RoundIndicator;\nvar _c;\n$RefreshReg$(_c, \"RoundIndicator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvUm91bmRJbmRpY2F0b3IuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0Q7QUFFN0MsTUFBTUMsaUJBQWlCO0lBQzFCQyxTQUFTO0lBQ1RDLFdBQVc7SUFDWEMsU0FBUztJQUNUQyxVQUFVO0lBQ1ZDLFdBQVdDO0FBQ2YsRUFBQztBQUVjLFNBQVNDLGVBQWVDLElBQUk7UUFBRUMsUUFBQUEsaUVBQU07SUFDL0MsSUFBSUMsV0FBV0M7SUFDZixPQUFRSDtRQUNKLEtBQUtSLGVBQWVDLE9BQU87WUFDdkIsQ0FBQ1MsV0FBV0MsWUFBWSxHQUFHO2dCQUFDWixrRkFBbUI7Z0JBQUVBLG9GQUFxQjthQUFDO1lBQ3ZFO1FBRUosS0FBS0MsZUFBZUUsU0FBUztZQUN6QixDQUFDUSxXQUFXQyxZQUFZLEdBQUc7Z0JBQUNaLG9GQUFxQjtnQkFBRUEsc0ZBQXVCO2FBQUM7WUFDM0U7UUFFSixLQUFLQyxlQUFlRyxPQUFPO1lBQ3ZCLENBQUNPLFdBQVdDLFlBQVksR0FBRztnQkFBQ1osa0ZBQW1CO2dCQUFFQSxvRkFBcUI7YUFBQztZQUN2RTtRQUVKLEtBQUtDLGVBQWVJLFFBQVE7WUFDeEIsQ0FBQ00sV0FBV0MsWUFBWSxHQUFHO2dCQUFDWixtRkFBb0I7Z0JBQUVBLHFGQUFzQjthQUFDO1lBQ3pFO1FBRUo7WUFDSSxDQUFDVyxXQUFXQyxZQUFZLEdBQUc7Z0JBQUNaLGtGQUFtQjtnQkFBRUEsb0ZBQXFCO2FBQUM7SUFDL0U7SUFDQSxxQkFDSTtrQkFDSSw0RUFBQ3FCO1lBQUlDLFdBQVd0QiwyRUFBWTs7OEJBQ3hCLDhEQUFDcUI7b0JBQUlDLFdBQVc7d0JBQUN0QiwyRUFBWTt3QkFBRVc7cUJBQVUsQ0FBQ2MsSUFBSSxDQUFDOzs7Ozs7OEJBQy9DLDhEQUFDSjtvQkFBSUMsV0FBVzt3QkFBQ3RCLDZFQUFjO3dCQUFFWTtxQkFBWSxDQUFDYSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFJbkU7S0E5QndCakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL1JvdW5kSW5kaWNhdG9yLmpzeD9iZTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vVUkvUm91bmRJbmRpY2F0b3IubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JUeXBlcyA9IHtcclxuICAgIENvcnJlY3Q6IFwiQ29ycmVjdFwiLFxyXG4gICAgSW5jb3JyZWN0OiBcIkluY29ycmVjdFwiLFxyXG4gICAgQ3VycmVudDogXCJDdXJyZW50XCIsXHJcbiAgICBEaXNhYmxlZDogXCJEaXNhYmxlZFwiLFxyXG4gICAgVW5kZWZpbmVkOiB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91bmRJbmRpY2F0b3IodHlwZSwgaW5kZXg9MCkge1xyXG4gICAgbGV0IGJpcmRDbGFzcywgbWFya2VyQ2xhc3M7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIEluZGljYXRvclR5cGVzLkNvcnJlY3Q6XHJcbiAgICAgICAgICAgIFtiaXJkQ2xhc3MsIG1hcmtlckNsYXNzXSA9IFtjbGFzc2VzLmJpcmRDb3JyZWN0LCBjbGFzc2VzLm1hcmtlckNvcnJlY3RdXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEluZGljYXRvclR5cGVzLkluY29ycmVjdDpcclxuICAgICAgICAgICAgW2JpcmRDbGFzcywgbWFya2VyQ2xhc3NdID0gW2NsYXNzZXMuYmlyZEluY29ycmVjdCwgY2xhc3Nlcy5tYXJrZXJJbmNvcnJlY3RdXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEluZGljYXRvclR5cGVzLkN1cnJlbnQ6XHJcbiAgICAgICAgICAgIFtiaXJkQ2xhc3MsIG1hcmtlckNsYXNzXSA9IFtjbGFzc2VzLmJpcmRDdXJyZW50LCBjbGFzc2VzLm1hcmtlckN1cnJlbnRdXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEluZGljYXRvclR5cGVzLkRpc2FibGVkOlxyXG4gICAgICAgICAgICBbYmlyZENsYXNzLCBtYXJrZXJDbGFzc10gPSBbY2xhc3Nlcy5iaXJkRGlzYWJsZWQsIGNsYXNzZXMubWFya2VyRGlzYWJsZWRdXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBbYmlyZENsYXNzLCBtYXJrZXJDbGFzc10gPSBbY2xhc3Nlcy5iaXJkQ3VycmVudCwgY2xhc3Nlcy5tYXJrZXJDdXJyZW50XVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5iaXJkLCBiaXJkQ2xhc3NdLmpvaW4oJyAnKX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMubWFya2VyLCBtYXJrZXJDbGFzc10uam9pbignICcpfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiY2xhc3NlcyIsIkluZGljYXRvclR5cGVzIiwiQ29ycmVjdCIsIkluY29ycmVjdCIsIkN1cnJlbnQiLCJEaXNhYmxlZCIsIlVuZGVmaW5lZCIsInVuZGVmaW5lZCIsIlJvdW5kSW5kaWNhdG9yIiwidHlwZSIsImluZGV4IiwiYmlyZENsYXNzIiwibWFya2VyQ2xhc3MiLCJiaXJkQ29ycmVjdCIsIm1hcmtlckNvcnJlY3QiLCJiaXJkSW5jb3JyZWN0IiwibWFya2VySW5jb3JyZWN0IiwiYmlyZEN1cnJlbnQiLCJtYXJrZXJDdXJyZW50IiwiYmlyZERpc2FibGVkIiwibWFya2VyRGlzYWJsZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiYmlyZCIsImpvaW4iLCJtYXJrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/RoundIndicator.jsx\n"));

/***/ })

});