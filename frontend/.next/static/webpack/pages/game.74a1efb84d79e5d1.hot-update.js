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

/***/ "./components/game/Panel.jsx":
/*!***********************************!*\
  !*** ./components/game/Panel.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Panel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_Paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/game/Paginator */ \"./components/game/Paginator.jsx\");\n/* harmony import */ var _components_game_Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/Video */ \"./components/game/Video.jsx\");\n/* harmony import */ var _components_game_Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/game/Options */ \"./components/game/Options.jsx\");\n/* harmony import */ var _UI_Panel_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Panel.module.css */ \"./components/game/UI/Panel.module.css\");\n/* harmony import */ var _UI_Panel_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UI_Panel_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Panel() {\n    _s();\n    const currentRound = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.currentRound);\n    const roundData = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.roundsData[currentRound]);\n    const videoUrl = roundData.data[roundData.correctIndex].species_video;\n    console.log(\"videoUrl = \".concat(videoUrl));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Panel_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Paginator__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Panel.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        currentRound + 1,\n                        \" раунд\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Panel.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Video__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    url: videoUrl\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Panel.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Options__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Panel.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Panel.jsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Panel, \"qvJurIsVxy7mpzOi+8HGZd3QTgU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Panel;\nvar _c;\n$RefreshReg$(_c, \"Panel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvUGFuZWwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1I7QUFDSTtBQUNKO0FBQ0o7QUFFekIsU0FBU0s7O0lBQ3BCLE1BQU1DLGVBQWVGLHdEQUFXQSxDQUFDRyxDQUFBQSxRQUFTQSxNQUFNRCxZQUFZO0lBQzVELE1BQU1FLFlBQVlKLHdEQUFXQSxDQUFDRyxDQUFBQSxRQUFTQSxNQUFNRSxVQUFVLENBQUNILGFBQWE7SUFDckUsTUFBTUksV0FBV0YsVUFBVUcsSUFBSSxDQUFDSCxVQUFVSSxZQUFZLENBQUMsQ0FBQ0MsYUFBYTtJQUNyRUMsUUFBUUMsR0FBRyxDQUFDLGNBQXVCLE9BQVRMO0lBQzFCLHFCQUNJO2tCQUNJLDRFQUFDTTtZQUFJQyxXQUFXZCxxRUFBZTs7OEJBQzNCLDhEQUFDSCxrRUFBU0E7Ozs7OzhCQUNWLDhEQUFDbUI7O3dCQUFJYixlQUFhO3dCQUFFOzs7Ozs7OzhCQUNwQiw4REFBQ0wsOERBQUtBO29CQUFDbUIsS0FBS1Y7Ozs7Ozs4QkFDWiw4REFBQ1IsZ0VBQU9BOzs7Ozs7Ozs7Ozs7QUFJeEI7R0Fmd0JHOztRQUNDRCxvREFBV0E7UUFDZEEsb0RBQVdBOzs7S0FGVEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL1BhbmVsLmpzeD9jYjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdpbmF0b3IgZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL1BhZ2luYXRvclwiO1xyXG5pbXBvcnQgVmlkZW8gZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL1ZpZGVvXCI7XHJcbmltcG9ydCBPcHRpb25zIGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25zXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1VJL1BhbmVsLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYW5lbCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3VuZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRSb3VuZCk7XHJcbiAgICBjb25zdCByb3VuZERhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yb3VuZHNEYXRhW2N1cnJlbnRSb3VuZF0pO1xyXG4gICAgY29uc3QgdmlkZW9VcmwgPSByb3VuZERhdGEuZGF0YVtyb3VuZERhdGEuY29ycmVjdEluZGV4XS5zcGVjaWVzX3ZpZGVvO1xyXG4gICAgY29uc29sZS5sb2coYHZpZGVvVXJsID0gJHt2aWRlb1VybH1gKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0b3IvPlxyXG4gICAgICAgICAgICAgICAgPGgxPntjdXJyZW50Um91bmQrMX0g0YDQsNGD0L3QtDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8VmlkZW8gdXJsPXt2aWRlb1VybH0vPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbnMvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJQYWdpbmF0b3IiLCJWaWRlbyIsIk9wdGlvbnMiLCJjbGFzc2VzIiwidXNlU2VsZWN0b3IiLCJQYW5lbCIsImN1cnJlbnRSb3VuZCIsInN0YXRlIiwicm91bmREYXRhIiwicm91bmRzRGF0YSIsInZpZGVvVXJsIiwiZGF0YSIsImNvcnJlY3RJbmRleCIsInNwZWNpZXNfdmlkZW8iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImgxIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/Panel.jsx\n"));

/***/ }),

/***/ "./components/game/Video.jsx":
/*!***********************************!*\
  !*** ./components/game/Video.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Video; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Video(url) {\n    console.log(url);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            src: \"http://127.0.0.1:5000/video?filename=5.mp4\",\n            controls: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Video.jsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = Video;\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvVmlkZW8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFHNUIsU0FBU0MsTUFBTUMsR0FBRztJQUM3QkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNJO2tCQUNJLDRFQUFDRztZQUNHQyxLQUFJO1lBQ0pDLFFBQVE7Ozs7Ozs7QUFJeEI7S0FWd0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9WaWRlby5qc3g/MmMxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9VSS9WaWRlby5tb2R1bGUuY3NzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlbyh1cmwpIHtcclxuICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvdmlkZW8/ZmlsZW5hbWU9NS5tcDRcIlxyXG4gICAgICAgICAgICAgICAgY29udHJvbHNcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiVmlkZW8iLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwidmlkZW8iLCJzcmMiLCJjb250cm9scyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Video.jsx\n"));

/***/ })

});