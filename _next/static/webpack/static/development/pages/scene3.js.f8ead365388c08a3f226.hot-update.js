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
    className: "jsx-821167662" + " " + 'Scene3',
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
    className: "jsx-821167662" + " " + 'icon mouseover',
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
    className: "jsx-821167662" + " " + 'icon mouseover',
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
    className: "jsx-821167662" + " " + 'icon mouseover',
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
    className: "jsx-821167662" + " " + 'icon mouseover',
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
    className: "jsx-821167662" + " " + 'icon mouseover',
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
    className: "jsx-821167662" + " " + 'icon mouseover',
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
      console.log(target.childNodes[0]); // target.style.transform = 'translateX(210px)';
    } // onMouseLeave={(e) => {
    //   const target = e.target as HTMLImageElement;
    //   target.style.transform = 'translateX(0)';
    // }}
    ,
    className: "jsx-821167662" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("div", {
    onMouseOver: function onMouseOver(e) {
      e.preventDefault();
      var target = e.target;
      console.log(target); // target.style.transform = 'translateX(-210px)';
      // target.style.left = 'calc(527px - 210px)';
    } // onMouseLeave={(e) => {
    //   console.log('onMouseLeave');
    //   const target = e.target as HTMLImageElement;
    //   // target.style.transform = 'translateX(0)';
    //   target.style.left = 'calc(527px)';
    // }}
    ,
    className: "jsx-821167662" + " " + 'door-wrapper door-wrapper--right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("img", {
    style: {
      transition: 'transform 0.3s ease-in-out'
    },
    src: "/assets/imgs/in/refrigerator/door.png",
    "data-mouseover": "/assets/imgs/in/mouseover/door.png",
    className: "jsx-821167662" + " " + 'icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx("img", {
    style: {
      top: '207px',
      left: '1185px'
    },
    src: "/assets/imgs/in/mede/tteokbokki.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tteokbokki.png",
    className: "jsx-821167662" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '709px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/nemoni.png",
    "data-mouseover": "/assets/imgs/in/mouseover/nemoni.png",
    className: "jsx-821167662" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '391px',
      left: '1196px'
    },
    src: "/assets/imgs/in/mede/doong.png",
    "data-mouseover": "/assets/imgs/in/mouseover/doong.png",
    className: "jsx-821167662" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/cream-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/cream-bread.png",
    className: "jsx-821167662" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '976px'
    },
    src: "/assets/imgs/in/mede/red-bean-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/red-bean-bread.png",
    className: "jsx-821167662" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '304px',
      left: '849px'
    },
    src: "/assets/imgs/in/mede/tibisket.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tibisket.png",
    className: "jsx-821167662" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "821167662",
    __self: this
  }, ".Scene3.jsx-821167662{display:block;position:fixed;width:1920px;height:980px;background-image:url('/assets/imgs/in/background.png');background-repeat:no-repeat;background-size:contain;background-position:center;}.door-wrapper.jsx-821167662{position:absolute;width:241px;height:576px;cursor:pointer;z-index:1;}.door-wrapper--right.jsx-821167662{top:246px;left:527px;}.icon.jsx-821167662{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;heigth:-webkit-fit-content;heigth:-moz-fit-content;heigth:fit-content;object-fit:contain;object-position:center;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlIa0IsQUFHeUIsQUFVSSxBQVVSLEFBSVEsVUFIUCxJQXBCSSxJQVVILEFBY00sR0FIcEIsUUFwQmUsQ0FVQSxZQVRBLENBVUUsWUFUd0MsR0FXN0MsVUFDWixpQkFVcUIseUJBckJTLDRCQUNKLGlCQXFCTCxPQXBCUSxZQXFCSixlQXBCekIsUUFxQmlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2NlbmUzOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGltZ3M6IE5vZGVMaXN0T2Y8SFRNTEltYWdlRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcubW91c2VvdmVyJyk7XG5cbiAgICBpbWdzLmZvckVhY2goaW1nID0+IHtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZU92ZXJIYW5kbGVyLCB0cnVlKTtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbW91c2VMZWF2ZUhhbmRsZXIsIHRydWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGltZ3MuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICBpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbW91c2VMZWF2ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgbW91c2VPdmVySGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGltZyA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgICBpbWcuc2V0QXR0cmlidXRlKCdkYXRhLXNyYycsIGltZy5zcmMpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5kYXRhc2V0Wydtb3VzZW92ZXInXSEpO1xuICB9O1xuXG4gIGNvbnN0IG1vdXNlTGVhdmVIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW1nID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW91c2VvdmVyJywgaW1nLnNyYyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmRhdGFzZXRbJ3NyYyddISk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J1NjZW5lMyc+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzQxNnB4JywgbGVmdDogJzMxMnB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivc3RyYXdiZXJyeS1taWxrLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvc3RyYXdiZXJyeS1taWxrLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICc0MTNweCcsIGxlZnQ6ICc1NTJweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2JsdWUtbWlsay5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2JsdWUtbWlsay5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNTQ2cHgnLCBsZWZ0OiAnMzIwcHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9zcHJpdGUucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9zcHJpdGUucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzU0OHB4JywgbGVmdDogJzU1NXB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3IvY29rZS5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2Nva2UucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzcwMXB4JywgbGVmdDogJzQ0OXB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivd2F0ZXIucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci93YXRlci5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNzAxcHgnLCBsZWZ0OiAnNTUycHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci93YXRlci5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3dhdGVyLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24nIHN0eWxlPXt7IHRvcDogJzI0NnB4JywgbGVmdDogJzI4OHB4JywgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3IvZG9vci5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2Rvb3IucG5nJ1xuICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgLy8gdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDIxMHB4KSc7XG4gICAgICAgICAgIH19XG4gICAgICAgICAgIC8vIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcbiAgICAgICAgICAgLy8gICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAvLyAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XG4gICAgICAgICAgIC8vIH19XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9vci13cmFwcGVyIGRvb3Itd3JhcHBlci0tcmlnaHQnXG4gICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4ge1xuICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgICAgICAgIC8vIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMjEwcHgpJztcbiAgICAgICAgICAgICAvLyB0YXJnZXQuc3R5bGUubGVmdCA9ICdjYWxjKDUyN3B4IC0gMjEwcHgpJztcbiAgICAgICAgICAgfX1cbiAgICAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xuICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdvbk1vdXNlTGVhdmUnKTtcbiAgICAgICAgICAgLy8gICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAvLyAgIC8vIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XG4gICAgICAgICAgIC8vICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSAnY2FsYyg1MjdweCknO1xuICAgICAgICAgICAvLyB9fVxuICAgICAgPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbicgc3R5bGU9e3sgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0JyB9fVxuICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9kb29yLnBuZydcbiAgICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9kb29yLnBuZydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzIwN3B4JywgbGVmdDogJzExODVweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS90dGVva2Jva2tpLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvdHRlb2tib2traS5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnNzA5cHgnLCBsZWZ0OiAnODE4cHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvbmVtb25pLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvbmVtb25pLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICczOTFweCcsIGxlZnQ6ICcxMTk2cHgnfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9kb29uZy5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2Rvb25nLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICc0NzVweCcsIGxlZnQ6ICc4MThweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9jcmVhbS1icmVhZC5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2NyZWFtLWJyZWFkLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICc0NzVweCcsIGxlZnQ6ICc5NzZweCd9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3JlZC1iZWFuLWJyZWFkLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvcmVkLWJlYW4tYnJlYWQucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzMwNHB4JywgbGVmdDogJzg0OXB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3RpYmlza2V0LnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvdGliaXNrZXQucG5nJyAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5TY2VuZTMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB3aWR0aDogMTkyMHB4O1xuICAgICAgICAgIGhlaWdodDogOTgwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvaW4vYmFja2dyb3VuZC5wbmcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRvb3Itd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyNDFweDtcbiAgICAgICAgICBoZWlnaHQ6IDU3NnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmRvb3Itd3JhcHBlci0tbGVmdCB7XG4gICAgICAgIH1cbiAgICAgICAgLmRvb3Itd3JhcHBlci0tcmlnaHQge1xuICAgICAgICAgIHRvcDogMjQ2cHg7XG4gICAgICAgICAgbGVmdDogNTI3cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgaGVpZ3RoOiBmaXQtY29udGVudDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH1cblxuICAgICAgPC9zdHlsZT5cbiAgICA8L21haW4+XG4gIClcbn07XG4gICAgICBcbmV4cG9ydCBkZWZhdWx0IFNjZW5lMztcbiJdfQ== */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene3.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene3);

/***/ })

})
//# sourceMappingURL=scene3.js.f8ead365388c08a3f226.hot-update.js.map