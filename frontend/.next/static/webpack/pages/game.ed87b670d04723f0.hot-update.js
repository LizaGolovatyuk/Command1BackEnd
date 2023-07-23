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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n/* harmony import */ var _components_game_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/game/Option */ \"./components/game/Option.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction getOptionTypes(round) {\n    if (round.answerIndex === undefined) return Array(4).fill(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Normal);\n    return Array(4).fill(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Normal).map((value, index)=>{\n        if (round.correctIndex === index) {\n            return _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Correct;\n        } else if (round.answerIndex === index) {\n            return _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Incorrect;\n        }\n        return value;\n    });\n}\nfunction getOptions(round, checkOption) {\n    let block = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;\n    console.log(\"round: \", round);\n    return getOptionTypes(round).map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: value,\n            blocked: block,\n            value: round.data[index].species_titleru,\n            ind: index,\n            onClick: checkOption\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 26,\n            columnNumber: 32\n        }, this));\n}\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getOptions(round, checkOption(dispatch, round)));\n    function checkOption(dispatch, round) {\n        return (event)=>{\n            console.log(\"checkOption\");\n            const index = event.target.getAttribute(\"ind\");\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n                payload: index\n            });\n            console.log(\"dispatch\");\n            let newOptions = getOptions(round, checkOption(dispatch, round), true).map((option, ind)=>{\n                if (ind === index && index === round.correctIndex) {\n                    option = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        type: _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Correct,\n                        blocked: true,\n                        value: round.data[index].species_titleru,\n                        ind: ind,\n                        onClick: checkOption(dispatch, round)\n                    }, ind, false, {\n                        fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 35\n                    }, this);\n                    console.log(\"correctOption\", option);\n                }\n                if (ind === index && index !== round.correctIndex) {\n                    option = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Option__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        type: _components_game_Option__WEBPACK_IMPORTED_MODULE_3__.OptionTypes.Incorrect,\n                        blocked: true,\n                        value: round.data[index].species_titleru,\n                        ind: ind,\n                        onClick: checkOption(dispatch, round)\n                    }, ind, false, {\n                        fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 35\n                    }, this);\n                    console.log(\"incorrectOption\", option);\n                }\n                return option;\n            });\n            console.log(\"newOptions: \", newOptions);\n            setOptions(newOptions);\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_5___default().optionGrid),\n            children: options\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 84,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"ZzCFVsSlrrdABkNjLaK8ZvaM5N8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFnQm9CO1lBQzVCTixXQUFXTTtRQUNmO0lBQ0o7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ0U7WUFBSUMsV0FBVzdDLDBFQUFrQjtzQkFDN0JtQzs7Ozs7OztBQUlqQjtHQXBEd0JOOztRQUNNOUIsb0RBQVdBO1FBQ3ZCQSxvREFBV0E7UUFDUkQsb0RBQVdBOzs7S0FIUitCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25zLmpzeD9kMTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vVUkvT3B0aW9ucy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7QWN0aW9uc30gZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL3N0b3JlXCI7XHJcbmltcG9ydCBPcHRpb24sIHtPcHRpb25UeXBlc30gZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL09wdGlvblwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdldE9wdGlvblR5cGVzKHJvdW5kKSB7XHJcbiAgICBpZiAocm91bmQuYW5zd2VySW5kZXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gQXJyYXkoNCkuZmlsbChPcHRpb25UeXBlcy5Ob3JtYWwpO1xyXG5cclxuICAgIHJldHVybiBBcnJheSg0KVxyXG4gICAgICAgIC5maWxsKE9wdGlvblR5cGVzLk5vcm1hbClcclxuICAgICAgICAubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAocm91bmQuY29ycmVjdEluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uVHlwZXMuQ29ycmVjdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvdW5kLmFuc3dlckluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uVHlwZXMuSW5jb3JyZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcHRpb25zKHJvdW5kLCBjaGVja09wdGlvbiwgYmxvY2s9ZmFsc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKGByb3VuZDogYCwgcm91bmQpXHJcbiAgICByZXR1cm4gZ2V0T3B0aW9uVHlwZXMocm91bmQpXHJcbiAgICAgICAgLm1hcCgodmFsdWUsIGluZGV4KSA9PiA8T3B0aW9uXHJcbiAgICAgICAgICAgIHR5cGU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBibG9ja2VkPXtibG9ja31cclxuICAgICAgICAgICAgdmFsdWU9e3JvdW5kLmRhdGFbaW5kZXhdLnNwZWNpZXNfdGl0bGVydX1cclxuICAgICAgICAgICAgaW5kPXtpbmRleH1cclxuICAgICAgICAgICAgb25DbGljaz17Y2hlY2tPcHRpb259XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgLz4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcHRpb25zKCkge1xyXG4gICAgY29uc3QgY3VycmVudFJvdW5kSW5kZXggPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jdXJyZW50Um91bmQpO1xyXG4gICAgY29uc3Qgcm91bmQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yb3VuZHNEYXRhW2N1cnJlbnRSb3VuZEluZGV4XSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKGdldE9wdGlvbnMocm91bmQsIGNoZWNrT3B0aW9uKGRpc3BhdGNoLCByb3VuZCkpKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrT3B0aW9uKGRpc3BhdGNoLCByb3VuZCkge1xyXG4gICAgICAgIHJldHVybiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrT3B0aW9uJylcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmQnKVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5TZXRBbnN3ZXIsIHBheWxvYWQ6IGluZGV4fSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rpc3BhdGNoJylcclxuICAgICAgICAgICAgbGV0IG5ld09wdGlvbnMgPSBnZXRPcHRpb25zKHJvdW5kLCBjaGVja09wdGlvbihkaXNwYXRjaCwgcm91bmQpLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uLCBpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kID09PSBpbmRleCAmJiBpbmRleCA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9ICg8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17T3B0aW9uVHlwZXMuQ29ycmVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja2VkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3VuZC5kYXRhW2luZGV4XS5zcGVjaWVzX3RpdGxlcnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kPXtpbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hlY2tPcHRpb24oZGlzcGF0Y2gsIHJvdW5kKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvcnJlY3RPcHRpb24nLCBvcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmQgPT09IGluZGV4ICYmIGluZGV4ICE9PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gKDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtPcHRpb25UeXBlcy5JbmNvcnJlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm91bmQuZGF0YVtpbmRleF0uc3BlY2llc190aXRsZXJ1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZD17aW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrT3B0aW9uKGRpc3BhdGNoLCByb3VuZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmNvcnJlY3RPcHRpb24nLCBvcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3T3B0aW9uczogJywgbmV3T3B0aW9ucylcclxuICAgICAgICAgICAgc2V0T3B0aW9ucyhuZXdPcHRpb25zKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9wdGlvbkdyaWR9PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiQWN0aW9ucyIsIk9wdGlvbiIsIk9wdGlvblR5cGVzIiwidXNlU3RhdGUiLCJnZXRPcHRpb25UeXBlcyIsInJvdW5kIiwiYW5zd2VySW5kZXgiLCJ1bmRlZmluZWQiLCJBcnJheSIsImZpbGwiLCJOb3JtYWwiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiY29ycmVjdEluZGV4IiwiQ29ycmVjdCIsIkluY29ycmVjdCIsImdldE9wdGlvbnMiLCJjaGVja09wdGlvbiIsImJsb2NrIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJibG9ja2VkIiwiZGF0YSIsInNwZWNpZXNfdGl0bGVydSIsImluZCIsIm9uQ2xpY2siLCJPcHRpb25zIiwiY3VycmVudFJvdW5kSW5kZXgiLCJzdGF0ZSIsImN1cnJlbnRSb3VuZCIsInJvdW5kc0RhdGEiLCJkaXNwYXRjaCIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJTZXRBbnN3ZXIiLCJwYXlsb2FkIiwibmV3T3B0aW9ucyIsIm9wdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsIm9wdGlvbkdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});