import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {Container, Stack, TextField, Button}  from '@mui/material/';


const Login = () => {
    const [userInput, setUserInput] = useState('');
    const handleUserInput = (e) => {
      setUserInput(e.target.value);
    };

    //const navigate= useNavigate();
        
    const login = () => {
       // navigate('/Popup.tsx');
    };
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
             
            
            <Stack sx={{ mt: 4 }} spacing={'2rem'} maxHeight={'10rem'}>
        
                       
            <Button
              variant="contained"
              sx={{mt: 1,  }} 
              onClick={login}
              size="small"
              color="inherit"
              onSubmit={login}
            >
              Log in with Google
            </Button>
          
            </Stack>
    

                
          </Container>
      );
};
export default Login;