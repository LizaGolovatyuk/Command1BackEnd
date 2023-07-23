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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const [buttons, setButtons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((()=>{\n        console.log(\"initial\");\n        return getButtons();\n    })());\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    function checkOption(event) {\n        const index = Number(event.target.getAttribute(\"ind\"));\n        dispatch({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n            payload: index\n        });\n        if (index === round.correctIndex) {\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n            });\n        }\n        setButtons(getButtons());\n        setTimeout(()=>{\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.NextRound\n            });\n            setButtons(getButtons());\n        }, 1500);\n    }\n    function getButtons() {\n        const buttonValues = round.data.map((bird)=>bird.species_titleru);\n        return buttonValues.map((value, index)=>{\n            const classesList = [\n                (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().option)\n            ];\n            if (round.answerIndex !== undefined) {\n                classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().blocked));\n                if (index === round.correctIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().correctAnswer));\n                } else if (index === round.answerIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().incorrectAnswer));\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: classesList.join(\" \"),\n                ind: index,\n                onClick: checkOption,\n                children: value\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().optionGrid),\n            children: buttons\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"TBk2neAWnPcaiKXjPACua675pKk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDUDtBQUNFO0FBQ2pCO0FBRWhCLFNBQVNLOztJQUNwQixNQUFNQyxvQkFBb0JMLHdEQUFXQSxDQUFDTSxDQUFBQSxRQUFTQSxNQUFNQyxZQUFZO0lBQ2pFLE1BQU1DLFFBQVFSLHdEQUFXQSxDQUFDTSxDQUFBQSxRQUFTQSxNQUFNRyxVQUFVLENBQUNKLGtCQUFrQjtJQUV0RSxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsQ0FBQztRQUFLUyxRQUFRQyxHQUFHLENBQUM7UUFBWSxPQUFPQztJQUFZO0lBQ3hGLE1BQU1DLFdBQVdoQix3REFBV0E7SUFFNUIsU0FBU2lCLFlBQVlDLEtBQUs7UUFDdEIsTUFBTUMsUUFBUUMsT0FBT0YsTUFBTUcsTUFBTSxDQUFDQyxZQUFZLENBQUM7UUFDL0NOLFNBQVM7WUFBQ08sTUFBTXBCLDJEQUFPQSxDQUFDcUIsU0FBUztZQUFFQyxTQUFTTjtRQUFLO1FBQ2pELElBQUlBLFVBQVVWLE1BQU1pQixZQUFZLEVBQUU7WUFDOUJWLFNBQVM7Z0JBQUNPLE1BQU1wQiwyREFBT0EsQ0FBQ3dCLGNBQWM7WUFBQTtRQUMxQztRQUNBZixXQUFXRztRQUNYYSxXQUFXO1lBQ1BaLFNBQVM7Z0JBQUNPLE1BQU1wQiwyREFBT0EsQ0FBQzBCLFNBQVM7WUFBQTtZQUNqQ2pCLFdBQVdHO1FBQ2YsR0FBRztJQUNQO0lBRUEsU0FBU0E7UUFDTCxNQUFNZSxlQUFlckIsTUFBTXNCLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxlQUFlO1FBQ2hFLE9BQU9KLGFBQWFFLEdBQUcsQ0FBQyxDQUFDRyxPQUFPaEI7WUFDNUIsTUFBTWlCLGNBQWM7Z0JBQUNsQyxzRUFBYzthQUFDO1lBQ3BDLElBQUlPLE1BQU02QixXQUFXLEtBQUtDLFdBQVc7Z0JBQ2pDSCxZQUFZSSxJQUFJLENBQUN0Qyx1RUFBZTtnQkFDaEMsSUFBSWlCLFVBQVVWLE1BQU1pQixZQUFZLEVBQUU7b0JBQzlCVSxZQUFZSSxJQUFJLENBQUN0Qyw2RUFBcUI7Z0JBQzFDLE9BQU8sSUFBSWlCLFVBQVVWLE1BQU02QixXQUFXLEVBQUU7b0JBQ3BDRixZQUFZSSxJQUFJLENBQUN0QywrRUFBdUI7Z0JBQzVDO1lBQ0o7WUFDQSxxQkFDSSw4REFBQzBDO2dCQUNHQyxXQUFXVCxZQUFZVSxJQUFJLENBQUM7Z0JBRTVCQyxLQUFLNUI7Z0JBQ0w2QixTQUFTL0I7MEJBRVJrQjtlQUpJaEI7Ozs7O1FBT2pCO0lBQ0o7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQzhCO1lBQUlKLFdBQVczQywwRUFBa0I7c0JBQzdCUzs7Ozs7OztBQUlqQjtHQXBEd0JOOztRQUNNSixvREFBV0E7UUFDdkJBLG9EQUFXQTtRQUdSRCxvREFBV0E7OztLQUxSSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3g/ZDExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1VJL09wdGlvbnMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9zdG9yZVwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Um91bmRJbmRleCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRSb3VuZCk7XHJcbiAgICBjb25zdCByb3VuZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJvdW5kc0RhdGFbY3VycmVudFJvdW5kSW5kZXhdKTtcclxuXHJcbiAgICBjb25zdCBbYnV0dG9ucywgc2V0QnV0dG9uc10gPSB1c2VTdGF0ZSgoKCk9Pntjb25zb2xlLmxvZygnaW5pdGlhbCcpOyByZXR1cm4gZ2V0QnV0dG9ucygpfSkoKSlcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja09wdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZCcpKTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5TZXRBbnN3ZXIsIHBheWxvYWQ6IGluZGV4fSlcclxuICAgICAgICBpZiAoaW5kZXggPT09IHJvdW5kLmNvcnJlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5JbmNyZW1lbnRTY29yZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJ1dHRvbnMoZ2V0QnV0dG9ucygpKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQWN0aW9ucy5OZXh0Um91bmR9KVxyXG4gICAgICAgICAgICBzZXRCdXR0b25zKGdldEJ1dHRvbnMoKSlcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvblZhbHVlcyA9IHJvdW5kLmRhdGEubWFwKGJpcmQgPT4gYmlyZC5zcGVjaWVzX3RpdGxlcnUpO1xyXG4gICAgICAgIHJldHVybiBidXR0b25WYWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xhc3Nlc0xpc3QgPSBbY2xhc3Nlcy5vcHRpb25dXHJcbiAgICAgICAgICAgIGlmIChyb3VuZC5hbnN3ZXJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuYmxvY2tlZClcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlc0xpc3QucHVzaChjbGFzc2VzLmNvcnJlY3RBbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gcm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuaW5jb3JyZWN0QW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc0xpc3Quam9pbignICcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGVja09wdGlvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vcHRpb25HcmlkfT5cclxuICAgICAgICAgICAgICAgIHtidXR0b25zfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiY2xhc3NlcyIsIkFjdGlvbnMiLCJ1c2VTdGF0ZSIsIk9wdGlvbnMiLCJjdXJyZW50Um91bmRJbmRleCIsInN0YXRlIiwiY3VycmVudFJvdW5kIiwicm91bmQiLCJyb3VuZHNEYXRhIiwiYnV0dG9ucyIsInNldEJ1dHRvbnMiLCJjb25zb2xlIiwibG9nIiwiZ2V0QnV0dG9ucyIsImRpc3BhdGNoIiwiY2hlY2tPcHRpb24iLCJldmVudCIsImluZGV4IiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidHlwZSIsIlNldEFuc3dlciIsInBheWxvYWQiLCJjb3JyZWN0SW5kZXgiLCJJbmNyZW1lbnRTY29yZSIsInNldFRpbWVvdXQiLCJOZXh0Um91bmQiLCJidXR0b25WYWx1ZXMiLCJkYXRhIiwibWFwIiwiYmlyZCIsInNwZWNpZXNfdGl0bGVydSIsInZhbHVlIiwiY2xhc3Nlc0xpc3QiLCJvcHRpb24iLCJhbnN3ZXJJbmRleCIsInVuZGVmaW5lZCIsInB1c2giLCJibG9ja2VkIiwiY29ycmVjdEFuc3dlciIsImluY29ycmVjdEFuc3dlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImpvaW4iLCJpbmQiLCJvbkNsaWNrIiwiZGl2Iiwib3B0aW9uR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});