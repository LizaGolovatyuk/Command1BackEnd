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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const buttonValues = round.data.map((bird)=>bird.species_titleru);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    console.log(\"options\");\n    function checkOption(event) {\n        const index = Number(event.target.getAttribute(\"ind\"));\n        dispatch({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n            payload: index\n        });\n        if (index === round.correctIndex) {\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n            });\n        }\n    }\n    const buttons = buttonValues.map((value, index)=>{\n        const classesList = [\n            (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().option)\n        ];\n        if (round.answerIndex) {\n            classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().blocked));\n            if (index === round.correctIndex) {\n                classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().correctAnswer));\n            } else if (index === round.answerIndex) {\n                classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().incorrectAnswer));\n            }\n        }\n        console.log(classesList.join(\" \"));\n        const answerClasses = classesList.join(\" \");\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: answerClasses,\n            ind: index,\n            onClick: checkOption,\n            children: value\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().optionGrid),\n            children: buttons\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"u57Jjp1DvN7KBdSqrsRP2NhBAwQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUVqQyxTQUFTSTs7SUFDcEIsTUFBTUMsb0JBQW9CSix3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWTtJQUNqRSxNQUFNQyxRQUFRUCx3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUcsVUFBVSxDQUFDSixrQkFBa0I7SUFDdEUsTUFBTUssZUFBZUYsTUFBTUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLGVBQWU7SUFDaEUsTUFBTUMsV0FBV2Ysd0RBQVdBO0lBQzVCZ0IsUUFBUUMsR0FBRyxDQUFDO0lBRVosU0FBU0MsWUFBWUMsS0FBSztRQUN0QixNQUFNQyxRQUFRQyxPQUFPRixNQUFNRyxNQUFNLENBQUNDLFlBQVksQ0FBQztRQUMvQ1IsU0FBUztZQUFDUyxNQUFNckIsMkRBQU9BLENBQUNzQixTQUFTO1lBQUVDLFNBQVNOO1FBQUs7UUFDakQsSUFBSUEsVUFBVVosTUFBTW1CLFlBQVksRUFBRTtZQUM5QlosU0FBUztnQkFBQ1MsTUFBTXJCLDJEQUFPQSxDQUFDeUIsY0FBYztZQUFBO1FBQzFDO0lBQ0o7SUFFQSxNQUFNQyxVQUFVbkIsYUFBYUUsR0FBRyxDQUFDLENBQUNrQixPQUFPVjtRQUNyQyxNQUFNVyxjQUFjO1lBQUM3QixzRUFBYztTQUFDO1FBQ3BDLElBQUlNLE1BQU15QixXQUFXLEVBQUU7WUFDbkJGLFlBQVlHLElBQUksQ0FBQ2hDLHVFQUFlO1lBQ2hDLElBQUlrQixVQUFVWixNQUFNbUIsWUFBWSxFQUFFO2dCQUM5QkksWUFBWUcsSUFBSSxDQUFDaEMsNkVBQXFCO1lBQzFDLE9BQU8sSUFBSWtCLFVBQVVaLE1BQU15QixXQUFXLEVBQUU7Z0JBQ3BDRixZQUFZRyxJQUFJLENBQUNoQywrRUFBdUI7WUFDNUM7UUFDSjtRQUNBYyxRQUFRQyxHQUFHLENBQUNjLFlBQVlPLElBQUksQ0FBQztRQUM3QixNQUFNQyxnQkFBZ0JSLFlBQVlPLElBQUksQ0FBQztRQUN2QyxxQkFDSSw4REFBQ0U7WUFDR0MsV0FBV0Y7WUFFWEcsS0FBS3RCO1lBQ0x1QixTQUFTekI7c0JBRVJZO1dBSklWOzs7OztJQU9qQjtJQUNBLHFCQUNJO2tCQUNJLDRFQUFDd0I7WUFBSUgsV0FBV3ZDLDBFQUFrQjtzQkFDN0IyQjs7Ozs7OztBQUlqQjtHQTdDd0J6Qjs7UUFDTUgsb0RBQVdBO1FBQ3ZCQSxvREFBV0E7UUFFUkQsb0RBQVdBOzs7S0FKUkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL09wdGlvbnMuanN4P2QxMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9VSS9PcHRpb25zLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtBY3Rpb25zfSBmcm9tIFwiQC9jb21wb25lbnRzL2dhbWUvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Um91bmRJbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRSb3VuZCk7XHJcbiAgICBjb25zdCByb3VuZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJvdW5kc0RhdGFbY3VycmVudFJvdW5kSW5kZXhdKTtcclxuICAgIGNvbnN0IGJ1dHRvblZhbHVlcyA9IHJvdW5kLmRhdGEubWFwKGJpcmQgPT4gYmlyZC5zcGVjaWVzX3RpdGxlcnUpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc29sZS5sb2coJ29wdGlvbnMnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja09wdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZCcpKTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5TZXRBbnN3ZXIsIHBheWxvYWQ6IGluZGV4fSlcclxuICAgICAgICBpZiAoaW5kZXggPT09IHJvdW5kLmNvcnJlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5JbmNyZW1lbnRTY29yZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBidXR0b25WYWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjbGFzc2VzTGlzdCA9IFtjbGFzc2VzLm9wdGlvbl1cclxuICAgICAgICBpZiAocm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgY2xhc3Nlc0xpc3QucHVzaChjbGFzc2VzLmJsb2NrZWQpXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHJvdW5kLmFuc3dlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuaW5jb3JyZWN0QW5zd2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjbGFzc2VzTGlzdC5qb2luKCcgJykpXHJcbiAgICAgICAgY29uc3QgYW5zd2VyQ2xhc3NlcyA9IGNsYXNzZXNMaXN0LmpvaW4oJyAnKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YW5zd2VyQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBpbmQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2hlY2tPcHRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3B0aW9uR3JpZH0+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImNsYXNzZXMiLCJBY3Rpb25zIiwiT3B0aW9ucyIsImN1cnJlbnRSb3VuZEluZGV4Iiwic3RhdGUiLCJjdXJyZW50Um91bmQiLCJyb3VuZCIsInJvdW5kc0RhdGEiLCJidXR0b25WYWx1ZXMiLCJkYXRhIiwibWFwIiwiYmlyZCIsInNwZWNpZXNfdGl0bGVydSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImNoZWNrT3B0aW9uIiwiZXZlbnQiLCJpbmRleCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInR5cGUiLCJTZXRBbnN3ZXIiLCJwYXlsb2FkIiwiY29ycmVjdEluZGV4IiwiSW5jcmVtZW50U2NvcmUiLCJidXR0b25zIiwidmFsdWUiLCJjbGFzc2VzTGlzdCIsIm9wdGlvbiIsImFuc3dlckluZGV4IiwicHVzaCIsImJsb2NrZWQiLCJjb3JyZWN0QW5zd2VyIiwiaW5jb3JyZWN0QW5zd2VyIiwiam9pbiIsImFuc3dlckNsYXNzZXMiLCJidXR0b24iLCJjbGFzc05hbWUiLCJpbmQiLCJvbkNsaWNrIiwiZGl2Iiwib3B0aW9uR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});