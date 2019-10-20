webpackHotUpdate("static/development/pages/scene3.js",{

/***/ "./pages/scene3.tsx":
/*!**************************!*\
  !*** ./pages/scene3.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/chudee/workspace/juhee-portfolio/pages/scene3.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Scene3 = function Scene3() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var imgs = document.querySelector('img');

    if (imgs) {
      imgs.addEventListener('mouseover', mouseOverHandler, true);
      imgs.addEventListener('mouseleave', mouseLeaveHandler, true);
    }

    return function () {
      if (imgs) {
        imgs.removeEventListener('mouseover', mouseOverHandler, true);
        imgs.removeEventListener('mouseleave', mouseLeaveHandler, true);
      }
    };
  }, []);

  var mouseOverHandler = function mouseOverHandler(e) {
    e.preventDefault();
    var img = e.target;
    img.setAttribute('data-src', img.src);
    img.setAttribute('src', img.dataset['mouseover']);
  };

  var mouseLeaveHandler = function mouseLeaveHandler(e) {
    e.preventDefault();
    var img = e.target;
    img.setAttribute('data-mouseover', img.src);
    img.setAttribute('src', img.dataset['src']);
  };

  return __jsx("main", {
    className: "jsx-3214475012" + " " + 'Scene3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: "/assets/imgs/in/refrigerator/strawberry-milk.png",
    style: {
      top: '416px',
      left: '312px'
    },
    "data-mouseover": "/assets/imgs/in/mouseover/strawberry-milk.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3214475012",
    __self: this
  }, ".Scene3.jsx-3214475012{display:block;position:fixed;width:1920px;height:980px;background-image:url('/assets/imgs/in/background.png');background-repeat:no-repeat;background-size:contain;background-position:center;}.icon.jsx-3214475012{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;heigth:-webkit-fit-content;heigth:-moz-fit-content;heigth:fit-content;object-fit:contain;object-position:center;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFHeUIsQUFVSSxjQVRILElBVUcsV0FUTCxhQUNBLGFBQzBDLDhCQVFwQyx5QkFQUyw0QkFDSixpQkFPTCxPQU5RLFlBT0osZUFOekIsUUFPaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2NodWRlZS93b3Jrc3BhY2UvanVoZWUtcG9ydGZvbGlvL3BhZ2VzL3NjZW5lMy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY2VuZTM6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG4gICAgaWYgKGltZ3MpIHtcbiAgICAgIGltZ3MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlciwgdHJ1ZSk7XG4gICAgICBpbWdzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtb3VzZUxlYXZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChpbWdzKSB7XG4gICAgICAgIGltZ3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGltZ3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG1vdXNlTGVhdmVIYW5kbGVyLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBtb3VzZU92ZXJIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW1nID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJywgaW1nLnNyYyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmRhdGFzZXRbJ21vdXNlb3ZlciddISk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VMZWF2ZUhhbmRsZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbWcgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1tb3VzZW92ZXInLCBpbWcuc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuZGF0YXNldFsnc3JjJ10hKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nU2NlbmUzJz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivc3RyYXdiZXJyeS1taWxrLnBuZycgc3R5bGU9e3sgdG9wOiAnNDE2cHgnLCBsZWZ0OiAnMzEycHgnIH19IGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3N0cmF3YmVycnktbWlsay5wbmcnIC8+XG4gICAgICB7Lyo8aW1nIGNsYXNzTmFtZT0naWNvbicgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2JsdWUtbWlsay5wbmcnIHN0eWxlPXt7IHRvcDogJzQxM3B4JywgbGVmdDogJzU1MnB4JyB9fSBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSAvPiovfVxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9zcHJpdGUucG5nJyBzdHlsZT17eyB0b3A6ICc1NDZweCcsIGxlZnQ6ICczMjBweCcgfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cbiAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3IvY29rZS5wbmcnIHN0eWxlPXt7IHRvcDogJzU0OHB4JywgbGVmdDogJzU1NXB4JyB9fSBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSAvPiovfVxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci93YXRlci5wbmcnIHN0eWxlPXt7IHRvcDogJzcwMXB4JywgbGVmdDogJzQ0OXB4JyB9fSBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSAvPiovfVxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci93YXRlci5wbmcnIHN0eWxlPXt7IHRvcDogJzcwMXB4JywgbGVmdDogJzU1MnB4JyB9fSBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSAvPiovfVxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9kb29yLnBuZycgc3R5bGU9e3sgdG9wOiAnMjQ2cHgnLCBsZWZ0OiAnMjg4cHgnIH19IG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9IC8+Ki99XG4gICAgICB7Lyo8aW1nIGNsYXNzTmFtZT0naWNvbicgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2Rvb3IucG5nJyBzdHlsZT17eyB0b3A6ICcyNDZweCcsIGxlZnQ6ICc1MjdweCcgfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cbiAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3R0ZW9rYm9ra2kucG5nJyBzdHlsZT17eyB0b3A6ICcyMDdweCcsIGxlZnQ6ICcxMTg1cHgnIH19IG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9IC8+Ki99XG4gICAgICB7Lyo8aW1nIGNsYXNzTmFtZT0naWNvbicgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9uZW1vbmkucG5nJyBzdHlsZT17eyB0b3A6ICc3MDlweCcsIGxlZnQ6ICc4MThweCcgfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cbiAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL2Rvb25nLnBuZycgc3R5bGU9e3sgdG9wOiAnMzkxcHgnLCBsZWZ0OiAnMTE5NnB4J319IG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9IC8+Ki99XG4gICAgICB7Lyo8aW1nIGNsYXNzTmFtZT0naWNvbicgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9jcmVhbS1icmVhZC5wbmcnIHN0eWxlPXt7IHRvcDogJzQ3NXB4JywgbGVmdDogJzgxOHB4JyB9fSBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSAvPiovfVxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvcmVkLWJlYW4tYnJlYWQucG5nJyBzdHlsZT17eyB0b3A6ICc0NzVweCcsIGxlZnQ6ICc5NzZweCd9fSBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSAvPiovfVxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvdGliaXNrZXQucG5nJyBzdHlsZT17eyB0b3A6ICczMDRweCcsIGxlZnQ6ICc4NDlweCcgfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuU2NlbmUzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDE5MjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDk4MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2luL2JhY2tncm91bmQucG5nJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGhlaWd0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG5cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApXG59O1xuICAgICAgXG5leHBvcnQgZGVmYXVsdCBTY2VuZTM7XG4iXX0= */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene3.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene3);

/***/ })

})
//# sourceMappingURL=scene3.js.4940210f2fa649b65824.hot-update.js.map