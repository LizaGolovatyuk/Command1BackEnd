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

/***/ "./components/game/Options.jsx":
/*!*************************************!*\
  !*** ./components/game/Options.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const buttonValues = round.data.map((bird)=>bird.species_titleru);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_2___default().optionGrid),\n            children: buttonValues.map((value, ind)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    index: ind,\n                    onClick: checkOption,\n                    children: value\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 33\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"dB/mG+4XHzCyjt7cQejfCfta6UM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = Options;\nfunction checkOption(args) {\n    console.log(this);\n    console.log(args);\n}\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUUvQixTQUFTRTs7SUFDcEIsTUFBTUMsb0JBQW9CSCx3REFBV0EsQ0FBQ0ksQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWTtJQUNqRSxNQUFNQyxRQUFRTix3REFBV0EsQ0FBQ0ksQ0FBQUEsUUFBU0EsTUFBTUcsVUFBVSxDQUFDSixrQkFBa0I7SUFDdEUsTUFBTUssZUFBZUYsTUFBTUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLGVBQWU7SUFDaEUscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQUlDLFdBQVdiLDBFQUFrQjtzQkFFMUJPLGFBQWFFLEdBQUcsQ0FBQyxDQUFDTSxPQUFPQztnQkFDckIscUJBQ1EsOERBQUNDO29CQUNHSixXQUFXYixzRUFBYztvQkFDekJtQixPQUFPSDtvQkFDUEksU0FBU0M7OEJBRVJOOzs7Ozs7WUFHakI7Ozs7Ozs7QUFLcEI7R0F2QndCZDs7UUFDTUYsb0RBQVdBO1FBQ3ZCQSxvREFBV0E7OztLQUZMRTtBQXlCeEIsU0FBU29CLFlBQVlDLElBQUk7SUFDckJDLFFBQVFDLEdBQUcsQ0FBQyxJQUFJO0lBQ2hCRCxRQUFRQyxHQUFHLENBQUNGO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25zLmpzeD9kMTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9VSS9PcHRpb25zLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Um91bmRJbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRSb3VuZCk7XHJcbiAgICBjb25zdCByb3VuZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJvdW5kc0RhdGFbY3VycmVudFJvdW5kSW5kZXhdKTtcclxuICAgIGNvbnN0IGJ1dHRvblZhbHVlcyA9IHJvdW5kLmRhdGEubWFwKGJpcmQgPT4gYmlyZC5zcGVjaWVzX3RpdGxlcnUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vcHRpb25HcmlkfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25WYWx1ZXMubWFwKCh2YWx1ZSwgaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGVja09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tPcHRpb24oYXJncykge1xyXG4gICAgY29uc29sZS5sb2codGhpcylcclxuICAgIGNvbnNvbGUubG9nKGFyZ3MpXHJcbn0iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiT3B0aW9ucyIsImN1cnJlbnRSb3VuZEluZGV4Iiwic3RhdGUiLCJjdXJyZW50Um91bmQiLCJyb3VuZCIsInJvdW5kc0RhdGEiLCJidXR0b25WYWx1ZXMiLCJkYXRhIiwibWFwIiwiYmlyZCIsInNwZWNpZXNfdGl0bGVydSIsImRpdiIsImNsYXNzTmFtZSIsIm9wdGlvbkdyaWQiLCJ2YWx1ZSIsImluZCIsImJ1dHRvbiIsIm9wdGlvbiIsImluZGV4Iiwib25DbGljayIsImNoZWNrT3B0aW9uIiwiYXJncyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});