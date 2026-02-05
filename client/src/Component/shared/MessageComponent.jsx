import { Box, Typography } from '@mui/material';
import React, { memo } from 'react'
import { LightBlue } from '../../Constants/color';
import { green } from '@mui/material/colors';
import moment from 'moment';
import {fileFormat} from '../../Lib/Features';
import RendrerAttachment from './RendrerAttachment';

const MessageComponent= ({message,user})=> {

  const {sender,content, Attachments=[], createdAt}=message;
  const sameSender=sender?._id===user?._id

  const timeAgo= moment(createdAt).fromNow()
  return (
  <div style={{
    alignSelf:sameSender?"flex-end":" flex-start",
    backgroundColor:"white",
    color:"black",
    borderRadius:"5px",
    padding:"0,5rem",
    width:"fit-content",

  }}>
    

    {
      !sameSender&& <Typography color={LightBlue} fontWeight={600} variant='caption'>{sender.name}</Typography>
    }
    {content&& <Typography color={green}>{content}</Typography>   }
    {Attachments.length> 0 && Attachments.map((Attachment, index)=>{
      const url =Attachment.url;
      const file= fileFormat(url);
      return(
<Box
key={index}>
  <a href={url}
  target='_blank'
  download
    style={{
      color: "black",


    }}
  >
    {RendrerAttachment(file,url)}
  </a>
</Box>
      );

    })}

  
    <Typography variant='caption' color={"text-secondary"} >{timeAgo}</Typography>
    </div>
  );
};

export default memo(MessageComponent);