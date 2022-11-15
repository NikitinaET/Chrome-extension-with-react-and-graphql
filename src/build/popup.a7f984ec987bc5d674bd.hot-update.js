"use strict";
globalThis["webpackHotUpdatechrome_extension"]("popup",{

/***/ "./src/popup/index.jsx":
/*!*****************************!*\
  !*** ./src/popup/index.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup */ "./src/popup/Popup.jsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/link/http/HttpLink.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/ApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/link/core/from.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/context/ApolloProvider.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./src/popup/Login.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/error */ "./node_modules/@apollo/client/link/error/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__.onError)(({
  graphQLErrors,
  networkError
}) => {
  if (graphQLErrors) graphQLErrors.forEach(({
    message,
    locations,
    path
  }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.HttpLink({
  uri: 'http://localhost:3001/graphql'
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_8__.InMemoryCache(),
  connectToDevTools: true,
  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.from)([errorLink, httpLink])
});
(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_10__.ApolloProvider, {
  client: client
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popup__WEBPACK_IMPORTED_MODULE_2__["default"], null)), window.document.querySelector('#app-container'));

// if (module.hot) module.hot.accept();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(errorLink, "errorLink", "/Users/tamaranikitina/Documents/chrome-extension/src/popup/index.jsx");
  reactHotLoader.register(httpLink, "httpLink", "/Users/tamaranikitina/Documents/chrome-extension/src/popup/index.jsx");
  reactHotLoader.register(client, "client", "/Users/tamaranikitina/Documents/chrome-extension/src/popup/index.jsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aecf60527197571f97a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.a7f984ec987bc5d674bd.hot-update.js.map