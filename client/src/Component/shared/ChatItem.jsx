
import { Box, Stack, Typography } from '@mui/material';
import { Link } from '../StyleComponent';
import React, { memo } from 'react';
import Avatarcard from './Avatarcard';

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessagesAlert,
  handleDeleteChat,
}) => {
  return (
    <Link
      sx={{
        padding: "0",
        textDecoration: "none", // Added for better link styling
      }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <Box
        sx={{
          display: "flex", // Fixed typo: "flax" -> "flex"
          gap: "1rem",
          alignItems: 'center',
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: 'relative',
          '&:hover': {
            backgroundColor: sameSender ? '#333' : '#f5f5f5', // Added hover effect
          },
          transition: 'background-color 0.3s ease', // Smooth transition
        }}
      >
        <Avatarcard avatar={avatar} />

        <Stack sx={{ flexGrow: 1 }}>
          <Typography variant="body1" noWrap>
            {name}
          </Typography>
          {newMessagesAlert && (
            <Typography variant="caption" color="primary">
              {newMessagesAlert.count} New Message{newMessagesAlert.count > 1 ? 's' : ''}
            </Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </Box>
    </Link>
  );
};

export default memo(ChatItem);