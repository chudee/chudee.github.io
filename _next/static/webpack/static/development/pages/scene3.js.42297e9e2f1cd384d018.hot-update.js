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
    var imgs = document.querySelectorAll('img.mouseover');
    imgs.forEach(function (img) {
      img.addEventListener('mouseover', mouseOverHandler, true);
      img.addEventListener('mouseleave', mouseLeaveHandler, true);
    });
    return function () {
      imgs.forEach(function (img) {
        img.removeEventListener('mouseover', mouseOverHandler, true);
        img.removeEventListener('mouseleave', mouseLeaveHandler, true);
      });
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
    className: "jsx-2894141726" + " " + 'Scene3',
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
    className: "jsx-2894141726" + " " + 'icon mouseover',
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
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '546px',
      left: '320px'
    },
    src: "/assets/imgs/in/refrigerator/sprite.png",
    "data-mouseover": "/assets/imgs/in/mouseover/sprite.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '548px',
      left: '555px'
    },
    src: "/assets/imgs/in/refrigerator/coke.png",
    "data-mouseover": "/assets/imgs/in/mouseover/coke.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '701px',
      left: '449px'
    },
    src: "/assets/imgs/in/refrigerator/water.png",
    "data-mouseover": "/assets/imgs/in/mouseover/water.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '701px',
      left: '552px'
    },
    src: "/assets/imgs/in/refrigerator/water.png",
    "data-mouseover": "/assets/imgs/in/mouseover/water.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '246px',
      left: '288px',
      transition: 'transform 0.3s ease-in-out'
    },
    src: "/assets/imgs/in/refrigerator/door.png",
    "data-mouseover": "/assets/imgs/in/mouseover/door.png",
    onMouseOver: function onMouseOver(e) {
      var target = e.target;
      target.style.transform = 'translateX(210px)';
    },
    onMouseLeave: function onMouseLeave(e) {
      var target = e.target;
      target.style.transform = 'translateX(0)';
    },
    className: "jsx-2894141726" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("div", {
    style: {
      top: '246px',
      left: '527px'
    },
    className: "jsx-2894141726" + " " + 'ss',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("img", {
    style: {
      transition: 'left 0.3s ease-in-out'
    },
    src: "/assets/imgs/in/refrigerator/door.png",
    "data-mouseover": "/assets/imgs/in/mouseover/door.png",
    onMouseOver: function onMouseOver(e) {
      var target = e.target; // target.style.transform = 'translateX(-210px)';

      target.style.left = 'calc(527px - 210px)';
    },
    onMouseLeave: function onMouseLeave(e) {
      console.log('onMouseLeave');
      var target = e.target; // target.style.transform = 'translateX(0)';

      target.style.left = 'calc(527px)';
    },
    className: "jsx-2894141726" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("img", {
    style: {
      top: '207px',
      left: '1185px'
    },
    src: "/assets/imgs/in/mede/tteokbokki.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tteokbokki.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '709px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/nemoni.png",
    "data-mouseover": "/assets/imgs/in/mouseover/nemoni.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '391px',
      left: '1196px'
    },
    src: "/assets/imgs/in/mede/doong.png",
    "data-mouseover": "/assets/imgs/in/mouseover/doong.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/cream-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/cream-bread.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '976px'
    },
    src: "/assets/imgs/in/mede/red-bean-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/red-bean-bread.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '304px',
      left: '849px'
    },
    src: "/assets/imgs/in/mede/tibisket.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tibisket.png",
    className: "jsx-2894141726" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2894141726",
    __self: this
  }, ".Scene3.jsx-2894141726{display:block;position:fixed;width:1920px;height:980px;background-image:url('/assets/imgs/in/background.png');background-repeat:no-repeat;background-size:contain;background-position:center;}.icon.jsx-2894141726{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;heigth:-webkit-fit-content;heigth:-moz-fit-content;heigth:fit-content;object-fit:contain;object-position:center;cursor:pointer;}.open.jsx-2894141726{background-image:'';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIa0IsQUFHeUIsQUFVSSxBQVFFLGNBakJMLElBVUcsRUFRcEIsU0FqQmUsYUFDQSxhQUMwQyw4QkFRcEMseUJBUFMsNEJBQ0osaUJBT0wsT0FOUSxZQU9KLGVBTnpCLFFBT2lCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2NlbmUzOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGltZ3M6IE5vZGVMaXN0T2Y8SFRNTEltYWdlRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcubW91c2VvdmVyJyk7XG5cbiAgICBpbWdzLmZvckVhY2goaW1nID0+IHtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZU92ZXJIYW5kbGVyLCB0cnVlKTtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbW91c2VMZWF2ZUhhbmRsZXIsIHRydWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGltZ3MuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICBpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbW91c2VMZWF2ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgbW91c2VPdmVySGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGltZyA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgICBpbWcuc2V0QXR0cmlidXRlKCdkYXRhLXNyYycsIGltZy5zcmMpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5kYXRhc2V0Wydtb3VzZW92ZXInXSEpO1xuICB9O1xuXG4gIGNvbnN0IG1vdXNlTGVhdmVIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW1nID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW91c2VvdmVyJywgaW1nLnNyYyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmRhdGFzZXRbJ3NyYyddISk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J1NjZW5lMyc+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzQxNnB4JywgbGVmdDogJzMxMnB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivc3RyYXdiZXJyeS1taWxrLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvc3RyYXdiZXJyeS1taWxrLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICc0MTNweCcsIGxlZnQ6ICc1NTJweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2JsdWUtbWlsay5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2JsdWUtbWlsay5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNTQ2cHgnLCBsZWZ0OiAnMzIwcHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9zcHJpdGUucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9zcHJpdGUucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzU0OHB4JywgbGVmdDogJzU1NXB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3IvY29rZS5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2Nva2UucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzcwMXB4JywgbGVmdDogJzQ0OXB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivd2F0ZXIucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci93YXRlci5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNzAxcHgnLCBsZWZ0OiAnNTUycHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci93YXRlci5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3dhdGVyLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHN0eWxlPXt7IHRvcDogJzI0NnB4JywgbGVmdDogJzI4OHB4JywgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3IvZG9vci5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2Rvb3IucG5nJ1xuICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgyMTBweCknO1xuICAgICAgICAgICB9fVxuICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XG4gICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuICAgICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NzJyBzdHlsZT17eyB0b3A6ICcyNDZweCcsIGxlZnQ6ICc1MjdweCcgfX0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzdHlsZT17eyB0cmFuc2l0aW9uOiAnbGVmdCAwLjNzIGVhc2UtaW4tb3V0JyB9fVxuICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9kb29yLnBuZydcbiAgICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9kb29yLnBuZydcbiAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAvLyB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTIxMHB4KSc7XG4gICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9ICdjYWxjKDUyN3B4IC0gMjEwcHgpJztcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbk1vdXNlTGVhdmUnKTtcbiAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAvLyB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSAnY2FsYyg1MjdweCknO1xuICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICcyMDdweCcsIGxlZnQ6ICcxMTg1cHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvdHRlb2tib2traS5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3R0ZW9rYm9ra2kucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzcwOXB4JywgbGVmdDogJzgxOHB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL25lbW9uaS5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL25lbW9uaS5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnMzkxcHgnLCBsZWZ0OiAnMTE5NnB4J319XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvZG9vbmcucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9kb29uZy5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNDc1cHgnLCBsZWZ0OiAnODE4cHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvY3JlYW0tYnJlYWQucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9jcmVhbS1icmVhZC5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNDc1cHgnLCBsZWZ0OiAnOTc2cHgnfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9yZWQtYmVhbi1icmVhZC5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3JlZC1iZWFuLWJyZWFkLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICczMDRweCcsIGxlZnQ6ICc4NDlweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS90aWJpc2tldC5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3RpYmlza2V0LnBuZycgLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuU2NlbmUzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDE5MjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDk4MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2luL2JhY2tncm91bmQucG5nJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGhlaWd0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm9wZW4ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICcnO1xuICAgICAgICB9XG4gICAgICBgfVxuXG4gICAgICA8L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKVxufTtcbiAgICAgIFxuZXhwb3J0IGRlZmF1bHQgU2NlbmUzO1xuIl19 */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene3.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene3);

/***/ })

})
//# sourceMappingURL=scene3.js.42297e9e2f1cd384d018.hot-update.js.map