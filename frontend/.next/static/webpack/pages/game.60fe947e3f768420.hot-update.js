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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const buttonValues = round.data.map((bird)=>bird.species_titleru);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    console.log(\"options\");\n    let buttons = getButtons();\n    function checkOption(event) {\n        const index = Number(event.target.getAttribute(\"ind\"));\n        dispatch({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n            payload: index\n        });\n        if (index === round.correctIndex) {\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n            });\n        }\n        buttons = getButtons();\n    }\n    function getButtons() {\n        return buttonValues.map((value, index)=>{\n            const classesList = [\n                (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().option)\n            ];\n            if (round.answerIndex) {\n                classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().blocked));\n                console.log(\"blocked\");\n                if (index === round.correctIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().correctAnswer));\n                    console.log(\"correct\");\n                } else if (index === round.answerIndex) {\n                    classesList.push((_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().incorrectAnswer));\n                    console.log(\"incorrect\");\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: classesList.join(\" \"),\n                ind: index,\n                onClick: checkOption,\n                children: value\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().optionGrid),\n            children: buttons\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"u57Jjp1DvN7KBdSqrsRP2NhBAwQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUVqQyxTQUFTSTs7SUFDcEIsTUFBTUMsb0JBQW9CSix3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWTtJQUNqRSxNQUFNQyxRQUFRUCx3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUcsVUFBVSxDQUFDSixrQkFBa0I7SUFDdEUsTUFBTUssZUFBZUYsTUFBTUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLGVBQWU7SUFDaEUsTUFBTUMsV0FBV2Ysd0RBQVdBO0lBQzVCZ0IsUUFBUUMsR0FBRyxDQUFDO0lBQ1osSUFBSUMsVUFBVUM7SUFFZCxTQUFTQyxZQUFZQyxLQUFLO1FBQ3RCLE1BQU1DLFFBQVFDLE9BQU9GLE1BQU1HLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDO1FBQy9DVixTQUFTO1lBQUNXLE1BQU12QiwyREFBT0EsQ0FBQ3dCLFNBQVM7WUFBRUMsU0FBU047UUFBSztRQUNqRCxJQUFJQSxVQUFVZCxNQUFNcUIsWUFBWSxFQUFFO1lBQzlCZCxTQUFTO2dCQUFDVyxNQUFNdkIsMkRBQU9BLENBQUMyQixjQUFjO1lBQUE7UUFDMUM7UUFDQVosVUFBVUM7SUFDZDtJQUVBLFNBQVNBO1FBQ0wsT0FBT1QsYUFBYUUsR0FBRyxDQUFDLENBQUNtQixPQUFPVDtZQUM1QixNQUFNVSxjQUFjO2dCQUFDOUIsc0VBQWM7YUFBQztZQUNwQyxJQUFJTSxNQUFNMEIsV0FBVyxFQUFFO2dCQUNuQkYsWUFBWUcsSUFBSSxDQUFDakMsdUVBQWU7Z0JBQ2hDYyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osSUFBSUssVUFBVWQsTUFBTXFCLFlBQVksRUFBRTtvQkFDOUJHLFlBQVlHLElBQUksQ0FBQ2pDLDZFQUFxQjtvQkFDdENjLFFBQVFDLEdBQUcsQ0FBQztnQkFDaEIsT0FBTyxJQUFJSyxVQUFVZCxNQUFNMEIsV0FBVyxFQUFFO29CQUNwQ0YsWUFBWUcsSUFBSSxDQUFDakMsK0VBQXVCO29CQUN4Q2MsUUFBUUMsR0FBRyxDQUFDO2dCQUNoQjtZQUNKO1lBQ0EscUJBQ0ksOERBQUNzQjtnQkFDR0MsV0FBV1IsWUFBWVMsSUFBSSxDQUFDO2dCQUU1QkMsS0FBS3BCO2dCQUNMcUIsU0FBU3ZCOzBCQUVSVztlQUpJVDs7Ozs7UUFPakI7SUFDSjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDc0I7WUFBSUosV0FBV3RDLDBFQUFrQjtzQkFDN0JnQjs7Ozs7OztBQUlqQjtHQW5Ed0JkOztRQUNNSCxvREFBV0E7UUFDdkJBLG9EQUFXQTtRQUVSRCxvREFBV0E7OztLQUpSSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3g/ZDExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1VJL09wdGlvbnMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCJAL2NvbXBvbmVudHMvZ2FtZS9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3B0aW9ucygpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3VuZEluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFJvdW5kKTtcclxuICAgIGNvbnN0IHJvdW5kID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucm91bmRzRGF0YVtjdXJyZW50Um91bmRJbmRleF0pO1xyXG4gICAgY29uc3QgYnV0dG9uVmFsdWVzID0gcm91bmQuZGF0YS5tYXAoYmlyZCA9PiBiaXJkLnNwZWNpZXNfdGl0bGVydSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zb2xlLmxvZygnb3B0aW9ucycpO1xyXG4gICAgbGV0IGJ1dHRvbnMgPSBnZXRCdXR0b25zKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tPcHRpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmQnKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuU2V0QW5zd2VyLCBwYXlsb2FkOiBpbmRleH0pXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuSW5jcmVtZW50U2NvcmV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b25zID0gZ2V0QnV0dG9ucygpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICByZXR1cm4gYnV0dG9uVmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXNMaXN0ID0gW2NsYXNzZXMub3B0aW9uXVxyXG4gICAgICAgICAgICBpZiAocm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzZXNMaXN0LnB1c2goY2xhc3Nlcy5ibG9ja2VkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jsb2NrZWQnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvcnJlY3QnKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gcm91bmQuYW5zd2VySW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzTGlzdC5wdXNoKGNsYXNzZXMuaW5jb3JyZWN0QW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5jb3JyZWN0JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc0xpc3Quam9pbignICcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGVja09wdGlvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vcHRpb25HcmlkfT5cclxuICAgICAgICAgICAgICAgIHtidXR0b25zfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiY2xhc3NlcyIsIkFjdGlvbnMiLCJPcHRpb25zIiwiY3VycmVudFJvdW5kSW5kZXgiLCJzdGF0ZSIsImN1cnJlbnRSb3VuZCIsInJvdW5kIiwicm91bmRzRGF0YSIsImJ1dHRvblZhbHVlcyIsImRhdGEiLCJtYXAiLCJiaXJkIiwic3BlY2llc190aXRsZXJ1IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYnV0dG9ucyIsImdldEJ1dHRvbnMiLCJjaGVja09wdGlvbiIsImV2ZW50IiwiaW5kZXgiLCJOdW1iZXIiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0eXBlIiwiU2V0QW5zd2VyIiwicGF5bG9hZCIsImNvcnJlY3RJbmRleCIsIkluY3JlbWVudFNjb3JlIiwidmFsdWUiLCJjbGFzc2VzTGlzdCIsIm9wdGlvbiIsImFuc3dlckluZGV4IiwicHVzaCIsImJsb2NrZWQiLCJjb3JyZWN0QW5zd2VyIiwiaW5jb3JyZWN0QW5zd2VyIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiam9pbiIsImluZCIsIm9uQ2xpY2siLCJkaXYiLCJvcHRpb25HcmlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});