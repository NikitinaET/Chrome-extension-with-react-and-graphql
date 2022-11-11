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
  FormControl,
} from '@mui/material/';
import axios from 'axios';
import moment from 'moment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useQuery, useMutation, gql } from '@apollo/client';
 
const Popup = () => {
  const [userInput, setUserInput] = useState('');
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [url, setUrl] = useState('');

  const GET_COMMENTS = gql`
  query getComments($url: String!) {
    getComments(location: $url) {
      _id
      username
      text
      reviews
    }
  }
`;
const CRETE_COMMENT = gql`
mutation createComment($input: createCommentInput!){
  createComment( createCommentInput: $input){
    text
    time
    username
    reviews
  }
}`;
  
const {data, error, loading} = useQuery(GET_COMMENTS, {variables: {url}});
console.log('data',data);
console.log('error',error);
const {sendComment} = useMutation(CRETE_COMMENT, {variables: {}});



  useEffect(() => {
    //setLoading(true);
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      setUrl(tabs[0].url.split('/')[2]);
      console.log('url', url)
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

  const handleUserInput = (e) => {
    setUserInput(e.target.value)};

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
        location: url,
      });
      
      setRerender(!rerender);
    //});
  };

  // if (error) return <p>`Error: ${error.message}</p>
  return (
      <Container sx={{
        m: 2,
        display: 'flex',
        justifyContent: 'spaceBetween',
        flexWrap: 'wrap',
        width: '100%',
        minWidth: '20rem',
        height: '100%'
        }}>
        <Stack>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p>Adam Lambert</p>
            
           </Stack>
           {/* <p>Review score: {reviews.likes + reviews.dislikes}</p> */}
           <Stack direction="row" spacing={2}>
            <ThumbUpOffAltIcon color="success"/>
            <ThumbDownOffAltIcon color="error"/>
           </Stack>

           {/* <LinearProgress color="success" value={reviews.likes}/> */}
        </Stack>   
        
        <Stack sx={{ mt: 4 }} spacing={'2rem'} maxHeight={'10rem'}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {loading ? reviews :
              <CircularProgress sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
              }
          </List>
        </Stack>
        {/* {reviews.length > 0 ? reviews.map(review => (
          <ListItemAvatar>
      //           <Avatar />
      //         </ListItemAvatar>
      //         <ListItemText
      //           primary={`${review.username} - ${moment(review.time).format('HH:mm DD MMM')}`}
      //           secondary={<Typography
      //             sx={{ wordWrap: 'break-word' }}>{review.comment}</Typography>}
      //         />
      //       </ListItem>, <Divider />)
        )): setReviews(<Typography sx={{ display: 'flex', alignContent: 'center' }}>No reviews!</Typography>)} */}
          <TextField
          // error={error}
          value={userInput}
          onChange={handleUserInput}
          variant="outlined"
          label="Type your comment here"
          sx={{width: '100%', }}
          fullWidth
          autoComplete="off"
        />
                   
        <Button
          variant="contained"
          sx={{mt: 1,  }} 
          onClick={submit}
          size="small"
          color="inherit"
        >
          Send
        </Button>
   
      </Container>
      
  );
};

export default Popup;
