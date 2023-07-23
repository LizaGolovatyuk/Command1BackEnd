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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n/* harmony import */ var _components_game_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/game/Option */ \"./components/game/Option.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction getOptionTypes(round) {\n    if (round.answerIndex === undefined) return Array(4).fill(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Normal);\n    return Array(4).fill(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Normal).map((value, index)=>{\n        if (round.correctIndex === index) {\n            return _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Correct;\n        } else if (round.answerIndex === index) {\n            return _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Incorrect;\n        }\n        return value;\n    });\n}\nfunction getOptions(round, checkOption) {\n    let block = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;\n    console.log(\"round: \", round);\n    return getOptionTypes(round).map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: value,\n            blocked: block,\n            value: round.data[index].species_titleru,\n            ind: index,\n            onClick: checkOption\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 26,\n            columnNumber: 32\n        }, this));\n}\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getOptions(round, checkOption(dispatch, round)));\n    function checkOption(dispatch, round) {\n        return (event)=>{\n            console.log(\"checkOption\");\n            const index = event.target.getAttribute(\"ind\");\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n                payload: index\n            });\n            console.log(\"dispatch\");\n            let newOptions = getOptions(round, checkOption(dispatch, round), true).map((option, ind)=>{\n                console.log(\"option\", option);\n                if (ind === round.correctIndex) {\n                    option = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        type: _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Correct,\n                        blocked: true,\n                        value: round.data[index].species_titleru,\n                        ind: index,\n                        onClick: checkOption(dispatch, round)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 35\n                    }, this);\n                }\n                if (ind === index && ind !== round.correctIndex) {\n                    option = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        type: _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Incorrect,\n                        blocked: true,\n                        value: round.data[index].species_titleru,\n                        ind: index,\n                        onClick: checkOption(dispatch, round)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 35\n                    }, this);\n                }\n                return option;\n            });\n            console.log(\"newOptions: \", newOptions);\n            setOptions(newOptions);\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5___default().optionGrid),\n            children: options\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 83,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"ZzCFVsSlrrdABkNjLaK8ZvaM5N8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JBQ0ksNEVBQUNFO1lBQUlDLFdBQVc3QywwRUFBa0I7c0JBQzdCbUM7Ozs7Ozs7QUFJakI7R0FuRHdCTjs7UUFDTTlCLG9EQUFXQTtRQUN2QkEsb0RBQVdBO1FBQ1JELG9EQUFXQTs7O0tBSFIrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3g/ZDExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1VJL09wdGlvbnMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9zdG9yZVwiO1xyXG5pbXBvcnQgT3B0aW9uLCB7T3B0aW9uVHlwZXN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25cIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRPcHRpb25UeXBlcyhyb3VuZCkge1xyXG4gICAgaWYgKHJvdW5kLmFuc3dlckluZGV4ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIEFycmF5KDQpLmZpbGwoT3B0aW9uVHlwZXMuTm9ybWFsKTtcclxuXHJcbiAgICByZXR1cm4gQXJyYXkoNClcclxuICAgICAgICAuZmlsbChPcHRpb25UeXBlcy5Ob3JtYWwpXHJcbiAgICAgICAgLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdW5kLmNvcnJlY3RJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvblR5cGVzLkNvcnJlY3Q7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3VuZC5hbnN3ZXJJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvblR5cGVzLkluY29ycmVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhyb3VuZCwgY2hlY2tPcHRpb24sIGJsb2NrPWZhbHNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgcm91bmQ6IGAsIHJvdW5kKVxyXG4gICAgcmV0dXJuIGdldE9wdGlvblR5cGVzKHJvdW5kKVxyXG4gICAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4gPE9wdGlvblxyXG4gICAgICAgICAgICB0eXBlPXt2YWx1ZX1cclxuICAgICAgICAgICAgYmxvY2tlZD17YmxvY2t9XHJcbiAgICAgICAgICAgIHZhbHVlPXtyb3VuZC5kYXRhW2luZGV4XS5zcGVjaWVzX3RpdGxlcnV9XHJcbiAgICAgICAgICAgIGluZD17aW5kZXh9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrT3B0aW9ufVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgIC8+KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3B0aW9ucygpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3VuZEluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFJvdW5kKTtcclxuICAgIGNvbnN0IHJvdW5kID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucm91bmRzRGF0YVtjdXJyZW50Um91bmRJbmRleF0pO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShnZXRPcHRpb25zKHJvdW5kLCBjaGVja09wdGlvbihkaXNwYXRjaCwgcm91bmQpKSlcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja09wdGlvbihkaXNwYXRjaCwgcm91bmQpIHtcclxuICAgICAgICByZXR1cm4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja09wdGlvbicpXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kJylcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuU2V0QW5zd2VyLCBwYXlsb2FkOiBpbmRleH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkaXNwYXRjaCcpXHJcbiAgICAgICAgICAgIGxldCBuZXdPcHRpb25zID0gZ2V0T3B0aW9ucyhyb3VuZCwgY2hlY2tPcHRpb24oZGlzcGF0Y2gsIHJvdW5kKSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbiwgaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29wdGlvbicsIG9wdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kID09PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gKDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtPcHRpb25UeXBlcy5Db3JyZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JvdW5kLmRhdGFbaW5kZXhdLnNwZWNpZXNfdGl0bGVydX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrT3B0aW9uKGRpc3BhdGNoLCByb3VuZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZCA9PT0gaW5kZXggJiYgaW5kICE9PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gKDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtPcHRpb25UeXBlcy5JbmNvcnJlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm91bmQuZGF0YVtpbmRleF0uc3BlY2llc190aXRsZXJ1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hlY2tPcHRpb24oZGlzcGF0Y2gsIHJvdW5kKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25ld09wdGlvbnM6ICcsIG5ld09wdGlvbnMpXHJcbiAgICAgICAgICAgIHNldE9wdGlvbnMobmV3T3B0aW9ucylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vcHRpb25HcmlkfT5cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiY2xhc3NlcyIsIkFjdGlvbnMiLCJPcHRpb24iLCJPcHRpb25UeXBlcyIsInVzZVN0YXRlIiwiZ2V0T3B0aW9uVHlwZXMiLCJyb3VuZCIsImFuc3dlckluZGV4IiwidW5kZWZpbmVkIiwiQXJyYXkiLCJmaWxsIiwiTm9ybWFsIiwibWFwIiwidmFsdWUiLCJpbmRleCIsImNvcnJlY3RJbmRleCIsIkNvcnJlY3QiLCJJbmNvcnJlY3QiLCJnZXRPcHRpb25zIiwiY2hlY2tPcHRpb24iLCJibG9jayIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYmxvY2tlZCIsImRhdGEiLCJzcGVjaWVzX3RpdGxlcnUiLCJpbmQiLCJvbkNsaWNrIiwiT3B0aW9ucyIsImN1cnJlbnRSb3VuZEluZGV4Iiwic3RhdGUiLCJjdXJyZW50Um91bmQiLCJyb3VuZHNEYXRhIiwiZGlzcGF0Y2giLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiU2V0QW5zd2VyIiwicGF5bG9hZCIsIm5ld09wdGlvbnMiLCJvcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvcHRpb25HcmlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});