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

/***/ "./components/game/store.js":
/*!**********************************!*\
  !*** ./components/game/store.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Actions: function() { return /* binding */ Actions; },\n/* harmony export */   MaxCountRounds: function() { return /* binding */ MaxCountRounds; },\n/* harmony export */   PanelStates: function() { return /* binding */ PanelStates; },\n/* harmony export */   defaultState: function() { return /* binding */ defaultState; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nconst MaxCountRounds = 5;\nconst PanelStates = {\n    StartGame: \"Start\",\n    Game: \"Game\",\n    EndGame: \"EndGame\",\n    Error: \"Error\",\n    Undefined: undefined\n};\nconst defaultState = {\n    panelState: PanelStates.StartGame,\n    currentRound: undefined,\n    viewRound: undefined,\n    score: undefined,\n    loading: false,\n    error: undefined,\n    roundsData: []\n};\nconst Actions = {\n    InitializeState: \"InitializeState\",\n    NextState: \"NextState\",\n    InitializeRound: \"InitializeRound\",\n    NextRound: \"NextRound\",\n    InitializeScore: \"InitializeScore\",\n    IncrementScore: \"IncrementScore\",\n    SetRoundsData: \"SetRoundsData\",\n    SetRoundIndex: \"SetRoundIndex\",\n    SetViewRound: \"SetViewRound\",\n    SetAnswer: \"SetAnswer\",\n    SetDefault: \"SetDefault\",\n    StartLoad: \"StartLoad\",\n    FinishLoad: \"FinishLoad\",\n    Error: \"Error\",\n    SetAppData: \"SetAppData\"\n};\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case Actions.SetDefault:\n            return defaultState;\n        case Actions.InitializeState:\n            return {\n                ...state,\n                panelState: PanelStates.Game\n            };\n        case Actions.NextState:\n            return {\n                ...state,\n                panelState: getNextState(state.panelState) || PanelStates.StartGame\n            };\n        case Actions.InitializeRound:\n            return {\n                ...state,\n                currentRound: 0,\n                viewRound: 0\n            };\n        case Actions.NextRound:\n            const nextNumber = getNextRound(state.currentRound);\n            return {\n                ...state,\n                currentRound: nextNumber,\n                viewRound: nextNumber\n            };\n        case Actions.SetViewRound:\n            return {\n                ...state,\n                viewRound: action.payload\n            };\n        case Actions.InitializeScore:\n            return {\n                ...state,\n                score: 0\n            };\n        case Actions.IncrementScore:\n            return {\n                ...state,\n                score: state.score + 1\n            };\n        case Actions.SetRoundsData:\n            return {\n                ...state,\n                roundsData: action.payload\n            };\n        case Actions.StartLoad:\n            return {\n                ...state,\n                loading: true\n            };\n        case Actions.FinishLoad:\n            return {\n                ...state,\n                loading: false\n            };\n        case Actions.Error:\n            return {\n                ...state,\n                panelState: PanelStates.Error,\n                error: action.payload\n            };\n        case Actions.SetAnswer:\n            const arr = Object.assign([], state.roundsData);\n            arr[state.currentRound].answerIndex = action.payload;\n            return {\n                ...state,\n                roundsData: arr\n            };\n        case Actions.SetAppData:\n            return {\n                ...state,\n                appData: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\nfunction getNextState(currentState) {\n    switch(currentState){\n        case PanelStates.StartGame:\n            return PanelStates.Game;\n        case PanelStates.Game:\n            return PanelStates.EndGame;\n        case PanelStates.EndGame:\n            return PanelStates.Undefined;\n        default:\n            return PanelStates.Undefined;\n    }\n}\nfunction getNextRound(currentRound) {\n    if (Number.isInteger(currentRound) && currentRound < MaxCountRounds) {\n        return currentRound + 1;\n    }\n    return undefined;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUFDLEdBQUdFLEtBQUs7Z0JBQUVXLFNBQVNWLE9BQU9LLE9BQU87WUFBQTtRQUU3QztZQUNJLE9BQU9OO0lBQ2Y7QUFDSjtBQUVBLE1BQU1ZLFFBQVE3QyxrREFBV0EsQ0FBQ2dDO0FBQzFCLCtEQUFlYSxLQUFLQSxFQUFDO0FBRXJCLFNBQVNULGFBQWFVLFlBQVk7SUFDOUIsT0FBUUE7UUFDSixLQUFLNUMsWUFBWUMsU0FBUztZQUN0QixPQUFPRCxZQUFZRSxJQUFJO1FBRTNCLEtBQUtGLFlBQVlFLElBQUk7WUFDakIsT0FBT0YsWUFBWUcsT0FBTztRQUU5QixLQUFLSCxZQUFZRyxPQUFPO1lBQ3BCLE9BQU9ILFlBQVlLLFNBQVM7UUFFaEM7WUFDSSxPQUFPTCxZQUFZSyxTQUFTO0lBQ3BDO0FBQ0o7QUFFQSxTQUFTK0IsYUFBYTNCLFlBQVk7SUFDOUIsSUFBSW9DLE9BQU9DLFNBQVMsQ0FBQ3JDLGlCQUFpQkEsZUFBZVYsZ0JBQWdCO1FBQ2pFLE9BQU9VLGVBQWU7SUFDMUI7SUFDQSxPQUFPSDtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9zdG9yZS5qcz80N2QzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1heENvdW50Um91bmRzID0gNTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYW5lbFN0YXRlcyA9IHtcclxuICAgIFN0YXJ0R2FtZTogXCJTdGFydFwiLFxyXG4gICAgR2FtZTogXCJHYW1lXCIsXHJcbiAgICBFbmRHYW1lOiBcIkVuZEdhbWVcIixcclxuICAgIEVycm9yOiBcIkVycm9yXCIsXHJcbiAgICBVbmRlZmluZWQ6IHVuZGVmaW5lZFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuICAgIHBhbmVsU3RhdGU6IFBhbmVsU3RhdGVzLlN0YXJ0R2FtZSxcclxuICAgIGN1cnJlbnRSb3VuZDogdW5kZWZpbmVkLFxyXG4gICAgdmlld1JvdW5kOiB1bmRlZmluZWQsXHJcbiAgICBzY29yZTogdW5kZWZpbmVkLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogdW5kZWZpbmVkLFxyXG4gICAgcm91bmRzRGF0YTogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9ucyA9IHtcclxuICAgIEluaXRpYWxpemVTdGF0ZTogXCJJbml0aWFsaXplU3RhdGVcIixcclxuICAgIE5leHRTdGF0ZTogXCJOZXh0U3RhdGVcIixcclxuICAgIEluaXRpYWxpemVSb3VuZDogXCJJbml0aWFsaXplUm91bmRcIixcclxuICAgIE5leHRSb3VuZDogXCJOZXh0Um91bmRcIixcclxuICAgIEluaXRpYWxpemVTY29yZTogXCJJbml0aWFsaXplU2NvcmVcIixcclxuICAgIEluY3JlbWVudFNjb3JlOiBcIkluY3JlbWVudFNjb3JlXCIsXHJcbiAgICBTZXRSb3VuZHNEYXRhOiBcIlNldFJvdW5kc0RhdGFcIixcclxuICAgIFNldFJvdW5kSW5kZXg6IFwiU2V0Um91bmRJbmRleFwiLFxyXG4gICAgU2V0Vmlld1JvdW5kOiBcIlNldFZpZXdSb3VuZFwiLFxyXG4gICAgU2V0QW5zd2VyOiBcIlNldEFuc3dlclwiLFxyXG4gICAgU2V0RGVmYXVsdDogXCJTZXREZWZhdWx0XCIsXHJcbiAgICBTdGFydExvYWQ6IFwiU3RhcnRMb2FkXCIsXHJcbiAgICBGaW5pc2hMb2FkOiBcIkZpbmlzaExvYWRcIixcclxuICAgIEVycm9yOiBcIkVycm9yXCIsXHJcbiAgICBTZXRBcHBEYXRhOiBcIlNldEFwcERhdGFcIlxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5TZXREZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFN0YXRlO1xyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbnMuSW5pdGlhbGl6ZVN0YXRlOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYW5lbFN0YXRlOiBQYW5lbFN0YXRlcy5HYW1lfTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLk5leHRTdGF0ZTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGFuZWxTdGF0ZTogZ2V0TmV4dFN0YXRlKHN0YXRlLnBhbmVsU3RhdGUpIHx8IFBhbmVsU3RhdGVzLlN0YXJ0R2FtZX07XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5Jbml0aWFsaXplUm91bmQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGN1cnJlbnRSb3VuZDogMCwgdmlld1JvdW5kOiAwfTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLk5leHRSb3VuZDpcclxuICAgICAgICAgICAgY29uc3QgbmV4dE51bWJlciA9IGdldE5leHRSb3VuZChzdGF0ZS5jdXJyZW50Um91bmQpXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGN1cnJlbnRSb3VuZDogbmV4dE51bWJlciwgdmlld1JvdW5kOiBuZXh0TnVtYmVyfTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNldFZpZXdSb3VuZDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdmlld1JvdW5kOiBhY3Rpb24ucGF5bG9hZH1cclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkluaXRpYWxpemVTY29yZTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2NvcmU6IDB9XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5JbmNyZW1lbnRTY29yZTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2NvcmU6IHN0YXRlLnNjb3JlICsgMX07XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5TZXRSb3VuZHNEYXRhOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByb3VuZHNEYXRhOiBhY3Rpb24ucGF5bG9hZH1cclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlN0YXJ0TG9hZDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX1cclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkZpbmlzaExvYWQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlfVxyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbnMuRXJyb3I6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBhbmVsU3RhdGU6IFBhbmVsU3RhdGVzLkVycm9yLCBlcnJvcjogYWN0aW9uLnBheWxvYWR9XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5TZXRBbnN3ZXI6XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IE9iamVjdC5hc3NpZ24oW10sIHN0YXRlLnJvdW5kc0RhdGEpO1xyXG4gICAgICAgICAgICBhcnJbc3RhdGUuY3VycmVudFJvdW5kXS5hbnN3ZXJJbmRleCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByb3VuZHNEYXRhOiBhcnJ9XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5TZXRBcHBEYXRhOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBhcHBEYXRhOiBhY3Rpb24ucGF5bG9hZH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0U3RhdGUoY3VycmVudFN0YXRlKSB7XHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgUGFuZWxTdGF0ZXMuU3RhcnRHYW1lOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFuZWxTdGF0ZXMuR2FtZTtcclxuXHJcbiAgICAgICAgY2FzZSBQYW5lbFN0YXRlcy5HYW1lOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFuZWxTdGF0ZXMuRW5kR2FtZTtcclxuXHJcbiAgICAgICAgY2FzZSBQYW5lbFN0YXRlcy5FbmRHYW1lOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFuZWxTdGF0ZXMuVW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gUGFuZWxTdGF0ZXMuVW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0Um91bmQoY3VycmVudFJvdW5kKSB7XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdXJyZW50Um91bmQpICYmIGN1cnJlbnRSb3VuZCA8IE1heENvdW50Um91bmRzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRSb3VuZCArIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiTWF4Q291bnRSb3VuZHMiLCJQYW5lbFN0YXRlcyIsIlN0YXJ0R2FtZSIsIkdhbWUiLCJFbmRHYW1lIiwiRXJyb3IiLCJVbmRlZmluZWQiLCJ1bmRlZmluZWQiLCJkZWZhdWx0U3RhdGUiLCJwYW5lbFN0YXRlIiwiY3VycmVudFJvdW5kIiwidmlld1JvdW5kIiwic2NvcmUiLCJsb2FkaW5nIiwiZXJyb3IiLCJyb3VuZHNEYXRhIiwiQWN0aW9ucyIsIkluaXRpYWxpemVTdGF0ZSIsIk5leHRTdGF0ZSIsIkluaXRpYWxpemVSb3VuZCIsIk5leHRSb3VuZCIsIkluaXRpYWxpemVTY29yZSIsIkluY3JlbWVudFNjb3JlIiwiU2V0Um91bmRzRGF0YSIsIlNldFJvdW5kSW5kZXgiLCJTZXRWaWV3Um91bmQiLCJTZXRBbnN3ZXIiLCJTZXREZWZhdWx0IiwiU3RhcnRMb2FkIiwiRmluaXNoTG9hZCIsIlNldEFwcERhdGEiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZ2V0TmV4dFN0YXRlIiwibmV4dE51bWJlciIsImdldE5leHRSb3VuZCIsInBheWxvYWQiLCJhcnIiLCJPYmplY3QiLCJhc3NpZ24iLCJhbnN3ZXJJbmRleCIsImFwcERhdGEiLCJzdG9yZSIsImN1cnJlbnRTdGF0ZSIsIk51bWJlciIsImlzSW50ZWdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/store.js\n"));

/***/ })

});