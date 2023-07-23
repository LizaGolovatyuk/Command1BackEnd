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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n/* harmony import */ var _components_game_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/game/Option */ \"./components/game/Option.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction getOptionTypes(round) {\n    if (round.answerIndex === undefined) return Array(4).fill(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Normal);\n    return Array(4).fill(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Normal).map((value, index)=>{\n        if (round.answerIndex === index) {\n            return _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Correct;\n        }\n        return _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Incorrect;\n    });\n}\nfunction getOptions(round, checkOption) {\n    let block = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;\n    console.log(\"round: \", round);\n    return getOptionTypes(round).map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: value,\n            blocked: block,\n            value: round.data[index].species_titleru,\n            ind: index,\n            onClick: checkOption\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 24,\n            columnNumber: 32\n        }, this));\n}\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getOptions(round, checkOption(dispatch, round)));\n    function checkOption(dispatch, round) {\n        return (event)=>{\n            console.log(\"checkOption\");\n            const index = event.target.getAttribute(\"ind\");\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n                payload: index\n            });\n            console.log(\"dispatch\");\n            let newOptions = getOptions(round, checkOption(dispatch, round), true).map((option, ind)=>{\n                if (ind === index && ind === round.answerIndex) {\n                    console.log(\"option\", option);\n                    option = option.type = _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Correct;\n                }\n                if (ind === index && ind !== round.answerIndex) {\n                    console.log(\"option\", option);\n                    option = option.type = _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Incorrect;\n                }\n                return option;\n            });\n            setOptions(newOptions);\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5___default().optionGrid),\n            children: options\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"ZzCFVsSlrrdABkNjLaK8ZvaM5N8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUNhO0FBQzlCO0FBRS9CLFNBQVNPLGVBQWVDLEtBQUs7SUFDekIsSUFBSUEsTUFBTUMsV0FBVyxLQUFLQyxXQUN0QixPQUFPQyxNQUFNLEdBQUdDLElBQUksQ0FBQ1AsZ0VBQVdBLENBQUNRLE1BQU07SUFFM0MsT0FBT0YsTUFBTSxHQUNSQyxJQUFJLENBQUNQLGdFQUFXQSxDQUFDUSxNQUFNLEVBQ3ZCQyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0M7UUFDYixJQUFJUixNQUFNQyxXQUFXLEtBQUtPLE9BQU87WUFDN0IsT0FBT1gsZ0VBQVdBLENBQUNZLE9BQU87UUFDOUI7UUFDQSxPQUFPWixnRUFBV0EsQ0FBQ2EsU0FBUztJQUNoQztBQUNKO0FBRUEsU0FBU0MsV0FBV1gsS0FBSyxFQUFFWSxXQUFXO1FBQUVDLFFBQUFBLGlFQUFNO0lBQzFDQyxRQUFRQyxHQUFHLENBQUUsV0FBVWY7SUFDdkIsT0FBT0QsZUFBZUMsT0FDakJNLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFBVSw4REFBQ1osK0RBQU1BO1lBQzFCb0IsTUFBTVQ7WUFDTlUsU0FBU0o7WUFDVE4sT0FBT1AsTUFBTWtCLElBQUksQ0FBQ1YsTUFBTSxDQUFDVyxlQUFlO1lBQ3hDQyxLQUFLWjtZQUNMYSxTQUFTVDtXQUNKSjs7Ozs7QUFHakI7QUFFZSxTQUFTYzs7SUFDcEIsTUFBTUMsb0JBQW9COUIsd0RBQVdBLENBQUMrQixDQUFBQSxRQUFTQSxNQUFNQyxZQUFZO0lBQ2pFLE1BQU16QixRQUFRUCx3REFBV0EsQ0FBQytCLENBQUFBLFFBQVNBLE1BQU1FLFVBQVUsQ0FBQ0gsa0JBQWtCO0lBQ3RFLE1BQU1JLFdBQVduQyx3REFBV0E7SUFDNUIsTUFBTSxDQUFDb0MsU0FBU0MsV0FBVyxHQUFHL0IsK0NBQVFBLENBQUNhLFdBQVdYLE9BQU9ZLFlBQVllLFVBQVUzQjtJQUUvRSxTQUFTWSxZQUFZZSxRQUFRLEVBQUUzQixLQUFLO1FBQ2hDLE9BQU8sQ0FBQzhCO1lBQ0poQixRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNUCxRQUFRc0IsTUFBTUMsTUFBTSxDQUFDQyxZQUFZLENBQUM7WUFDeENMLFNBQVM7Z0JBQUNYLE1BQU1yQiwyREFBT0EsQ0FBQ3NDLFNBQVM7Z0JBQUVDLFNBQVMxQjtZQUFLO1lBQ2pETSxRQUFRQyxHQUFHLENBQUM7WUFDWixJQUFJb0IsYUFBYXhCLFdBQVdYLE9BQU9ZLFlBQVllLFVBQVUzQixRQUFRLE1BQzVETSxHQUFHLENBQUMsQ0FBQzhCLFFBQVFoQjtnQkFDVixJQUFJQSxRQUFRWixTQUFTWSxRQUFRcEIsTUFBTUMsV0FBVyxFQUFFO29CQUM1Q2EsUUFBUUMsR0FBRyxDQUFDLFVBQVVxQjtvQkFDdEJBLFNBQVNBLE9BQU9wQixJQUFJLEdBQUduQixnRUFBV0EsQ0FBQ1ksT0FBTztnQkFDOUM7Z0JBQ0EsSUFBSVcsUUFBUVosU0FBU1ksUUFBUXBCLE1BQU1DLFdBQVcsRUFBRTtvQkFDNUNhLFFBQVFDLEdBQUcsQ0FBQyxVQUFVcUI7b0JBQ3RCQSxTQUFTQSxPQUFPcEIsSUFBSSxHQUFHbkIsZ0VBQVdBLENBQUNhLFNBQVM7Z0JBQ2hEO2dCQUNBLE9BQU8wQjtZQUNYO1lBQ0pQLFdBQVdNO1FBQ2Y7SUFDSjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDRTtZQUFJQyxXQUFXNUMsMEVBQWtCO3NCQUM3QmtDOzs7Ozs7O0FBSWpCO0dBbkN3Qk47O1FBQ003QixvREFBV0E7UUFDdkJBLG9EQUFXQTtRQUNSRCxvREFBV0E7OztLQUhSOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL09wdGlvbnMuanN4P2QxMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9VSS9PcHRpb25zLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtBY3Rpb25zfSBmcm9tIFwiQC9jb21wb25lbnRzL2dhbWUvc3RvcmVcIjtcclxuaW1wb3J0IE9wdGlvbiwge09wdGlvblR5cGVzfSBmcm9tIFwiQC9jb21wb25lbnRzL2dhbWUvT3B0aW9uXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9uVHlwZXMocm91bmQpIHtcclxuICAgIGlmIChyb3VuZC5hbnN3ZXJJbmRleCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiBBcnJheSg0KS5maWxsKE9wdGlvblR5cGVzLk5vcm1hbCk7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5KDQpXHJcbiAgICAgICAgLmZpbGwoT3B0aW9uVHlwZXMuTm9ybWFsKVxyXG4gICAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3VuZC5hbnN3ZXJJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvblR5cGVzLkNvcnJlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBPcHRpb25UeXBlcy5JbmNvcnJlY3Q7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhyb3VuZCwgY2hlY2tPcHRpb24sIGJsb2NrPWZhbHNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgcm91bmQ6IGAsIHJvdW5kKVxyXG4gICAgcmV0dXJuIGdldE9wdGlvblR5cGVzKHJvdW5kKVxyXG4gICAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4gPE9wdGlvblxyXG4gICAgICAgICAgICB0eXBlPXt2YWx1ZX1cclxuICAgICAgICAgICAgYmxvY2tlZD17YmxvY2t9XHJcbiAgICAgICAgICAgIHZhbHVlPXtyb3VuZC5kYXRhW2luZGV4XS5zcGVjaWVzX3RpdGxlcnV9XHJcbiAgICAgICAgICAgIGluZD17aW5kZXh9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrT3B0aW9ufVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgIC8+KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3B0aW9ucygpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3VuZEluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFJvdW5kKTtcclxuICAgIGNvbnN0IHJvdW5kID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucm91bmRzRGF0YVtjdXJyZW50Um91bmRJbmRleF0pO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShnZXRPcHRpb25zKHJvdW5kLCBjaGVja09wdGlvbihkaXNwYXRjaCwgcm91bmQpKSlcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja09wdGlvbihkaXNwYXRjaCwgcm91bmQpIHtcclxuICAgICAgICByZXR1cm4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja09wdGlvbicpXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kJylcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuU2V0QW5zd2VyLCBwYXlsb2FkOiBpbmRleH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkaXNwYXRjaCcpXHJcbiAgICAgICAgICAgIGxldCBuZXdPcHRpb25zID0gZ2V0T3B0aW9ucyhyb3VuZCwgY2hlY2tPcHRpb24oZGlzcGF0Y2gsIHJvdW5kKSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbiwgaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZCA9PT0gaW5kZXggJiYgaW5kID09PSByb3VuZC5hbnN3ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb3B0aW9uJywgb3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSBvcHRpb24udHlwZSA9IE9wdGlvblR5cGVzLkNvcnJlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmQgPT09IGluZGV4ICYmIGluZCAhPT0gcm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29wdGlvbicsIG9wdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gb3B0aW9uLnR5cGUgPSBPcHRpb25UeXBlcy5JbmNvcnJlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRPcHRpb25zKG5ld09wdGlvbnMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3B0aW9uR3JpZH0+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImNsYXNzZXMiLCJBY3Rpb25zIiwiT3B0aW9uIiwiT3B0aW9uVHlwZXMiLCJ1c2VTdGF0ZSIsImdldE9wdGlvblR5cGVzIiwicm91bmQiLCJhbnN3ZXJJbmRleCIsInVuZGVmaW5lZCIsIkFycmF5IiwiZmlsbCIsIk5vcm1hbCIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJDb3JyZWN0IiwiSW5jb3JyZWN0IiwiZ2V0T3B0aW9ucyIsImNoZWNrT3B0aW9uIiwiYmxvY2siLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImJsb2NrZWQiLCJkYXRhIiwic3BlY2llc190aXRsZXJ1IiwiaW5kIiwib25DbGljayIsIk9wdGlvbnMiLCJjdXJyZW50Um91bmRJbmRleCIsInN0YXRlIiwiY3VycmVudFJvdW5kIiwicm91bmRzRGF0YSIsImRpc3BhdGNoIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIlNldEFuc3dlciIsInBheWxvYWQiLCJuZXdPcHRpb25zIiwib3B0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwib3B0aW9uR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});