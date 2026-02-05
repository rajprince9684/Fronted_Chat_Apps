import { useInputValidation } from '6pp';
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { sampleUsers } from '../../Constants/sampleData';
import UserItem from '../shared/UserItem';
const NewGroup = () => {

   const groupName= useInputValidation("");

   const [meambers, setMembers]=useState(sampleUsers);
   const [selectedmeambers, setSelectedMembers]=useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev)=>
    prev.includes(id)
    ? prev.filter((currElement)=> currElement !==id)
    :[...prev,id]
);
  };
  

 const Handler = () => {};

 const closeHandler=()=>{};

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{
        xs: "1rem",
        sm: "3rem"
      }} Width={"25rem"}
      spacing={"2rem"}>
        <DialogTitle textAlign={'center'} variant='h4'>  New Group</DialogTitle>

        <TextField 
        label= "Group Name"
        value={groupName.value}
        onChange={groupName.changeHandler} 
          />

        <Typography variant='body1'> Members</Typography>
        <Stack>
          {
           meambers.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedmeambers.includes(i._id)}
               />
            ))
          }
        </Stack>

<Stack direction={"row"} justifyContent={"space-evenly"}>
  <Button  color='error' size='large' variant="outlined"> Cancel</Button>
  <Button variant='contained' size='large' onClick={Handler}>Create</Button>

</Stack>



      </Stack>
    </Dialog>
  )
}

export default NewGroup;