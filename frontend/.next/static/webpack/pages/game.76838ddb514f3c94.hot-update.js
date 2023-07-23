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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const buttonValues = round.data.map((bird)=>bird.species_titleru);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    console.log(\"options\");\n    function checkOption(event) {\n        const index = Number(event.target.getAttribute(\"ind\"));\n        dispatch({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n            payload: index\n        });\n        if (index === round.correctIndex) {\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n            });\n        }\n    }\n    const [buttonList, setButtons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Array(4).fill(0));\n    function updateButtons() {\n        const buttons = buttonValues.map((value, index)=>{\n            const classesList = [\n                (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().option)\n            ];\n            if (round.answerIndex) {\n                classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().blocked));\n                console.log(\"blocked\");\n                if (index === round.correctIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().correctAnswer));\n                    console.log(\"correct\");\n                } else if (index === round.answerIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().incorrectAnswer));\n                    console.log(\"incorrect\");\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: classesList.join(\" \"),\n                ind: index,\n                onClick: checkOption,\n                children: value\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this);\n        });\n        setButtons(buttons);\n    }\n    updateButtons();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_4___default().optionGrid),\n            children: buttonList\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"ucMOy56VM8kIAV42M5QRo8wBM4Q=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDUDtBQUNFO0FBQ2pCO0FBRWhCLFNBQVNLOztJQUNwQixNQUFNQyxvQkFBb0JMLHdEQUFXQSxDQUFDTSxDQUFBQSxRQUFTQSxNQUFNQyxZQUFZO0lBQ2pFLE1BQU1DLFFBQVFSLHdEQUFXQSxDQUFDTSxDQUFBQSxRQUFTQSxNQUFNRyxVQUFVLENBQUNKLGtCQUFrQjtJQUN0RSxNQUFNSyxlQUFlRixNQUFNRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsZUFBZTtJQUNoRSxNQUFNQyxXQUFXaEIsd0RBQVdBO0lBQzVCaUIsUUFBUUMsR0FBRyxDQUFDO0lBRVosU0FBU0MsWUFBWUMsS0FBSztRQUN0QixNQUFNQyxRQUFRQyxPQUFPRixNQUFNRyxNQUFNLENBQUNDLFlBQVksQ0FBQztRQUMvQ1IsU0FBUztZQUFDUyxNQUFNdEIsMkRBQU9BLENBQUN1QixTQUFTO1lBQUVDLFNBQVNOO1FBQUs7UUFDakQsSUFBSUEsVUFBVVosTUFBTW1CLFlBQVksRUFBRTtZQUM5QlosU0FBUztnQkFBQ1MsTUFBTXRCLDJEQUFPQSxDQUFDMEIsY0FBYztZQUFBO1FBQzFDO0lBQ0o7SUFFQSxNQUFNLENBQUNDLFlBQVlDLFdBQVcsR0FBRzNCLCtDQUFRQSxDQUFDNEIsTUFBTSxHQUFHQyxJQUFJLENBQUM7SUFFeEQsU0FBU0M7UUFDTCxNQUFNQyxVQUFVeEIsYUFBYUUsR0FBRyxDQUFDLENBQUN1QixPQUFPZjtZQUNyQyxNQUFNZ0IsY0FBYztnQkFBQ25DLHNFQUFjO2FBQUM7WUFDcEMsSUFBSU8sTUFBTThCLFdBQVcsRUFBRTtnQkFDbkJGLFlBQVlHLElBQUksQ0FBQ3RDLHVFQUFlO2dCQUNoQ2UsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLElBQUlHLFVBQVVaLE1BQU1tQixZQUFZLEVBQUU7b0JBQzlCUyxZQUFZRyxJQUFJLENBQUN0Qyw2RUFBcUI7b0JBQ3RDZSxRQUFRQyxHQUFHLENBQUM7Z0JBQ2hCLE9BQU8sSUFBSUcsVUFBVVosTUFBTThCLFdBQVcsRUFBRTtvQkFDcENGLFlBQVlHLElBQUksQ0FBQ3RDLCtFQUF1QjtvQkFDeENlLFFBQVFDLEdBQUcsQ0FBQztnQkFDaEI7WUFDSjtZQUNBLHFCQUNJLDhEQUFDMEI7Z0JBQ0dDLFdBQVdSLFlBQVlTLElBQUksQ0FBQztnQkFFNUJDLEtBQUsxQjtnQkFDTDJCLFNBQVM3QjswQkFFUmlCO2VBSklmOzs7OztRQU9qQjtRQUNBVSxXQUFXSTtJQUNmO0lBRUFEO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNlO1lBQUlKLFdBQVczQywwRUFBa0I7c0JBQzdCNEI7Ozs7Ozs7QUFJakI7R0F0RHdCekI7O1FBQ01KLG9EQUFXQTtRQUN2QkEsb0RBQVdBO1FBRVJELG9EQUFXQTs7O0tBSlJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25zLmpzeD9kMTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vVUkvT3B0aW9ucy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7QWN0aW9uc30gZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL3N0b3JlXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3B0aW9ucygpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3VuZEluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFJvdW5kKTtcclxuICAgIGNvbnN0IHJvdW5kID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucm91bmRzRGF0YVtjdXJyZW50Um91bmRJbmRleF0pO1xyXG4gICAgY29uc3QgYnV0dG9uVmFsdWVzID0gcm91bmQuZGF0YS5tYXAoYmlyZCA9PiBiaXJkLnNwZWNpZXNfdGl0bGVydSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zb2xlLmxvZygnb3B0aW9ucycpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrT3B0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kJykpO1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBBY3Rpb25zLlNldEFuc3dlciwgcGF5bG9hZDogaW5kZXh9KVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBBY3Rpb25zLkluY3JlbWVudFNjb3JlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2J1dHRvbkxpc3QsIHNldEJ1dHRvbnNdID0gdXNlU3RhdGUoQXJyYXkoNCkuZmlsbCgwKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQnV0dG9ucygpIHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gYnV0dG9uVmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXNMaXN0ID0gW2NsYXNzZXMub3B0aW9uXVxyXG4gICAgICAgICAgICBpZiAocm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzZXNMaXN0LnB1c2goY2xhc3Nlcy5ibG9ja2VkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jsb2NrZWQnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvcnJlY3QnKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gcm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuaW5jb3JyZWN0QW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5jb3JyZWN0JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc0xpc3Quam9pbignICcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGVja09wdGlvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0QnV0dG9ucyhidXR0b25zKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJ1dHRvbnMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9wdGlvbkdyaWR9PlxyXG4gICAgICAgICAgICAgICAge2J1dHRvbkxpc3R9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJjbGFzc2VzIiwiQWN0aW9ucyIsInVzZVN0YXRlIiwiT3B0aW9ucyIsImN1cnJlbnRSb3VuZEluZGV4Iiwic3RhdGUiLCJjdXJyZW50Um91bmQiLCJyb3VuZCIsInJvdW5kc0RhdGEiLCJidXR0b25WYWx1ZXMiLCJkYXRhIiwibWFwIiwiYmlyZCIsInNwZWNpZXNfdGl0bGVydSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImNoZWNrT3B0aW9uIiwiZXZlbnQiLCJpbmRleCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInR5cGUiLCJTZXRBbnN3ZXIiLCJwYXlsb2FkIiwiY29ycmVjdEluZGV4IiwiSW5jcmVtZW50U2NvcmUiLCJidXR0b25MaXN0Iiwic2V0QnV0dG9ucyIsIkFycmF5IiwiZmlsbCIsInVwZGF0ZUJ1dHRvbnMiLCJidXR0b25zIiwidmFsdWUiLCJjbGFzc2VzTGlzdCIsIm9wdGlvbiIsImFuc3dlckluZGV4IiwicHVzaCIsImJsb2NrZWQiLCJjb3JyZWN0QW5zd2VyIiwiaW5jb3JyZWN0QW5zd2VyIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiam9pbiIsImluZCIsIm9uQ2xpY2siLCJkaXYiLCJvcHRpb25HcmlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});