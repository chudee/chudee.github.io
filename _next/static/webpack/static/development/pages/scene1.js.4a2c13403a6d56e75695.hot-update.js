webpackHotUpdate("static/development/pages/scene1.js",{

/***/ "./pages/scene1.tsx":
/*!**************************!*\
  !*** ./pages/scene1.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/chudee/workspace/juhee-portfolio/pages/scene1.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var NEXT_PAGE_SCROLL_TOP = 2800;
var PERSPECTIVE = -2160;
var DIVSION = 15;

var Scene1 = function Scene1() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      scrollTop = _useState[0],
      setScrollTop = _useState[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // Component Did Mount

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener('scroll', scrollHandler, true); // Component Did Unmount

    return function () {
      document.removeEventListener('scroll', scrollHandler, true);
    };
  }, []); // Component Did Update

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (ref.current) {
      ref.current.setAttribute('style', "transform: translate3d(0, ".concat(scrollTop / DIVSION, "px, ").concat(PERSPECTIVE + scrollTop, "px)"));
    }

    if (scrollTop >= NEXT_PAGE_SCROLL_TOP) {
      router.push('/scene2');
    }
  }, [scrollTop]);

  var scrollHandler = function scrollHandler(event) {
    event.preventDefault();

    if (document.scrollingElement) {
      setScrollTop(document.scrollingElement.scrollTop);
    }
  };

  return __jsx("main", {
    className: "jsx-2286148388" + " " + 'Scene1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2286148388" + " " + 'scroll',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("article", {
    ref: ref,
    className: "jsx-2286148388" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2286148388" + " " + 'background',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2286148388",
    __self: this
  }, ".Scene1.jsx-2286148388{display:block;position:absolute;width:100%;height:4000px;overflow:auto;}.scroll.jsx-2286148388{position:fixed;width:1920px;height:1080px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-perspective:2160px;-moz-perspective:2160px;-ms-perspective:2160px;perspective:2160px;-webkit-transition:all 10s;transition:all 10s;}.wrapper.jsx-2286148388{width:1920px;height:1080px;position:absolute;-webkit-transform:translate3d(0,0,-2160px);-ms-transform:translate3d(0,0,-2160px);transform:translate3d(0,0,-2160px);top:0;left:0;background-size:cover;}.background.jsx-2286148388{position:absolute;top:-50%;left:-50%;width:3840px;height:2160px;background-image:url('/assets/imgs/intro/background@2x.jpg');background-position:center;background-repeat:no-repeat;background-size:contain;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ea0IsQUFHeUIsQUFPQyxBQVVGLEFBU0ssYUFSSixDQWpCSSxDQU9MLEdBbUJKLFNBUlMsQUFTUixDQW5CSSxJQVBILEtBMkJFLEtBbkJKLENBUEssRUFpQnVCLEtBVXZCLENBbkJOLE1BUEssRUFRbUIsS0FtQjZCLE9BMUIvRCxzREEyQjZCLDJCQUNDLFVBWnRCLEVBUmEsSUFTWixPQUNlLEtBV0UsaUJBVjFCLE9BV0EscURBckJxQiw4Q0FDckIiLCJmaWxlIjoiL1VzZXJzL2NodWRlZS93b3Jrc3BhY2UvanVoZWUtcG9ydGZvbGlvL3BhZ2VzL3NjZW5lMS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBORVhUX1BBR0VfU0NST0xMX1RPUCA9IDI4MDA7XG5jb25zdCBQRVJTUEVDVElWRSA9IC0yMTYwO1xuY29uc3QgRElWU0lPTiA9IDE1O1xuXG5jb25zdCBTY2VuZTE6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2Nyb2xsVG9wLCBzZXRTY3JvbGxUb3BdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHJlZjogUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gQ29tcG9uZW50IERpZCBNb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIsIHRydWUpO1xuXG4gICAgLy8gQ29tcG9uZW50IERpZCBVbm1vdW50XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIsIHRydWUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBDb21wb25lbnQgRGlkIFVwZGF0ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgcmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAnc3R5bGUnLFxuICAgICAgICBgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke3Njcm9sbFRvcCAvIERJVlNJT059cHgsICR7UEVSU1BFQ1RJVkUgKyBzY3JvbGxUb3B9cHgpYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZihzY3JvbGxUb3AgPj0gTkVYVF9QQUdFX1NDUk9MTF9UT1ApIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvc2NlbmUyJyk7XG4gICAgfVxuICB9LCBbc2Nyb2xsVG9wXSk7XG5cbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICAgIHNldFNjcm9sbFRvcChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdTY2VuZTEnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbCc+XG4gICAgICAgIDxhcnRpY2xlIHJlZj17cmVmfSAgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZCcvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuU2NlbmUxIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MDAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6YXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc2Nyb2xsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDE5MjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwODBweDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgcGVyc3BlY3RpdmU6IDIxNjBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTBzO1xuICAgICAgICB9XG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMTkyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTA4MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIC0yMTYwcHgpO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC01MCU7XG4gICAgICAgICAgbGVmdDogLTUwJTtcbiAgICAgICAgICB3aWR0aDogMzg0MHB4O1xuICAgICAgICAgIGhlaWdodDogMjE2MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2ludHJvL2JhY2tncm91bmRAMnguanBnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTE7XG4iXX0= */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene1.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene1);

/***/ })

})
//# sourceMappingURL=scene1.js.4a2c13403a6d56e75695.hot-update.js.map