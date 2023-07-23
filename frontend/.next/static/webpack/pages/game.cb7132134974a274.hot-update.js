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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Options() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const [buttons, setButtons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(getButtons());\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    function checkOption(event) {\n        const index = Number(event.target.getAttribute(\"ind\"));\n        dispatch({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n            payload: index\n        });\n        if (index === round.correctIndex) {\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n            });\n        }\n        setButtons(getButtons());\n        setTimeout(()=>{\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.NextRound\n            });\n            setButtons(getButtons());\n        }, 1500);\n    }\n    function getButtons() {\n        _s1();\n        const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n        const round1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n        const buttonValues = round1.data.map((bird)=>bird.species_titleru);\n        return buttonValues.map((value, index)=>{\n            const classesList = [\n                (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().option)\n            ];\n            if (round1.answerIndex !== undefined) {\n                classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().blocked));\n                if (index === round1.correctIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().correctAnswer));\n                } else if (index === round1.answerIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().incorrectAnswer));\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: classesList.join(\" \"),\n                ind: index,\n                onClick: checkOption,\n                children: value\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this);\n        });\n    }\n    _s1(getButtons, \"dB/mG+4XHzCyjt7cQejfCfta6UM=\", false, function() {\n        return [\n            react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n            react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().optionGrid),\n            children: buttons\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"fx5o70X1B6fGNO5TOIQLPt9Eif4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDUDtBQUNFO0FBQ2pCO0FBRWhCLFNBQVNLOzs7SUFDcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDSTtJQUN2QyxNQUFNQyxXQUFXVCx3REFBV0E7SUFFNUIsU0FBU1UsWUFBWUMsS0FBSztRQUN0QixNQUFNQyxRQUFRQyxPQUFPRixNQUFNRyxNQUFNLENBQUNDLFlBQVksQ0FBQztRQUMvQ04sU0FBUztZQUFDTyxNQUFNYiwyREFBT0EsQ0FBQ2MsU0FBUztZQUFFQyxTQUFTTjtRQUFLO1FBQ2pELElBQUlBLFVBQVVPLE1BQU1DLFlBQVksRUFBRTtZQUM5QlgsU0FBUztnQkFBQ08sTUFBTWIsMkRBQU9BLENBQUNrQixjQUFjO1lBQUE7UUFDMUM7UUFDQWQsV0FBV0M7UUFDWGMsV0FBVztZQUNQYixTQUFTO2dCQUFDTyxNQUFNYiwyREFBT0EsQ0FBQ29CLFNBQVM7WUFBQTtZQUNqQ2hCLFdBQVdDO1FBQ2YsR0FBRztJQUNQO0lBRUEsU0FBU0E7O1FBQ0wsTUFBTWdCLG9CQUFvQnZCLHdEQUFXQSxDQUFDd0IsQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWTtRQUNqRSxNQUFNUCxTQUFRbEIsd0RBQVdBLENBQUN3QixDQUFBQSxRQUFTQSxNQUFNRSxVQUFVLENBQUNILGtCQUFrQjtRQUN0RSxNQUFNSSxlQUFlVCxPQUFNVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsZUFBZTtRQUNoRSxPQUFPSixhQUFhRSxHQUFHLENBQUMsQ0FBQ0csT0FBT3JCO1lBQzVCLE1BQU1zQixjQUFjO2dCQUFDaEMsc0VBQWM7YUFBQztZQUNwQyxJQUFJaUIsT0FBTWlCLFdBQVcsS0FBS0MsV0FBVztnQkFDakNILFlBQVlJLElBQUksQ0FBQ3BDLHVFQUFlO2dCQUNoQyxJQUFJVSxVQUFVTyxPQUFNQyxZQUFZLEVBQUU7b0JBQzlCYyxZQUFZSSxJQUFJLENBQUNwQyw2RUFBcUI7Z0JBQzFDLE9BQU8sSUFBSVUsVUFBVU8sT0FBTWlCLFdBQVcsRUFBRTtvQkFDcENGLFlBQVlJLElBQUksQ0FBQ3BDLCtFQUF1QjtnQkFDNUM7WUFDSjtZQUNBLHFCQUNJLDhEQUFDd0M7Z0JBQ0dDLFdBQVdULFlBQVlVLElBQUksQ0FBQztnQkFFNUJDLEtBQUtqQztnQkFDTGtDLFNBQVNwQzswQkFFUnVCO2VBSklyQjs7Ozs7UUFPakI7SUFDSjtRQXpCU0o7O1lBQ3FCUCxvREFBV0E7WUFDdkJBLG9EQUFXQTs7O0lBeUI3QixxQkFDSTtrQkFDSSw0RUFBQzhDO1lBQUlKLFdBQVd6QywwRUFBa0I7c0JBQzdCSTs7Ozs7OztBQUlqQjtHQW5Ed0JEOztRQUVITCxvREFBV0E7OztLQUZSSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3g/ZDExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1VJL09wdGlvbnMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9zdG9yZVwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCBbYnV0dG9ucywgc2V0QnV0dG9uc10gPSB1c2VTdGF0ZShnZXRCdXR0b25zKCkpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tPcHRpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmQnKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuU2V0QW5zd2VyLCBwYXlsb2FkOiBpbmRleH0pXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuSW5jcmVtZW50U2NvcmV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCdXR0b25zKGdldEJ1dHRvbnMoKSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuTmV4dFJvdW5kfSlcclxuICAgICAgICAgICAgc2V0QnV0dG9ucyhnZXRCdXR0b25zKCkpXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91bmRJbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRSb3VuZCk7XHJcbiAgICAgICAgY29uc3Qgcm91bmQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yb3VuZHNEYXRhW2N1cnJlbnRSb3VuZEluZGV4XSk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uVmFsdWVzID0gcm91bmQuZGF0YS5tYXAoYmlyZCA9PiBiaXJkLnNwZWNpZXNfdGl0bGVydSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvblZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzTGlzdCA9IFtjbGFzc2VzLm9wdGlvbl1cclxuICAgICAgICAgICAgaWYgKHJvdW5kLmFuc3dlckluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzZXNMaXN0LnB1c2goY2xhc3Nlcy5ibG9ja2VkKVxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSByb3VuZC5hbnN3ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXNMaXN0LnB1c2goY2xhc3Nlcy5pbmNvcnJlY3RBbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzTGlzdC5qb2luKCcgJyl9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBpbmQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9wdGlvbkdyaWR9PlxyXG4gICAgICAgICAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiQWN0aW9ucyIsInVzZVN0YXRlIiwiT3B0aW9ucyIsImJ1dHRvbnMiLCJzZXRCdXR0b25zIiwiZ2V0QnV0dG9ucyIsImRpc3BhdGNoIiwiY2hlY2tPcHRpb24iLCJldmVudCIsImluZGV4IiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidHlwZSIsIlNldEFuc3dlciIsInBheWxvYWQiLCJyb3VuZCIsImNvcnJlY3RJbmRleCIsIkluY3JlbWVudFNjb3JlIiwic2V0VGltZW91dCIsIk5leHRSb3VuZCIsImN1cnJlbnRSb3VuZEluZGV4Iiwic3RhdGUiLCJjdXJyZW50Um91bmQiLCJyb3VuZHNEYXRhIiwiYnV0dG9uVmFsdWVzIiwiZGF0YSIsIm1hcCIsImJpcmQiLCJzcGVjaWVzX3RpdGxlcnUiLCJ2YWx1ZSIsImNsYXNzZXNMaXN0Iiwib3B0aW9uIiwiYW5zd2VySW5kZXgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiYmxvY2tlZCIsImNvcnJlY3RBbnN3ZXIiLCJpbmNvcnJlY3RBbnN3ZXIiLCJidXR0b24iLCJjbGFzc05hbWUiLCJqb2luIiwiaW5kIiwib25DbGljayIsImRpdiIsIm9wdGlvbkdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});