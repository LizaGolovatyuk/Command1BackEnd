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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IndicatorTypes: function() { return /* binding */ IndicatorTypes; },\n/* harmony export */   \"default\": function() { return /* binding */ RoundIndicator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/RoundIndicator.module.css */ \"./components/game/UI/RoundIndicator.module.css\");\n/* harmony import */ var _UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst IndicatorTypes = {\n    Correct: \"Correct\",\n    Incorrect: \"Incorrect\",\n    Current: \"Current\",\n    Disabled: \"Disabled\",\n    Undefined: undefined\n};\nfunction RoundIndicator(param) {\n    let { type, ind } = param;\n    _s();\n    let birdClass, markerClass;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    switch(type){\n        case IndicatorTypes.Correct:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().birdCorrect),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().markerCorrect)\n            ];\n            break;\n        case IndicatorTypes.Incorrect:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().birdIncorrect),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().markerIncorrect)\n            ];\n            break;\n        case IndicatorTypes.Current:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().birdCurrent),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().markerCurrent)\n            ];\n            break;\n        case IndicatorTypes.Disabled:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().birdDisabled),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().markerDisabled)\n            ];\n            break;\n        default:\n            [birdClass, markerClass] = [\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().birdCurrent),\n                (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().markerCurrent)\n            ];\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: [\n                        (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().bird),\n                        birdClass\n                    ].join(\" \"),\n                    onClick: ()=>dispatch({\n                            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetViewRound,\n                            payload: ind\n                        })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\RoundIndicator.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: [\n                        (_UI_RoundIndicator_module_css__WEBPACK_IMPORTED_MODULE_3___default().marker),\n                        markerClass\n                    ].join(\" \")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\RoundIndicator.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\RoundIndicator.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(RoundIndicator, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = RoundIndicator;\nvar _c;\n$RefreshReg$(_c, \"RoundIndicator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvUm91bmRJbmRpY2F0b3IuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDWjtBQUNRO0FBRXpDLE1BQU1HLGlCQUFpQjtJQUMxQkMsU0FBUztJQUNUQyxXQUFXO0lBQ1hDLFNBQVM7SUFDVEMsVUFBVTtJQUNWQyxXQUFXQztBQUNmLEVBQUM7QUFFYyxTQUFTQyxlQUFlLEtBQVc7UUFBWCxFQUFDQyxJQUFJLEVBQUVDLEdBQUcsRUFBQyxHQUFYOztJQUNuQyxJQUFJQyxXQUFXQztJQUNmLE1BQU1DLFdBQVdkLHdEQUFXQTtJQUM1QixPQUFRVTtRQUNKLEtBQUtSLGVBQWVDLE9BQU87WUFDdkIsQ0FBQ1MsV0FBV0MsWUFBWSxHQUFHO2dCQUFDZCxrRkFBbUI7Z0JBQUVBLG9GQUFxQjthQUFDO1lBQ3ZFO1FBRUosS0FBS0csZUFBZUUsU0FBUztZQUN6QixDQUFDUSxXQUFXQyxZQUFZLEdBQUc7Z0JBQUNkLG9GQUFxQjtnQkFBRUEsc0ZBQXVCO2FBQUM7WUFDM0U7UUFFSixLQUFLRyxlQUFlRyxPQUFPO1lBQ3ZCLENBQUNPLFdBQVdDLFlBQVksR0FBRztnQkFBQ2Qsa0ZBQW1CO2dCQUFFQSxvRkFBcUI7YUFBQztZQUN2RTtRQUVKLEtBQUtHLGVBQWVJLFFBQVE7WUFDeEIsQ0FBQ00sV0FBV0MsWUFBWSxHQUFHO2dCQUFDZCxtRkFBb0I7Z0JBQUVBLHFGQUFzQjthQUFDO1lBQ3pFO1FBRUo7WUFDSSxDQUFDYSxXQUFXQyxZQUFZLEdBQUc7Z0JBQUNkLGtGQUFtQjtnQkFBRUEsb0ZBQXFCO2FBQUM7SUFDL0U7SUFDQSxxQkFDSTtrQkFDSSw0RUFBQ3dCO1lBQUlDLFdBQVd6QiwyRUFBWTs7OEJBQ3hCLDhEQUFDd0I7b0JBQ0dDLFdBQVc7d0JBQUN6QiwyRUFBWTt3QkFBRWE7cUJBQVUsQ0FBQ2UsSUFBSSxDQUFDO29CQUMxQ0MsU0FBUyxJQUFNZCxTQUFTOzRCQUFDSixNQUFNVCwyREFBT0EsQ0FBQzRCLFlBQVk7NEJBQUVDLFNBQVNuQjt3QkFBRzs7Ozs7OzhCQUVyRSw4REFBQ1k7b0JBQUlDLFdBQVc7d0JBQUN6Qiw2RUFBYzt3QkFBRWM7cUJBQVksQ0FBQ2MsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBSW5FO0dBbEN3QmxCOztRQUVIVCxvREFBV0E7OztLQUZSUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvUm91bmRJbmRpY2F0b3IuanN4P2JlNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9VSS9Sb3VuZEluZGljYXRvci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtBY3Rpb25zfSBmcm9tIFwiQC9jb21wb25lbnRzL2dhbWUvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JUeXBlcyA9IHtcclxuICAgIENvcnJlY3Q6IFwiQ29ycmVjdFwiLFxyXG4gICAgSW5jb3JyZWN0OiBcIkluY29ycmVjdFwiLFxyXG4gICAgQ3VycmVudDogXCJDdXJyZW50XCIsXHJcbiAgICBEaXNhYmxlZDogXCJEaXNhYmxlZFwiLFxyXG4gICAgVW5kZWZpbmVkOiB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91bmRJbmRpY2F0b3Ioe3R5cGUsIGluZH0pIHtcclxuICAgIGxldCBiaXJkQ2xhc3MsIG1hcmtlckNsYXNzO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBJbmRpY2F0b3JUeXBlcy5Db3JyZWN0OlxyXG4gICAgICAgICAgICBbYmlyZENsYXNzLCBtYXJrZXJDbGFzc10gPSBbY2xhc3Nlcy5iaXJkQ29ycmVjdCwgY2xhc3Nlcy5tYXJrZXJDb3JyZWN0XVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBJbmRpY2F0b3JUeXBlcy5JbmNvcnJlY3Q6XHJcbiAgICAgICAgICAgIFtiaXJkQ2xhc3MsIG1hcmtlckNsYXNzXSA9IFtjbGFzc2VzLmJpcmRJbmNvcnJlY3QsIGNsYXNzZXMubWFya2VySW5jb3JyZWN0XVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBJbmRpY2F0b3JUeXBlcy5DdXJyZW50OlxyXG4gICAgICAgICAgICBbYmlyZENsYXNzLCBtYXJrZXJDbGFzc10gPSBbY2xhc3Nlcy5iaXJkQ3VycmVudCwgY2xhc3Nlcy5tYXJrZXJDdXJyZW50XVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBJbmRpY2F0b3JUeXBlcy5EaXNhYmxlZDpcclxuICAgICAgICAgICAgW2JpcmRDbGFzcywgbWFya2VyQ2xhc3NdID0gW2NsYXNzZXMuYmlyZERpc2FibGVkLCBjbGFzc2VzLm1hcmtlckRpc2FibGVkXVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgW2JpcmRDbGFzcywgbWFya2VyQ2xhc3NdID0gW2NsYXNzZXMuYmlyZEN1cnJlbnQsIGNsYXNzZXMubWFya2VyQ3VycmVudF1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbY2xhc3Nlcy5iaXJkLCBiaXJkQ2xhc3NdLmpvaW4oJyAnKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5TZXRWaWV3Um91bmQsIHBheWxvYWQ6IGluZH0pfVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLm1hcmtlciwgbWFya2VyQ2xhc3NdLmpvaW4oJyAnKX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImNsYXNzZXMiLCJ1c2VEaXNwYXRjaCIsIkFjdGlvbnMiLCJJbmRpY2F0b3JUeXBlcyIsIkNvcnJlY3QiLCJJbmNvcnJlY3QiLCJDdXJyZW50IiwiRGlzYWJsZWQiLCJVbmRlZmluZWQiLCJ1bmRlZmluZWQiLCJSb3VuZEluZGljYXRvciIsInR5cGUiLCJpbmQiLCJiaXJkQ2xhc3MiLCJtYXJrZXJDbGFzcyIsImRpc3BhdGNoIiwiYmlyZENvcnJlY3QiLCJtYXJrZXJDb3JyZWN0IiwiYmlyZEluY29ycmVjdCIsIm1hcmtlckluY29ycmVjdCIsImJpcmRDdXJyZW50IiwibWFya2VyQ3VycmVudCIsImJpcmREaXNhYmxlZCIsIm1hcmtlckRpc2FibGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImJpcmQiLCJqb2luIiwib25DbGljayIsIlNldFZpZXdSb3VuZCIsInBheWxvYWQiLCJtYXJrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/RoundIndicator.jsx\n"));

/***/ })

});