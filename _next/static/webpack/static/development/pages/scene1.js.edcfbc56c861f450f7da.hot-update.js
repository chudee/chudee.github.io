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
    scroll();
  }, []);

  var scroll = function scroll() {
    document.addEventListener('scroll', function (event) {
      event.preventDefault();
      setScrollTop(document.scrollingElement ? document.scrollingElement.scrollTop : 0); // const scrollTop = ;

      console.log(scrollTop); // TODO change useState

      ref.current && ref.current.setAttribute('style', "transform: translate3d(0, ".concat(scrollTop / DIVSION, "px, ").concat(PERSPECTIVE + scrollTop, "px)"));

      if (scrollTop >= NEXT_PAGE) {
        router.push('/scene2');
      }
    }, true);
  };

  return __jsx("main", {
    className: "jsx-2051352917" + " " + 'Scene1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2051352917" + " " + 'scroll',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("article", {
    ref: ref,
    className: "jsx-2051352917" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2051352917" + " " + 'background',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2051352917",
    __self: this
  }, ".Scene1.jsx-2051352917{display:block;position:absolute;width:100%;height:4000px;overflow:auto;}.scroll.jsx-2051352917{position:fixed;width:1920px;height:1080px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-perspective:2160px;-moz-perspective:2160px;-ms-perspective:2160px;perspective:2160px;-webkit-transition:all 10s;transition:all 10s;}.wrapper.jsx-2051352917{width:1920px;height:1080px;position:absolute;-webkit-transform:translate3d(0,0,-2160px);-ms-transform:translate3d(0,0,-2160px);transform:translate3d(0,0,-2160px);top:0;left:0;background-size:cover;}.background.jsx-2051352917{position:absolute;top:-50%;left:-50%;width:3840px;height:2160px;background-image:url('/assets/imgs/intro/intro3840.jpg');background-position:center;background-repeat:no-repeat;background-size:contain;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFHeUIsQUFPQyxBQVVGLEFBU0ssYUFSSixDQWpCSSxDQU9MLEdBbUJKLFNBUlMsQUFTUixDQW5CSSxJQVBILEtBMkJFLEtBbkJKLENBUEssRUFpQnVCLEtBVXZCLENBbkJOLE1BUEssRUFRbUIsS0FtQnlCLE9BMUIzRCxrREEyQjZCLDJCQUNDLGNBWnRCLEVBUmEsSUFTWixPQUNlLENBV0UscUJBVjFCLEdBV0EseURBckJxQiw4Q0FDckIiLCJmaWxlIjoiL1VzZXJzL2NodWRlZS93b3Jrc3BhY2UvanVoZWUtcG9ydGZvbGlvL3BhZ2VzL3NjZW5lMS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBORVhUX1BBR0UgPSAyODAwO1xuY29uc3QgUEVSU1BFQ1RJVkUgPSAtMjE2MDtcbmNvbnN0IERJVlNJT04gPSAxNTtcblxuY29uc3QgU2NlbmUxOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbFRvcCwgc2V0U2Nyb2xsVG9wXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcmVmOiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+ID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2Nyb2xsKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGwgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKGV2ZW50OiBFdmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldFNjcm9sbFRvcChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50ID8gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgOiAwKTtcbiAgICAgIC8vIGNvbnN0IHNjcm9sbFRvcCA9IDtcblxuICAgICAgY29uc29sZS5sb2coc2Nyb2xsVG9wKTtcbiAgICAgIC8vIFRPRE8gY2hhbmdlIHVzZVN0YXRlXG4gICAgICByZWYuY3VycmVudCAmJiByZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdzdHlsZScsXG4gICAgICAgIGB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR7c2Nyb2xsVG9wIC8gRElWU0lPTn1weCwgJHtQRVJTUEVDVElWRSArIHNjcm9sbFRvcH1weClgXG4gICAgICApO1xuXG4gICAgICBpZihzY3JvbGxUb3AgPj0gTkVYVF9QQUdFKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvc2NlbmUyJyk7XG4gICAgICB9XG4gICAgfSwgdHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J1NjZW5lMSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsJz5cbiAgICAgICAgPGFydGljbGUgcmVmPXtyZWZ9ICBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kJy8+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlNjZW5lMSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDAwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OmF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnNjcm9sbCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHdpZHRoOiAxOTIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDgwcHg7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHBlcnNwZWN0aXZlOiAyMTYwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwcztcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDE5MjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwODBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAtMjE2MHB4KTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNTAlO1xuICAgICAgICAgIGxlZnQ6IC01MCU7XG4gICAgICAgICAgd2lkdGg6IDM4NDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIxNjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9pbnRyby9pbnRybzM4NDAuanBnJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTE7XG4iXX0= */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene1.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene1);

/***/ })

})
//# sourceMappingURL=scene1.js.edcfbc56c861f450f7da.hot-update.js.map