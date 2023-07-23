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

/***/ "./components/game/Paginator.jsx":
/*!***************************************!*\
  !*** ./components/game/Paginator.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Paginator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_RoundIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/game/RoundIndicator */ \"./components/game/RoundIndicator.jsx\");\n/* harmony import */ var _UI_Paginator_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Paginator.module.css */ \"./components/game/UI/Paginator.module.css\");\n/* harmony import */ var _UI_Paginator_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UI_Paginator_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction getIndicators(currentRound, roundsData) {\n    return Array(_components_game_store__WEBPACK_IMPORTED_MODULE_2__.MaxCountRounds).fill(0).map((value, index)=>{\n        let type = _components_game_RoundIndicator__WEBPACK_IMPORTED_MODULE_1__.IndicatorTypes.Undefined;\n        if (index > currentRound) {\n            type = _components_game_RoundIndicator__WEBPACK_IMPORTED_MODULE_1__.IndicatorTypes.Disabled;\n        } else if (index === currentRound) {\n            type = _components_game_RoundIndicator__WEBPACK_IMPORTED_MODULE_1__.IndicatorTypes.Current;\n        } else if (index < currentRound) {\n            type = roundsData[index].correctIndex === roundsData[index].answerIndex ? _components_game_RoundIndicator__WEBPACK_IMPORTED_MODULE_1__.IndicatorTypes.Correct : _components_game_RoundIndicator__WEBPACK_IMPORTED_MODULE_1__.IndicatorTypes.Incorrect;\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_RoundIndicator__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            type: type\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Paginator.jsx\",\n            lineNumber: 21,\n            columnNumber: 20\n        }, this);\n    });\n}\nfunction Paginator() {\n    _s();\n    const currentRound = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.currentRound);\n    const roundsData = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.roundsData);\n    const set = ()=>setIndicators(getIndicators(currentRound, roundsData));\n    const [indicators, setIndicators] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getIndicators(currentRound, roundsData));\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        set();\n    }, [\n        currentRound\n    ]);\n    console.log(\"indicators\", indicators);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Paginator_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: indicators\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Paginator.jsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Paginator, \"NkTIL8vY6gYny3E8MRAI5o4E2G4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Paginator;\nvar _c;\n$RefreshReg$(_c, \"Paginator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvUGFnaW5hdG9yLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Y7QUFDakM7QUFDUTtBQUNmO0FBQ0U7QUFFMUMsU0FBU08sY0FBY0MsWUFBWSxFQUFFQyxVQUFVO0lBQzNDLE9BQU9DLE1BQU1QLGtFQUFjQSxFQUN0QlEsSUFBSSxDQUFDLEdBQ0xDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQztRQUNULElBQUlDLE9BQU9kLDJFQUFjQSxDQUFDZSxTQUFTO1FBQ25DLElBQUlGLFFBQVFOLGNBQWM7WUFDdEJPLE9BQU9kLDJFQUFjQSxDQUFDZ0IsUUFBUTtRQUNsQyxPQUFPLElBQUlILFVBQVVOLGNBQWM7WUFDL0JPLE9BQU9kLDJFQUFjQSxDQUFDaUIsT0FBTztRQUNqQyxPQUFPLElBQUlKLFFBQVFOLGNBQWM7WUFDN0JPLE9BQU9OLFVBQVUsQ0FBQ0ssTUFBTSxDQUFDSyxZQUFZLEtBQUtWLFVBQVUsQ0FBQ0ssTUFBTSxDQUFDTSxXQUFXLEdBQ2pFbkIsMkVBQWNBLENBQUNvQixPQUFPLEdBQ3RCcEIsMkVBQWNBLENBQUNxQixTQUFTO1FBQ2xDO1FBQ0EscUJBQU8sOERBQUN0Qix1RUFBY0E7WUFBQ2UsTUFBTUE7V0FBV0Q7Ozs7O0lBQzVDO0FBQ1I7QUFFZSxTQUFTUzs7SUFDcEIsTUFBTWYsZUFBZUosd0RBQVdBLENBQUNvQixDQUFBQSxRQUFTQSxNQUFNaEIsWUFBWTtJQUM1RCxNQUFNQyxhQUFhTCx3REFBV0EsQ0FBQ29CLENBQUFBLFFBQVNBLE1BQU1mLFVBQVU7SUFDeEQsTUFBTWdCLE1BQU0sSUFBTUMsY0FBY25CLGNBQWNDLGNBQWNDO0lBQzVELE1BQU0sQ0FBQ2tCLFlBQVlELGNBQWMsR0FBR3BCLCtDQUFRQSxDQUFDQyxjQUFjQyxjQUFjQztJQUN6RUosZ0RBQVNBLENBQUM7UUFBT29CO0lBQUssR0FBRztRQUFDakI7S0FBYTtJQUN2Q29CLFFBQVFDLEdBQUcsQ0FBQyxjQUFjRjtJQUMxQixxQkFDSTtrQkFDSSw0RUFBQ0c7WUFBSUMsV0FBVzdCLDJFQUFpQjtzQkFDNUJ5Qjs7Ozs7OztBQUlqQjtHQWR3Qko7O1FBQ0NuQixvREFBV0E7UUFDYkEsb0RBQVdBOzs7S0FGVm1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9QYWdpbmF0b3IuanN4P2IxMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdW5kSW5kaWNhdG9yLCB7SW5kaWNhdG9yVHlwZXN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9Sb3VuZEluZGljYXRvclwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9VSS9QYWdpbmF0b3IubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7TWF4Q291bnRSb3VuZHN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9zdG9yZVwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEluZGljYXRvcnMoY3VycmVudFJvdW5kLCByb3VuZHNEYXRhKSB7XHJcbiAgICByZXR1cm4gQXJyYXkoTWF4Q291bnRSb3VuZHMpXHJcbiAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR5cGUgPSBJbmRpY2F0b3JUeXBlcy5VbmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IGN1cnJlbnRSb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IEluZGljYXRvclR5cGVzLkRpc2FibGVkXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGN1cnJlbnRSb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IEluZGljYXRvclR5cGVzLkN1cnJlbnRcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IGN1cnJlbnRSb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IHJvdW5kc0RhdGFbaW5kZXhdLmNvcnJlY3RJbmRleCA9PT0gcm91bmRzRGF0YVtpbmRleF0uYW5zd2VySW5kZXhcclxuICAgICAgICAgICAgICAgICAgICA/IEluZGljYXRvclR5cGVzLkNvcnJlY3RcclxuICAgICAgICAgICAgICAgICAgICA6IEluZGljYXRvclR5cGVzLkluY29ycmVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPFJvdW5kSW5kaWNhdG9yIHR5cGU9e3R5cGV9IGtleT17aW5kZXh9Lz5cclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdG9yKCkge1xyXG4gICAgY29uc3QgY3VycmVudFJvdW5kID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFJvdW5kKTtcclxuICAgIGNvbnN0IHJvdW5kc0RhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yb3VuZHNEYXRhKTtcclxuICAgIGNvbnN0IHNldCA9ICgpID0+IHNldEluZGljYXRvcnMoZ2V0SW5kaWNhdG9ycyhjdXJyZW50Um91bmQsIHJvdW5kc0RhdGEpKVxyXG4gICAgY29uc3QgW2luZGljYXRvcnMsIHNldEluZGljYXRvcnNdID0gdXNlU3RhdGUoZ2V0SW5kaWNhdG9ycyhjdXJyZW50Um91bmQsIHJvdW5kc0RhdGEpKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtzZXQoKX0sIFtjdXJyZW50Um91bmRdKVxyXG4gICAgY29uc29sZS5sb2coJ2luZGljYXRvcnMnLCBpbmRpY2F0b3JzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtpbmRpY2F0b3JzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSb3VuZEluZGljYXRvciIsIkluZGljYXRvclR5cGVzIiwiY2xhc3NlcyIsIk1heENvdW50Um91bmRzIiwidXNlU2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEluZGljYXRvcnMiLCJjdXJyZW50Um91bmQiLCJyb3VuZHNEYXRhIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwidmFsdWUiLCJpbmRleCIsInR5cGUiLCJVbmRlZmluZWQiLCJEaXNhYmxlZCIsIkN1cnJlbnQiLCJjb3JyZWN0SW5kZXgiLCJhbnN3ZXJJbmRleCIsIkNvcnJlY3QiLCJJbmNvcnJlY3QiLCJQYWdpbmF0b3IiLCJzdGF0ZSIsInNldCIsInNldEluZGljYXRvcnMiLCJpbmRpY2F0b3JzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Paginator.jsx\n"));

/***/ })

});