globalThis["webpackHotUpdatechrome_extension"]("popup",{

/***/ "./src/popup/Popup.jsx":
/*!*****************************!*\
  !*** ./src/popup/Popup.jsx ***!
  \*****************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/tamaranikitina/Documents/chrome-extension/src/popup/Popup.jsx: Unexpected token (65:49)\n\n\u001b[0m \u001b[90m 63 |\u001b[39m       setUrl(tabs[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39murl\u001b[33m.\u001b[39msplit(\u001b[32m'/'\u001b[39m)[\u001b[35m2\u001b[39m])\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 64 |\u001b[39m       console\u001b[33m.\u001b[39mlog(\u001b[32m'url'\u001b[39m\u001b[33m,\u001b[39m url)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 65 |\u001b[39m       axios\u001b[33m.\u001b[39m\u001b[36mget\u001b[39m(\u001b[32m`http://localhost:3000/graphql/${}`\u001b[39m)\u001b[33m.\u001b[39mthen(res \u001b[33m=>\u001b[39m console\u001b[33m.\u001b[39mlog(\u001b[32m'res'\u001b[39m\u001b[33m,\u001b[39m res))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 66 |\u001b[39m       setReviews(data)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 67 |\u001b[39m       \u001b[90m// axios.get(`http://localhost:3000/graphql/${encodeURIComponent(url)}`)\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 68 |\u001b[39m       \u001b[90m//   .then((res) => {\u001b[39m\u001b[0m\n    at instantiate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:67:32)\n    at constructor (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:364:12)\n    at JSXParserMixin.raise (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:3364:19)\n    at JSXParserMixin.unexpected (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:3397:16)\n    at JSXParserMixin.parseExprAtom (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11568:22)\n    at JSXParserMixin.parseExprAtom (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:7238:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11171:23)\n    at JSXParserMixin.parseUpdate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11153:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11127:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10956:61)\n    at JSXParserMixin.parseExprOps (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10962:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10937:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10895:21)\n    at JSXParserMixin.parseExpressionBase (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10845:23)\n    at /Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10840:39\n    at JSXParserMixin.allowInAnd (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12640:12)\n    at JSXParserMixin.parseExpression (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10840:17)\n    at JSXParserMixin.parseTemplateSubstitution (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11964:17)\n    at JSXParserMixin.parseTemplate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11956:34)\n    at JSXParserMixin.parseExprAtom (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11476:21)\n    at JSXParserMixin.parseExprAtom (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:7238:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11171:23)\n    at JSXParserMixin.parseUpdate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11153:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11127:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10956:61)\n    at JSXParserMixin.parseExprOps (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10962:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10937:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10895:21)\n    at /Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10863:39\n    at JSXParserMixin.allowInAnd (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12640:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10863:17)\n    at JSXParserMixin.parseExprListItem (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12380:18)\n    at JSXParserMixin.parseCallExpressionArguments (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11367:22)\n    at JSXParserMixin.parseCoverCallAndAsyncArrowHead (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11279:29)\n    at JSXParserMixin.parseSubscript (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11210:19)\n    at JSXParserMixin.parseSubscripts (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11184:19)\n    at JSXParserMixin.parseExprSubscripts (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11175:17)\n    at JSXParserMixin.parseUpdate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11153:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11127:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10956:61)\n    at JSXParserMixin.parseExprOps (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10962:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10937:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10895:21)\n    at JSXParserMixin.parseExpressionBase (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10845:23)\n    at /Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10840:39\n    at JSXParserMixin.allowInAnd (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12635:16)\n    at JSXParserMixin.parseExpression (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10840:17)\n    at JSXParserMixin.parseStatementContent (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13043:23)\n    at JSXParserMixin.parseStatement (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12917:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13497:25)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7a0614a23e82ab1681bc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.7b9a48682bfd63575302.hot-update.js.map