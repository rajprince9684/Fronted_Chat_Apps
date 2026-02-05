import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../Constants/sampleData';
import UserItem from '../shared/UserItem';

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {

    
   const [members, setMembers]=useState(sampleUsers);
   const [selectedmembers, setSelectedMembers]=useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev)=>
    prev.includes(id)
    ? prev.filter((currElement)=> currElement !==id)
    :[...prev,id]
);
  };
    const closerHandler=()=>{
        setSelectedMembers([]);
        setMembers([]);
    };
    const addMemberSubmitHandler=()=>{
        closerHandler();
    }
    return (
        <Dialog open onClose={closerHandler}>
            <Stack spacing={"2rem"}
                p={"2rem"}
                width={"20rem"}
            >
                <DialogTitle
                    textAlign={"center"}
                >
                    Add Member
                </DialogTitle>
                <Stack spacing={"1rem"}>
                    {members.length > 0 ? (
                        members.map((i )=> (
                            <UserItem key={i._id}
                             user={i} 
                             handler={ selectMemberHandler} 
                            isAdded={ selectedmembers.includes(i._id)}/>
                        ))
                    ) : (

                        <Typography textAlign={"center"}>No Friend</Typography>
                    )}
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
                        <Button color="error" onClick={closerHandler}>Cancel</Button>
                        <Button onClick={addMemberSubmitHandler} variant="contained" disabled={isLoadingAddMember}>Submit Change</Button>

                    </Stack>
                </Stack>
            </Stack>

        </Dialog>
    )
}

export default AddMemberDialog