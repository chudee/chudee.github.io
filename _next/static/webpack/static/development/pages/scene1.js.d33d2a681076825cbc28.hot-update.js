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


var NEXT_PAGE = 2800;
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

    if (scrollTop >= NEXT_PAGE) {
      router.push('/scene2');
    }
  }, [scrollTop]);

  var scrollHandler = function scrollHandler(event) {
    event.preventDefault();
    setScrollTop(document.scrollingElement ? document.scrollingElement.scrollTop : 0);
  };

  return __jsx("main", {
    className: "jsx-2051352917" + " " + 'Scene1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2051352917" + " " + 'scroll',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("article", {
    ref: ref,
    className: "jsx-2051352917" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2051352917" + " " + 'background',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2051352917",
    __self: this
  }, ".Scene1.jsx-2051352917{display:block;position:absolute;width:100%;height:4000px;overflow:auto;}.scroll.jsx-2051352917{position:fixed;width:1920px;height:1080px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-perspective:2160px;-moz-perspective:2160px;-ms-perspective:2160px;perspective:2160px;-webkit-transition:all 10s;transition:all 10s;}.wrapper.jsx-2051352917{width:1920px;height:1080px;position:absolute;-webkit-transform:translate3d(0,0,-2160px);-ms-transform:translate3d(0,0,-2160px);transform:translate3d(0,0,-2160px);top:0;left:0;background-size:cover;}.background.jsx-2051352917{position:absolute;top:-50%;left:-50%;width:3840px;height:2160px;background-image:url('/assets/imgs/intro/intro3840.jpg');background-position:center;background-repeat:no-repeat;background-size:contain;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHeUIsQUFPQyxBQVVGLEFBU0ssYUFSSixDQWpCSSxDQU9MLEdBbUJKLFNBUlMsQUFTUixDQW5CSSxJQVBILEtBMkJFLEtBbkJKLENBUEssRUFpQnVCLEtBVXZCLENBbkJOLE1BUEssRUFRbUIsS0FtQnlCLE9BMUIzRCxrREEyQjZCLDJCQUNDLGNBWnRCLEVBUmEsSUFTWixPQUNlLENBV0UscUJBVjFCLEdBV0EseURBckJxQiw4Q0FDckIiLCJmaWxlIjoiL1VzZXJzL2NodWRlZS93b3Jrc3BhY2UvanVoZWUtcG9ydGZvbGlvL3BhZ2VzL3NjZW5lMS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBORVhUX1BBR0UgPSAyODAwO1xuY29uc3QgUEVSU1BFQ1RJVkUgPSAtMjE2MDtcbmNvbnN0IERJVlNJT04gPSAxNTtcblxuY29uc3QgU2NlbmUxOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbFRvcCwgc2V0U2Nyb2xsVG9wXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcmVmOiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+ID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwgdHJ1ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICByZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdzdHlsZScsXG4gICAgICAgIGB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR7c2Nyb2xsVG9wIC8gRElWU0lPTn1weCwgJHtQRVJTUEVDVElWRSArIHNjcm9sbFRvcH1weClgXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmKHNjcm9sbFRvcCA+PSBORVhUX1BBR0UpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvc2NlbmUyJyk7XG4gICAgfVxuICB9LCBbc2Nyb2xsVG9wXSk7XG5cbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFNjcm9sbFRvcChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50ID8gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgOiAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nU2NlbmUxJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwnPlxuICAgICAgICA8YXJ0aWNsZSByZWY9e3JlZn0gIGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmQnLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuU2NlbmUxIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MDAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6YXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc2Nyb2xsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDE5MjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwODBweDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgcGVyc3BlY3RpdmU6IDIxNjBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTBzO1xuICAgICAgICB9XG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMTkyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTA4MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIC0yMTYwcHgpO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC01MCU7XG4gICAgICAgICAgbGVmdDogLTUwJTtcbiAgICAgICAgICB3aWR0aDogMzg0MHB4O1xuICAgICAgICAgIGhlaWdodDogMjE2MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2ludHJvL2ludHJvMzg0MC5qcGcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lMTtcbiJdfQ== */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene1.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene1);

/***/ })

})
//# sourceMappingURL=scene1.js.d33d2a681076825cbc28.hot-update.js.map