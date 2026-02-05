import React from 'react'
import AdminLayout from '../../Component/layout/AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import {
  AdminPanelSettings as AddminPanelSetingsIcon
  , Notifications as NotificationsIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  Message as MessageIcon,



} from '@mui/icons-material'
import moment from 'moment';
import { CurvButton, SearchField } from '../../Component/StyleComponent';
import { DoughnutCharts, LineCharts } from '../../Component/specific/Charts';

const Dashboard = () => {

  const Appbar = (
    <Paper elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        boaderRadius: "1rem",

      }}>
      <Stack direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
      >
        <AddminPanelSetingsIcon sx={{
          fontSize: "3rem",
        }} />

        <SearchField placeholder='Search...' />
        <CurvButton> search</CurvButton>

        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",

          }}
          color={"rgba (0,0,0,0.7)"
          }
          textAlign={"center"}

        >
          {moment().format("dddd  D MMM YYYY ")}
        </Typography>

        <NotificationsIcon />

      </Stack>
    </Paper>
  )
  const Wedgets = (
    <Stack direction={{
      xs: "column",
      sm: "row",
    }}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
      spacing={"2rem"}>
      <Wedget title={"Users"} value={34} Icon={<PersonIcon />} />
      <Wedget title={"Chats"} value={3} Icon={<GroupIcon />} />
      <Wedget title={"Massages"} value={45} Icon={<MessageIcon />} />



    </Stack>
  )


  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}
        <Stack direction={
          {
            xs:"column",
            lg:"row",
          }
        } 
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={{
            xs:"center",
            lg:"stretch",
          }} sx={{
            gap:"2rem",
          }}>


        </Stack >


        <Paper elevation={3}
          sx={{
            padding: "2rem 3.5rem",
            borderRadius: "1rem",
            width: "100%",
            maxWidth: "45rem",


          }}>
          <Typography margin={"2rem 0"} variant='h4'>Last Massages</Typography>
          <LineCharts value={[1, 34, 4,]} />

        </Paper>

        <Paper elevation={3} sx={{
          padding: "1rem",
          borderRadius: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",

          width: { xs: "100%", sx: "50%" },
          maxWidth: "25rem",


        }} >
          <DoughnutCharts labels={["Single Chats", "Group Chats"]}
            value={[23, 66]} />
          <Stack
            position={"absolute"}
            direction={"row"}
            justifyContent={"center"}
            alignContent={"center"}
            spacing={"0.5rem"}
            width={"100%"}
            height={"100%"}
          >
            <GroupIcon />
            <Typography>vs</Typography>
            <PersonIcon />
          </Stack>

        </Paper>


        {
          Wedgets
        }
      </Container>
    </AdminLayout>

  );
};
const Wedget = ({ title, value, Icon, }) =>
  <Paper elevation={3} sx={{
    padding: "2rem",
    margin: "2rem 0",
    borderRadius: "1.5rem",
    width: "20rem",
  }}>

    <Stack alignItems={"center"}

      spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: "5px solid rgba( 0,0,0,0.9)",
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}


      > {value}</Typography>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {Icon}
        <Typography>{title}</Typography>
      </Stack>

    </Stack>

  </Paper>

export default Dashboard;


