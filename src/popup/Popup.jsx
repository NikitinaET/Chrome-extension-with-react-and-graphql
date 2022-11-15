/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Container,
  TextField,
  Stack,
  Button,
  List,
  CircularProgress,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Divider,
  LinearProgress,
  IconButton,
} from "@mui/material/";
import moment from "moment";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Route, Routes } from "react-router";
import Login from "./Login";

const Popup = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [ratio, setRatio] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [location, setLocation] = useState("");

  const GET_COMMENTS = gql`
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

  const CREATE_COMMENT = gql`
    mutation createComment($commentText: CreateCommentInput!) {
      createComment(commentText: $commentText) {
        username
        text
        time
      }
    }
  `;

  const CREATE_REACTION = gql`
    mutation createReaction($id: String!, $reaction: UpdateCommentInput!) {
      createReaction(_id: $id, reaction: $reaction) {
        username
        isLiked
        location
      }
    }
  `;


  const GET_REVIEW = gql`
    query getReview($location: String!) {
      getReview(location: $location) {
        username
        isLiked
        location
      }
    }
  `;

  const CREATE_REVIEW = gql`
    mutation createREVIEW($createReviewInput: CreateReviewInput!) {
      createReview(createReviewInput: $createReviewInput) {
        username
        isLiked
        location
      }
    }
  `;

  
  const [createComment, { data: data2 }] = useMutation(CREATE_COMMENT, {
    refetchQueries: [{ query: GET_COMMENTS, variables: { location } }],
  });
  const [createReview, { data: data3 }] = useMutation(CREATE_REVIEW, {
    refetchQueries: [{query: GET_REVIEW, variables: { location }}]
  });
  const [createReaction, {data: data4}] = useMutation(CREATE_REACTION)

  const { data, refetch } = useQuery(GET_COMMENTS, {
    fetchPolicy: "no-cache",
    nextFetchPolicy: "network-only",
    variables: { location },
  });

  const { data: review, refetch: refetch2 } = useQuery(GET_REVIEW, { variables: { location } });
  console.log("data", data);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url.split("/")[2];
      console.log("url", url);
      setLocation(url);
      console.log("location:", location);
      if (data) setComments(data.getComments);
      if (review) setRatio(review.getReview);
    }); 
  }, [location, data, review]);

  const handleUserInput = (e) => {
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
          text: userInput,
        },
      },
    });
    setUserInput("");
    setComments((await refetch({ location })).data.getComments);
  };

  // if (error) return <p>`Error: ${error.message}</p>
  const likes = ratio?.reduce((acc, el) => el.isLiked ? acc + 1 : acc, 0);
  const reviews = ratio?.length;
  console.log(likes, reviews)
  return (
    <Container
      sx={{
        m: 2,
        display: "flex",
        justifyContent: "spaceBetween",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "100%",
        minWidth: "20rem",
        height: "100%",
      }}
    >
      <Stack
        sx={{
          flexGrow: 0,
          flexShrink: 0,
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="" />
          <p>Adam Lambert</p>
        </Stack>
        <p>Review score: {comments.isLiked}</p>
        <Stack direction="row" spacing={2}>
          <IconButton
            onClick={async () => {
              createReview({
                variables: {
                  createReviewInput: {
                    username: "Adam Lambert",
                    isLiked: true,
                    location,
                  },
                },
              });
              setRatio((await refetch2()).data.getReview);
            }}
          >
            <ThumbUpOffAltIcon
              color={review?.isLiked ? "success" : "primary"}
            />
          </IconButton>

          <IconButton
            onClick={async () => {
              createReview({
                variables: {
                  createReviewInput: {
                    username: "Adam Lambert",
                    isLiked: false,
                    location,
                  },
                },
              });
              setRatio((await refetch2()).data.getReview);
            }}
          >
            <ThumbDownOffAltIcon
              color={review?.isLiked ? "primary " : "error"}
            />
          </IconButton>
        </Stack>

        {/* <LinearProgress color="success" value={comments.isLiked} /> */}
        {reviews ? 
        <><div style={{backgroundColor: 'red', padding: 0}}>
        <div style={{width: `${likes / reviews * 100}%`, height: '5px', backgroundColor: 'green'}}></div></div></> :
        <></>
        }
        
      </Stack>

      <Stack
        sx={{
          mt: 4,
          flexGrow: 1,
          overflowY: "scroll",
        }}
        spacing={"2rem"}
        maxHeight={"10rem"}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {comments ? (
            comments.map((comment) => {
              return (
                <>
                  <ListItem
                    alignItems="flex-start"
                    key={comment._id}
                    disablePadding
                  >
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>

                    <ListItemText
                      primary={`${comment.username} - ${moment(
                        comment.time
                      ).format("HH:mm DD MMM")}`}
                      secondary={
                        <>
                          <Typography sx={{ wordWrap: "break-word" }}>
                            {comment.text}
                          </Typography>
                          <IconButton
                            onClick={() => {
                              createReaction({
                                variables: {
                                  id: comment._id,
                                  reaction: {
                                    username: "Adam Lambert",
                                    isLiked: true,
                                    location,
                                  },
                                },
                              });
                              console.log("hui");
                            }}
                          >
                            <ThumbUpOffAltIcon
                              color={review?.isLiked ? "primary " : "error"}
                            />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              createReaction({
                                variables: {
                                  id: comment._id,
                                  reaction: {
                                    username: "Adam Lambert",
                                    isLiked: false,
                                    location,
                                  },
                                },
                              });
                            }}
                          >
                            <ThumbDownOffAltIcon
                              color={review?.isLiked ? "primary " : "error"}
                            />
                          </IconButton>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider key={`d${comment._id}`} />
                </>
              );
            })
          ) : (
            <CircularProgress
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          )}
        </List>
      </Stack>

      <Stack
        sx={{
          flexGrow: 0,
          flexShrink: 0,
        }}
      >
        <TextField
          // error={error}
          value={userInput}
          onChange={handleUserInput}
          variant="outlined"
          label="Type your comment here"
          sx={{ width: "100%", mt: "2rem" }}
          fullWidth
          autoComplete="off"
        />
        <Button
          variant="contained"
          sx={{ mt: 1 }}
          onClick={submit}
          size="small"
          color="inherit"
        >
          Send
        </Button>
      </Stack>
    </Container>
  );
};

export default Popup;
