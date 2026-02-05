import { Avatar, Button, Dialog, DialogTitle, List, ListItem, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { sampleNotifications } from '../../Constants/sampleData';

const Notifications = ({ user, handler }) => {
  const friendRequestHandler = ({ _id, accept }) => {
    // Your handler logic here
    handler({ _id, accept });
  };

  return (
    <Dialog open>
      <Stack p={{
        xs: "1rem",
        sm: "2rem"
      }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          <List>
            {sampleNotifications.map((i) => (
              <NotificationItem
                sender={i.sender}
                _id={i._id}
                handler={friendRequestHandler}
                key={i._id} // Use a unique identifier here
              />
            ))}
          </List>
        ) : (
          <Typography textAlign={"center"}>No notifications</Typography>
        )}

      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar} alt={name} />

        <Typography
          variant='body1'
          sx={{
            flexGrow: 1, // Fixed typo: flexGlow -> flexGrow
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >{`${name} sent you a friend request`} {/* Fixed grammar: send -> sent */}
        </Typography>
        <Stack direction={{
          xs: "column",
          sm: "row",
        }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color='error' onClick={() => handler({ _id, accept: false })}>Reject</Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;