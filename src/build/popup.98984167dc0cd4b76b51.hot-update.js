globalThis["webpackHotUpdatechrome_extension"]("popup",{

/***/ "./src/popup/Popup.jsx":
/*!*****************************!*\
  !*** ./src/popup/Popup.jsx ***!
  \*****************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/tamaranikitina/Documents/chrome-extension/src/popup/Popup.jsx: Identifier 'refetch' has already been declared. (104:24)\n\n\u001b[0m \u001b[90m 102 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 103 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 104 |\u001b[39m   \u001b[36mconst\u001b[39m { data\u001b[33m:\u001b[39m review\u001b[33m,\u001b[39m refetch } \u001b[33m=\u001b[39m useQuery(\u001b[33mGET_REVIEW\u001b[39m\u001b[33m,\u001b[39m { variables\u001b[33m:\u001b[39m { location } })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 105 |\u001b[39m   console\u001b[33m.\u001b[39mlog(\u001b[32m\"data\"\u001b[39m\u001b[33m,\u001b[39m data)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 106 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 107 |\u001b[39m   useEffect(() \u001b[33m=>\u001b[39m {\u001b[0m\n    at instantiate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:67:32)\n    at constructor (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:364:12)\n    at JSXParserMixin.raise (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:3364:19)\n    at ScopeHandler.checkRedeclarationInScope (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:1586:19)\n    at ScopeHandler.declareName (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:1557:12)\n    at JSXParserMixin.declareNameFromIdentifier (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10756:16)\n    at JSXParserMixin.checkIdentifier (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10752:12)\n    at JSXParserMixin.checkLVal (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10686:12)\n    at JSXParserMixin.checkLVal (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10721:14)\n    at JSXParserMixin.checkLVal (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10721:14)\n    at JSXParserMixin.parseVarId (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13604:10)\n    at JSXParserMixin.parseVar (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13577:12)\n    at JSXParserMixin.parseVarStatement (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13399:10)\n    at JSXParserMixin.parseStatementContent (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12986:23)\n    at JSXParserMixin.parseStatement (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12917:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13497:25)\n    at JSXParserMixin.parseBlockBody (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13489:10)\n    at JSXParserMixin.parseBlock (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13477:10)\n    at JSXParserMixin.parseFunctionBody (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12287:24)\n    at JSXParserMixin.parseArrowExpression (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12260:10)\n    at JSXParserMixin.parseParenAndDistinguishExpression (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11829:12)\n    at JSXParserMixin.parseExprAtom (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11446:23)\n    at JSXParserMixin.parseExprAtom (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:7238:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11171:23)\n    at JSXParserMixin.parseUpdate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11153:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:11127:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10956:61)\n    at JSXParserMixin.parseExprOps (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10962:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10937:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10895:21)\n    at /Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10863:39\n    at JSXParserMixin.allowInAnd (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12635:16)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:10863:17)\n    at JSXParserMixin.parseVar (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13578:91)\n    at JSXParserMixin.parseVarStatement (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13399:10)\n    at JSXParserMixin.parseStatementContent (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12986:23)\n    at JSXParserMixin.parseStatement (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12917:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13497:25)\n    at JSXParserMixin.parseBlockBody (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:13489:10)\n    at JSXParserMixin.parseProgram (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12832:10)\n    at JSXParserMixin.parseTopLevel (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:12822:25)\n    at JSXParserMixin.parse (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:14674:10)\n    at parse (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/parser/lib/index.js:14716:38)\n    at parser (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/core/lib/transformation/normalize-file.js:66:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/Users/tamaranikitina/Documents/chrome-extension/node_modules/@babel/core/lib/transform.js:22:41)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("503391a1f1122d80df85")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.98984167dc0cd4b76b51.hot-update.js.map