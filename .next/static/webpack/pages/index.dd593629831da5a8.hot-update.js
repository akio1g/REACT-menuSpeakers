"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withAuth */ \"./src/components/withAuth.jsx\");\n\n\n\nfunction Header(param) {\n    var login = param.login, setLogin = param.setLogin;\n    var Login = function Login(param) {\n        var login = param.login, setLogin = param.setLogin;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: [\n                        \"Hello \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: login\n                        }, void 0, false, {\n                            fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n                            lineNumber: 9,\n                            columnNumber: 27\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        setLogin(\"\");\n                    },\n                    children: \"Log Out\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    };\n    var LogOut = function LogOut(param) {\n        var login = param.login, setLogin = param.setLogin;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function(e) {\n                e.preventDefault();\n                var username = window.prompt(\"Enter Login:\", \"\");\n                setLogin(username);\n            },\n            children: \"Log In\"\n        }, void 0, false, {\n            fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"./images/SVCClogo.png\",\n                alt: \"SVCC Logo\"\n            }, void 0, false, {\n                fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Silicon Valley Code Camp\"\n            }, void 0, false, {\n                fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: login ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Login, {\n                    login: login,\n                    setLogin: setLogin\n                }, void 0, false, {\n                    fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogOut, {\n                    login: login,\n                    setLogin: setLogin\n                }, void 0, false, {\n                    fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\ws-orange-practice\\\\Practicing-REACT\\\\next-menu-speakers\\\\src\\\\components\\\\Header.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Header));\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQTBCO0FBQ1E7QUFFbEMsU0FBU0UsTUFBTSxDQUFDLEtBQW1CLEVBQUU7UUFBbkJDLEtBQUssR0FBUCxLQUFtQixDQUFqQkEsS0FBSyxFQUFFQyxRQUFRLEdBQWpCLEtBQW1CLENBQVZBLFFBQVE7UUFFcEJDLEtBQUssR0FBZCxTQUFTQSxLQUFLLENBQUMsS0FBbUIsRUFBRTtZQUFuQkYsS0FBSyxHQUFQLEtBQW1CLENBQWpCQSxLQUFLLEVBQUVDLFFBQVEsR0FBakIsS0FBbUIsQ0FBVkEsUUFBUTtRQUM1QixxQkFDSTs7OEJBQ0ksOERBQUNFLElBQUU7O3dCQUFDLFFBQU07c0NBQUEsOERBQUNDLE1BQUk7c0NBQUVKLEtBQUs7Ozs7O2dDQUFROzs7Ozs7d0JBQUs7OEJBQ25DLDhEQUFDSyxRQUFNO29CQUNIQyxPQUFPLEVBQUUsV0FBTTt3QkFDWEwsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNqQixDQUFDOzhCQUNDLFNBRU47Ozs7O3dCQUFTOzt3QkFDVixDQUVOO0lBQ0wsQ0FBQztRQUVRTSxNQUFNLEdBQWYsU0FBU0EsTUFBTSxDQUFDLEtBQW1CLEVBQUU7WUFBbkJQLEtBQUssR0FBUCxLQUFtQixDQUFqQkEsS0FBSyxFQUFFQyxRQUFRLEdBQWpCLEtBQW1CLENBQVZBLFFBQVE7UUFDN0IscUJBQ0ksOERBQUNJLFFBQU07WUFBQ0MsT0FBTyxFQUFFLFNBQUNFLENBQUMsRUFBSztnQkFDcEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLElBQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztnQkFDbERYLFFBQVEsQ0FBQ1MsUUFBUSxDQUFDLENBQUM7WUFDdkIsQ0FBQztzQkFBRSxRQUFNOzs7OztnQkFBUyxDQUNyQjtJQUNMLENBQUM7SUFFRCxxQkFDSSw4REFBQ0csUUFBTTs7MEJBQ0gsOERBQUNDLEtBQUc7Z0JBQUNDLEdBQUcsRUFBQyx1QkFBdUI7Z0JBQUNDLEdBQUcsRUFBQyxXQUFXOzs7OztvQkFBRzswQkFDbkQsOERBQUNDLElBQUU7MEJBQUMsMEJBQXdCOzs7OztvQkFBSzswQkFDakMsOERBQUNDLEtBQUc7MEJBQ0NsQixLQUFLLGlCQUNGLDhEQUFDRSxLQUFLO29CQUFDRixLQUFLLEVBQUVBLEtBQUs7b0JBQUVDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7d0JBQUksaUJBQzNDLDhEQUFDTSxNQUFNO29CQUFDUCxLQUFLLEVBQUVBLEtBQUs7b0JBQUVDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7d0JBQUk7Ozs7O29CQUU5Qzs7Ozs7O1lBQ0QsQ0FDWjtBQUNMLENBQUM7QUF4Q1FGLEtBQUFBLE1BQU07QUEwQ2YsK0RBQWVELE1BQUFBLHFEQUFRLENBQUNDLE1BQU0sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3g/M2NiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi93aXRoQXV0aCc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyBsb2dpbiwgc2V0TG9naW4gfSkge1xyXG5cclxuICAgIGZ1bmN0aW9uIExvZ2luKHsgbG9naW4sIHNldExvZ2luIH0pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGg0PkhlbGxvIDxzcGFuPntsb2dpbn08L3NwYW4+PC9oND5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIExvZ091dCh7IGxvZ2luLCBzZXRMb2dpbiB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgTG9naW46XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9naW4odXNlcm5hbWUpO1xyXG4gICAgICAgICAgICB9fT5Mb2cgSW48L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL1NWQ0Nsb2dvLnBuZ1wiIGFsdD1cIlNWQ0MgTG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxoMT5TaWxpY29uIFZhbGxleSBDb2RlIENhbXA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2xvZ2luID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luIGxvZ2luPXtsb2dpbn0gc2V0TG9naW49e3NldExvZ2lufSAvPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dPdXQgbG9naW49e2xvZ2lufSBzZXRMb2dpbj17c2V0TG9naW59IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChIZWFkZXIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhBdXRoIiwiSGVhZGVyIiwibG9naW4iLCJzZXRMb2dpbiIsIkxvZ2luIiwiaDQiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsIkxvZ091dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJuYW1lIiwid2luZG93IiwicHJvbXB0IiwiaGVhZGVyIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.jsx\n"));

/***/ })

});