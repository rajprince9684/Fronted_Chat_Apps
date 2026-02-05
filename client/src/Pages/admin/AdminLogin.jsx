import { useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import { purple } from "../../Constants/color";
import { useInputValidation } from '6pp';
import { Navigate } from 'react-router-dom';


//  const [isLogin,setIsLogin]=useState(false);
 
 const isAdmin=true;

const AdminLogin = () => {

  const secretkey=useInputValidation("")

   const  SubmithendleLogin =(e)=>{
    e.preventDefault();
    console.log("Submit")
  };
if(isAdmin) return <Navigate to= "/admin/dashboard "/>
  return (
    <div
      style={{
        backgroundImage: purple,
      }}>

      <Container component={"main"} maxWidth="xs" sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

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
       
              <Typography variant='h5'>Admin Login</Typography>
              <form
                style={{
                  width: '100%',
                  marginTop: "1rem"
                }}
                onSubmit={SubmithendleLogin}>
              
                <TextField
                  required
                  fullWidth
                  label="Secret Key"
                  type='password'
                  margin='normal'
                  variant='outlined'
                  value={secretkey.value}
                  onChange={secretkey.changeHandler}
                />
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant='contained'
                  color='primary'
                  fullWidth
                  type='submit'>

                  Login
                </Button>
             
                

              </form>
            

          

        
        </Paper>

      </Container>
    </div>
  );
};

export default AdminLogin;