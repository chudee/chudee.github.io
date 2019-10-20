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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener('scroll', scrollHandler, true);
    return function () {
      document.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);
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
    className: "jsx-2051352917" + " " + 'Scene1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2051352917" + " " + 'scroll',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("article", {
    ref: ref,
    className: "jsx-2051352917" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2051352917" + " " + 'background',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2051352917",
    __self: this
  }, ".Scene1.jsx-2051352917{display:block;position:absolute;width:100%;height:4000px;overflow:auto;}.scroll.jsx-2051352917{position:fixed;width:1920px;height:1080px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-perspective:2160px;-moz-perspective:2160px;-ms-perspective:2160px;perspective:2160px;-webkit-transition:all 10s;transition:all 10s;}.wrapper.jsx-2051352917{width:1920px;height:1080px;position:absolute;-webkit-transform:translate3d(0,0,-2160px);-ms-transform:translate3d(0,0,-2160px);transform:translate3d(0,0,-2160px);top:0;left:0;background-size:cover;}.background.jsx-2051352917{position:absolute;top:-50%;left:-50%;width:3840px;height:2160px;background-image:url('/assets/imgs/intro/intro3840.jpg');background-position:center;background-repeat:no-repeat;background-size:contain;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEa0IsQUFHeUIsQUFPQyxBQVVGLEFBU0ssYUFSSixDQWpCSSxDQU9MLEdBbUJKLFNBUlMsQUFTUixDQW5CSSxJQVBILEtBMkJFLEtBbkJKLENBUEssRUFpQnVCLEtBVXZCLENBbkJOLE1BUEssRUFRbUIsS0FtQnlCLE9BMUIzRCxrREEyQjZCLDJCQUNDLGNBWnRCLEVBUmEsSUFTWixPQUNlLENBV0UscUJBVjFCLEdBV0EseURBckJxQiw4Q0FDckIiLCJmaWxlIjoiL1VzZXJzL2NodWRlZS93b3Jrc3BhY2UvanVoZWUtcG9ydGZvbGlvL3BhZ2VzL3NjZW5lMS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBORVhUX1BBR0VfU0NST0xMX1RPUCA9IDI4MDA7XG5jb25zdCBQRVJTUEVDVElWRSA9IC0yMTYwO1xuY29uc3QgRElWU0lPTiA9IDE1O1xuXG5jb25zdCBTY2VuZTE6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2Nyb2xsVG9wLCBzZXRTY3JvbGxUb3BdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCByZWY6IFJlYWN0LlJlZjxIVE1MRGl2RWxlbWVudD4gPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyLCB0cnVlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyLCB0cnVlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgYHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHtzY3JvbGxUb3AgLyBESVZTSU9OfXB4LCAke1BFUlNQRUNUSVZFICsgc2Nyb2xsVG9wfXB4KWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYoc2Nyb2xsVG9wID49IE5FWFRfUEFHRV9TQ1JPTExfVE9QKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL3NjZW5lMicpO1xuICAgIH1cbiAgfSwgW3Njcm9sbFRvcF0pO1xuXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCkge1xuICAgICAgc2V0U2Nyb2xsVG9wKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J1NjZW5lMSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsJz5cbiAgICAgICAgPGFydGljbGUgcmVmPXtyZWZ9ICBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kJy8+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlNjZW5lMSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDAwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OmF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnNjcm9sbCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHdpZHRoOiAxOTIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDgwcHg7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHBlcnNwZWN0aXZlOiAyMTYwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwcztcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDE5MjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwODBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAtMjE2MHB4KTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNTAlO1xuICAgICAgICAgIGxlZnQ6IC01MCU7XG4gICAgICAgICAgd2lkdGg6IDM4NDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIxNjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9pbnRyby9pbnRybzM4NDAuanBnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTE7XG4iXX0= */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene1.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene1);

/***/ })

})
//# sourceMappingURL=scene1.js.dbc1138dcd54bd66bd78.hot-update.js.map