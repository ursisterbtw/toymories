webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\Users\\kjako\\OneDrive\\Desktop\\web dev\\toymories dump\\site layouts\\nextjs_landing_page\\src\\components\\header\\mobile-drawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var social = [{
  id: 1,
  name: "twitter",
  path: "https://twitter.com/ToyMories",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })
}, {
  id: 2,
  name: "discord",
  path: "https://discord.gg/Y9uZjWjdya",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaDiscord"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  })
}];
function MobileDrawer() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDrawerOpen = _useState[0],
      setIsDrawerOpen = _useState[1];

  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdMenu"], {
      size: "26px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    })),
    open: isDrawerOpen,
    toggleHandler: function toggleHandler() {
      return setIsDrawerOpen(function (prevState) {
        return !prevState;
      });
    },
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdClose"], {
      size: "24px",
      color: "#000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (menuItem, i) {
    return __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      activeClass: "active",
      to: menuItem.path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, menuItem.label);
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, social.map(function (socialItem, i) {
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "span",
      key: i,
      sx: styles.social.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      onClick: true,
      key: socialItem.id,
      href: socialItem.path,
      className: socialItem.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, socialItem.icon));
  }))))));
}

_s(MobileDrawer, "t28cAGpFqiK0sX63aU+U7uaWhmM=");

_c = MobileDrawer;

var openInNewTab = function openInNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
};

var styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    "@media screen and (min-width: 1024px)": {
      display: "none"
    }
  },
  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "dark"
  },
  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer"
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px"
  },
  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "secondary"
      },
      "&.active": {
        color: "secondary"
      }
    }
  },
  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    mt: "auto"
  },
  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 36,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0"
      },
      "&:hover": {
        color: "secondary"
      }
    }
  },
  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0"
  }
};

var _c;

$RefreshReg$(_c, "MobileDrawer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwiaWQiLCJuYW1lIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VTdGF0ZSIsImlzRHJhd2VyT3BlbiIsInNldElzRHJhd2VyT3BlbiIsInN0eWxlcyIsImhhbmRsZXIiLCJwcmV2U3RhdGUiLCJkcmF3ZXIiLCJjbG9zZSIsImNvbnRlbnQiLCJtZW51IiwibWVudUl0ZW1zIiwibWFwIiwibWVudUl0ZW0iLCJpIiwibGFiZWwiLCJtZW51Rm9vdGVyIiwic29jaWFsSXRlbSIsIm9wZW5Jbk5ld1RhYiIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFNocmluayIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImN1cnNvciIsImZsZXhEaXJlY3Rpb24iLCJwdCIsInBiIiwicHgiLCJhIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJweSIsImJvcmRlckJvdHRvbSIsInRyYW5zaXRpb24iLCJtdCIsIm1yIiwiYnV0dG9uIiwiZnciLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsU0FGUjtBQUdFQyxNQUFJLEVBQUUsK0JBSFI7QUFJRUMsTUFBSSxFQUFFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSLENBRGEsRUFPYjtBQUNFSCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxN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RU5GLFlBQVEsRUFBRSxNQUZKO0FBR05TLE1BQUUsRUFBRSxLQUhFO0FBSU5yQixVQUFNLEVBQUUsTUFKRjtBQUtOc0IsZ0JBQVksRUFBRSxLQUxSO0FBTU5oQixVQUFNLEVBQUUsU0FORjtBQU9OUCxTQUFLLEVBQUUsTUFQRDtBQVFOSixXQUFPLEVBQUUsTUFSSDtBQVNOQyxjQUFVLEVBQUUsUUFUTjtBQVVOQyxrQkFBYyxFQUFFLFFBVlY7QUFXTmtCLE1BQUUsRUFBRTtBQVhFO0FBN0ZLLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGMyYWE4YzdjYzExMzk4MzA2N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCI7XG5pbXBvcnQgRHJhd2VyIGZyb20gXCJjb21wb25lbnRzL2RyYXdlclwiO1xuaW1wb3J0IHsgSW9NZENsb3NlLCBJb01kTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcbmltcG9ydCB7XG4gIEZhRmFjZWJvb2tGLFxuICBGYVR3aXR0ZXIsXG4gIEZhR2l0aHViQWx0LFxuICBGYURyaWJiYmxlLFxuICBGYURpc2NvcmQsXG4gIEZhSW5zdGFncmFtLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vaGVhZGVyLmRhdGFcIjtcblxuY29uc3Qgc29jaWFsID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJ0d2l0dGVyXCIsXG4gICAgcGF0aDogXCJodHRwczovL3R3aXR0ZXIuY29tL1RveU1vcmllc1wiLFxuICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcImRpc2NvcmRcIixcbiAgICBwYXRoOiBcImh0dHBzOi8vZGlzY29yZC5nZy9ZOXVaaldqZHlhXCIsXG4gICAgaWNvbjogPEZhRGlzY29yZCAvPixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZURyYXdlcigpIHtcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGFuZGxlcn0+XG4gICAgICAgICAgPElvTWRNZW51IHNpemU9XCIyNnB4XCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICB9XG4gICAgICBvcGVuPXtpc0RyYXdlck9wZW59XG4gICAgICB0b2dnbGVIYW5kbGVyPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSl9XG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwMDAwMFwiIC8+fVxuICAgICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XG4gICAgPlxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgobWVudUl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgdG89e21lbnVJdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttZW51SXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnVGb290ZXJ9PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XG4gICAgICAgICAgICAgIHtzb2NpYWwubWFwKChzb2NpYWxJdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBrZXk9e2l9IHN4PXtzdHlsZXMuc29jaWFsLmljb259PlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzb2NpYWxJdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtzb2NpYWxJdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c29jaWFsSXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c29jaWFsSXRlbS5pY29ufVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2Nyb2xsYmFycz5cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn1cblxuY29uc3Qgb3BlbkluTmV3VGFiID0gKHVybCkgPT4ge1xuICB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIsIFwibm9vcGVuZXIsbm9yZWZlcnJlclwiKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGFuZGxlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZmxleFNocmluazogXCIwXCIsXG4gICAgd2lkdGg6IFwiMjZweFwiLFxuXG4gICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpXCI6IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgZHJhd2VyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImRhcmtcIixcbiAgfSxcblxuICBjbG9zZToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiMjVweFwiLFxuICAgIHJpZ2h0OiBcIjMwcHhcIixcbiAgICB6SW5kZXg6IFwiMVwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIH0sXG5cbiAgY29udGVudDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgcHQ6IFwiMTAwcHhcIixcbiAgICBwYjogXCI0MHB4XCIsXG4gICAgcHg6IFwiMzBweFwiLFxuICB9LFxuXG4gIG1lbnU6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgY29sb3I6IFwidGV4dF93aGl0ZVwiLFxuICAgICAgcHk6IFwiMTVweFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2U4ZTVlNVwiLFxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxuICAgICAgfSxcbiAgICAgIFwiJi5hY3RpdmVcIjoge1xuICAgICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBtZW51Rm9vdGVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtdDogXCJhdXRvXCIsXG4gIH0sXG5cbiAgc29jaWFsOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cbiAgICBpY29uOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIGNvbG9yOiBcInRleHRcIixcbiAgICAgIGZvbnRTaXplOiAzNixcbiAgICAgIG1yOiBcIjE1cHhcIixcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgXCI6bGFzdC1jaGlsZFwiOiB7XG4gICAgICAgIG1yOiBcIjBcIixcbiAgICAgIH0sXG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBidXR0b246IHtcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBmdzogXCI3MDBcIixcbiAgICBoZWlnaHQ6IFwiNDVweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHB5OiBcIjBcIixcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9