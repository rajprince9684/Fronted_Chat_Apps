import React, { useState } from 'react'
import { Container, Paper, TextField, Typography,Button, Stack, Avatar, IconButton} from '@mui/material'
import {  CameraAlt as CameraAltIcon, Sync} from '@mui/icons-material';
import { VisuallyHiddenInput } from "../Component/StyleComponent";
import { useFileHandler, useInputValidation, } from '6pp'
import { UsernameValidator } from '../Utils/Validators';
import { purple } from '../Constants/color';


const Login = () => {
  const [isLogin,setIsLogin]=useState(true);
  
  const toggleLogin=()=>setIsLogin((prev)=>!prev);
  const  name= useInputValidation("");
  const  Username= useInputValidation("",UsernameValidator);
  const  Bio= useInputValidation("");
  const  Password= useInputValidation ("");
  const avatar= useFileHandler("single");

  const  hendleLogin =(e)=>{
    e.preventDefault();

  };
  
  const  hendleSingUp= (e)=>{
    e. preventDefault();
  };

  return (
    <div
    style={{
        backgroundImage:  purple,
    }}>

    <Container component={"main"} maxWidth="xs" sx={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      
    }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: "center",
        }}
      >
        {isLogin ? (
        <>
          <Typography variant='h5'>Login</Typography>
          <form
          style={{
            width:'100%',
            marginTop:"1rem"
          }}
        onSubmit={  hendleLogin}>
            <TextField
              required
              fullWidth
              label="Username"
              margin='normal'
              variant='outlined'
            />
            <TextField
              required
             fullWidth 
              label="Password"
              type='password'
              margin='normal'
              variant='outlined'
            />
          <Button
          sx={{ 
            marginTop:"1rem",
          }}
           variant='contained'
           color='primary'
           fullWidth
            type='submit'>

            Login
          </Button>
        <Typography textAlign={'center'}m={"1rem"}>OR</Typography>
        <Button
        variant='text'
        onClick={toggleLogin}
        fullWidth
        > SIGN UP INSTEAD</Button>
           
          </form>
        </>

             ) : (
             <>
          <Typography variant='h5'>Sign up </Typography>
          <form
          style={{
            
            
            width:'100%',
             marginTop:"8px",
          }}
          on={hendleSingUp}
          >
          <Stack
          position={'relative'}
          width={"10rem"}
          margin={"auto"}
          >
 <Avatar
 sx={{

  height:"10rem",
  width:"10rem",
objectFit:"contain"

 }}
 src={avatar.preview}        
 />
  {
              avatar.error &&(
                <Typography margin={"1rem auto"} width={"fit-content"}
                display={"block"} color="error" variant='caption'>
                  {avatar.error}
                </Typography>
              )
            }
 <IconButton
 sx={{
  position:'absolute',
  bottom:"0",
  right:"0",
  color:'white',
  bgcolor:"rgb(0,0,0,0.5)",
  ":hover":{
    bgcolor:"0,0,0,0.7"
  },
 }}
 component="label"
 >
  <>
  
  <CameraAltIcon/>
  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}
  />
  </>
 </IconButton >


          </Stack>
            <TextField
              required
              fullWidth
              label="Name"
              margin= "normal"
              variant='outlined'
              value={name.value}
              onChange={name.changeHandler}
            />
            <TextField
              required
              fullWidth
              label="Bio"
              margin= "normal"
              variant='outlined'
              value={Bio.value}
              onChange={Bio.changeHandler}
            />
            <TextField
              required
              fullWidth
              label="Username"
              margin= "normal"
              variant='outlined'
              value={Username.value}
              onChange={Username.changeHandler}
            />
            {
              Username.error &&(
                <Typography color="error" variant='caption'>
                  {Username.error}
                </Typography>
              )
            }
            <TextField 
            sx={{marginBottom:"20px"}}
            
              required
             fullWidth 
              label="Password"
              type='password'
              margin= "normal"
              variant='outlined'
              value={Password.value}
              onChange={Password.changeHandler}
            />

            
          <Button sx={{margin:"1px"}}
        
           variant='contained'
           color='primary'
           fullWidth
            type='submit'>

            Sign Up
          </Button>
        <Typography textAlign={'center'}m={"1rem"}>OR</Typography>
        <Button
        variant='text'
        onClick={toggleLogin}
        fullWidth
        
        > LOGIN INSTEAD</Button>
           
          </form>
        </>

             )}

      </Paper>

    </Container>
</div>
  );
};

export default Login