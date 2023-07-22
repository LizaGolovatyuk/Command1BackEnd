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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Actions: function() { return /* binding */ Actions; },\n/* harmony export */   MaxCountRounds: function() { return /* binding */ MaxCountRounds; },\n/* harmony export */   PanelStates: function() { return /* binding */ PanelStates; },\n/* harmony export */   defaultState: function() { return /* binding */ defaultState; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nconst MaxCountRounds = 10;\nconst PanelStates = {\n    StartGame: \"Start\",\n    Game: \"Game\",\n    EndGame: \"EndGame\",\n    Undefined: undefined\n};\nconst defaultState = {\n    panelState: PanelStates.StartGame,\n    currentRound: undefined,\n    score: undefined,\n    loading: false,\n    roundsData: []\n};\nconst Actions = {\n    InitializeState: \"InitializeState\",\n    NextState: \"NextState\",\n    InitializeRound: \"InitializeRound\",\n    NextRound: \"NextRound\",\n    InitializeScore: \"InitializeScore\",\n    IncrementScore: \"IncrementScore\",\n    SetRoundsData: \"SetRoundsData\",\n    SetDefault: \"SetDefault\",\n    StartLoad: \"StartLoad\",\n    FinishLoad: \"FinishLoad\"\n};\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case Actions.SetDefault:\n            return defaultState;\n        case Actions.InitializeState:\n            return {\n                ...state,\n                panelState: PanelStates.Game\n            };\n        case Actions.NextState:\n            return {\n                ...state,\n                panelState: getNextState(state.panelState) || PanelStates.StartGame\n            };\n        case Actions.InitializeRound:\n            return {\n                ...state,\n                currentRound: 1\n            };\n        case Actions.NextRound:\n            return {\n                ...state,\n                currentRound: getNextRound(state.currentRound)\n            };\n        case Actions.InitializeScore:\n            return {\n                ...state,\n                score: 0\n            };\n        case Actions.IncrementScore:\n            return {\n                ...state,\n                score: state.score + 1\n            };\n        case Actions.SetRoundsData:\n            return {\n                ...state,\n                roundsData: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\nfunction getNextState(currentState) {\n    switch(currentState){\n        case PanelStates.StartGame:\n            return PanelStates.Game;\n        case PanelStates.Game:\n            return PanelStates.EndGame;\n        case PanelStates.EndGame:\n            return PanelStates.Undefined;\n        default:\n            return PanelStates.Undefined;\n    }\n}\nfunction getNextRound(currentRound) {\n    if (Number.isInteger(currentRound) && currentRound < MaxCountRounds) {\n        return currentRound + 1;\n    }\n    return undefined;\n}\nasync function getRoundsData() {}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0M7QUFFM0IsTUFBTUMsaUJBQWlCLEdBQUc7QUFFMUIsTUFBTUMsY0FBYztJQUN2QkMsV0FBVztJQUNYQyxNQUFNO0lBQ05DLFNBQVM7SUFDVEMsV0FBV0M7QUFDZixFQUFFO0FBRUssTUFBTUMsZUFBZTtJQUN4QkMsWUFBWVAsWUFBWUMsU0FBUztJQUNqQ08sY0FBY0g7SUFDZEksT0FBT0o7SUFDUEssU0FBUztJQUNUQyxZQUFZLEVBQUU7QUFDbEIsRUFBRTtBQUVLLE1BQU1DLFVBQVU7SUFDbkJDLGlCQUFpQjtJQUNqQkMsV0FBVztJQUNYQyxpQkFBaUI7SUFDakJDLFdBQVc7SUFDWEMsaUJBQWlCO0lBQ2pCQyxnQkFBZ0I7SUFDaEJDLGVBQWU7SUFDZkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLFlBQVk7QUFDaEIsRUFBQztBQUVELE1BQU1DLFVBQVU7UUFBQ0MseUVBQU9sQixjQUFjbUI7SUFDbEMsT0FBUUEsT0FBT0MsSUFBSTtRQUNmLEtBQUtkLFFBQVFRLFVBQVU7WUFDbkIsT0FBT2Q7UUFFWCxLQUFLTSxRQUFRQyxlQUFlO1lBQ3hCLE9BQU87Z0JBQUMsR0FBR1csS0FBSztnQkFBRWpCLFlBQVlQLFlBQVlFLElBQUk7WUFBQTtRQUVsRCxLQUFLVSxRQUFRRSxTQUFTO1lBQ2xCLE9BQU87Z0JBQUMsR0FBR1UsS0FBSztnQkFBRWpCLFlBQVlvQixhQUFhSCxNQUFNakIsVUFBVSxLQUFLUCxZQUFZQyxTQUFTO1lBQUE7UUFFekYsS0FBS1csUUFBUUcsZUFBZTtZQUN4QixPQUFPO2dCQUFDLEdBQUdTLEtBQUs7Z0JBQUVoQixjQUFjO1lBQUM7UUFFckMsS0FBS0ksUUFBUUksU0FBUztZQUNsQixPQUFPO2dCQUFDLEdBQUdRLEtBQUs7Z0JBQUVoQixjQUFjb0IsYUFBYUosTUFBTWhCLFlBQVk7WUFBQztRQUVwRSxLQUFLSSxRQUFRSyxlQUFlO1lBQ3hCLE9BQU87Z0JBQUMsR0FBR08sS0FBSztnQkFBRWYsT0FBTztZQUFDO1FBRTlCLEtBQUtHLFFBQVFNLGNBQWM7WUFDdkIsT0FBTztnQkFBQyxHQUFHTSxLQUFLO2dCQUFFZixPQUFPZSxNQUFNZixLQUFLLEdBQUc7WUFBQztRQUU1QyxLQUFLRyxRQUFRTyxhQUFhO1lBQ3RCLE9BQU87Z0JBQUMsR0FBR0ssS0FBSztnQkFBRWIsWUFBWWMsT0FBT0ksT0FBTztZQUFBO1FBRWhEO1lBQ0ksT0FBT0w7SUFDZjtBQUNKO0FBRUEsTUFBTU0sUUFBUWhDLGtEQUFXQSxDQUFDeUI7QUFDMUIsK0RBQWVPLEtBQUtBLEVBQUM7QUFFckIsU0FBU0gsYUFBYUksWUFBWTtJQUM5QixPQUFRQTtRQUNKLEtBQUsvQixZQUFZQyxTQUFTO1lBQ3RCLE9BQU9ELFlBQVlFLElBQUk7UUFFM0IsS0FBS0YsWUFBWUUsSUFBSTtZQUNqQixPQUFPRixZQUFZRyxPQUFPO1FBRTlCLEtBQUtILFlBQVlHLE9BQU87WUFDcEIsT0FBT0gsWUFBWUksU0FBUztRQUVoQztZQUNJLE9BQU9KLFlBQVlJLFNBQVM7SUFDcEM7QUFDSjtBQUVBLFNBQVN3QixhQUFhcEIsWUFBWTtJQUM5QixJQUFJd0IsT0FBT0MsU0FBUyxDQUFDekIsaUJBQWlCQSxlQUFlVCxnQkFBZ0I7UUFDakUsT0FBT1MsZUFBZTtJQUMxQjtJQUNBLE9BQU9IO0FBQ1g7QUFFQSxlQUFlNkIsaUJBRWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL3N0b3JlLmpzPzQ3ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWF4Q291bnRSb3VuZHMgPSAxMDtcclxuXHJcbmV4cG9ydCBjb25zdCBQYW5lbFN0YXRlcyA9IHtcclxuICAgIFN0YXJ0R2FtZTogXCJTdGFydFwiLFxyXG4gICAgR2FtZTogXCJHYW1lXCIsXHJcbiAgICBFbmRHYW1lOiBcIkVuZEdhbWVcIixcclxuICAgIFVuZGVmaW5lZDogdW5kZWZpbmVkXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xyXG4gICAgcGFuZWxTdGF0ZTogUGFuZWxTdGF0ZXMuU3RhcnRHYW1lLFxyXG4gICAgY3VycmVudFJvdW5kOiB1bmRlZmluZWQsXHJcbiAgICBzY29yZTogdW5kZWZpbmVkLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICByb3VuZHNEYXRhOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25zID0ge1xyXG4gICAgSW5pdGlhbGl6ZVN0YXRlOiBcIkluaXRpYWxpemVTdGF0ZVwiLFxyXG4gICAgTmV4dFN0YXRlOiBcIk5leHRTdGF0ZVwiLFxyXG4gICAgSW5pdGlhbGl6ZVJvdW5kOiBcIkluaXRpYWxpemVSb3VuZFwiLFxyXG4gICAgTmV4dFJvdW5kOiBcIk5leHRSb3VuZFwiLFxyXG4gICAgSW5pdGlhbGl6ZVNjb3JlOiBcIkluaXRpYWxpemVTY29yZVwiLFxyXG4gICAgSW5jcmVtZW50U2NvcmU6IFwiSW5jcmVtZW50U2NvcmVcIixcclxuICAgIFNldFJvdW5kc0RhdGE6IFwiU2V0Um91bmRzRGF0YVwiLFxyXG4gICAgU2V0RGVmYXVsdDogXCJTZXREZWZhdWx0XCIsXHJcbiAgICBTdGFydExvYWQ6IFwiU3RhcnRMb2FkXCIsXHJcbiAgICBGaW5pc2hMb2FkOiBcIkZpbmlzaExvYWRcIlxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5TZXREZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFN0YXRlO1xyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbnMuSW5pdGlhbGl6ZVN0YXRlOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYW5lbFN0YXRlOiBQYW5lbFN0YXRlcy5HYW1lfTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLk5leHRTdGF0ZTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGFuZWxTdGF0ZTogZ2V0TmV4dFN0YXRlKHN0YXRlLnBhbmVsU3RhdGUpIHx8IFBhbmVsU3RhdGVzLlN0YXJ0R2FtZX07XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5Jbml0aWFsaXplUm91bmQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGN1cnJlbnRSb3VuZDogMX07XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5OZXh0Um91bmQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGN1cnJlbnRSb3VuZDogZ2V0TmV4dFJvdW5kKHN0YXRlLmN1cnJlbnRSb3VuZCl9O1xyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbnMuSW5pdGlhbGl6ZVNjb3JlOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzY29yZTogMH1cclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkluY3JlbWVudFNjb3JlOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzY29yZTogc3RhdGUuc2NvcmUgKyAxfTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNldFJvdW5kc0RhdGE6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJvdW5kc0RhdGE6IGFjdGlvbi5wYXlsb2FkfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRTdGF0ZShjdXJyZW50U3RhdGUpIHtcclxuICAgIHN3aXRjaCAoY3VycmVudFN0YXRlKSB7XHJcbiAgICAgICAgY2FzZSBQYW5lbFN0YXRlcy5TdGFydEdhbWU6XHJcbiAgICAgICAgICAgIHJldHVybiBQYW5lbFN0YXRlcy5HYW1lO1xyXG5cclxuICAgICAgICBjYXNlIFBhbmVsU3RhdGVzLkdhbWU6XHJcbiAgICAgICAgICAgIHJldHVybiBQYW5lbFN0YXRlcy5FbmRHYW1lO1xyXG5cclxuICAgICAgICBjYXNlIFBhbmVsU3RhdGVzLkVuZEdhbWU6XHJcbiAgICAgICAgICAgIHJldHVybiBQYW5lbFN0YXRlcy5VbmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBQYW5lbFN0YXRlcy5VbmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5leHRSb3VuZChjdXJyZW50Um91bmQpIHtcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN1cnJlbnRSb3VuZCkgJiYgY3VycmVudFJvdW5kIDwgTWF4Q291bnRSb3VuZHMpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudFJvdW5kICsgMTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFJvdW5kc0RhdGEoKSB7XHJcblxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiTWF4Q291bnRSb3VuZHMiLCJQYW5lbFN0YXRlcyIsIlN0YXJ0R2FtZSIsIkdhbWUiLCJFbmRHYW1lIiwiVW5kZWZpbmVkIiwidW5kZWZpbmVkIiwiZGVmYXVsdFN0YXRlIiwicGFuZWxTdGF0ZSIsImN1cnJlbnRSb3VuZCIsInNjb3JlIiwibG9hZGluZyIsInJvdW5kc0RhdGEiLCJBY3Rpb25zIiwiSW5pdGlhbGl6ZVN0YXRlIiwiTmV4dFN0YXRlIiwiSW5pdGlhbGl6ZVJvdW5kIiwiTmV4dFJvdW5kIiwiSW5pdGlhbGl6ZVNjb3JlIiwiSW5jcmVtZW50U2NvcmUiLCJTZXRSb3VuZHNEYXRhIiwiU2V0RGVmYXVsdCIsIlN0YXJ0TG9hZCIsIkZpbmlzaExvYWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZ2V0TmV4dFN0YXRlIiwiZ2V0TmV4dFJvdW5kIiwicGF5bG9hZCIsInN0b3JlIiwiY3VycmVudFN0YXRlIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZ2V0Um91bmRzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/store.js\n"));

/***/ })

});