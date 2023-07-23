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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n/* harmony import */ var _components_game_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/game/Option */ \"./components/game/Option.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction getOptionTypes(round) {\n    if (round.answerIndex === undefined) return Array(4).fill(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Normal);\n    return Array(4).fill(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Normal).map((value, index)=>{\n        if (round.correctIndex === index) {\n            return _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Correct;\n        } else if (round.answerIndex === index) {\n            return _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Incorrect;\n        }\n        return value;\n    });\n}\nfunction getOptions(round, checkOption) {\n    return getOptionTypes(round).map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: value,\n            blocked: round.answerIndex !== undefined,\n            value: round.data[index].species_titleru,\n            ind: index,\n            onClick: checkOption\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 25,\n            columnNumber: 32\n        }, this));\n}\nfunction Options(param) {\n    let { round } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getOptions(round, checkOption(dispatch, round)));\n    const set = ()=>{\n        setOptions(getOptions(round, checkOption(dispatch, round)));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        set();\n    }, [\n        round\n    ]);\n    function checkOption(dispatch, round) {\n        return (event)=>{\n            const index = Number(event.target.getAttribute(\"ind\"));\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n                payload: index\n            });\n            if (index === round.correctIndex) {\n                dispatch({\n                    type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n                });\n            }\n            set();\n            setTimeout(()=>{\n                console.log(\"round: \", round.roundIndex);\n                if (round.roundIndex + 1 === _components_game_store__WEBPACK_IMPORTED_MODULE_2__.MaxCountRounds) {\n                    console.log(\"end\");\n                    dispatch({\n                        type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.NextState\n                    });\n                } else {\n                    dispatch({\n                        type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.NextRound\n                    });\n                }\n            }, 1500);\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5___default().optionGrid),\n            children: options\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"eduzp0gmM14nTy7NlR6H+dEjRJg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDa0I7QUFDSDtBQUNuQjtBQUUxQyxTQUFTUyxlQUFlQyxLQUFLO0lBQ3pCLElBQUlBLE1BQU1DLFdBQVcsS0FBS0MsV0FDdEIsT0FBT0MsTUFBTSxHQUFHQyxJQUFJLENBQUNSLGdFQUFXQSxDQUFDUyxNQUFNO0lBRTNDLE9BQU9GLE1BQU0sR0FDUkMsSUFBSSxDQUFDUixnRUFBV0EsQ0FBQ1MsTUFBTSxFQUN2QkMsR0FBRyxDQUFDLENBQUNDLE9BQU9DO1FBQ2IsSUFBSVIsTUFBTVMsWUFBWSxLQUFLRCxPQUFPO1lBQzlCLE9BQU9aLGdFQUFXQSxDQUFDYyxPQUFPO1FBQzlCLE9BQU8sSUFBSVYsTUFBTUMsV0FBVyxLQUFLTyxPQUFPO1lBQ3BDLE9BQU9aLGdFQUFXQSxDQUFDZSxTQUFTO1FBQ2hDO1FBQ0EsT0FBT0o7SUFDWDtBQUNKO0FBRUEsU0FBU0ssV0FBV1osS0FBSyxFQUFFYSxXQUFXO0lBQ2xDLE9BQU9kLGVBQWVDLE9BQ2pCTSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQVUsOERBQUNiLCtEQUFNQTtZQUMxQm1CLE1BQU1QO1lBQ05RLFNBQVNmLE1BQU1DLFdBQVcsS0FBS0M7WUFDL0JLLE9BQU9QLE1BQU1nQixJQUFJLENBQUNSLE1BQU0sQ0FBQ1MsZUFBZTtZQUN4Q0MsS0FBS1Y7WUFDTFcsU0FBU047V0FDSkw7Ozs7O0FBR2pCO0FBRWUsU0FBU1ksUUFBUSxLQUFPO1FBQVAsRUFBQ3BCLEtBQUssRUFBQyxHQUFQOztJQUM1QixNQUFNcUIsV0FBVy9CLHdEQUFXQTtJQUM1QixNQUFNLENBQUNnQyxTQUFTQyxXQUFXLEdBQUd6QiwrQ0FBUUEsQ0FBQ2MsV0FBV1osT0FBT2EsWUFBWVEsVUFBVXJCO0lBQy9FLE1BQU13QixNQUFNO1FBQU9ELFdBQVdYLFdBQVdaLE9BQU9hLFlBQVlRLFVBQVVyQjtJQUFRO0lBQzlFSCxnREFBU0EsQ0FBQztRQUFPMkI7SUFBSyxHQUFHO1FBQUN4QjtLQUFNO0lBRWhDLFNBQVNhLFlBQVlRLFFBQVEsRUFBRXJCLEtBQUs7UUFDaEMsT0FBTyxDQUFDeUI7WUFDSixNQUFNakIsUUFBUWtCLE9BQU9ELE1BQU1FLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1lBQy9DUCxTQUFTO2dCQUFDUCxNQUFNckIsMkRBQU9BLENBQUNvQyxTQUFTO2dCQUFFQyxTQUFTdEI7WUFBSztZQUNqRCxJQUFJQSxVQUFVUixNQUFNUyxZQUFZLEVBQUU7Z0JBQzlCWSxTQUFTO29CQUFDUCxNQUFNckIsMkRBQU9BLENBQUNzQyxjQUFjO2dCQUFBO1lBQzFDO1lBQ0FQO1lBQ0FRLFdBQVc7Z0JBQ1BDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXbEMsTUFBTW1DLFVBQVU7Z0JBQ3ZDLElBQUluQyxNQUFNbUMsVUFBVSxHQUFHLE1BQU16QyxrRUFBY0EsRUFBRTtvQkFDekN1QyxRQUFRQyxHQUFHLENBQUM7b0JBQ1piLFNBQVM7d0JBQUNQLE1BQU1yQiwyREFBT0EsQ0FBQzJDLFNBQVM7b0JBQUE7Z0JBQ3JDLE9BQU87b0JBQ0hmLFNBQVM7d0JBQUNQLE1BQU1yQiwyREFBT0EsQ0FBQzRDLFNBQVM7b0JBQUE7Z0JBQ3JDO1lBQ0osR0FBRztRQUNQO0lBQ0o7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ0M7WUFBSUMsV0FBVy9DLDBFQUFrQjtzQkFDN0I4Qjs7Ozs7OztBQUlqQjtHQWpDd0JGOztRQUNIOUIsb0RBQVdBOzs7S0FEUjhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25zLmpzeD9kMTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vVUkvT3B0aW9ucy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7QWN0aW9ucywgTWF4Q291bnRSb3VuZHN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9zdG9yZVwiO1xyXG5pbXBvcnQgT3B0aW9uLCB7T3B0aW9uVHlwZXN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25cIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdldE9wdGlvblR5cGVzKHJvdW5kKSB7XHJcbiAgICBpZiAocm91bmQuYW5zd2VySW5kZXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gQXJyYXkoNCkuZmlsbChPcHRpb25UeXBlcy5Ob3JtYWwpO1xyXG5cclxuICAgIHJldHVybiBBcnJheSg0KVxyXG4gICAgICAgIC5maWxsKE9wdGlvblR5cGVzLk5vcm1hbClcclxuICAgICAgICAubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAocm91bmQuY29ycmVjdEluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uVHlwZXMuQ29ycmVjdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvdW5kLmFuc3dlckluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uVHlwZXMuSW5jb3JyZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhyb3VuZCwgY2hlY2tPcHRpb24pIHtcclxuICAgIHJldHVybiBnZXRPcHRpb25UeXBlcyhyb3VuZClcclxuICAgICAgICAubWFwKCh2YWx1ZSwgaW5kZXgpID0+IDxPcHRpb25cclxuICAgICAgICAgICAgdHlwZT17dmFsdWV9XHJcbiAgICAgICAgICAgIGJsb2NrZWQ9e3JvdW5kLmFuc3dlckluZGV4ICE9PSB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtyb3VuZC5kYXRhW2luZGV4XS5zcGVjaWVzX3RpdGxlcnV9XHJcbiAgICAgICAgICAgIGluZD17aW5kZXh9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrT3B0aW9ufVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgIC8+KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3B0aW9ucyh7cm91bmR9KSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShnZXRPcHRpb25zKHJvdW5kLCBjaGVja09wdGlvbihkaXNwYXRjaCwgcm91bmQpKSk7XHJcbiAgICBjb25zdCBzZXQgPSAoKSA9PiB7c2V0T3B0aW9ucyhnZXRPcHRpb25zKHJvdW5kLCBjaGVja09wdGlvbihkaXNwYXRjaCwgcm91bmQpKSl9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtzZXQoKX0sIFtyb3VuZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrT3B0aW9uKGRpc3BhdGNoLCByb3VuZCkge1xyXG4gICAgICAgIHJldHVybiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kJykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5TZXRBbnN3ZXIsIHBheWxvYWQ6IGluZGV4fSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5JbmNyZW1lbnRTY29yZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0KCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JvdW5kOiAnLCByb3VuZC5yb3VuZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdW5kLnJvdW5kSW5kZXggKyAxID09PSBNYXhDb3VudFJvdW5kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBBY3Rpb25zLk5leHRTdGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5OZXh0Um91bmR9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3B0aW9uR3JpZH0+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImNsYXNzZXMiLCJBY3Rpb25zIiwiTWF4Q291bnRSb3VuZHMiLCJPcHRpb24iLCJPcHRpb25UeXBlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0T3B0aW9uVHlwZXMiLCJyb3VuZCIsImFuc3dlckluZGV4IiwidW5kZWZpbmVkIiwiQXJyYXkiLCJmaWxsIiwiTm9ybWFsIiwibWFwIiwidmFsdWUiLCJpbmRleCIsImNvcnJlY3RJbmRleCIsIkNvcnJlY3QiLCJJbmNvcnJlY3QiLCJnZXRPcHRpb25zIiwiY2hlY2tPcHRpb24iLCJ0eXBlIiwiYmxvY2tlZCIsImRhdGEiLCJzcGVjaWVzX3RpdGxlcnUiLCJpbmQiLCJvbkNsaWNrIiwiT3B0aW9ucyIsImRpc3BhdGNoIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJzZXQiLCJldmVudCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIlNldEFuc3dlciIsInBheWxvYWQiLCJJbmNyZW1lbnRTY29yZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicm91bmRJbmRleCIsIk5leHRTdGF0ZSIsIk5leHRSb3VuZCIsImRpdiIsImNsYXNzTmFtZSIsIm9wdGlvbkdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});