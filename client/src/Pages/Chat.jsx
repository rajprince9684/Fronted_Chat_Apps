import { IconButton, Stack } from '@mui/material';
import React, { useRef, Fragment } from 'react';
import AppLayout from '../Component/layout/AppLayout';
import { grayColor, orange } from '../Constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../Component/StyleComponent';
import FileMenu from '../Component/dialogs/FileMenu';
import { sampleMessage } from '../Constants/sampleData';
import MessageComponent from '../Component/shared/MessageComponent';

const user={
  _id:"wefwef",
  name:"raj",
};

const Chat = () => {

  const containerRef = useRef(null);



  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={'border-box'}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}>


{sampleMessage.map((i)=>(
  <MessageComponent key={i._id} message={i} user={user}/>
))}

        
      </Stack>
      <form style={{
        height: "10%",
      }}>
        <Stack
        direction={'row'}
        height={"100%"}
        padding={"1rem"}
        alignItems={"center"}
        position={"relative"}>

          <IconButton
          sx={{
            position:"absolute",
            left:"1.5rem",
            rotate:"30deg",
          }}
         
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox  placeholder='Type Massage Here...'/>

          <IconButton type='submit'
          sx={{
          bgcolor:orange,
          rotate:"-30deg",
          color:"white",
          marginLeft:"1rem",
          padding:"0.5rem",
          '&:hover':{
            bgcolor:"error.dark",
          }
                    }}>
            <SendIcon />
          </IconButton>

        </Stack>


      </form>
      <FileMenu />
    </Fragment>
  );
};

export default AppLayout()(Chat);