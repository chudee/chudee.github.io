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
    return function () {
      document.removeEventListener('scroll');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    ref.current && ref.current.setAttribute('style', "transform: translate3d(0, ".concat(scrollTop / DIVSION, "px, ").concat(PERSPECTIVE + scrollTop, "px)"));

    if (scrollTop >= NEXT_PAGE) {
      router.push('/scene2');
    }

    return;
  }, [scrollTop]);

  var scroll = function scroll() {
    document.addEventListener('scroll', function (event) {
      event.preventDefault();
      setScrollTop(document.scrollingElement ? document.scrollingElement.scrollTop : 0);
    }, true);
  };

  return __jsx("main", {
    className: "jsx-2051352917" + " " + 'Scene1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2051352917" + " " + 'scroll',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("article", {
    ref: ref,
    className: "jsx-2051352917" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2051352917" + " " + 'background',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2051352917",
    __self: this
  }, ".Scene1.jsx-2051352917{display:block;position:absolute;width:100%;height:4000px;overflow:auto;}.scroll.jsx-2051352917{position:fixed;width:1920px;height:1080px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-perspective:2160px;-moz-perspective:2160px;-ms-perspective:2160px;perspective:2160px;-webkit-transition:all 10s;transition:all 10s;}.wrapper.jsx-2051352917{width:1920px;height:1080px;position:absolute;-webkit-transform:translate3d(0,0,-2160px);-ms-transform:translate3d(0,0,-2160px);transform:translate3d(0,0,-2160px);top:0;left:0;background-size:cover;}.background.jsx-2051352917{position:absolute;top:-50%;left:-50%;width:3840px;height:2160px;background-image:url('/assets/imgs/intro/intro3840.jpg');background-position:center;background-repeat:no-repeat;background-size:contain;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEa0IsQUFHeUIsQUFPQyxBQVVGLEFBU0ssYUFSSixDQWpCSSxDQU9MLEdBbUJKLFNBUlMsQUFTUixDQW5CSSxJQVBILEtBMkJFLEtBbkJKLENBUEssRUFpQnVCLEtBVXZCLENBbkJOLE1BUEssRUFRbUIsS0FtQnlCLE9BMUIzRCxrREEyQjZCLDJCQUNDLGNBWnRCLEVBUmEsSUFTWixPQUNlLENBV0UscUJBVjFCLEdBV0EseURBckJxQiw4Q0FDckIiLCJmaWxlIjoiL1VzZXJzL2NodWRlZS93b3Jrc3BhY2UvanVoZWUtcG9ydGZvbGlvL3BhZ2VzL3NjZW5lMS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBORVhUX1BBR0UgPSAyODAwO1xuY29uc3QgUEVSU1BFQ1RJVkUgPSAtMjE2MDtcbmNvbnN0IERJVlNJT04gPSAxNTtcblxuY29uc3QgU2NlbmUxOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbFRvcCwgc2V0U2Nyb2xsVG9wXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcmVmOiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+ID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2Nyb2xsKCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ICYmIHJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICdzdHlsZScsXG4gICAgICBgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke3Njcm9sbFRvcCAvIERJVlNJT059cHgsICR7UEVSU1BFQ1RJVkUgKyBzY3JvbGxUb3B9cHgpYFxuICAgICk7XG5cbiAgICBpZihzY3JvbGxUb3AgPj0gTkVYVF9QQUdFKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL3NjZW5lMicpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSwgW3Njcm9sbFRvcF0pO1xuXG4gIGNvbnN0IHNjcm9sbCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0U2Nyb2xsVG9wKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgPyBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA6IDApO1xuICAgIH0sIHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdTY2VuZTEnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbCc+XG4gICAgICAgIDxhcnRpY2xlIHJlZj17cmVmfSAgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZCcvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5TY2VuZTEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQwMDBweDtcbiAgICAgICAgICBvdmVyZmxvdzphdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5zY3JvbGwge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB3aWR0aDogMTkyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTA4MHB4O1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogMjE2MHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxMHM7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAxOTIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDgwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgLTIxNjBweCk7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTUwJTtcbiAgICAgICAgICBsZWZ0OiAtNTAlO1xuICAgICAgICAgIHdpZHRoOiAzODQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMTYwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvaW50cm8vaW50cm8zODQwLmpwZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmUxO1xuIl19 */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene1.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene1);

/***/ })

})
//# sourceMappingURL=scene1.js.a3e312b8c092cd3d0aef.hot-update.js.map