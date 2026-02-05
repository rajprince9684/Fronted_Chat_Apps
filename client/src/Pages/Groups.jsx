import React, { lazy, memo, useEffect, useState, Suspense } from 'react';
import { Box, Drawer, Grid, IconButton, Tooltip, Stack, Typography, Avatar, TextField, Button, Backdrop, } from '@mui/material';;
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
  Edit as EditIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
  Add as AddIcon

} from '@mui/icons-material';
import AvatarCard from '../Component/shared/Avatarcard';
import { sampleChats, sampleUsers } from '../Constants/sampleData';
import { Link } from '../Component/StyleComponent';
import UserItem from '../Component/shared/UserItem';
import { purple } from '../Constants/color';

const ConfirmDeleteDialog = lazy(() => import('../Component/dialogs/ConfirmDeleteDialog'));
const AddMemberDialog = lazy(() => import('../Component/dialogs/AddMemberDialog'));

const isAddMember = false; // This should be replaced with actual logic to check if the user is a member of the group

const Groups = () => {



  const navigate = useNavigate()
  const chatId = useSearchParams()[0].get("group");
  console.log(chatId);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);


  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
  };

  const navigateBack = () => { navigate("/") };
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const deleteGroupHandler = () => {
    console.log("Group Deleted");
    closeConfirmDeleteHandler();
  };

  const removeMemberHendler = (id) => {
    console.log("removeMember", id)

  }
  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name  ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    }
  }, [chatId]);
  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Delete Group");
  };
  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
    console.log("Close Delete Dialog");
  };


  const openAddMemberHandler = () => {
    console.log("Open Add Member Dialog");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => {
    setIsMobileMenuOpen((prev) => (!prev));
  };


  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
            position: "fixed",
            right: "1rem",
            top: "1rem",
            bgcolor: "rgba(0,0,0,0.8)",
          },
        }} onClick={handleMobile}>

        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title='back'>
        <IconButton
          sx={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            bgcolor: "rgba(0,0,0,0.8)",
            color: "white",
            '&:hover': {
              bgcolor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>

      </Tooltip>
    </>
  )

  const GroupName =
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      padding={"3rem"}>
      {isEdit ? <>
        <TextField value={groupNameUpdatedValue} onChange={(e) => setGroupNameUpdatedValue(e.target.value)} />
        <IconButton onClick={updateGroupName}>
          <DoneIcon />
        </IconButton>


      </> : <>
        <Typography variant="h4">{groupName}</Typography>
        <IconButton onClick={() => setIsEdit(true)}>
          <EditIcon />
        </IconButton>
      </>}




    </Stack>
  const ButtonGroup =
    <Stack
      direction={{ xs: "column-reverse", sm: "row" }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem",
      }}>
      <Button size='large'
        color='error'
        startIcon={<DeleteIcon />} onClick={openConfirmDeleteHandler}
      >
        delete Group
      </Button>
      <Button size='large' variant='contained' startIcon={<AddIcon />} onClick={openAddMemberHandler}> Add Member</Button>
    </Stack>
  return (
    <Grid container height={'100vh'}>
      {/* Left Panel: Group List */}
      <Grid
        item
        sx={{
          display: {
            xs: 'none',
            sm: 'block',

          },

        }}
        sm={4}

      >
        <GroupsList myGroups={sampleChats} chatId={chatId} />

      </Grid>

      {/* Right Panel: Group Detail */}
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',

          alignItems: 'center',
          position: 'relative',
          padding: '1rem 3rem',
        }}
      >
        {IconBtns}
        {groupName && (
          <>
            {GroupName}
            <Typography margin={"2rem"}
              alignSelf='flex-start'
              variant='body1'>
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "2rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              height={"50vh"}
              // backgroundColor={""}
              overflow={"auto"}
            >
              {
                sampleUsers.map((i) => (
                  <UserItem
                    key={i._id}
                    user={i}
                    isAdded
                    styling={{
                      boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                      borderRadius: "1rem",
                      padding: "1rem 2rem",

                    }}
                    handler={removeMemberHendler}
                  />


                ))
              }
            </Stack>
            {ButtonGroup}


          </>
        )}
      </Grid>
      {
        isAddMember && (
          <Suspense fallback={<Backdrop open />}>
            <AddMemberDialog />
          </Suspense>

        )}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handlerClose={closeConfirmDeleteHandler}
            deleteHandler={deleteGroupHandler}
          />
        </Suspense>
      )}
      <Drawer sx={{
        display: {
          xs: 'block',
          sm: 'none',
        },
      }}
        open={isMobileMenuOpen} onClose={handleMobileClose} >
        <GroupsList w='100vw' myGroups={sampleChats} chatId={chatId} />   <GroupsList W={"50vw"} />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (


  <Stack

    spacing={"1rem"}
    width={w}
    sx={{
      backgroundImage: purple,
      height: "100vh",
    }}


  >

    {myGroups.length > 0 ? (

      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        {/* kuch to kukha gtha */}
      </Typography>
    )}
  </Stack>
);
const GroupListItem = memo(({ group, chatId }) => {
  const {
    name, avatar, _id,
  } = group;
  return (
    <Link to={`?group=${_id}`}
      onClick={(e) => { if (chatId === _id) e.preventDefault() }}>

      <Stack direction={"row"} alignItems="center" spacing={"1rem"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>

    </Link>
  );
})
export default Groups;

