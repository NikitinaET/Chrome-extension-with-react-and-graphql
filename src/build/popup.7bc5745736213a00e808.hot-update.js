"use strict";
globalThis["webpackHotUpdatechrome_extension"]("popup",{

/***/ "./src/popup/Popup.jsx":
/*!*****************************!*\
  !*** ./src/popup/Popup.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Container/Container.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Stack/Stack.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Avatar/Avatar.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/List/List.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/TextField/TextField.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_ThumbUpOffAlt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ThumbUpOffAlt */ "./node_modules/@mui/icons-material/ThumbUpOffAlt.js");
/* harmony import */ var _mui_icons_material_ThumbDownOffAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ThumbDownOffAlt */ "./node_modules/@mui/icons-material/ThumbDownOffAlt.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
/* eslint-disable no-undef */







const Popup = () => {
  const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [rerender, setRerender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const GET_COMMENTS = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query getComments($url: String!) {
    getComments(location: $url) {
      _id
      username
      text
      reviews
    }
  }
`;
  const CRETE_COMMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
mutation createComment($input: createCommentInput!){
  createComment( createCommentInput: $input){
    text
    time
    username
    reviews
  }
}`;
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_COMMENTS, {
    variables: {
      url
    }
  });
  console.log('data', data);
  console.log('error', error);
  const {
    sendComment
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(CRETE_COMMENT, {
    variables: {}
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //setLoading(true);
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, tabs => {
      setUrl(tabs[0].url.split('/')[2]);
      console.log('url', url);
      //axios.get(`http://localhost:3000/graphql/${encodeURIComponent(url)}`).then(res => console.log('res', res));
      setReviews(data);
      // axios.get(`http://localhost:3000/graphql/${encodeURIComponent(url)}`)
      //   .then((res) => {
      //     const reviews = res.data;
      //     console.log('reviews', reviews)
      //     const temp = [];
      //     reviews.forEach(review => {
      //       temp.push(<ListItem alignItems='flex-start' key={review._id}>
      //         <ListItemAvatar>
      //           <Avatar />
      //         </ListItemAvatar>
      //         <ListItemText
      //           primary={`${review.username} - ${moment(review.time).format('HH:mm DD MMM')}`}
      //           secondary={<Typography
      //             sx={{ wordWrap: 'break-word' }}>{review.comment}</Typography>}
      //         />
      //       </ListItem>, <Divider />);
      //     });
      //     temp.length > 0 ? setReviews(temp) : setReviews(<Typography sx={{ display: 'flex', alignContent: 'center' }}>No
      //       reviews!</Typography>);
      //     //setLoading(false);
    });

    //});
  }, [url, data]);
  const handleUserInput = e => {
    setUserInput(e.target.value);
  };
  const submit = async () => {
    //setLoading(true);
    // chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    //   setUrl(tabs[0].url.split('/')[2]);
    // axios.post('http://localhost:3000/graphql', {
    //   time: new Date().toISOString(),
    //   location: url,
    //   isLiked: true,
    //   username: 'choenix',
    //   comment: userInput,
    // })
    //   .then((res) => {
    //     //setLoading(false);
    //     setUserInput('');
    //     setRerender(!rerender);
    //     setError(false);
    //   })
    //   .catch((err) => {
    //     setError(true);
    //     //setLoading(false);
    //   });
    sendComment({
      text: userInput,
      time: new Date(),
      username: 'Chel',
      location: url
    });
    setRerender(!rerender);
    //});
  };

  // if (error) return <p>`Error: ${error.message}</p>
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      m: 2,
      display: 'flex',
      justifyContent: 'spaceBetween',
      flexWrap: 'wrap',
      width: '100%',
      minWidth: '20rem',
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_8__["default"], {
    alt: "Remy Sharp",
    src: "/static/images/avatar/1.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Adam Lambert")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ThumbUpOffAlt__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "success"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ThumbDownOffAlt__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "error"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      mt: 4
    },
    spacing: '2rem',
    maxHeight: '10rem'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper'
    }
  }, loading ? reviews : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_13__["default"]
  // error={error}
  , {
    value: userInput,
    onChange: handleUserInput,
    variant: "outlined",
    label: "Type your comment here",
    sx: {
      width: '100%'
    },
    fullWidth: true,
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "contained",
    sx: {
      mt: 1
    },
    onClick: submit,
    size: "small",
    color: "inherit"
  }, "Send"));
};
__signature__(Popup, "useState{[userInput, setUserInput]('')}\nuseState{[reviews, setReviews]([])}\nuseState{[rerender, setRerender](false)}\nuseState{[url, setUrl]('')}\nuseQuery{{data, error, loading}}\nuseMutation{{sendComment}}\nuseEffect{}", () => [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation]);
const _default = Popup;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Popup, "Popup", "/Users/tamaranikitina/Documents/chrome-extension/src/popup/Popup.jsx");
  reactHotLoader.register(_default, "default", "/Users/tamaranikitina/Documents/chrome-extension/src/popup/Popup.jsx");
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
/******/ 	__webpack_require__.h = () => ("7146e1540671788cdc65")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.7bc5745736213a00e808.hot-update.js.map