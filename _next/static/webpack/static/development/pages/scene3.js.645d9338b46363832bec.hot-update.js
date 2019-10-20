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
    img.style.zIndex = '1';
    img.style.transform = 'translate(-5px, -5px)';
  };

  var mouseOutHandler = function mouseOutHandler(e) {
    var img = e.target;
    img.setAttribute('data-mouseover', img.src);
    img.setAttribute('src', img.dataset['src']);
    img.style.zIndex = '0';
    img.style.transform = 'translate(0, 0)';
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
    className: "jsx-337966187" + " " + 'Scene3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    "data-left": true,
    onMouseOver: doorMouseOverHandler,
    onMouseOut: doorMouseOutHandler,
    className: "jsx-337966187" + " " + 'door-wrapper door-wrapper--left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("img", {
    src: "/assets/imgs/in/refrigerator/door.png",
    "data-mouseover": "/assets/imgs/in/mouseover/door.png",
    className: "jsx-337966187" + " " + 'icon door',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/strawberry-milk.png",
    "data-mouseover": "/assets/imgs/in/mouseover/strawberry-milk.png",
    className: "jsx-337966187" + " " + 'icon icon--strawberry-milk mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/sprite.png",
    "data-mouseover": "/assets/imgs/in/mouseover/sprite.png",
    className: "jsx-337966187" + " " + 'icon icon--sprite mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/water.png",
    "data-mouseover": "/assets/imgs/in/mouseover/water.png",
    className: "jsx-337966187" + " " + 'icon icon--water-left mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx("div", {
    onMouseOver: doorMouseOverHandler,
    onMouseOut: doorMouseOutHandler,
    className: "jsx-337966187" + " " + 'door-wrapper door-wrapper--right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("img", {
    src: "/assets/imgs/in/refrigerator/door.png",
    "data-mouseover": "/assets/imgs/in/mouseover/door.png",
    className: "jsx-337966187" + " " + 'icon door',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/blue-milk.png",
    "data-mouseover": "/assets/imgs/in/mouseover/blue-milk.png",
    className: "jsx-337966187" + " " + 'icon icon--blue-milk mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/coke.png",
    "data-mouseover": "/assets/imgs/in/mouseover/coke.png",
    className: "jsx-337966187" + " " + 'icon icon--coke mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/refrigerator/water.png",
    "data-mouseover": "/assets/imgs/in/mouseover/water.png",
    className: "jsx-337966187" + " " + 'icon icon--water-right mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), __jsx("img", {
    src: "/assets/imgs/in/mede/tteokbokki.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tteokbokki.png",
    className: "jsx-337966187" + " " + 'icon icon--tteokbokki mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/mede/nemoni.png",
    "data-mouseover": "/assets/imgs/in/mouseover/nemoni.png",
    className: "jsx-337966187" + " " + 'icon icon--nemoni mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/mede/doong.png",
    "data-mouseover": "/assets/imgs/in/mouseover/doong.png",
    className: "jsx-337966187" + " " + 'icon icon--doong mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/mede/cream-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/cream-bread.png",
    className: "jsx-337966187" + " " + 'icon icon--cream-bread mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/mede/red-bean-bread.png",
    "data-mouseover": "/assets/imgs/in/mouseover/red-bean-bread.png",
    className: "jsx-337966187" + " " + 'icon icon--red-bead-bread mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/mede/tibisket.png",
    "data-mouseover": "/assets/imgs/in/mouseover/tibisket.png",
    className: "jsx-337966187" + " " + 'icon icon--tibisket mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/calendar.png",
    "data-mouseover": "/assets/imgs/in/mouseover/calendar.png",
    className: "jsx-337966187" + " " + 'icon icon--calendar mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("img", {
    src: "/assets/imgs/in/install.png",
    "data-mouseover": "/assets/imgs/in/mouseover/install.png",
    className: "jsx-337966187" + " " + 'icon icon--install mouseover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "337966187",
    __self: this
  }, ".Scene3.jsx-337966187{position:relative;width:1920px;height:980px;background-image:url('/assets/imgs/in/background.png');background-repeat:no-repeat;background-size:contain;background-position:center;}.door-wrapper.jsx-337966187{position:absolute;width:241px;height:576px;cursor:pointer;}.door-wrapper--left.jsx-337966187{top:246px;left:288px;}.door-wrapper--right.jsx-337966187{top:246px;left:527px;}.door.jsx-337966187{pointer-events:none;z-index:1;-webkit-transition:-webkit-transform 0.3s ease-in-out;-webkit-transition:transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out;}.icon.jsx-337966187{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;heigth:-webkit-fit-content;heigth:-moz-fit-content;heigth:fit-content;object-fit:contain;object-position:center;cursor:pointer;}.icon--strawberry-milk.jsx-337966187{top:166px;left:24px;}.icon--sprite.jsx-337966187{top:300px;left:32px;}.icon--water-left.jsx-337966187{top:455px;left:161px;}.icon--blue-milk.jsx-337966187{top:167px;left:25px;}.icon--coke.jsx-337966187{top:302px;left:28px;}.icon--water-right.jsx-337966187{top:455px;left:25px;}.icon--tteokbokki.jsx-337966187{top:207px;left:1185px;}.icon--nemoni.jsx-337966187{top:709px;left:818px;}.icon--doong.jsx-337966187{top:391px;left:1196px;}.icon--cream-bread.jsx-337966187{top:475px;left:818px;}.icon--red-bead-bread.jsx-337966187{top:475px;left:976px;}.icon--tibisket.jsx-337966187{top:304px;left:849px;}.icon--calendar.jsx-337966187{top:160px;left:1651px;}.icon--install.jsx-337966187{top:297px;left:1714px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStIa0IsQUFHNkIsQUFVQSxBQU1SLEFBSUEsQUFJVSxBQU1GLEFBT2MsQUFDVCxBQUNJLEFBRUQsQUFDTCxBQUNPLEFBRUQsQUFDSixBQUNELEFBQ00sQUFDRyxBQUNOLEFBRUEsQUFDRCxVQXBDYixBQUlBLEFBZ0JnQyxBQUNULEFBQ0ssQUFFRixBQUNMLEFBQ08sQUFFQyxBQUNMLEFBQ0EsQUFDSyxBQUNHLEFBQ04sQUFFQyxBQUNELFFBcER4QixBQVVELEFBb0JNLEVBTlIsQUFZa0MsQUFDVCxBQUdHLEFBQ0wsQUFDTyxDQXpCMUMsQUFJQSxBQWlCMEMsQUFPSixBQUVLLEFBQ0csQUFDTixDQUxHLEFBRUwsQUFLRyxBQUNELFFBekN6QixBQWN5QixDQXhCekIsWUFXRSxDQVZ3QyxjQVd6RCwyQkFrQnFCLGNBNUJTLDRCQUNKLHdCQUNHLElBMkJSLGFBTnJCLE1BT3lCLElBM0J6QixtQkE0QmlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2NlbmUzOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGltZ3M6IE5vZGVMaXN0T2Y8SFRNTEltYWdlRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcubW91c2VvdmVyJyk7XG5cbiAgICBpbWdzLmZvckVhY2goaW1nID0+IHtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZU92ZXJIYW5kbGVyLCB0cnVlKTtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlT3V0SGFuZGxlciwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaW1ncy5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb3VzZU92ZXJIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VPdXRIYW5kbGVyLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IG1vdXNlT3ZlckhhbmRsZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgICBpbWcuc2V0QXR0cmlidXRlKCdkYXRhLXNyYycsIGltZy5zcmMpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5kYXRhc2V0Wydtb3VzZW92ZXInXSEpO1xuICAgIGltZy5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgaW1nLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTVweCwgLTVweCknO1xuICB9O1xuXG4gIGNvbnN0IG1vdXNlT3V0SGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgaW1nID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW91c2VvdmVyJywgaW1nLnNyYyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nLmRhdGFzZXRbJ3NyYyddISk7XG4gICAgaW1nLnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICBpbWcuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwLCAwKSc7XG4gIH07XG5cbiAgY29uc3QgZG9vck1vdXNlT3ZlckhhbmRsZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgbW92ZSA9IHRhcmdldC5kYXRhc2V0WydsZWZ0J10gPyAnMjIwcHgnIDogJy0yMjBweCc7XG4gICAgY29uc3QgZG9vciA9IHRhcmdldC5jaGlsZE5vZGVzWzBdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgZG9vci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke21vdmV9KWA7XG4gIH07XG5cbiAgY29uc3QgZG9vck1vdXNlT3V0SGFuZGxlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIGNvbnN0IGRvb3IgPSB0YXJnZXQuY2hpbGROb2Rlc1swXSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIGRvb3Iuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdTY2VuZTMnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rvb3Itd3JhcHBlciBkb29yLXdyYXBwZXItLWxlZnQnIGRhdGEtbGVmdFxuICAgICAgICAgICBvbk1vdXNlT3Zlcj17ZG9vck1vdXNlT3ZlckhhbmRsZXJ9XG4gICAgICAgICAgIG9uTW91c2VPdXQ9e2Rvb3JNb3VzZU91dEhhbmRsZXJ9XG4gICAgICA+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGRvb3InXG4gICAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2Rvb3IucG5nJ1xuICAgICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2Rvb3IucG5nJyAvPlxuXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGljb24tLXN0cmF3YmVycnktbWlsayBtb3VzZW92ZXInXG4gICAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL3N0cmF3YmVycnktbWlsay5wbmcnXG4gICAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvc3RyYXdiZXJyeS1taWxrLnBuZycgLz5cblxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBpY29uLS1zcHJpdGUgbW91c2VvdmVyJ1xuICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9zcHJpdGUucG5nJ1xuICAgICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL3Nwcml0ZS5wbmcnIC8+XG5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gaWNvbi0td2F0ZXItbGVmdCBtb3VzZW92ZXInXG4gICAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL3dhdGVyLnBuZydcbiAgICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci93YXRlci5wbmcnIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rvb3Itd3JhcHBlciBkb29yLXdyYXBwZXItLXJpZ2h0J1xuICAgICAgICAgICBvbk1vdXNlT3Zlcj17ZG9vck1vdXNlT3ZlckhhbmRsZXJ9XG4gICAgICAgICAgIG9uTW91c2VPdXQ9e2Rvb3JNb3VzZU91dEhhbmRsZXJ9XG4gICAgICA+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGRvb3InXG4gICAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2Rvb3IucG5nJ1xuICAgICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2Rvb3IucG5nJyAvPlxuXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGljb24tLWJsdWUtbWlsayBtb3VzZW92ZXInXG4gICAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2JsdWUtbWlsay5wbmcnXG4gICAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvYmx1ZS1taWxrLnBuZycgLz5cblxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBpY29uLS1jb2tlIG1vdXNlb3ZlcidcbiAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3IvY29rZS5wbmcnXG4gICAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvY29rZS5wbmcnIC8+XG5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gaWNvbi0td2F0ZXItcmlnaHQgbW91c2VvdmVyJ1xuICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci93YXRlci5wbmcnXG4gICAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvd2F0ZXIucG5nJyAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGljb24tLXR0ZW9rYm9ra2kgbW91c2VvdmVyJ1xuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3R0ZW9rYm9ra2kucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci90dGVva2Jva2tpLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gaWNvbi0tbmVtb25pIG1vdXNlb3ZlcidcbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9uZW1vbmkucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9uZW1vbmkucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBpY29uLS1kb29uZyBtb3VzZW92ZXInXG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvZG9vbmcucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9kb29uZy5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGljb24tLWNyZWFtLWJyZWFkIG1vdXNlb3ZlcidcbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9jcmVhbS1icmVhZC5wbmcnXG4gICAgICAgICAgIGRhdGEtbW91c2VvdmVyPScvYXNzZXRzL2ltZ3MvaW4vbW91c2VvdmVyL2NyZWFtLWJyZWFkLnBuZycgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24gaWNvbi0tcmVkLWJlYWQtYnJlYWQgbW91c2VvdmVyJ1xuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3JlZC1iZWFuLWJyZWFkLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvcmVkLWJlYW4tYnJlYWQucG5nJyAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbiBpY29uLS10aWJpc2tldCBtb3VzZW92ZXInXG4gICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvdGliaXNrZXQucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci90aWJpc2tldC5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGljb24tLWNhbGVuZGFyIG1vdXNlb3ZlcidcbiAgICAgICAgICAgc3JjPScvYXNzZXRzL2ltZ3MvaW4vY2FsZW5kYXIucG5nJ1xuICAgICAgICAgICBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9jYWxlbmRhci5wbmcnIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uIGljb24tLWluc3RhbGwgbW91c2VvdmVyJ1xuICAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1ncy9pbi9pbnN0YWxsLnBuZydcbiAgICAgICAgICAgZGF0YS1tb3VzZW92ZXI9Jy9hc3NldHMvaW1ncy9pbi9tb3VzZW92ZXIvaW5zdGFsbC5wbmcnIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlNjZW5lMyB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxOTIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA5ODBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9pbi9iYWNrZ3JvdW5kLnBuZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb29yLXdyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMjQxcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1NzZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRvb3Itd3JhcHBlci0tbGVmdCB7XG4gICAgICAgICAgdG9wOiAyNDZweDtcbiAgICAgICAgICBsZWZ0OiAyODhweDtcbiAgICAgICAgfVxuICAgICAgICAuZG9vci13cmFwcGVyLS1yaWdodCB7XG4gICAgICAgICAgdG9wOiAyNDZweDtcbiAgICAgICAgICBsZWZ0OiA1MjdweDtcbiAgICAgICAgfVxuICAgICAgICAuZG9vciB7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGhlaWd0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24tLXN0cmF3YmVycnktbWlsayB7IHRvcDogMTY2cHg7IGxlZnQ6IDI0cHg7IH1cbiAgICAgICAgLmljb24tLXNwcml0ZSB7IHRvcDogMzAwcHg7IGxlZnQ6IDMycHg7IH1cbiAgICAgICAgLmljb24tLXdhdGVyLWxlZnQgeyB0b3A6IDQ1NXB4OyBsZWZ0OiAxNjFweDsgfVxuXG4gICAgICAgIC5pY29uLS1ibHVlLW1pbGsgeyB0b3A6IDE2N3B4OyBsZWZ0OiAyNXB4OyB9XG4gICAgICAgIC5pY29uLS1jb2tlIHsgdG9wOiAzMDJweDsgbGVmdDogMjhweDsgfVxuICAgICAgICAuaWNvbi0td2F0ZXItcmlnaHQgeyB0b3A6IDQ1NXB4OyBsZWZ0OiAyNXB4OyB9XG5cbiAgICAgICAgLmljb24tLXR0ZW9rYm9ra2kgeyB0b3A6IDIwN3B4OyBsZWZ0OiAxMTg1cHg7IH1cbiAgICAgICAgLmljb24tLW5lbW9uaSB7IHRvcDogNzA5cHg7IGxlZnQ6IDgxOHB4OyB9XG4gICAgICAgIC5pY29uLS1kb29uZyB7IHRvcDogMzkxcHg7IGxlZnQ6IDExOTZweDsgfVxuICAgICAgICAuaWNvbi0tY3JlYW0tYnJlYWQgeyB0b3A6IDQ3NXB4OyBsZWZ0OiA4MThweDsgfVxuICAgICAgICAuaWNvbi0tcmVkLWJlYWQtYnJlYWQgeyB0b3A6IDQ3NXB4OyBsZWZ0OiA5NzZweDsgfVxuICAgICAgICAuaWNvbi0tdGliaXNrZXQgeyB0b3A6IDMwNHB4OyBsZWZ0OiA4NDlweDsgfVxuXG4gICAgICAgIC5pY29uLS1jYWxlbmRhciB7IHRvcDogMTYwcHg7IGxlZnQ6IDE2NTFweDsgfVxuICAgICAgICAuaWNvbi0taW5zdGFsbCB7IHRvcDogMjk3cHg7IGxlZnQ6IDE3MTRweDsgfVxuICAgICAgYH1cblxuICAgICAgPC9zdHlsZT5cbiAgICA8L21haW4+XG4gIClcbn07XG4gICAgICBcbmV4cG9ydCBkZWZhdWx0IFNjZW5lMztcbiJdfQ== */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene3.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene3);

/***/ })

})
//# sourceMappingURL=scene3.js.645d9338b46363832bec.hot-update.js.map