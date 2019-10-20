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
    style: {
      top: '416px',
      left: '312px'
    },
    src: "/assets/imgs/in/refrigerator/strawberry-milk.png",
    "data-mouseover": "/assets/imgs/in/mouseover/strawberry-milk.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '413px',
      left: '552px'
    },
    src: "/assets/imgs/in/refrigerator/blue-milk.png",
    "data-mouseover": "/assets/imgs/in/mouseover/blue-milk.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '546px',
      left: '320px'
    },
    src: "/assets/imgs/in/refrigerator/sprite.png",
    "data-mouseover": "/assets/imgs/in/mouseover/sprite.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '548px',
      left: '555px'
    },
    src: "/assets/imgs/in/refrigerator/coke.png",
    "data-mouseover": "/assets/imgs/in/mouseover/coke.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '701px',
      left: '449px'
    },
    src: "/assets/imgs/in/refrigerator/water.png",
    "data-mouseover": "/assets/imgs/in/mouseover/water.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '701px',
      left: '552px'
    },
    src: "/assets/imgs/in/refrigerator/water.png",
    "data-mouseover": "/assets/imgs/in/mouseover/water.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '246px',
      left: '288px'
    },
    src: "/assets/imgs/in/refrigerator/door.png",
    "data-mouseover": "/assets/imgs/in/mouseover/door.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '246px',
      left: '527px'
    },
    src: "/assets/imgs/in/refrigerator/door.png",
    "data-mouseover": "/assets/imgs/in/mouseover/door.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '207px',
      left: '1185px'
    },
    src: "/assets/imgs/in/mede/tteokbokki.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tteokbokki.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '709px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/nemoni.png",
    "data-mouseover": "/assets/imgs/in/mouseover/nemoni.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '391px',
      left: '1196px'
    },
    src: "/assets/imgs/in/mede/doong.png",
    "data-mouseover": "/assets/imgs/in/mouseover/doong.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/cream-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/cream-bread.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '976px'
    },
    src: "/assets/imgs/in/mede/red-bean-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/red-bean-bread.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '304px',
      left: '849px'
    },
    src: "/assets/imgs/in/mede/tibisket.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tibisket.png",
    className: "jsx-3214475012" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3214475012",
    __self: this
  }, ".Scene3.jsx-3214475012{display:block;position:fixed;width:1920px;height:980px;background-image:url('/assets/imgs/in/background.png');background-repeat:no-repeat;background-size:contain;background-position:center;}.icon.jsx-3214475012{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;heigth:-webkit-fit-content;heigth:-moz-fit-content;heigth:fit-content;object-fit:contain;object-position:center;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGa0IsQUFHeUIsQUFVSSxjQVRILElBVUcsV0FUTCxhQUNBLGFBQzBDLDhCQVFwQyx5QkFQUyw0QkFDSixpQkFPTCxPQU5RLFlBT0osZUFOekIsUUFPaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2NodWRlZS93b3Jrc3BhY2UvanVoZWUtcG9ydGZvbGlvL3BhZ2VzL3NjZW5lMy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY2VuZTM6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG4gICAgaWYgKGltZ3MpIHtcbiAgICAgIGltZ3MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlciwgdHJ1ZSk7XG4gICAgICBpbWdzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtb3VzZUxlYXZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChpbWdzKSB7XG4gICAgICAgIGltZ3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGltZ3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG1vdXNlTGVhdmVIYW5kbGVyLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBtb3VzZU92ZXJIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW1nID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJywgaW1nLnNyYyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmRhdGFzZXRbJ21vdXNlb3ZlciddISk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VMZWF2ZUhhbmRsZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbWcgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1tb3VzZW92ZXInLCBpbWcuc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuZGF0YXNldFsnc3JjJ10hKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nU2NlbmUzJz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzdHlsZT17eyB0b3A6ICc0MTZweCcsIGxlZnQ6ICczMTJweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL3N0cmF3YmVycnktbWlsay5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3N0cmF3YmVycnktbWlsay5wbmcnIC8+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbicgc3R5bGU9e3sgdG9wOiAnNDEzcHgnLCBsZWZ0OiAnNTUycHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9ibHVlLW1pbGsucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9ibHVlLW1pbGsucG5nJyAvPlxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHN0eWxlPXt7IHRvcDogJzU0NnB4JywgbGVmdDogJzMyMHB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivc3ByaXRlLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvc3ByaXRlLnBuZycgLz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzdHlsZT17eyB0b3A6ICc1NDhweCcsIGxlZnQ6ICc1NTVweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2Nva2UucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9jb2tlLnBuZycgLz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzdHlsZT17eyB0b3A6ICc3MDFweCcsIGxlZnQ6ICc0NDlweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL3dhdGVyLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvd2F0ZXIucG5nJyAvPlxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHN0eWxlPXt7IHRvcDogJzcwMXB4JywgbGVmdDogJzU1MnB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivd2F0ZXIucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci93YXRlci5wbmcnIC8+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbicgc3R5bGU9e3sgdG9wOiAnMjQ2cHgnLCBsZWZ0OiAnMjg4cHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9kb29yLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvZG9vci5wbmcnIC8+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbicgc3R5bGU9e3sgdG9wOiAnMjQ2cHgnLCBsZWZ0OiAnNTI3cHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9kb29yLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvZG9vci5wbmcnIC8+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbicgc3R5bGU9e3sgdG9wOiAnMjA3cHgnLCBsZWZ0OiAnMTE4NXB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3R0ZW9rYm9ra2kucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci90dGVva2Jva2tpLnBuZycgLz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzdHlsZT17eyB0b3A6ICc3MDlweCcsIGxlZnQ6ICc4MThweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9uZW1vbmkucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9uZW1vbmkucG5nJyAvPlxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHN0eWxlPXt7IHRvcDogJzM5MXB4JywgbGVmdDogJzExOTZweCd9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL2Rvb25nLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvZG9vbmcucG5nJyAvPlxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHN0eWxlPXt7IHRvcDogJzQ3NXB4JywgbGVmdDogJzgxOHB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL2NyZWFtLWJyZWFkLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvY3JlYW0tYnJlYWQucG5nJyAvPlxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHN0eWxlPXt7IHRvcDogJzQ3NXB4JywgbGVmdDogJzk3NnB4J319XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvcmVkLWJlYW4tYnJlYWQucG5nJyBcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvcmVkLWJlYW4tYnJlYWQucG5nJyAvPlxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHN0eWxlPXt7IHRvcDogJzMwNHB4JywgbGVmdDogJzg0OXB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3RpYmlza2V0LnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvdGliaXNrZXQucG5nJyAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5TY2VuZTMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB3aWR0aDogMTkyMHB4O1xuICAgICAgICAgIGhlaWdodDogOTgwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvaW4vYmFja2dyb3VuZC5wbmcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgaGVpZ3RoOiBmaXQtY29udGVudDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH1cblxuICAgICAgPC9zdHlsZT5cbiAgICA8L21haW4+XG4gIClcbn07XG4gICAgICBcbmV4cG9ydCBkZWZhdWx0IFNjZW5lMztcbiJdfQ== */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene3.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene3);

/***/ })

})
//# sourceMappingURL=scene3.js.024cda93de41a87a0315.hot-update.js.map