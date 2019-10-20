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
      img.addEventListener('mouseout', mouseOutHandler, true);
    });
    return function () {
      imgs.forEach(function (img) {
        img.removeEventListener('mouseover', mouseOverHandler, true);
        img.removeEventListener('mouseout', mouseOutHandler, true);
      });
    };
  }, []);

  var mouseOverHandler = function mouseOverHandler(e) {
    var img = e.target;
    img.setAttribute('data-src', img.src);
    img.setAttribute('src', img.dataset['mouseover']);
    img.style.transform = 'translate(-5px, -5px)';
  };

  var mouseOutHandler = function mouseOutHandler(e) {
    var img = e.target;
    img.setAttribute('data-mouseover', img.src);
    img.setAttribute('src', img.dataset['src']);
  };

  var doorMouseOverHandler = function doorMouseOverHandler(e) {
    var target = e.currentTarget;
    var move = target.dataset['left'] ? '220px' : '-220px';
    var door = target.childNodes[0];
    door.style.transform = "translateX(".concat(move, ")");
  };

  var doorMouseOutHandler = function doorMouseOutHandler(e) {
    var target = e.currentTarget;
    var door = target.childNodes[0];
    door.style.transform = 'translateX(0)';
  };

  return __jsx("main", {
    className: "jsx-321817009" + " " + 'Scene3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    "data-left": true,
    onMouseOver: doorMouseOverHandler,
    onMouseOut: doorMouseOutHandler,
    className: "jsx-321817009" + " " + 'door-wrapper door-wrapper--left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("img", {
    style: {
      transition: 'transform 0.3s ease-in-out'
    },
    src: "/assets/imgs/in/refrigerator/door.png",
    "data-mouseover": "/assets/imgs/in/mouseover/door.png",
    className: "jsx-321817009" + " " + 'icon door',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/strawberry-milk.png",
    "data-mouseover": "/assets/imgs/in/mouseover/strawberry-milk.png",
    className: "jsx-321817009" + " " + 'icon icon--strawberry-milk mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/sprite.png",
    "data-mouseover": "/assets/imgs/in/mouseover/sprite.png",
    className: "jsx-321817009" + " " + 'icon icon--sprite mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/water.png",
    "data-mouseover": "/assets/imgs/in/mouseover/water.png",
    className: "jsx-321817009" + " " + 'icon icon--water-left mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), __jsx("div", {
    onMouseOver: doorMouseOverHandler,
    onMouseOut: doorMouseOutHandler,
    className: "jsx-321817009" + " " + 'door-wrapper door-wrapper--right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("img", {
    style: {
      transition: 'transform 0.3s ease-in-out'
    },
    src: "/assets/imgs/in/refrigerator/door.png",
    "data-mouseover": "/assets/imgs/in/mouseover/door.png",
    className: "jsx-321817009" + " " + 'icon door',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/blue-milk.png",
    "data-mouseover": "/assets/imgs/in/mouseover/blue-milk.png",
    className: "jsx-321817009" + " " + 'icon icon--blue-milk mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/coke.png",
    "data-mouseover": "/assets/imgs/in/mouseover/coke.png",
    className: "jsx-321817009" + " " + 'icon icon--coke mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/water.png",
    "data-mouseover": "/assets/imgs/in/mouseover/water.png",
    className: "jsx-321817009" + " " + 'icon icon--water-right mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("img", {
    style: {
      top: '207px',
      left: '1185px'
    },
    src: "/assets/imgs/in/mede/tteokbokki.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tteokbokki.png",
    className: "jsx-321817009" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '709px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/nemoni.png",
    "data-mouseover": "/assets/imgs/in/mouseover/nemoni.png",
    className: "jsx-321817009" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '391px',
      left: '1196px'
    },
    src: "/assets/imgs/in/mede/doong.png",
    "data-mouseover": "/assets/imgs/in/mouseover/doong.png",
    className: "jsx-321817009" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '818px'
    },
    src: "/assets/imgs/in/mede/cream-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/cream-bread.png",
    className: "jsx-321817009" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '475px',
      left: '976px'
    },
    src: "/assets/imgs/in/mede/red-bean-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/red-bean-bread.png",
    className: "jsx-321817009" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx("img", {
    style: {
      top: '304px',
      left: '849px'
    },
    src: "/assets/imgs/in/mede/tibisket.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tibisket.png",
    className: "jsx-321817009" + " " + 'icon mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "321817009",
    __self: this
  }, ".Scene3.jsx-321817009{display:block;position:fixed;width:1920px;height:980px;background-image:url('/assets/imgs/in/background.png');background-repeat:no-repeat;background-size:contain;background-position:center;}.door-wrapper.jsx-321817009{position:absolute;width:241px;height:576px;cursor:pointer;}.door-wrapper--left.jsx-321817009{top:246px;left:288px;}.door-wrapper--right.jsx-321817009{top:246px;left:527px;}.door.jsx-321817009{pointer-events:none;z-index:1;}.icon.jsx-321817009{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;heigth:-webkit-fit-content;heigth:-moz-fit-content;heigth:fit-content;object-fit:contain;object-position:center;cursor:pointer;}.icon--strawberry-milk.jsx-321817009{top:166px;left:24px;}.icon--sprite.jsx-321817009{top:300px;left:32px;}.icon--water-left.jsx-321817009{top:455px;left:161px;}.icon--blue-milk.jsx-321817009{top:167px;left:25px;}.icon--coke.jsx-321817009{top:302px;left:28px;}.icon--water-right.jsx-321817009{top:455px;left:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ia0IsQUFHeUIsQUFXSSxBQU1SLEFBSUEsQUFJVSxBQUtGLEFBT2MsQUFDVCxBQUNJLEFBRUQsQUFDTCxBQUNPLFVBekJqQixBQUlBLEFBZWdDLEFBQ1QsQUFDSyxBQUVGLEFBQ0wsQUFDTyxJQTFDeEIsSUFXSCxBQW1CTSxFQUxSLEFBV2tDLEFBQ1QsQUFHRyxBQUNMLEFBQ08sQ0F4QjFDLEFBSUEsQUFnQjBDLFFBckMzQixDQVdBLEFBY2YsWUF4QmUsQ0FXRSxZQVZ3QyxHQVd6RCwyQkFpQnFCLHlCQTNCUyw0QkFDSixpQkEyQkwsT0ExQlEsWUEyQkosZUExQnpCLFFBMkJpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvY2h1ZGVlL3dvcmtzcGFjZS9qdWhlZS1wb3J0Zm9saW8vcGFnZXMvc2NlbmUzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNjZW5lMzogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbWdzOiBOb2RlTGlzdE9mPEhUTUxJbWFnZUVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLm1vdXNlb3ZlcicpO1xuXG4gICAgaW1ncy5mb3JFYWNoKGltZyA9PiB7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlciwgdHJ1ZSk7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb3VzZU91dEhhbmRsZXIsIHRydWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGltZ3MuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICBpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlT3V0SGFuZGxlciwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBtb3VzZU92ZXJIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCBpbWcgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmMnLCBpbWcuc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuZGF0YXNldFsnbW91c2VvdmVyJ10hKTtcbiAgICBpbWcuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNXB4LCAtNXB4KSc7XG4gIH07XG5cbiAgY29uc3QgbW91c2VPdXRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCBpbWcgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1tb3VzZW92ZXInLCBpbWcuc3JjKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuZGF0YXNldFsnc3JjJ10hKTtcbiAgfTtcblxuICBjb25zdCBkb29yTW91c2VPdmVySGFuZGxlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCBtb3ZlID0gdGFyZ2V0LmRhdGFzZXRbJ2xlZnQnXSA/ICcyMjBweCcgOiAnLTIyMHB4JztcbiAgICBjb25zdCBkb29yID0gdGFyZ2V0LmNoaWxkTm9kZXNbMF0gYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICBkb29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bW92ZX0pYDtcbiAgfTtcblxuICBjb25zdCBkb29yTW91c2VPdXRIYW5kbGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgY29uc3QgZG9vciA9IHRhcmdldC5jaGlsZE5vZGVzWzBdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgZG9vci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J1NjZW5lMyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9vci13cmFwcGVyIGRvb3Itd3JhcHBlci0tbGVmdCcgZGF0YS1sZWZ0XG4gICAgICAgICAgIG9uTW91c2VPdmVyPXtkb29yTW91c2VPdmVySGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU91dD17ZG9vck1vdXNlT3V0SGFuZGxlcn1cbiAgICAgID5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gZG9vcicgc3R5bGU9e3sgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0JyB9fVxuICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9kb29yLnBuZydcbiAgICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9kb29yLnBuZycgLz5cblxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBpY29uLS1zdHJhd2JlcnJ5LW1pbGsgbW91c2VvdmVyJ1xuICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9zdHJhd2JlcnJ5LW1pbGsucG5nJ1xuICAgICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3N0cmF3YmVycnktbWlsay5wbmcnIC8+XG5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gaWNvbi0tc3ByaXRlIG1vdXNlb3ZlcidcbiAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivc3ByaXRlLnBuZydcbiAgICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9zcHJpdGUucG5nJyAvPlxuXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGljb24tLXdhdGVyLWxlZnQgbW91c2VvdmVyJ1xuICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci93YXRlci5wbmcnXG4gICAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvd2F0ZXIucG5nJyAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb29yLXdyYXBwZXIgZG9vci13cmFwcGVyLS1yaWdodCdcbiAgICAgICAgICAgb25Nb3VzZU92ZXI9e2Rvb3JNb3VzZU92ZXJIYW5kbGVyfVxuICAgICAgICAgICBvbk1vdXNlT3V0PXtkb29yTW91c2VPdXRIYW5kbGVyfVxuICAgICAgPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBkb29yJyBzdHlsZT17eyB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQnIH19XG4gICAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2Rvb3IucG5nJ1xuICAgICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2Rvb3IucG5nJyAvPlxuXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGljb24tLWJsdWUtbWlsayBtb3VzZW92ZXInXG4gICAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2JsdWUtbWlsay5wbmcnXG4gICAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvYmx1ZS1taWxrLnBuZycgLz5cblxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBpY29uLS1jb2tlIG1vdXNlb3ZlcidcbiAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3IvY29rZS5wbmcnXG4gICAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvY29rZS5wbmcnIC8+XG5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gaWNvbi0td2F0ZXItcmlnaHQgbW91c2VvdmVyJ1xuICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci93YXRlci5wbmcnXG4gICAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvd2F0ZXIucG5nJyAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnMjA3cHgnLCBsZWZ0OiAnMTE4NXB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3R0ZW9rYm9ra2kucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci90dGVva2Jva2tpLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gbW91c2VvdmVyJyBzdHlsZT17eyB0b3A6ICc3MDlweCcsIGxlZnQ6ICc4MThweCcgfX1cbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9uZW1vbmkucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9uZW1vbmkucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzM5MXB4JywgbGVmdDogJzExOTZweCd9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL2Rvb25nLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvZG9vbmcucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzQ3NXB4JywgbGVmdDogJzgxOHB4JyB9fVxuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL2NyZWFtLWJyZWFkLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvY3JlYW0tYnJlYWQucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBtb3VzZW92ZXInIHN0eWxlPXt7IHRvcDogJzQ3NXB4JywgbGVmdDogJzk3NnB4J319XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvcmVkLWJlYW4tYnJlYWQucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9yZWQtYmVhbi1icmVhZC5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIG1vdXNlb3Zlcicgc3R5bGU9e3sgdG9wOiAnMzA0cHgnLCBsZWZ0OiAnODQ5cHgnIH19XG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvdGliaXNrZXQucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci90aWJpc2tldC5wbmcnIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlNjZW5lMyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHdpZHRoOiAxOTIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA5ODBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9pbi9iYWNrZ3JvdW5kLnBuZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb29yLXdyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMjQxcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1NzZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRvb3Itd3JhcHBlci0tbGVmdCB7XG4gICAgICAgICAgdG9wOiAyNDZweDtcbiAgICAgICAgICBsZWZ0OiAyODhweDtcbiAgICAgICAgfVxuICAgICAgICAuZG9vci13cmFwcGVyLS1yaWdodCB7XG4gICAgICAgICAgdG9wOiAyNDZweDtcbiAgICAgICAgICBsZWZ0OiA1MjdweDtcbiAgICAgICAgfVxuICAgICAgICAuZG9vciB7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGhlaWd0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24tLXN0cmF3YmVycnktbWlsayB7IHRvcDogMTY2cHg7IGxlZnQ6IDI0cHg7IH1cbiAgICAgICAgLmljb24tLXNwcml0ZSB7IHRvcDogMzAwcHg7IGxlZnQ6IDMycHg7IH1cbiAgICAgICAgLmljb24tLXdhdGVyLWxlZnQgeyB0b3A6IDQ1NXB4OyBsZWZ0OiAxNjFweDsgfVxuXG4gICAgICAgIC5pY29uLS1ibHVlLW1pbGsgeyB0b3A6IDE2N3B4OyBsZWZ0OiAyNXB4OyB9XG4gICAgICAgIC5pY29uLS1jb2tlIHsgdG9wOiAzMDJweDsgbGVmdDogMjhweDsgfVxuICAgICAgICAuaWNvbi0td2F0ZXItcmlnaHQgeyB0b3A6IDQ1NXB4OyBsZWZ0OiAyNXB4OyB9XG4gICAgICBgfVxuXG4gICAgICA8L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKVxufTtcbiAgICAgIFxuZXhwb3J0IGRlZmF1bHQgU2NlbmUzO1xuIl19 */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene3.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene3);

/***/ })

})
//# sourceMappingURL=scene3.js.b1fc2c079a5ce48a6732.hot-update.js.map