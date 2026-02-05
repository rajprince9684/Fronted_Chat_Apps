import { Box, Drawer, Grid, IconButton, Stack, styled, Typography } from '@mui/material';
import React, { useState } from 'react'
import { grayColor } from '../../Constants/color';
import {
     Dashboard as DashboardIcon ,
    Menu as MenuIcon, 
    Close as CloseIcon, 
    ManageAccounts as ManageAccountsIcon, 
    Group as GroupIcon,
    Message as MessageIcon,
    ExitToApp as ExitToAppIcon,



} from '@mui/icons-material';
import {  useLocation, Link as LinkComponent, Navigate } from 'react-router-dom';

const Link =styled(LinkComponent)`
text-decoration: none ;
boader-radius:2rem;
padding: irem 2rem;
color:black;
&:hover{
color:  rgba(0,0,0,0.54);}

`;


export const adminTabs=[
    {
    name:'Dashboard',
    path:"/admin/dashboard",
    icon: <DashboardIcon/>,
},

   {
    name:'Users',
    path:"/admin/user-management",
    icon: <ManageAccountsIcon/>,
},   {
    name:'Chats',
    path:"/admin/chat-management",
    icon: <GroupIcon/>,
},   {
    name:'Massages',
    path:"/admin/massage-management",
    icon: <MessageIcon/>,
},
]

const Sidebar = ({ w = "100%" }) => {

const logoutHandler=()=>{
    console.log("logoutHandler")
};
    const location = useLocation();

    return (
        <Stack width={w}
            direction={'column'}
            p={"3rem"}
            spacing={"3rem"}>
        
            <Typography variant='h4' textTransform={"uppercase"}>
                chattu
            </Typography>

            <Stack spacing={"1rem"}>
{
    adminTabs.map((tab)=>(
<Link key={tab.path}to={tab.path}
sx={
    location.pathname=== tab.path &&{
        bgcolor:"black",
color:"white",
":hover":{color:"white"},

    }
}

>
<Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
{tab.icon}

<Typography>{tab.name}</Typography>
</Stack>

</Link>

    ))
}

            </Stack>



            <Link
onClick={logoutHandler}

>
<Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
<ExitToAppIcon/>
<Typography>logout</Typography>
</Stack>

</Link>

        </Stack>


    );

};

const isAdmin= true;
const AdminLayout = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false);
    const handleMobile = () => setIsMobile(!isMobile);
    const HandleClose = () => setIsMobile(false);


if(!isAdmin)return<Navigate to="/admin"/>;

    return (
        <Grid container minHeight={"100vh"}>
            <Box sx={{
                display: {
                    xs: "block",
                    md: "none",

                },
                position: "fixed",
                right: "1rem",
                top: "1rem",
            }}
            >
                <IconButton onClick={handleMobile}>
                    {
                        isMobile ? <CloseIcon /> : <MenuIcon />
                    }
                </IconButton>

            </Box>
            <Grid
                item
                md={4}
                lg={3}
                sx={{
                    display: {
                        xs: "none", md: "block",
                    }
                }}>
                <Sidebar />
            </Grid>

            <Grid
                item
                xs={12}
                md={8}
                lg={9}
                sx={{
                    bgcolor: grayColor,
                }}
            >
                {children}
            </Grid>

            <Drawer open={isMobile} onClose={HandleClose}>
                <Sidebar w='50vw' />

            </Drawer>



        </Grid>
    )
}

export default AdminLayout;