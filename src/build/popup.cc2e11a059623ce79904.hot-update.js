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
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/List/List.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/ListItem/ListItem.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Typography/Typography.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Divider/Divider.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/TextField/TextField.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ThumbUpOffAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ThumbUpOffAlt */ "./node_modules/@mui/icons-material/ThumbUpOffAlt.js");
/* harmony import */ var _mui_icons_material_ThumbDownOffAlt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/ThumbDownOffAlt */ "./node_modules/@mui/icons-material/ThumbDownOffAlt.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./src/popup/Login.jsx");
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
  const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [ratio, setRatio] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [rerender, setRerender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const GET_COMMENTS = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
    query getComments($location: String!) {
      getComments(location: $location) {
        _id
        username
        text
        time
        reviews {
          _id
          username
          isLiked
          location
        }
      }
    }
  `;
  const CREATE_COMMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
    mutation createComment($commentText: CreateCommentInput!) {
      createComment(commentText: $commentText) {
        username
        text
        time
      }
    }
  `;
  const CREATE_REACTION = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
    mutation createReaction($id: String!, $reaction: UpdateCommentInput!) {
      createReaction(_id: $id, reaction: $reaction) {
        username
        isLiked
        location
      }
    }
  `;
  const GET_REVIEW = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
    query getReview($location: String!) {
      getReview(location: $location) {
        username
        isLiked
        location
      }
    }
  `;
  const CREATE_REVIEW = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
    mutation createREVIEW($createReviewInput: CreateReviewInput!) {
      createReview(createReviewInput: $createReviewInput) {
        username
        isLiked
        location
      }
    }
  `;
  const [createComment, {
    data: data2
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(CREATE_COMMENT, {
    refetchQueries: [{
      query: GET_COMMENTS,
      variables: {
        location
      }
    }]
  });
  const [createReview, {
    data: data3
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(CREATE_REVIEW, {
    refetchQueries: [{
      query: GET_REVIEW,
      variables: {
        location
      }
    }]
  });
  const [createReaction, {
    data: data4
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(CREATE_REACTION);
  const {
    data,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(GET_COMMENTS, {
    fetchPolicy: "no-cache",
    nextFetchPolicy: "network-only",
    variables: {
      location
    }
  });
  const {
    data: review,
    refetch: refetch2
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(GET_REVIEW, {
    variables: {
      location
    }
  });
  console.log("data", data);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      const url = tabs[0].url.split("/")[2];
      console.log("url", url);
      setLocation(url);
      console.log("location:", location);
      if (data) setComments(data.getComments);
      if (review) setRatio(review.getReview);
    });
  }, [location, data, review]);
  const handleUserInput = e => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };
  const submit = async () => {
    createComment({
      variables: {
        commentText: {
          time: new Date().toISOString(),
          location,
          isLiked: true,
          username: "choenix",
          text: userInput
        }
      }
    });
    setUserInput("");
    setComments((await refetch({
      location
    })).data.getComments);
  };

  // if (error) return <p>`Error: ${error.message}</p>
  const likes = ratio?.reduce((acc, el) => el.isLiked ? acc + 1 : acc, 0);
  const reviews = ratio?.length;
  console.log(likes, reviews);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      m: 2,
      display: "flex",
      justifyContent: "spaceBetween",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "100%",
      minWidth: "20rem",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      flexGrow: 0,
      flexShrink: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_8__["default"], {
    alt: "Remy Sharp",
    src: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Adam Lambert")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Review score: ", comments.isLiked), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: async () => {
      createReview({
        variables: {
          createReviewInput: {
            username: "Adam Lambert",
            isLiked: true,
            location
          }
        }
      });
      setRatio((await refetch2()).data.getReview);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ThumbUpOffAlt__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: review?.isLiked ? "success" : "primary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: async () => {
      createReview({
        variables: {
          createReviewInput: {
            username: "Adam Lambert",
            isLiked: false,
            location
          }
        }
      });
      setRatio((await refetch2()).data.getReview);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ThumbDownOffAlt__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: review?.isLiked ? "primary " : "error"
  }))), reviews ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      backgroundColor: 'red',
      padding: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: `${likes / reviews * 100}%`,
      height: '5px',
      backgroundColor: 'green'
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      mt: 4,
      flexGrow: 1,
      overflowY: "scroll"
    },
    spacing: "2rem",
    maxHeight: "10rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper"
    }
  }, comments ? comments.map(comment => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_13__["default"], {
      alignItems: "flex-start",
      key: comment._id,
      disablePadding: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_15__["default"], {
      primary: `${comment.username} - ${moment__WEBPACK_IMPORTED_MODULE_1___default()(comment.time).format("HH:mm DD MMM")}`,
      secondary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_16__["default"], {
        sx: {
          wordWrap: "break-word"
        }
      }, comment.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: () => {
          createReaction({
            variables: {
              id: comment._id,
              reaction: {
                username: "Adam Lambert",
                isLiked: true,
                location
              }
            }
          });
          console.log("hui");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ThumbUpOffAlt__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: review?.isLiked ? "primary " : "error"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: () => {
          createReaction({
            variables: {
              id: comment._id,
              reaction: {
                username: "Adam Lambert",
                isLiked: false,
                location
              }
            }
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ThumbDownOffAlt__WEBPACK_IMPORTED_MODULE_11__["default"], {
        color: review?.isLiked ? "primary " : "error"
      })))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_17__["default"], {
      key: `d${comment._id}`
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      flexGrow: 0,
      flexShrink: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_19__["default"]
  // error={error}
  , {
    value: userInput,
    onChange: handleUserInput,
    variant: "outlined",
    label: "Type your comment here",
    sx: {
      width: "100%",
      mt: "2rem"
    },
    fullWidth: true,
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "contained",
    sx: {
      mt: 1
    },
    onClick: submit,
    size: "small",
    color: "inherit"
  }, "Send")));
};
__signature__(Popup, "useState{[userInput, setUserInput](\"\")}\nuseState{[loading, setLoading](false)}\nuseState{[comments, setComments]([])}\nuseState{[ratio, setRatio]([])}\nuseState{[rerender, setRerender](false)}\nuseState{[location, setLocation](\"\")}\nuseMutation{[createComment, { data: data2 }]}\nuseMutation{[createReview, { data: data3 }]}\nuseMutation{[createReaction, {data: data4}]}\nuseQuery{{ data, refetch }}\nuseQuery{{ data: review, refetch: refetch2 }}\nuseEffect{}", () => [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery]);
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
/******/ 	__webpack_require__.h = () => ("32034d5189b77af6eadc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.cc2e11a059623ce79904.hot-update.js.map