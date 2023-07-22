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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Actions: function() { return /* binding */ Actions; },\n/* harmony export */   PanelStates: function() { return /* binding */ PanelStates; },\n/* harmony export */   defaultState: function() { return /* binding */ defaultState; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nconst MaxCountRounds = 10;\nconst PanelStates = {\n    StartGame: \"Start\",\n    Game: \"Game\",\n    EndGame: \"EndGame\",\n    Undefined: undefined\n};\nconst defaultState = {\n    panelState: PanelStates.EndGame,\n    currentRound: undefined,\n    score: undefined,\n    loading: false,\n    roundsData: []\n};\nconst Actions = {\n    InitializeState: \"InitializeState\",\n    NextState: \"NextState\",\n    InitializeRound: \"InitializeRound\",\n    NextRound: \"NextRound\",\n    InitializeScore: \"InitializeScore\",\n    IncrementScore: \"IncrementScore\",\n    SetRoundsData: \"SetRoundsData\",\n    SetDefault: \"SetDefault\"\n};\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case Actions.SetDefault:\n            return defaultState;\n        case Actions.InitializeState:\n            return {\n                ...state,\n                panelState: PanelStates.Game\n            };\n        case Actions.NextState:\n            return {\n                ...state,\n                panelState: getNextState(state.panelState) || PanelStates.StartGame\n            };\n        case Actions.InitializeRound:\n            return {\n                ...state,\n                currentRound: 1\n            };\n        case Actions.NextRound:\n            return {\n                ...state,\n                currentRound: getNextRound(state.currentRound)\n            };\n        case Actions.InitializeScore:\n            return {\n                ...state,\n                score: 0\n            };\n        case Actions.IncrementScore:\n            return {\n                ...state,\n                score: state.score + 1\n            };\n        case Actions.SetRoundsData:\n            return {\n                ...state,\n                roundsData: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\nfunction getNextState(currentState) {\n    switch(currentState){\n        case PanelStates.StartGame:\n            return PanelStates.Game;\n        case PanelStates.Game:\n            return PanelStates.EndGame;\n        case PanelStates.EndGame:\n            return PanelStates.Undefined;\n        default:\n            return PanelStates.Undefined;\n    }\n}\nfunction getNextRound(currentRound) {\n    if (Number.isInteger(currentRound) && currentRound < MaxCountRounds) {\n        return currentRound + 1;\n    }\n    return undefined;\n}\nasync function getRoundsData() {}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUVsQyxNQUFNQyxpQkFBaUI7QUFFaEIsTUFBTUMsY0FBYztJQUN2QkMsV0FBVztJQUNYQyxNQUFNO0lBQ05DLFNBQVM7SUFDVEMsV0FBV0M7QUFDZixFQUFFO0FBRUssTUFBTUMsZUFBZTtJQUN4QkMsWUFBWVAsWUFBWUcsT0FBTztJQUMvQkssY0FBY0g7SUFDZEksT0FBT0o7SUFDUEssU0FBUztJQUNUQyxZQUFZLEVBQUU7QUFDbEIsRUFBRTtBQUVLLE1BQU1DLFVBQVU7SUFDbkJDLGlCQUFpQjtJQUNqQkMsV0FBVztJQUNYQyxpQkFBaUI7SUFDakJDLFdBQVc7SUFDWEMsaUJBQWlCO0lBQ2pCQyxnQkFBZ0I7SUFDaEJDLGVBQWU7SUFDZkMsWUFBWTtBQUNoQixFQUFDO0FBRUQsTUFBTUMsVUFBVTtRQUFDQyx5RUFBT2hCLGNBQWNpQjtJQUNsQyxPQUFRQSxPQUFPQyxJQUFJO1FBQ2YsS0FBS1osUUFBUVEsVUFBVTtZQUNuQixPQUFPZDtRQUVYLEtBQUtNLFFBQVFDLGVBQWU7WUFDeEIsT0FBTztnQkFBQyxHQUFHUyxLQUFLO2dCQUFFZixZQUFZUCxZQUFZRSxJQUFJO1lBQUE7UUFFbEQsS0FBS1UsUUFBUUUsU0FBUztZQUNsQixPQUFPO2dCQUFDLEdBQUdRLEtBQUs7Z0JBQUVmLFlBQVlrQixhQUFhSCxNQUFNZixVQUFVLEtBQUtQLFlBQVlDLFNBQVM7WUFBQTtRQUV6RixLQUFLVyxRQUFRRyxlQUFlO1lBQ3hCLE9BQU87Z0JBQUMsR0FBR08sS0FBSztnQkFBRWQsY0FBYztZQUFDO1FBRXJDLEtBQUtJLFFBQVFJLFNBQVM7WUFDbEIsT0FBTztnQkFBQyxHQUFHTSxLQUFLO2dCQUFFZCxjQUFja0IsYUFBYUosTUFBTWQsWUFBWTtZQUFDO1FBRXBFLEtBQUtJLFFBQVFLLGVBQWU7WUFDeEIsT0FBTztnQkFBQyxHQUFHSyxLQUFLO2dCQUFFYixPQUFPO1lBQUM7UUFFOUIsS0FBS0csUUFBUU0sY0FBYztZQUN2QixPQUFPO2dCQUFDLEdBQUdJLEtBQUs7Z0JBQUViLE9BQU9hLE1BQU1iLEtBQUssR0FBRztZQUFDO1FBRTVDLEtBQUtHLFFBQVFPLGFBQWE7WUFDdEIsT0FBTztnQkFBQyxHQUFHRyxLQUFLO2dCQUFFWCxZQUFZWSxPQUFPSSxPQUFPO1lBQUE7UUFFaEQ7WUFDSSxPQUFPTDtJQUNmO0FBQ0o7QUFFQSxNQUFNTSxRQUFROUIsa0RBQVdBLENBQUN1QjtBQUMxQiwrREFBZU8sS0FBS0EsRUFBQztBQUVyQixTQUFTSCxhQUFhSSxZQUFZO0lBQzlCLE9BQVFBO1FBQ0osS0FBSzdCLFlBQVlDLFNBQVM7WUFDdEIsT0FBT0QsWUFBWUUsSUFBSTtRQUUzQixLQUFLRixZQUFZRSxJQUFJO1lBQ2pCLE9BQU9GLFlBQVlHLE9BQU87UUFFOUIsS0FBS0gsWUFBWUcsT0FBTztZQUNwQixPQUFPSCxZQUFZSSxTQUFTO1FBRWhDO1lBQ0ksT0FBT0osWUFBWUksU0FBUztJQUNwQztBQUNKO0FBRUEsU0FBU3NCLGFBQWFsQixZQUFZO0lBQzlCLElBQUlzQixPQUFPQyxTQUFTLENBQUN2QixpQkFBaUJBLGVBQWVULGdCQUFnQjtRQUNqRSxPQUFPUyxlQUFlO0lBQzFCO0lBQ0EsT0FBT0g7QUFDWDtBQUVBLGVBQWUyQixpQkFFZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvc3RvcmUuanM/NDdkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IE1heENvdW50Um91bmRzID0gMTA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxTdGF0ZXMgPSB7XHJcbiAgICBTdGFydEdhbWU6IFwiU3RhcnRcIixcclxuICAgIEdhbWU6IFwiR2FtZVwiLFxyXG4gICAgRW5kR2FtZTogXCJFbmRHYW1lXCIsXHJcbiAgICBVbmRlZmluZWQ6IHVuZGVmaW5lZFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuICAgIHBhbmVsU3RhdGU6IFBhbmVsU3RhdGVzLkVuZEdhbWUsXHJcbiAgICBjdXJyZW50Um91bmQ6IHVuZGVmaW5lZCxcclxuICAgIHNjb3JlOiB1bmRlZmluZWQsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHJvdW5kc0RhdGE6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvbnMgPSB7XHJcbiAgICBJbml0aWFsaXplU3RhdGU6IFwiSW5pdGlhbGl6ZVN0YXRlXCIsXHJcbiAgICBOZXh0U3RhdGU6IFwiTmV4dFN0YXRlXCIsXHJcbiAgICBJbml0aWFsaXplUm91bmQ6IFwiSW5pdGlhbGl6ZVJvdW5kXCIsXHJcbiAgICBOZXh0Um91bmQ6IFwiTmV4dFJvdW5kXCIsXHJcbiAgICBJbml0aWFsaXplU2NvcmU6IFwiSW5pdGlhbGl6ZVNjb3JlXCIsXHJcbiAgICBJbmNyZW1lbnRTY29yZTogXCJJbmNyZW1lbnRTY29yZVwiLFxyXG4gICAgU2V0Um91bmRzRGF0YTogXCJTZXRSb3VuZHNEYXRhXCIsXHJcbiAgICBTZXREZWZhdWx0OiBcIlNldERlZmF1bHRcIixcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFjdGlvbnMuU2V0RGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkluaXRpYWxpemVTdGF0ZTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGFuZWxTdGF0ZTogUGFuZWxTdGF0ZXMuR2FtZX07XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5OZXh0U3RhdGU6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBhbmVsU3RhdGU6IGdldE5leHRTdGF0ZShzdGF0ZS5wYW5lbFN0YXRlKSB8fCBQYW5lbFN0YXRlcy5TdGFydEdhbWV9O1xyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbnMuSW5pdGlhbGl6ZVJvdW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBjdXJyZW50Um91bmQ6IDF9O1xyXG5cclxuICAgICAgICBjYXNlIEFjdGlvbnMuTmV4dFJvdW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBjdXJyZW50Um91bmQ6IGdldE5leHRSb3VuZChzdGF0ZS5jdXJyZW50Um91bmQpfTtcclxuXHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkluaXRpYWxpemVTY29yZTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2NvcmU6IDB9XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5JbmNyZW1lbnRTY29yZTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2NvcmU6IHN0YXRlLnNjb3JlICsgMX07XHJcblxyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5TZXRSb3VuZHNEYXRhOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByb3VuZHNEYXRhOiBhY3Rpb24ucGF5bG9hZH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0U3RhdGUoY3VycmVudFN0YXRlKSB7XHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgUGFuZWxTdGF0ZXMuU3RhcnRHYW1lOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFuZWxTdGF0ZXMuR2FtZTtcclxuXHJcbiAgICAgICAgY2FzZSBQYW5lbFN0YXRlcy5HYW1lOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFuZWxTdGF0ZXMuRW5kR2FtZTtcclxuXHJcbiAgICAgICAgY2FzZSBQYW5lbFN0YXRlcy5FbmRHYW1lOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFuZWxTdGF0ZXMuVW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gUGFuZWxTdGF0ZXMuVW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0Um91bmQoY3VycmVudFJvdW5kKSB7XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdXJyZW50Um91bmQpICYmIGN1cnJlbnRSb3VuZCA8IE1heENvdW50Um91bmRzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRSb3VuZCArIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRSb3VuZHNEYXRhKCkge1xyXG5cclxufSJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsIk1heENvdW50Um91bmRzIiwiUGFuZWxTdGF0ZXMiLCJTdGFydEdhbWUiLCJHYW1lIiwiRW5kR2FtZSIsIlVuZGVmaW5lZCIsInVuZGVmaW5lZCIsImRlZmF1bHRTdGF0ZSIsInBhbmVsU3RhdGUiLCJjdXJyZW50Um91bmQiLCJzY29yZSIsImxvYWRpbmciLCJyb3VuZHNEYXRhIiwiQWN0aW9ucyIsIkluaXRpYWxpemVTdGF0ZSIsIk5leHRTdGF0ZSIsIkluaXRpYWxpemVSb3VuZCIsIk5leHRSb3VuZCIsIkluaXRpYWxpemVTY29yZSIsIkluY3JlbWVudFNjb3JlIiwiU2V0Um91bmRzRGF0YSIsIlNldERlZmF1bHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZ2V0TmV4dFN0YXRlIiwiZ2V0TmV4dFJvdW5kIiwicGF5bG9hZCIsInN0b3JlIiwiY3VycmVudFN0YXRlIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZ2V0Um91bmRzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/store.js\n"));

/***/ })

});