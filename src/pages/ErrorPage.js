import React from 'react'
import { Box, Button, Typography } from '@mui/material';

const ErrorPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '99vh',
                backgroundColor: "#4A596D",
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>
                404
            </Typography>
            <Typography variant="body1" style={{ color: 'white' }}>
                Maaf, halaman yang anda cari tidak ada.
            </Typography>
            <Button variant="contained" href="/" sx={{
                backgroundColor: "#AAB7C0",
                color: 'black',
                margin: '10px',
                ':hover': {
                    bgcolor: 'white',
                    color: 'black',
                }
            }}>Kembali ke Landing Page</Button>
        </Box>
    );
};

export default ErrorPage;