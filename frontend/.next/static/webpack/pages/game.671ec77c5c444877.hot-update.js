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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const buttonValues = round.data.map((bird)=>bird.species_titleru);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    console.log(\"options\");\n    const buttons = buttonValues.map((value, index)=>{\n        let answerClasses = round.answerIndex ? \" \" + (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().blocked) : \" \";\n        if (round.answerIndex) {\n            if (index === round.correctIndex) {\n                answerClasses += (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().correctAnswer);\n            } else if (index === round.answerIndex) {\n                answerClasses += (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().incorrectAnswer);\n            }\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().option) + answerClasses,\n            ind: index,\n            onClick: checkOption(dispatch, currentRoundIndex, round),\n            children: value\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().optionGrid),\n            children: buttonValues.map((value, index)=>{\n                let answerClasses = round.answerIndex ? \" \" + (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().blocked) : \" \";\n                if (round.answerIndex) {\n                    if (index === round.correctIndex) {\n                        answerClasses += (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().correctAnswer);\n                    } else if (index === round.answerIndex) {\n                        answerClasses += (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().incorrectAnswer);\n                    }\n                }\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().option) + answerClasses,\n                    ind: index,\n                    onClick: checkOption(dispatch, currentRoundIndex, round),\n                    children: value\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 29\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"u57Jjp1DvN7KBdSqrsRP2NhBAwQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nfunction checkOption(dispatch, currentRoundIndex, round) {\n    return (event)=>{\n        const index = Number(event.target.getAttribute(\"ind\"));\n        dispatch({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n            payload: index\n        });\n        if (index === round.correctIndex) {\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n            });\n        }\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUVqQyxTQUFTSTs7SUFDcEIsTUFBTUMsb0JBQW9CSix3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWTtJQUNqRSxNQUFNQyxRQUFRUCx3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUcsVUFBVSxDQUFDSixrQkFBa0I7SUFDdEUsTUFBTUssZUFBZUYsTUFBTUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLGVBQWU7SUFDaEUsTUFBTUMsV0FBV2Ysd0RBQVdBO0lBQzVCZ0IsUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUMsVUFBVVIsYUFBYUUsR0FBRyxDQUFDLENBQUNPLE9BQU9DO1FBQ3JDLElBQUlDLGdCQUFnQmIsTUFBTWMsV0FBVyxHQUFHLE1BQU1wQix1RUFBZSxHQUFHO1FBQ2hFLElBQUlNLE1BQU1jLFdBQVcsRUFBRTtZQUNuQixJQUFJRixVQUFVWixNQUFNZ0IsWUFBWSxFQUFFO2dCQUM5QkgsaUJBQWlCbkIsNkVBQXFCO1lBQzFDLE9BQU8sSUFBSWtCLFVBQVVaLE1BQU1jLFdBQVcsRUFBRTtnQkFDcENELGlCQUFpQm5CLCtFQUF1QjtZQUM1QztRQUNKO1FBQ0EscUJBQ0ksOERBQUN5QjtZQUNHQyxXQUFXMUIsc0VBQWMsR0FBR21CO1lBRTVCUyxLQUFLVjtZQUNMVyxTQUFTQyxZQUFZakIsVUFBVVYsbUJBQW1CRztzQkFFakRXO1dBSklDOzs7OztJQU9qQjtJQUNBLHFCQUNJO2tCQUNJLDRFQUFDYTtZQUFJTCxXQUFXMUIsMEVBQWtCO3NCQUUxQlEsYUFBYUUsR0FBRyxDQUFDLENBQUNPLE9BQU9DO2dCQUNyQixJQUFJQyxnQkFBZ0JiLE1BQU1jLFdBQVcsR0FBRyxNQUFNcEIsdUVBQWUsR0FBRztnQkFDaEUsSUFBSU0sTUFBTWMsV0FBVyxFQUFFO29CQUNuQixJQUFJRixVQUFVWixNQUFNZ0IsWUFBWSxFQUFFO3dCQUM5QkgsaUJBQWlCbkIsNkVBQXFCO29CQUMxQyxPQUFPLElBQUlrQixVQUFVWixNQUFNYyxXQUFXLEVBQUU7d0JBQ3BDRCxpQkFBaUJuQiwrRUFBdUI7b0JBQzVDO2dCQUNKO2dCQUNBLHFCQUNJLDhEQUFDeUI7b0JBQ0dDLFdBQVcxQixzRUFBYyxHQUFHbUI7b0JBRTVCUyxLQUFLVjtvQkFDTFcsU0FBU0MsWUFBWWpCLFVBQVVWLG1CQUFtQkc7OEJBRWpEVzttQkFKSUM7Ozs7O1lBT2pCOzs7Ozs7O0FBS3BCO0dBdER3QmhCOztRQUNNSCxvREFBV0E7UUFDdkJBLG9EQUFXQTtRQUVSRCxvREFBV0E7OztLQUpSSTtBQXdEeEIsU0FBUzRCLFlBQVlqQixRQUFRLEVBQUVWLGlCQUFpQixFQUFFRyxLQUFLO0lBQ25ELE9BQU8sQ0FBQzJCO1FBQ0osTUFBTWYsUUFBUWdCLE9BQU9ELE1BQU1FLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1FBQy9DdkIsU0FBUztZQUFDd0IsTUFBTXBDLDJEQUFPQSxDQUFDcUMsU0FBUztZQUFFQyxTQUFTckI7UUFBSztRQUNqRCxJQUFJQSxVQUFVWixNQUFNZ0IsWUFBWSxFQUFFO1lBQzlCVCxTQUFTO2dCQUFDd0IsTUFBTXBDLDJEQUFPQSxDQUFDdUMsY0FBYztZQUFBO1FBQzFDO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3g/ZDExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1VJL09wdGlvbnMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3B0aW9ucygpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3VuZEluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFJvdW5kKTtcclxuICAgIGNvbnN0IHJvdW5kID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucm91bmRzRGF0YVtjdXJyZW50Um91bmRJbmRleF0pO1xyXG4gICAgY29uc3QgYnV0dG9uVmFsdWVzID0gcm91bmQuZGF0YS5tYXAoYmlyZCA9PiBiaXJkLnNwZWNpZXNfdGl0bGVydSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zb2xlLmxvZygnb3B0aW9ucycpO1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGJ1dHRvblZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBhbnN3ZXJDbGFzc2VzID0gcm91bmQuYW5zd2VySW5kZXggPyBcIiBcIiArIGNsYXNzZXMuYmxvY2tlZCA6IFwiIFwiO1xyXG4gICAgICAgIGlmIChyb3VuZC5hbnN3ZXJJbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHJvdW5kLmNvcnJlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYW5zd2VyQ2xhc3NlcyArPSBjbGFzc2VzLmNvcnJlY3RBbnN3ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHJvdW5kLmFuc3dlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJDbGFzc2VzICs9IGNsYXNzZXMuaW5jb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcHRpb24gKyBhbnN3ZXJDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGluZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGVja09wdGlvbihkaXNwYXRjaCwgY3VycmVudFJvdW5kSW5kZXgsIHJvdW5kKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vcHRpb25HcmlkfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25WYWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuc3dlckNsYXNzZXMgPSByb3VuZC5hbnN3ZXJJbmRleCA/IFwiIFwiICsgY2xhc3Nlcy5ibG9ja2VkIDogXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3VuZC5hbnN3ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJDbGFzc2VzICs9IGNsYXNzZXMuY29ycmVjdEFuc3dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHJvdW5kLmFuc3dlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyQ2xhc3NlcyArPSBjbGFzc2VzLmluY29ycmVjdEFuc3dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vcHRpb24gKyBhbnN3ZXJDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGVja09wdGlvbihkaXNwYXRjaCwgY3VycmVudFJvdW5kSW5kZXgsIHJvdW5kKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja09wdGlvbihkaXNwYXRjaCwgY3VycmVudFJvdW5kSW5kZXgsIHJvdW5kKSB7XHJcbiAgICByZXR1cm4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kJykpO1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBBY3Rpb25zLlNldEFuc3dlciwgcGF5bG9hZDogaW5kZXh9KVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBBY3Rpb25zLkluY3JlbWVudFNjb3JlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImNsYXNzZXMiLCJBY3Rpb25zIiwiT3B0aW9ucyIsImN1cnJlbnRSb3VuZEluZGV4Iiwic3RhdGUiLCJjdXJyZW50Um91bmQiLCJyb3VuZCIsInJvdW5kc0RhdGEiLCJidXR0b25WYWx1ZXMiLCJkYXRhIiwibWFwIiwiYmlyZCIsInNwZWNpZXNfdGl0bGVydSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbnMiLCJ2YWx1ZSIsImluZGV4IiwiYW5zd2VyQ2xhc3NlcyIsImFuc3dlckluZGV4IiwiYmxvY2tlZCIsImNvcnJlY3RJbmRleCIsImNvcnJlY3RBbnN3ZXIiLCJpbmNvcnJlY3RBbnN3ZXIiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvcHRpb24iLCJpbmQiLCJvbkNsaWNrIiwiY2hlY2tPcHRpb24iLCJkaXYiLCJvcHRpb25HcmlkIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0eXBlIiwiU2V0QW5zd2VyIiwicGF5bG9hZCIsIkluY3JlbWVudFNjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});