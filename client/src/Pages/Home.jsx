import React from 'react'
import AppLayout from '../Component/layout/AppLayout'
import { Box, Typography } from '@mui/material';
import { grayColor } from '../Constants/color';

const Home = () => {
  return (
    
  <Box bgcolor={grayColor} height={"100%"}>
    <Typography p={"2rem"} variant='h5' textAlign={"center"}>Select the  friend to chat</Typography>
  </Box>
    
  );
};
export default AppLayout()(Home);