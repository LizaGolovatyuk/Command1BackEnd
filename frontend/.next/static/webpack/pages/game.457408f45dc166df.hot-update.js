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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const buttonValues = round.data.map((bird)=>bird.species_titleru);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    console.log(\"options\");\n    console.log(round);\n    let buttons = getButtons();\n    function checkOption(event) {\n        const index = Number(event.target.getAttribute(\"ind\"));\n        dispatch({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n            payload: index\n        });\n        if (index === round.correctIndex) {\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n            });\n        }\n        buttons = getButtons();\n    }\n    function getButtons() {\n        return buttonValues.map((value, index)=>{\n            const classesList = [\n                (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().option)\n            ];\n            if (round.answerIndex !== undefined) {\n                classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().blocked));\n                if (index === round.correctIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().correctAnswer));\n                } else if (index === round.answerIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().incorrectAnswer));\n                }\n            }\n            console.log(classesList.join(\" \"));\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: classesList.join(\" \"),\n                ind: index,\n                onClick: checkOption,\n                children: value\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().optionGrid),\n            children: buttons\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"u57Jjp1DvN7KBdSqrsRP2NhBAwQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUVqQyxTQUFTSTs7SUFDcEIsTUFBTUMsb0JBQW9CSix3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWTtJQUNqRSxNQUFNQyxRQUFRUCx3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUcsVUFBVSxDQUFDSixrQkFBa0I7SUFDdEUsTUFBTUssZUFBZUYsTUFBTUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLGVBQWU7SUFDaEUsTUFBTUMsV0FBV2Ysd0RBQVdBO0lBQzVCZ0IsUUFBUUMsR0FBRyxDQUFDO0lBQ1pELFFBQVFDLEdBQUcsQ0FBQ1Q7SUFDWixJQUFJVSxVQUFVQztJQUVkLFNBQVNDLFlBQVlDLEtBQUs7UUFDdEIsTUFBTUMsUUFBUUMsT0FBT0YsTUFBTUcsTUFBTSxDQUFDQyxZQUFZLENBQUM7UUFDL0NWLFNBQVM7WUFBQ1csTUFBTXZCLDJEQUFPQSxDQUFDd0IsU0FBUztZQUFFQyxTQUFTTjtRQUFLO1FBQ2pELElBQUlBLFVBQVVkLE1BQU1xQixZQUFZLEVBQUU7WUFDOUJkLFNBQVM7Z0JBQUNXLE1BQU12QiwyREFBT0EsQ0FBQzJCLGNBQWM7WUFBQTtRQUMxQztRQUNBWixVQUFVQztJQUNkO0lBRUEsU0FBU0E7UUFDTCxPQUFPVCxhQUFhRSxHQUFHLENBQUMsQ0FBQ21CLE9BQU9UO1lBQzVCLE1BQU1VLGNBQWM7Z0JBQUM5QixzRUFBYzthQUFDO1lBQ3BDLElBQUlNLE1BQU0wQixXQUFXLEtBQUtDLFdBQVc7Z0JBQ2pDSCxZQUFZSSxJQUFJLENBQUNsQyx1RUFBZTtnQkFDaEMsSUFBSW9CLFVBQVVkLE1BQU1xQixZQUFZLEVBQUU7b0JBQzlCRyxZQUFZSSxJQUFJLENBQUNsQyw2RUFBcUI7Z0JBQzFDLE9BQU8sSUFBSW9CLFVBQVVkLE1BQU0wQixXQUFXLEVBQUU7b0JBQ3BDRixZQUFZSSxJQUFJLENBQUNsQywrRUFBdUI7Z0JBQzVDO1lBQ0o7WUFDQWMsUUFBUUMsR0FBRyxDQUFDZSxZQUFZUSxJQUFJLENBQUM7WUFDN0IscUJBQ0ksOERBQUNDO2dCQUNHQyxXQUFXVixZQUFZUSxJQUFJLENBQUM7Z0JBRTVCRyxLQUFLckI7Z0JBQ0xzQixTQUFTeEI7MEJBRVJXO2VBSklUOzs7OztRQU9qQjtJQUNKO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUN1QjtZQUFJSCxXQUFXeEMsMEVBQWtCO3NCQUM3QmdCOzs7Ozs7O0FBSWpCO0dBbER3QmQ7O1FBQ01ILG9EQUFXQTtRQUN2QkEsb0RBQVdBO1FBRVJELG9EQUFXQTs7O0tBSlJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25zLmpzeD9kMTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vVUkvT3B0aW9ucy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7QWN0aW9uc30gZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcHRpb25zKCkge1xyXG4gICAgY29uc3QgY3VycmVudFJvdW5kSW5kZXggPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jdXJyZW50Um91bmQpO1xyXG4gICAgY29uc3Qgcm91bmQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yb3VuZHNEYXRhW2N1cnJlbnRSb3VuZEluZGV4XSk7XHJcbiAgICBjb25zdCBidXR0b25WYWx1ZXMgPSByb3VuZC5kYXRhLm1hcChiaXJkID0+IGJpcmQuc3BlY2llc190aXRsZXJ1KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnNvbGUubG9nKCdvcHRpb25zJyk7XHJcbiAgICBjb25zb2xlLmxvZyhyb3VuZCk7XHJcbiAgICBsZXQgYnV0dG9ucyA9IGdldEJ1dHRvbnMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja09wdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZCcpKTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5TZXRBbnN3ZXIsIHBheWxvYWQ6IGluZGV4fSlcclxuICAgICAgICBpZiAoaW5kZXggPT09IHJvdW5kLmNvcnJlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5JbmNyZW1lbnRTY29yZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbnMgPSBnZXRCdXR0b25zKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgIHJldHVybiBidXR0b25WYWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xhc3Nlc0xpc3QgPSBbY2xhc3Nlcy5vcHRpb25dXHJcbiAgICAgICAgICAgIGlmIChyb3VuZC5hbnN3ZXJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuYmxvY2tlZClcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlc0xpc3QucHVzaChjbGFzc2VzLmNvcnJlY3RBbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gcm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuaW5jb3JyZWN0QW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjbGFzc2VzTGlzdC5qb2luKCcgJykpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzTGlzdC5qb2luKCcgJyl9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBpbmQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9wdGlvbkdyaWR9PlxyXG4gICAgICAgICAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiQWN0aW9ucyIsIk9wdGlvbnMiLCJjdXJyZW50Um91bmRJbmRleCIsInN0YXRlIiwiY3VycmVudFJvdW5kIiwicm91bmQiLCJyb3VuZHNEYXRhIiwiYnV0dG9uVmFsdWVzIiwiZGF0YSIsIm1hcCIsImJpcmQiLCJzcGVjaWVzX3RpdGxlcnUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJidXR0b25zIiwiZ2V0QnV0dG9ucyIsImNoZWNrT3B0aW9uIiwiZXZlbnQiLCJpbmRleCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInR5cGUiLCJTZXRBbnN3ZXIiLCJwYXlsb2FkIiwiY29ycmVjdEluZGV4IiwiSW5jcmVtZW50U2NvcmUiLCJ2YWx1ZSIsImNsYXNzZXNMaXN0Iiwib3B0aW9uIiwiYW5zd2VySW5kZXgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiYmxvY2tlZCIsImNvcnJlY3RBbnN3ZXIiLCJpbmNvcnJlY3RBbnN3ZXIiLCJqb2luIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiaW5kIiwib25DbGljayIsImRpdiIsIm9wdGlvbkdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});