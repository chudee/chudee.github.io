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
    console.log(imgs);

    if (imgs) {
      imgs.addEventListener('mouseover', mouseOverHandler, true);
    } // document.addEventListener('mouseleave', mouseLeaveHandler, true);


    return function () {
      if (imgs) {
        imgs.removeEventListener('mouseover', mouseOverHandler, true);
      }
    };
  }, []);

  var mouseOverHandler = function mouseOverHandler(e) {
    e.preventDefault();
    var img = e.target;
    console.log(img.src, img.dataset['mouseover']);
    console.log('mouseOverHandler');
    img.setAttribute('src', img.dataset['mouseover']);
  };

  var mouseLeaveHandler = function mouseLeaveHandler(e) {
    e.preventDefault();
    console.log('mouseLeaveHandler');
  };

  var handleMouseOver = function handleMouseOver(e, targetSrc) {
    e.preventDefault();
    var target = e.target;
    target.src = targetSrc;
    console.log(target.src);
    console.log(e.target);
    console.log(e);
  };

  return __jsx("main", {
    className: "jsx-3214475012" + " " + 'Scene3',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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
      lineNumber: 43
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3214475012",
    __self: this
  }, ".Scene3.jsx-3214475012{display:block;position:fixed;width:1920px;height:980px;background-image:url('/assets/imgs/in/background.png');background-repeat:no-repeat;background-size:contain;background-position:center;}.icon.jsx-3214475012{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;heigth:-webkit-fit-content;heigth:-moz-fit-content;heigth:fit-content;object-fit:contain;object-position:center;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHVkZWUvd29ya3NwYWNlL2p1aGVlLXBvcnRmb2xpby9wYWdlcy9zY2VuZTMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEa0IsQUFHeUIsQUFVSSxjQVRILElBVUcsV0FUTCxhQUNBLGFBQzBDLDhCQVFwQyx5QkFQUyw0QkFDSixpQkFPTCxPQU5RLFlBT0osZUFOekIsUUFPaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2NodWRlZS93b3Jrc3BhY2UvanVoZWUtcG9ydGZvbGlvL3BhZ2VzL3NjZW5lMy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY2VuZTM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICBjb25zb2xlLmxvZyhpbWdzKTtcblxuICAgIGlmIChpbWdzKSB7XG4gICAgICBpbWdzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vdXNlT3ZlckhhbmRsZXIsIHRydWUpO1xuICAgIH1cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbW91c2VMZWF2ZUhhbmRsZXIsIHRydWUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChpbWdzKSB7XG4gICAgICAgIGltZ3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVySGFuZGxlciwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgbW91c2VPdmVySGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGltZyA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgY29uc29sZS5sb2coaW1nLnNyYywgaW1nLmRhdGFzZXRbJ21vdXNlb3ZlciddKTtcbiAgICBjb25zb2xlLmxvZygnbW91c2VPdmVySGFuZGxlcicpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5kYXRhc2V0Wydtb3VzZW92ZXInXSEpO1xuICB9O1xuICBjb25zdCBtb3VzZUxlYXZlSGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdtb3VzZUxlYXZlSGFuZGxlcicpO1xuICB9O1xuICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW1hZ2VFbGVtZW50PiwgdGFyZ2V0U3JjOiBzdHJpbmcpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICB0YXJnZXQuc3JjID0gdGFyZ2V0U3JjO1xuICAgIGNvbnNvbGUubG9nKHRhcmdldC5zcmMpO1xuXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J1NjZW5lMyc+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbicgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL3N0cmF3YmVycnktbWlsay5wbmcnIHN0eWxlPXt7IHRvcDogJzQxNnB4JywgbGVmdDogJzMxMnB4JyB9fSBkYXRhLW1vdXNlb3Zlcj0nL2Fzc2V0cy9pbWdzL2luL21vdXNlb3Zlci9zdHJhd2JlcnJ5LW1pbGsucG5nJyAvPlxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9ibHVlLW1pbGsucG5nJyBzdHlsZT17eyB0b3A6ICc0MTNweCcsIGxlZnQ6ICc1NTJweCcgfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cbiAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivc3ByaXRlLnBuZycgc3R5bGU9e3sgdG9wOiAnNTQ2cHgnLCBsZWZ0OiAnMzIwcHgnIH19IG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9IC8+Ki99XG4gICAgICB7Lyo8aW1nIGNsYXNzTmFtZT0naWNvbicgc3JjPScvYXNzZXRzL2ltZ3MvaW4vcmVmcmlnZXJhdG9yL2Nva2UucG5nJyBzdHlsZT17eyB0b3A6ICc1NDhweCcsIGxlZnQ6ICc1NTVweCcgfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cbiAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivd2F0ZXIucG5nJyBzdHlsZT17eyB0b3A6ICc3MDFweCcsIGxlZnQ6ICc0NDlweCcgfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cbiAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3Ivd2F0ZXIucG5nJyBzdHlsZT17eyB0b3A6ICc3MDFweCcsIGxlZnQ6ICc1NTJweCcgfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cbiAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9yZWZyaWdlcmF0b3IvZG9vci5wbmcnIHN0eWxlPXt7IHRvcDogJzI0NnB4JywgbGVmdDogJzI4OHB4JyB9fSBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSAvPiovfVxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL3JlZnJpZ2VyYXRvci9kb29yLnBuZycgc3R5bGU9e3sgdG9wOiAnMjQ2cHgnLCBsZWZ0OiAnNTI3cHgnIH19IG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9IC8+Ki99XG4gICAgICB7Lyo8aW1nIGNsYXNzTmFtZT0naWNvbicgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS90dGVva2Jva2tpLnBuZycgc3R5bGU9e3sgdG9wOiAnMjA3cHgnLCBsZWZ0OiAnMTE4NXB4JyB9fSBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSAvPiovfVxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvbmVtb25pLnBuZycgc3R5bGU9e3sgdG9wOiAnNzA5cHgnLCBsZWZ0OiAnODE4cHgnIH19IG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9IC8+Ki99XG4gICAgICB7Lyo8aW1nIGNsYXNzTmFtZT0naWNvbicgc3JjPScvYXNzZXRzL2ltZ3MvaW4vbWVkZS9kb29uZy5wbmcnIHN0eWxlPXt7IHRvcDogJzM5MXB4JywgbGVmdDogJzExOTZweCd9fSBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSAvPiovfVxuICAgICAgey8qPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz0nL2Fzc2V0cy9pbWdzL2luL21lZGUvY3JlYW0tYnJlYWQucG5nJyBzdHlsZT17eyB0b3A6ICc0NzVweCcsIGxlZnQ6ICc4MThweCcgfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cbiAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3JlZC1iZWFuLWJyZWFkLnBuZycgc3R5bGU9e3sgdG9wOiAnNDc1cHgnLCBsZWZ0OiAnOTc2cHgnfX0gb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gLz4qL31cbiAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPSdpY29uJyBzcmM9Jy9hc3NldHMvaW1ncy9pbi9tZWRlL3RpYmlza2V0LnBuZycgc3R5bGU9e3sgdG9wOiAnMzA0cHgnLCBsZWZ0OiAnODQ5cHgnIH19IG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9IC8+Ki99XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlNjZW5lMyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHdpZHRoOiAxOTIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA5ODBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9pbi9iYWNrZ3JvdW5kLnBuZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICBoZWlndGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuXG4gICAgICA8L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKVxufTtcbiAgICAgIFxuZXhwb3J0IGRlZmF1bHQgU2NlbmUzO1xuIl19 */\n/*@ sourceURL=/Users/chudee/workspace/juhee-portfolio/pages/scene3.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene3);

/***/ })

})
//# sourceMappingURL=scene3.js.af4b2b1d82d92f75c4de.hot-update.js.map