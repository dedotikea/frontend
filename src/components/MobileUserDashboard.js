import { AppBar, Box, Container, Grid, IconButton, Paper, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import React, { useState } from 'react'

const MobileUserDashboard = () => {
    //component render handler
    const [viewHome, setViewHome] = useState(true)
    const [viewProfile, setViewProfile] = useState(false)
    const [viewProjects, setViewProjects] = useState(false)
    const [viewNotifications, setViewNotifications] = useState(false)
    const [viewSettings, setViewSettings] = useState(false)
    const [viewLogout, setViewLogout] = useState(false)
    return (
        <>
            <AppBar
                position="absolute"
                sx={{
                    top: 'auto',
                    bottom: 0,
                    backgroundColor: '#DCD6CD'
                }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        // backgroundColor: '#03030380',
                        border: "1px solid",
                        borderColor: "black"
                    }}>
                    <IconButton
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "5vw",
                            color: '#4A596D',
                        }}
                        onClick={() => {
                            setViewHome(true);
                            setViewProfile(false);
                            setViewProjects(false);
                            setViewNotifications(false);
                            setViewSettings(false);
                            setViewLogout(false);
                        }}
                    >
                        <HomeIcon />
                        <div>Home</div>
                    </IconButton>
                    <IconButton
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "5vw",
                            color: '#313435',
                        }}
                        onClick={() => {
                            setViewHome(false);
                            setViewProfile(false);
                            setViewProjects(true);
                            setViewNotifications(false);
                            setViewSettings(false);
                            setViewLogout(false);
                        }}
                    >
                        <HomeIcon />
                        <div>Projects</div>
                    </IconButton>
                    <IconButton
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "5vw",
                            color: '#313435',
                        }}
                        onClick={() => {
                            setViewHome(false);
                            setViewProfile(false);
                            setViewProjects(false);
                            setViewNotifications(true);
                            setViewSettings(false);
                            setViewLogout(false);
                        }}
                    >
                        <HomeIcon />
                        <div>Notifications</div>
                    </IconButton>
                    <IconButton
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "5vw",
                            color: '#313435',
                        }}
                        onClick={() => {
                            setViewHome(false);
                            setViewProfile(true);
                            setViewProjects(false);
                            setViewNotifications(false);
                            setViewSettings(false);
                            setViewLogout(false);
                        }}
                    >
                        <HomeIcon />
                        <div>Other</div>
                    </IconButton>


                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={12}>
                        <Paper variant='outlined'
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: '80vh',
                                overflow: "auto",
                                backgroundColor: "white",
                                borderColor: 'black'
                            }}
                        >
                            {/* <Chart /> */}
                            {/* {userDashboardMenuHandler(menu)} */}
                            {viewHome && <>Home</>}
                            {viewProfile && <>Profile</>}
                            {viewProjects && <>Projects</>}
                            {viewNotifications && <>Notifications</>}
                            {viewSettings && <>Settings</>}
                            {viewLogout && <>Logout</>}
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}
                    {/* Recent Orders */}
                    {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid> */}
                </Grid>
            </Container>

        </>
    )
}

export default MobileUserDashboard