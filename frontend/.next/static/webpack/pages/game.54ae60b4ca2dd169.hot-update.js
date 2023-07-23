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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Options.module.css */ \"./components/game/UI/Options.module.css\");\n/* harmony import */ var _UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/game/store */ \"./components/game/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Options() {\n    _s();\n    const currentRoundIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentRound);\n    const round = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.roundsData[currentRoundIndex]);\n    const buttonValues = round.data.map((bird)=>bird.species_titleru);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    console.log(\"options\");\n    function checkOption(event) {\n        const index = Number(event.target.getAttribute(\"ind\"));\n        dispatch({\n            type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.SetAnswer,\n            payload: index\n        });\n        if (index === round.correctIndex) {\n            dispatch({\n                type: _components_game_store__WEBPACK_IMPORTED_MODULE_2__.Actions.IncrementScore\n            });\n        }\n    }\n    const buttons = buttonValues.map((value, index)=>{\n        let answerClasses = round.answerIndex ? \" \" + (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().blocked) : \" \";\n        if (round.answerIndex) {\n            if (index === round.correctIndex) {\n                answerClasses += \" \" + (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().correctAnswer);\n            } else if (index === round.answerIndex) {\n                answerClasses += \" \" + (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().incorrectAnswer);\n            }\n        }\n        answerClasses = \" \" + (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().option) + \" \" + answerClasses;\n        console.log(answerClasses);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: answerClasses,\n            ind: index,\n            onClick: checkOption,\n            children: value\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UI_Options_module_css__WEBPACK_IMPORTED_MODULE_3___default().optionGrid),\n            children: buttons\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kazan\\\\Desktop\\\\Practice\\\\frontend\\\\components\\\\game\\\\Options.jsx\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Options, \"u57Jjp1DvN7KBdSqrsRP2NhBAwQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Options;\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUVqQyxTQUFTSTs7SUFDcEIsTUFBTUMsb0JBQW9CSix3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWTtJQUNqRSxNQUFNQyxRQUFRUCx3REFBV0EsQ0FBQ0ssQ0FBQUEsUUFBU0EsTUFBTUcsVUFBVSxDQUFDSixrQkFBa0I7SUFDdEUsTUFBTUssZUFBZUYsTUFBTUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLGVBQWU7SUFDaEUsTUFBTUMsV0FBV2Ysd0RBQVdBO0lBQzVCZ0IsUUFBUUMsR0FBRyxDQUFDO0lBRVosU0FBU0MsWUFBWUMsS0FBSztRQUN0QixNQUFNQyxRQUFRQyxPQUFPRixNQUFNRyxNQUFNLENBQUNDLFlBQVksQ0FBQztRQUMvQ1IsU0FBUztZQUFDUyxNQUFNckIsMkRBQU9BLENBQUNzQixTQUFTO1lBQUVDLFNBQVNOO1FBQUs7UUFDakQsSUFBSUEsVUFBVVosTUFBTW1CLFlBQVksRUFBRTtZQUM5QlosU0FBUztnQkFBQ1MsTUFBTXJCLDJEQUFPQSxDQUFDeUIsY0FBYztZQUFBO1FBQzFDO0lBQ0o7SUFFQSxNQUFNQyxVQUFVbkIsYUFBYUUsR0FBRyxDQUFDLENBQUNrQixPQUFPVjtRQUNyQyxJQUFJVyxnQkFBZ0J2QixNQUFNd0IsV0FBVyxHQUFHLE1BQU05Qix1RUFBZSxHQUFHO1FBQ2hFLElBQUlNLE1BQU13QixXQUFXLEVBQUU7WUFDbkIsSUFBSVosVUFBVVosTUFBTW1CLFlBQVksRUFBRTtnQkFDOUJJLGlCQUFpQixNQUFNN0IsNkVBQXFCO1lBQ2hELE9BQU8sSUFBSWtCLFVBQVVaLE1BQU13QixXQUFXLEVBQUU7Z0JBQ3BDRCxpQkFBaUIsTUFBTTdCLCtFQUF1QjtZQUNsRDtRQUNKO1FBQ0E2QixnQkFBZ0IsTUFBTTdCLHNFQUFjLEdBQUcsTUFBTTZCO1FBQzdDZixRQUFRQyxHQUFHLENBQUNjO1FBQ1oscUJBQ0ksOERBQUNNO1lBQ0dDLFdBQVdQO1lBRVhRLEtBQUtuQjtZQUNMb0IsU0FBU3RCO3NCQUVSWTtXQUpJVjs7Ozs7SUFPakI7SUFDQSxxQkFDSTtrQkFDSSw0RUFBQ3FCO1lBQUlILFdBQVdwQywwRUFBa0I7c0JBQzdCMkI7Ozs7Ozs7QUFJakI7R0E1Q3dCekI7O1FBQ01ILG9EQUFXQTtRQUN2QkEsb0RBQVdBO1FBRVJELG9EQUFXQTs7O0tBSlJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25zLmpzeD9kMTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vVUkvT3B0aW9ucy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7QWN0aW9uc30gZnJvbSBcIkAvY29tcG9uZW50cy9nYW1lL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcHRpb25zKCkge1xyXG4gICAgY29uc3QgY3VycmVudFJvdW5kSW5kZXggPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jdXJyZW50Um91bmQpO1xyXG4gICAgY29uc3Qgcm91bmQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yb3VuZHNEYXRhW2N1cnJlbnRSb3VuZEluZGV4XSk7XHJcbiAgICBjb25zdCBidXR0b25WYWx1ZXMgPSByb3VuZC5kYXRhLm1hcChiaXJkID0+IGJpcmQuc3BlY2llc190aXRsZXJ1KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnNvbGUubG9nKCdvcHRpb25zJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tPcHRpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmQnKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuU2V0QW5zd2VyLCBwYXlsb2FkOiBpbmRleH0pXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSByb3VuZC5jb3JyZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFjdGlvbnMuSW5jcmVtZW50U2NvcmV9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b25zID0gYnV0dG9uVmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IGFuc3dlckNsYXNzZXMgPSByb3VuZC5hbnN3ZXJJbmRleCA/IFwiIFwiICsgY2xhc3Nlcy5ibG9ja2VkIDogXCIgXCI7XHJcbiAgICAgICAgaWYgKHJvdW5kLmFuc3dlckluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcm91bmQuY29ycmVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJDbGFzc2VzICs9IFwiIFwiICsgY2xhc3Nlcy5jb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSByb3VuZC5hbnN3ZXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYW5zd2VyQ2xhc3NlcyArPSBcIiBcIiArIGNsYXNzZXMuaW5jb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuc3dlckNsYXNzZXMgPSBcIiBcIiArIGNsYXNzZXMub3B0aW9uICsgXCIgXCIgKyBhbnN3ZXJDbGFzc2VzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFuc3dlckNsYXNzZXMpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthbnN3ZXJDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGluZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGVja09wdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vcHRpb25HcmlkfT5cclxuICAgICAgICAgICAgICAgIHtidXR0b25zfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiY2xhc3NlcyIsIkFjdGlvbnMiLCJPcHRpb25zIiwiY3VycmVudFJvdW5kSW5kZXgiLCJzdGF0ZSIsImN1cnJlbnRSb3VuZCIsInJvdW5kIiwicm91bmRzRGF0YSIsImJ1dHRvblZhbHVlcyIsImRhdGEiLCJtYXAiLCJiaXJkIiwic3BlY2llc190aXRsZXJ1IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiY2hlY2tPcHRpb24iLCJldmVudCIsImluZGV4IiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidHlwZSIsIlNldEFuc3dlciIsInBheWxvYWQiLCJjb3JyZWN0SW5kZXgiLCJJbmNyZW1lbnRTY29yZSIsImJ1dHRvbnMiLCJ2YWx1ZSIsImFuc3dlckNsYXNzZXMiLCJhbnN3ZXJJbmRleCIsImJsb2NrZWQiLCJjb3JyZWN0QW5zd2VyIiwiaW5jb3JyZWN0QW5zd2VyIiwib3B0aW9uIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiaW5kIiwib25DbGljayIsImRpdiIsIm9wdGlvbkdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/Options.jsx\n"));

/***/ })

});