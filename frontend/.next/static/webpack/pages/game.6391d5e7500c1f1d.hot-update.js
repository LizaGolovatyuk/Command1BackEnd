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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const buttonValues = round.data.map((bird)=>bird.species_titleru);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const selector = react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;\n    const buttons = buttonValues.map((value, index)=>{\n        let answerClasses = round.answerIndex ? \" \" + (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().blocked) : \" \";\n        if (round.answerIndex) {\n            if (index === round.correctIndex) {\n                answerClasses += (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().correctAnswer);\n            } else if (index === round.answerIndex) {\n                answerClasses += (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().incorrectAnswer);\n            }\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().option) + answerClasses,\n            onClick: checkOption(dispatch, selector),\n            children: value\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().optionGrid),\n            children: buttons\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"u57Jjp1DvN7KBdSqrsRP2NhBAwQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nfunction checkOption(dispatch, selector) {\n    return (event)=>{\n        const currentRoundIndex = selector((state)=>state.currentRound);\n        const round = selector((state)=>state.roundsData[currentRoundIndex]);\n        console.log(\"click: \".concat(event.target.key));\n        console.log(\"answer: \".concat(round.correctIndex));\n        dispatch({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n            payload: event.target.key\n        });\n        if (event.target.key === round.correctIndex) {\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n            });\n        }\n        const newRound = selector((state)=>state.roundsData[currentRoundIndex]);\n        console.log(newRound);\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUVqQyxTQUFTSTs7SUFDcEIsTUFBTUMsb0JBQW9CSix3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWTtJQUNqRSxNQUFNQyxRQUFRUCx3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUcsVUFBVSxDQUFDSixrQkFBa0I7SUFDdEUsTUFBTUssZUFBZUYsTUFBTUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLGVBQWU7SUFDaEUsTUFBTUMsV0FBV2Ysd0RBQVdBO0lBQzVCLE1BQU1nQixXQUFXZixvREFBV0E7SUFDNUIsTUFBTWdCLFVBQVVQLGFBQWFFLEdBQUcsQ0FBQyxDQUFDTSxPQUFPQztRQUNyQyxJQUFJQyxnQkFBZ0JaLE1BQU1hLFdBQVcsR0FBRyxNQUFNbkIsdUVBQWUsR0FBRztRQUNoRSxJQUFJTSxNQUFNYSxXQUFXLEVBQUU7WUFDbkIsSUFBSUYsVUFBVVgsTUFBTWUsWUFBWSxFQUFFO2dCQUM5QkgsaUJBQWlCbEIsNkVBQXFCO1lBQzFDLE9BQU8sSUFBSWlCLFVBQVVYLE1BQU1hLFdBQVcsRUFBRTtnQkFDcENELGlCQUFpQmxCLCtFQUF1QjtZQUM1QztRQUNKO1FBQ0EscUJBQ0ksOERBQUN3QjtZQUNHQyxXQUFXekIsc0VBQWMsR0FBR2tCO1lBRTVCUyxTQUFTQyxZQUFZZixVQUFVQztzQkFFOUJFO1dBSElDOzs7OztJQU1qQjtJQUNBLHFCQUNJO2tCQUNJLDRFQUFDWTtZQUFJSixXQUFXekIsMEVBQWtCO3NCQUM3QmU7Ozs7Ozs7QUFJakI7R0FoQ3dCYjs7UUFDTUgsb0RBQVdBO1FBQ3ZCQSxvREFBV0E7UUFFUkQsb0RBQVdBOzs7S0FKUkk7QUFrQ3hCLFNBQVMwQixZQUFZZixRQUFRLEVBQUVDLFFBQVE7SUFDbkMsT0FBTyxDQUFDaUI7UUFDSixNQUFNNUIsb0JBQW9CVyxTQUFTVixDQUFBQSxRQUFTQSxNQUFNQyxZQUFZO1FBQzlELE1BQU1DLFFBQVFRLFNBQVNWLENBQUFBLFFBQVNBLE1BQU1HLFVBQVUsQ0FBQ0osa0JBQWtCO1FBQ25FNkIsUUFBUUMsR0FBRyxDQUFDLFVBQTJCLE9BQWpCRixNQUFNRyxNQUFNLENBQUNDLEdBQUc7UUFDdENILFFBQVFDLEdBQUcsQ0FBQyxXQUE4QixPQUFuQjNCLE1BQU1lLFlBQVk7UUFDekNSLFNBQVM7WUFBQ3VCLE1BQU1uQywyREFBT0EsQ0FBQ29DLFNBQVM7WUFBRUMsU0FBU1AsTUFBTUcsTUFBTSxDQUFDQyxHQUFHO1FBQUE7UUFDNUQsSUFBSUosTUFBTUcsTUFBTSxDQUFDQyxHQUFHLEtBQUs3QixNQUFNZSxZQUFZLEVBQUU7WUFDekNSLFNBQVM7Z0JBQUN1QixNQUFNbkMsMkRBQU9BLENBQUNzQyxjQUFjO1lBQUE7UUFDMUM7UUFDQSxNQUFNQyxXQUFXMUIsU0FBU1YsQ0FBQUEsUUFBU0EsTUFBTUcsVUFBVSxDQUFDSixrQkFBa0I7UUFDdEU2QixRQUFRQyxHQUFHLENBQUNPO0lBQ2hCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL09wdGlvbnMuanN4P2QxMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9VSS9PcHRpb25zLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtBY3Rpb25zfSBmcm9tIFwiQC9jb21wb25lbnRzL2dhbWUvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Um91bmRJbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRSb3VuZCk7XHJcbiAgICBjb25zdCByb3VuZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJvdW5kc0RhdGFbY3VycmVudFJvdW5kSW5kZXhdKTtcclxuICAgIGNvbnN0IGJ1dHRvblZhbHVlcyA9IHJvdW5kLmRhdGEubWFwKGJpcmQgPT4gYmlyZC5zcGVjaWVzX3RpdGxlcnUpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSB1c2VTZWxlY3RvcjtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBidXR0b25WYWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBsZXQgYW5zd2VyQ2xhc3NlcyA9IHJvdW5kLmFuc3dlckluZGV4ID8gXCIgXCIgKyBjbGFzc2VzLmJsb2NrZWQgOiBcIiBcIjtcclxuICAgICAgICBpZiAocm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlckNsYXNzZXMgKz0gY2xhc3Nlcy5jb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSByb3VuZC5hbnN3ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYW5zd2VyQ2xhc3NlcyArPSBjbGFzc2VzLmluY29ycmVjdEFuc3dlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub3B0aW9uICsgYW5zd2VyQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGVja09wdGlvbihkaXNwYXRjaCwgc2VsZWN0b3IpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9wdGlvbkdyaWR9PlxyXG4gICAgICAgICAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja09wdGlvbihkaXNwYXRjaCwgc2VsZWN0b3IpIHtcclxuICAgIHJldHVybiAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91bmRJbmRleCA9IHNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRSb3VuZCk7XHJcbiAgICAgICAgY29uc3Qgcm91bmQgPSBzZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yb3VuZHNEYXRhW2N1cnJlbnRSb3VuZEluZGV4XSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrOiAke2V2ZW50LnRhcmdldC5rZXl9YClcclxuICAgICAgICBjb25zb2xlLmxvZyhgYW5zd2VyOiAke3JvdW5kLmNvcnJlY3RJbmRleH1gKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBBY3Rpb25zLlNldEFuc3dlciwgcGF5bG9hZDogZXZlbnQudGFyZ2V0LmtleX0pXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5rZXkgPT09IHJvdW5kLmNvcnJlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5JbmNyZW1lbnRTY29yZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld1JvdW5kID0gc2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucm91bmRzRGF0YVtjdXJyZW50Um91bmRJbmRleF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1JvdW5kKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiQWN0aW9ucyIsIk9wdGlvbnMiLCJjdXJyZW50Um91bmRJbmRleCIsInN0YXRlIiwiY3VycmVudFJvdW5kIiwicm91bmQiLCJyb3VuZHNEYXRhIiwiYnV0dG9uVmFsdWVzIiwiZGF0YSIsIm1hcCIsImJpcmQiLCJzcGVjaWVzX3RpdGxlcnUiLCJkaXNwYXRjaCIsInNlbGVjdG9yIiwiYnV0dG9ucyIsInZhbHVlIiwiaW5kZXgiLCJhbnN3ZXJDbGFzc2VzIiwiYW5zd2VySW5kZXgiLCJibG9ja2VkIiwiY29ycmVjdEluZGV4IiwiY29ycmVjdEFuc3dlciIsImluY29ycmVjdEFuc3dlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9wdGlvbiIsIm9uQ2xpY2siLCJjaGVja09wdGlvbiIsImRpdiIsIm9wdGlvbkdyaWQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJrZXkiLCJ0eXBlIiwiU2V0QW5zd2VyIiwicGF5bG9hZCIsIkluY3JlbWVudFNjb3JlIiwibmV3Um91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});