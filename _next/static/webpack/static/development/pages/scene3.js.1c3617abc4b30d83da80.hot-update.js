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
    className: "jsx-1930992119" + " " + 'Scene3',
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
    className: "jsx-1930992119" + " " + 'icon mouseover',
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
    className: "jsx-1930992119" + " " + 'icon mouseover',
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
    className: "jsx-1930992119" + " " + 'icon mouseover',
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
    className: "jsx-1930992119" + " " + 'icon mouseover',
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
    className: "jsx-1930992119" + " " + 'icon mouseover',
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
    className: "jsx-1930992119" + " " + 'icon mouseover',
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
    className: "jsx-1930992119" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("div", {
    onMouseOver: function onMouseOver(e) {
      var target = e.target; // target.style.transform = 'translateX(-210px)';

      target.style.left = 'calc(527px - 210px)';
    },
    onMouseLeave: function onMouseLeave(e) {
      console.log('onMouseLeave');
      var target = e.target; // target.style.transform = 'translateX(0)';

      target.style.left = 'calc(527px)';
    },
    className: "jsx-1930992119" + " " + 'door-wrapper door-wrapper--right',
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
    className: "jsx-1930992119" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx("img", {
    style: {
      top: '207px',
      left: '1185px'
    },
    src: "/assets/imgs/in/mede/tteokbokki.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tteokbokki.png",
    className: "jsx-1930992119" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '709px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/nemoni.png",
    "data-mouseover": "/assets/imgs/in/mouseover/nemoni.png",
    className: "jsx-1930992119" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '391px',
      left: '1196px'
    },
    src: "/assets/imgs/in/mede/doong.png",
    "data-mouseover": "/assets/imgs/in/mouseover/doong.png",
    className: "jsx-1930992119" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/cream-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/cream-bread.png",
    className: "jsx-1930992119" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '976px'
    },
    src: "/assets/imgs/in/mede/red-bean-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/red-bean-bread.png",
    className: "jsx-1930992119" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '304px',
      left: '849px'
    },
    src: "/assets/imgs/in/mede/tibisket.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tibisket.png",
    className: "jsx-1930992119" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1930992119",
    __self: this
  }, ".Scene3.jsx-1930992119{display:block;position:fixed;width:1920px;height:980px;background-image:url('/assets/imgs/in/background.png');background-repeat:no-repeat;background-size:contain;background-position:center;}.door-wrapper.jsx-1930992119{position:absolute;width:241px;height:576px;}.door-wrapper--right.jsx-1930992119{top:246px;left:527px;}.icon.jsx-1930992119{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;heigth:-webkit-fit-content;heigth:-moz-fit-content;heigth:fit-content;object-fit:contain;object-position:center;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIa0IsQUFHeUIsQUFVSSxBQU9SLEFBSVEsVUFIUCxJQWpCSSxJQVVILEFBV00sR0FIcEIsUUFqQmUsQ0FVQSxZQVRBLENBVWYsWUFUeUQsOEJBbUJwQyx5QkFsQlMsNEJBQ0osaUJBa0JMLE9BakJRLFlBa0JKLGVBakJ6QixRQWtCaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2NodWRlZS93b3Jrc3BhY2UvanVoZWUtcG9ydGZvbGlvL3BhZ2VzL3NjZW5lMy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY2VuZTM6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW1nczogTm9kZUxpc3RPZjxIVE1MSW1hZ2VFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5tb3VzZW92ZXInKTtcblxuICAgIGltZ3MuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlT3ZlckhhbmRsZXIsIHRydWUpO1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtb3VzZUxlYXZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaW1ncy5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZU92ZXJIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtb3VzZUxlYXZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBtb3VzZU92ZXJIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW1nID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJywgaW1nLnNyYyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmRhdGFzZXRbJ21vdXNlb3ZlciddISk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VMZWF2ZUhhbmRsZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbWcgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1tb3VzZW92ZXInLCBpbWcuc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuZGF0YXNldFsnc3JjJ10hKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nU2NlbmUzJz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNDE2cHgnLCBsZWZ0OiAnMzEycHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9zdHJhd2JlcnJ5LW1pbGsucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9zdHJhd2JlcnJ5LW1pbGsucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzQxM3B4JywgbGVmdDogJzU1MnB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3IvYmx1ZS1taWxrLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvYmx1ZS1taWxrLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICc1NDZweCcsIGxlZnQ6ICczMjBweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL3Nwcml0ZS5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3Nwcml0ZS5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNTQ4cHgnLCBsZWZ0OiAnNTU1cHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9jb2tlLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvY29rZS5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNzAxcHgnLCBsZWZ0OiAnNDQ5cHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci93YXRlci5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3dhdGVyLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICc3MDFweCcsIGxlZnQ6ICc1NTJweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL3dhdGVyLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvd2F0ZXIucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbicgc3R5bGU9e3sgdG9wOiAnMjQ2cHgnLCBsZWZ0OiAnMjg4cHgnLCB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9kb29yLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvZG9vci5wbmcnXG4gICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4ge1xuICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDIxMHB4KSc7XG4gICAgICAgICAgIH19XG4gICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcbiAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XG4gICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9vci13cmFwcGVyIGRvb3Itd3JhcHBlci0tcmlnaHQnXG4gICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4ge1xuICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICAgLy8gdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0yMTBweCknO1xuICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gJ2NhbGMoNTI3cHggLSAyMTBweCknO1xuICAgICAgICAgICB9fVxuICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ29uTW91c2VMZWF2ZScpO1xuICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICAgLy8gdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcbiAgICAgICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9ICdjYWxjKDUyN3B4KSc7XG4gICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uJyBzdHlsZT17eyB0cmFuc2l0aW9uOiAnbGVmdCAwLjNzIGVhc2UtaW4tb3V0JyB9fVxuICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9kb29yLnBuZydcbiAgICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9kb29yLnBuZydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzIwN3B4JywgbGVmdDogJzExODVweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS90dGVva2Jva2tpLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvdHRlb2tib2traS5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNzA5cHgnLCBsZWZ0OiAnODE4cHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvbmVtb25pLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvbmVtb25pLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICczOTFweCcsIGxlZnQ6ICcxMTk2cHgnfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9kb29uZy5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2Rvb25nLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICc0NzVweCcsIGxlZnQ6ICc4MThweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9jcmVhbS1icmVhZC5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2NyZWFtLWJyZWFkLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICc0NzVweCcsIGxlZnQ6ICc5NzZweCd9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3JlZC1iZWFuLWJyZWFkLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvcmVkLWJlYW4tYnJlYWQucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzMwNHB4JywgbGVmdDogJzg0OXB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3RpYmlza2V0LnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvdGliaXNrZXQucG5nJyAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5TY2VuZTMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB3aWR0aDogMTkyMHB4O1xuICAgICAgICAgIGhlaWdodDogOTgwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvaW4vYmFja2dyb3VuZC5wbmcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRvb3Itd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyNDFweDtcbiAgICAgICAgICBoZWlnaHQ6IDU3NnB4O1xuICAgICAgICB9XG4gICAgICAgIC5kb29yLXdyYXBwZXItLWxlZnQge1xuICAgICAgICB9XG4gICAgICAgIC5kb29yLXdyYXBwZXItLXJpZ2h0IHtcbiAgICAgICAgICB0b3A6IDI0NnB4O1xuICAgICAgICAgIGxlZnQ6IDUyN3B4O1xuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGhlaWd0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG5cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApXG59O1xuICAgICAgXG5leHBvcnQgZGVmYXVsdCBTY2VuZTM7XG4iXX0= */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene3.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene3);

/***/ })

})
//# sourceMappingURL=scene3.js.1c3617abc4b30d83da80.hot-update.js.map