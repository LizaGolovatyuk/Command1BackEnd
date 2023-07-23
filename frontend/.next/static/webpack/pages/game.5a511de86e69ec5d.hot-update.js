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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const buttonValues = round.data.map((bird)=>bird.species_titleru);\n    const buttons = buttonValues.map((value, index)=>{\n        let answerClasses = round.answerIndex ? \" \" + (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().blocked) : \" \";\n        if (round.answerIndex) {\n            if (index === round.correctIndex) {\n                answerClasses += (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().correctAnswer);\n            } else if (index === round.answerIndex) {\n                answerClasses += (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().incorrectAnswer);\n            }\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().option) + answerClasses,\n            onClick: checkOption,\n            children: value\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().optionGrid),\n            children: buttons\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"dB/mG+4XHzCyjt7cQejfCfta6UM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = Options;\nfunction checkOption(event) {\n    _s1();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)({\n        type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n        payload: event.target.key\n    });\n    if (event.target.key === round.correctIndex) {\n        (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n        });\n    }\n}\n_s1(checkOption, \"da+Ixdb8anyCJtTiaRw9ceFruaY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUVqQyxTQUFTSTs7SUFDcEIsTUFBTUMsb0JBQW9CSix3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWTtJQUNqRSxNQUFNQyxRQUFRUCx3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUcsVUFBVSxDQUFDSixrQkFBa0I7SUFDdEUsTUFBTUssZUFBZUYsTUFBTUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLGVBQWU7SUFDaEUsTUFBTUMsVUFBVUwsYUFBYUUsR0FBRyxDQUFDLENBQUNJLE9BQU9DO1FBQ3JDLElBQUlDLGdCQUFnQlYsTUFBTVcsV0FBVyxHQUFHLE1BQU1qQix1RUFBZSxHQUFHO1FBQ2hFLElBQUlNLE1BQU1XLFdBQVcsRUFBRTtZQUNuQixJQUFJRixVQUFVVCxNQUFNYSxZQUFZLEVBQUU7Z0JBQzlCSCxpQkFBaUJoQiw2RUFBcUI7WUFDMUMsT0FBTyxJQUFJZSxVQUFVVCxNQUFNVyxXQUFXLEVBQUU7Z0JBQ3BDRCxpQkFBaUJoQiwrRUFBdUI7WUFDNUM7UUFDSjtRQUNBLHFCQUNJLDhEQUFDc0I7WUFDR0MsV0FBV3ZCLHNFQUFjLEdBQUdnQjtZQUU1QlMsU0FBU0M7c0JBRVJaO1dBSElDOzs7OztJQU1qQjtJQUNBLHFCQUNJO2tCQUNJLDRFQUFDWTtZQUFJSixXQUFXdkIsMEVBQWtCO3NCQUM3QmE7Ozs7Ozs7QUFJakI7R0E5QndCWDs7UUFDTUgsb0RBQVdBO1FBQ3ZCQSxvREFBV0E7OztLQUZMRztBQWdDeEIsU0FBU3dCLFlBQVlHLEtBQUs7O0lBQ3RCLE1BQU0xQixvQkFBb0JKLHdEQUFXQSxDQUFDSyxDQUFBQSxRQUFTQSxNQUFNQyxZQUFZO0lBQ2pFLE1BQU1DLFFBQVFQLHdEQUFXQSxDQUFDSyxDQUFBQSxRQUFTQSxNQUFNRyxVQUFVLENBQUNKLGtCQUFrQjtJQUN0RUwsd0RBQVdBLENBQUM7UUFBQ2dDLE1BQU03QiwyREFBT0EsQ0FBQzhCLFNBQVM7UUFBRUMsU0FBU0gsTUFBTUksTUFBTSxDQUFDQyxHQUFHO0lBQUE7SUFDL0QsSUFBSUwsTUFBTUksTUFBTSxDQUFDQyxHQUFHLEtBQUs1QixNQUFNYSxZQUFZLEVBQUU7UUFDekNyQix3REFBV0EsQ0FBQztZQUFDZ0MsTUFBTTdCLDJEQUFPQSxDQUFDa0MsY0FBYztRQUFBO0lBQzdDO0FBQ0o7SUFQU1Q7O1FBQ3FCM0Isb0RBQVdBO1FBQ3ZCQSxvREFBV0E7UUFDekJELG9EQUFXQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3g/ZDExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1VJL09wdGlvbnMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3B0aW9ucygpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3VuZEluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFJvdW5kKTtcclxuICAgIGNvbnN0IHJvdW5kID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucm91bmRzRGF0YVtjdXJyZW50Um91bmRJbmRleF0pO1xyXG4gICAgY29uc3QgYnV0dG9uVmFsdWVzID0gcm91bmQuZGF0YS5tYXAoYmlyZCA9PiBiaXJkLnNwZWNpZXNfdGl0bGVydSk7XHJcbiAgICBjb25zdCBidXR0b25zID0gYnV0dG9uVmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IGFuc3dlckNsYXNzZXMgPSByb3VuZC5hbnN3ZXJJbmRleCA/IFwiIFwiICsgY2xhc3Nlcy5ibG9ja2VkIDogXCIgXCI7XHJcbiAgICAgICAgaWYgKHJvdW5kLmFuc3dlckluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJDbGFzc2VzICs9IGNsYXNzZXMuY29ycmVjdEFuc3dlcjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gcm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlckNsYXNzZXMgKz0gY2xhc3Nlcy5pbmNvcnJlY3RBbnN3ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9wdGlvbiArIGFuc3dlckNsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2hlY2tPcHRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3B0aW9uR3JpZH0+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrT3B0aW9uKGV2ZW50KSB7XHJcbiAgICBjb25zdCBjdXJyZW50Um91bmRJbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRSb3VuZCk7XHJcbiAgICBjb25zdCByb3VuZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJvdW5kc0RhdGFbY3VycmVudFJvdW5kSW5kZXhdKTtcclxuICAgIHVzZURpc3BhdGNoKHt0eXBlOiBBY3Rpb25zLlNldEFuc3dlciwgcGF5bG9hZDogZXZlbnQudGFyZ2V0LmtleX0pXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmtleSA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgdXNlRGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuSW5jcmVtZW50U2NvcmV9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiQWN0aW9ucyIsIk9wdGlvbnMiLCJjdXJyZW50Um91bmRJbmRleCIsInN0YXRlIiwiY3VycmVudFJvdW5kIiwicm91bmQiLCJyb3VuZHNEYXRhIiwiYnV0dG9uVmFsdWVzIiwiZGF0YSIsIm1hcCIsImJpcmQiLCJzcGVjaWVzX3RpdGxlcnUiLCJidXR0b25zIiwidmFsdWUiLCJpbmRleCIsImFuc3dlckNsYXNzZXMiLCJhbnN3ZXJJbmRleCIsImJsb2NrZWQiLCJjb3JyZWN0SW5kZXgiLCJjb3JyZWN0QW5zd2VyIiwiaW5jb3JyZWN0QW5zd2VyIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib3B0aW9uIiwib25DbGljayIsImNoZWNrT3B0aW9uIiwiZGl2Iiwib3B0aW9uR3JpZCIsImV2ZW50IiwidHlwZSIsIlNldEFuc3dlciIsInBheWxvYWQiLCJ0YXJnZXQiLCJrZXkiLCJJbmNyZW1lbnRTY29yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ }),

/***/ "./components/game/store.js":
/*!**********************************!*\
  !*** ./components/game/store.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Actions: function() { return /* binding */ Actions; },\n/* harmony export */   MaxCountRounds: function() { return /* binding */ MaxCountRounds; },\n/* harmony export */   PanelStates: function() { return /* binding */ PanelStates; },\n/* harmony export */   defaultState: function() { return /* binding */ defaultState; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nconst MaxCountRounds = 20;\nconst PanelStates = {\n    StartGame: \"Start\",\n    Game: \"Game\",\n    EndGame: \"EndGame\",\n    Error: \"Error\",\n    Undefined: undefined\n};\nconst defaultState = {\n    panelState: PanelStates.StartGame,\n    currentRound: undefined,\n    viewRound: undefined,\n    score: undefined,\n    loading: false,\n    error: undefined,\n    roundsData: []\n};\nconst Actions = {\n    InitializeState: \"InitializeState\",\n    NextState: \"NextState\",\n    InitializeRound: \"InitializeRound\",\n    NextRound: \"NextRound\",\n    InitializeScore: \"InitializeScore\",\n    IncrementScore: \"IncrementScore\",\n    SetRoundsData: \"SetRoundsData\",\n    SetRoundIndex: \"SetRoundIndex\",\n    SetViewRound: \"SetViewRound\",\n    SetAnswer: \"SetAnswer\",\n    SetDefault: \"SetDefault\",\n    StartLoad: \"StartLoad\",\n    FinishLoad: \"FinishLoad\",\n    Error: \"Error\"\n};\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case Actions.SetDefault:\n            return defaultState;\n        case Actions.InitializeState:\n            return {\n                ...state,\n                panelState: PanelStates.Game\n            };\n        case Actions.NextState:\n            return {\n                ...state,\n                panelState: getNextState(state.panelState) || PanelStates.StartGame\n            };\n        case Actions.InitializeRound:\n            return {\n                ...state,\n                currentRound: 0\n            };\n        case Actions.NextRound:\n            const nextNumber = getNextRound(state.currentRound);\n            return {\n                ...state,\n                currentRound: nextNumber,\n                viewRound: nextNumber\n            };\n        case Actions.SetViewRound:\n            return {\n                ...state,\n                viewRound: action.payload\n            };\n        case Actions.InitializeScore:\n            return {\n                ...state,\n                score: 0\n            };\n        case Actions.IncrementScore:\n            return {\n                ...state,\n                score: state.score + 1\n            };\n        case Actions.SetRoundsData:\n            return {\n                ...state,\n                roundsData: action.payload\n            };\n        case Actions.StartLoad:\n            return {\n                ...state,\n                loading: true\n            };\n        case Actions.FinishLoad:\n            return {\n                ...state,\n                loading: false\n            };\n        case Actions.Error:\n            return {\n                ...state,\n                panelState: PanelStates.Error,\n                error: action.payload\n            };\n        case Actions.SetAnswer:\n            state.roundsData[state.currentRound].answerIndex = action.payload;\n            return {\n                ...state\n            };\n        default:\n            return state;\n    }\n};\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\nfunction getNextState(currentState) {\n    switch(currentState){\n        case PanelStates.StartGame:\n            return PanelStates.Game;\n        case PanelStates.Game:\n            return PanelStates.EndGame;\n        case PanelStates.EndGame:\n            return PanelStates.Undefined;\n        default:\n            return PanelStates.Undefined;\n    }\n}\nfunction getNextRound(currentRound) {\n    if (Number.isInteger(currentRound) && currentRound < MaxCountRounds) {\n        return currentRound + 1;\n    }\n    return undefined;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLdkMsWUFBWUMsU0FBUztZQUN0QixPQUFPRCxZQUFZRSxJQUFJO1FBRTNCLEtBQUtGLFlBQVlFLElBQUk7WUFDakIsT0FBT0YsWUFBWUcsT0FBTztRQUU5QixLQUFLSCxZQUFZRyxPQUFPO1lBQ3BCLE9BQU9ILFlBQVlLLFNBQVM7UUFFaEM7WUFDSSxPQUFPTCxZQUFZSyxTQUFTO0lBQ3BDO0FBQ0o7QUFFQSxTQUFTOEIsYUFBYTFCLFlBQVk7SUFDOUIsSUFBSStCLE9BQU9DLFNBQVMsQ0FBQ2hDLGlCQUFpQkEsZUFBZVYsZ0JBQWdCO1FBQ2pFLE9BQU9VLGVBQWU7SUFDMUI7SUFDQSxPQUFPSDtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9zdG9yZS5qcz80N2QzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1heENvdW50Um91bmRzID0gMjA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxTdGF0ZXMgPSB7XHJcbiAgICBTdGFydEdhbWU6IFwiU3RhcnRcIixcclxuICAgIEdhbWU6IFwiR2FtZVwiLFxyXG4gICAgRW5kR2FtZTogXCJFbmRHYW1lXCIsXHJcbiAgICBFcnJvcjogXCJFcnJvclwiLFxyXG4gICAgVW5kZWZpbmVkOiB1bmRlZmluZWRcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcbiAgICBwYW5lbFN0YXRlOiBQYW5lbFN0YXRlcy5TdGFydEdhbWUsXHJcbiAgICBjdXJyZW50Um91bmQ6IHVuZGVmaW5lZCxcclxuICAgIHZpZXdSb3VuZDogdW5kZWZpbmVkLFxyXG4gICAgc2NvcmU6IHVuZGVmaW5lZCxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcclxuICAgIHJvdW5kc0RhdGE6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvbnMgPSB7XHJcbiAgICBJbml0aWFsaXplU3RhdGU6IFwiSW5pdGlhbGl6ZVN0YXRlXCIsXHJcbiAgICBOZXh0U3RhdGU6IFwiTmV4dFN0YXRlXCIsXHJcbiAgICBJbml0aWFsaXplUm91bmQ6IFwiSW5pdGlhbGl6ZVJvdW5kXCIsXHJcbiAgICBOZXh0Um91bmQ6IFwiTmV4dFJvdW5kXCIsXHJcbiAgICBJbml0aWFsaXplU2NvcmU6IFwiSW5pdGlhbGl6ZVNjb3JlXCIsXHJcbiAgICBJbmNyZW1lbnRTY29yZTogXCJJbmNyZW1lbnRTY29yZVwiLFxyXG4gICAgU2V0Um91bmRzRGF0YTogXCJTZXRSb3VuZHNEYXRhXCIsXHJcbiAgICBTZXRSb3VuZEluZGV4OiBcIlNldFJvdW5kSW5kZXhcIixcclxuICAgIFNldFZpZXdSb3VuZDogXCJTZXRWaWV3Um91bmRcIixcclxuICAgIFNldEFuc3dlcjogXCJTZXRBbnN3ZXJcIixcclxuICAgIFNldERlZmF1bHQ6IFwiU2V0RGVmYXVsdFwiLFxyXG4gICAgU3RhcnRMb2FkOiBcIlN0YXJ0TG9hZFwiLFxyXG4gICAgRmluaXNoTG9hZDogXCJGaW5pc2hMb2FkXCIsXHJcbiAgICBFcnJvcjogXCJFcnJvclwiXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNldERlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0U3RhdGU7XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5Jbml0aWFsaXplU3RhdGU6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBhbmVsU3RhdGU6IFBhbmVsU3RhdGVzLkdhbWV9O1xyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbnMuTmV4dFN0YXRlOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYW5lbFN0YXRlOiBnZXROZXh0U3RhdGUoc3RhdGUucGFuZWxTdGF0ZSkgfHwgUGFuZWxTdGF0ZXMuU3RhcnRHYW1lfTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkluaXRpYWxpemVSb3VuZDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY3VycmVudFJvdW5kOiAwfTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLk5leHRSb3VuZDpcclxuICAgICAgICAgICAgY29uc3QgbmV4dE51bWJlciA9IGdldE5leHRSb3VuZChzdGF0ZS5jdXJyZW50Um91bmQpXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGN1cnJlbnRSb3VuZDogbmV4dE51bWJlciwgdmlld1JvdW5kOiBuZXh0TnVtYmVyfTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNldFZpZXdSb3VuZDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdmlld1JvdW5kOiBhY3Rpb24ucGF5bG9hZH1cclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkluaXRpYWxpemVTY29yZTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2NvcmU6IDB9XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5JbmNyZW1lbnRTY29yZTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2NvcmU6IHN0YXRlLnNjb3JlICsgMX07XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5TZXRSb3VuZHNEYXRhOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByb3VuZHNEYXRhOiBhY3Rpb24ucGF5bG9hZH1cclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlN0YXJ0TG9hZDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX1cclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkZpbmlzaExvYWQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlfVxyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbnMuRXJyb3I6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBhbmVsU3RhdGU6IFBhbmVsU3RhdGVzLkVycm9yLCBlcnJvcjogYWN0aW9uLnBheWxvYWR9XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5TZXRBbnN3ZXI6XHJcbiAgICAgICAgICAgIHN0YXRlLnJvdW5kc0RhdGFbc3RhdGUuY3VycmVudFJvdW5kXS5hbnN3ZXJJbmRleCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRTdGF0ZShjdXJyZW50U3RhdGUpIHtcclxuICAgIHN3aXRjaCAoY3VycmVudFN0YXRlKSB7XHJcbiAgICAgICAgY2FzZSBQYW5lbFN0YXRlcy5TdGFydEdhbWU6XHJcbiAgICAgICAgICAgIHJldHVybiBQYW5lbFN0YXRlcy5HYW1lO1xyXG5cclxuICAgICAgICBjYXNlIFBhbmVsU3RhdGVzLkdhbWU6XHJcbiAgICAgICAgICAgIHJldHVybiBQYW5lbFN0YXRlcy5FbmRHYW1lO1xyXG5cclxuICAgICAgICBjYXNlIFBhbmVsU3RhdGVzLkVuZEdhbWU6XHJcbiAgICAgICAgICAgIHJldHVybiBQYW5lbFN0YXRlcy5VbmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBQYW5lbFN0YXRlcy5VbmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5leHRSb3VuZChjdXJyZW50Um91bmQpIHtcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN1cnJlbnRSb3VuZCkgJiYgY3VycmVudFJvdW5kIDwgTWF4Q291bnRSb3VuZHMpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudFJvdW5kICsgMTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJNYXhDb3VudFJvdW5kcyIsIlBhbmVsU3RhdGVzIiwiU3RhcnRHYW1lIiwiR2FtZSIsIkVuZEdhbWUiLCJFcnJvciIsIlVuZGVmaW5lZCIsInVuZGVmaW5lZCIsImRlZmF1bHRTdGF0ZSIsInBhbmVsU3RhdGUiLCJjdXJyZW50Um91bmQiLCJ2aWV3Um91bmQiLCJzY29yZSIsImxvYWRpbmciLCJlcnJvciIsInJvdW5kc0RhdGEiLCJBY3Rpb25zIiwiSW5pdGlhbGl6ZVN0YXRlIiwiTmV4dFN0YXRlIiwiSW5pdGlhbGl6ZVJvdW5kIiwiTmV4dFJvdW5kIiwiSW5pdGlhbGl6ZVNjb3JlIiwiSW5jcmVtZW50U2NvcmUiLCJTZXRSb3VuZHNEYXRhIiwiU2V0Um91bmRJbmRleCIsIlNldFZpZXdSb3VuZCIsIlNldEFuc3dlciIsIlNldERlZmF1bHQiLCJTdGFydExvYWQiLCJGaW5pc2hMb2FkIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImdldE5leHRTdGF0ZSIsIm5leHROdW1iZXIiLCJnZXROZXh0Um91bmQiLCJwYXlsb2FkIiwiYW5zd2VySW5kZXgiLCJzdG9yZSIsImN1cnJlbnRTdGF0ZSIsIk51bWJlciIsImlzSW50ZWdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/store.js\n"));

/***/ })

});