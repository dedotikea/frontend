import React, { useState } from 'react'
import '../styles/login-page-style.css'
import { useNavigate, Link } from 'react-router-dom';
// import authApi from '../api/authApi';
import { Box, TextField } from '@mui/material';
import logoWebApp from '../assets/images/logo-no-background.png'
import { LoadingButton } from '@mui/lab';

const MobileLogin = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState('');
    const [passwordErrorText, setPasswordErrorText] = useState('');

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setEmailErrorText('');
        // setPasswordErrorText('');

        // const data = new FormData(e.target);
        // const email = data.get('email').trim();
        // const password = data.get('password').trim();

        // let err = false;

        // if (email === '') {
        //     err = true;
        //     setEmailErrorText('Tidak boleh kosong');
        // }
        // if (password === '') {
        //     err = true;
        //     setPasswordErrorText('Tidak boleh kosong');
        // }

        // if (err) return;

        // setLoading(true);

        //     try {
        //         const res = await authApi.login({ email, password });
        //         setLoading(false);
        //         localStorage.setItem('token', res.token);
        //         navigate('/');
        //     } catch (err) {
        //         const errors = err.data.errors;
        //         errors.forEach((e) => {
        //             if (e.param === 'email') {
        //                 setEmailErrorText(e.msg);
        //             }
        //             if (e.param === 'password') {
        //                 setPasswordErrorText(e.msg);
        //             }
        //         });
        //         setLoading(false);
        //     }
    };
    return (
        <div className='MobileLoginContainer'>
            <Box component="form" sx={{
                background: 'white',
                width: '80vw',
                height: '80vh',
                margin: 'auto',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'space-between',
                // alignItems: 'center'
            }}
            // onSubmit={handleSubmit} noValidate
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '20px',
                    marginTop: '20px'
                }}>
                    <Link to="../">
                        <Box component="img" src={logoWebApp} sx={{
                            width: '100px'
                        }}></Box>
                    </Link>
                    <h2>Login</h2>
                    <p>Silahkan masukkan alamat email dan password</p>
                </Box>
                <Box sx={{
                    // marginTop: '75px',
                    marginRight: '20px',
                    marginLeft: '20px'
                }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        disabled={loading}
                        error={emailErrorText !== ''}
                        helperText={emailErrorText}
                        autoComplete="false"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        disabled={loading}
                        error={passwordErrorText !== ''}
                        helperText={passwordErrorText}
                        autoComplete="false"
                    />
                    <LoadingButton
                        loading={loading}
                        variant="outlined"
                        sx={{ mt: 3, mb: 2 }}
                        fullWidth
                        color="success"
                        type="submit"
                    >
                        Login
                    </LoadingButton>
                    <Link
                        component="button"
                        variant='body2'
                        to="../create-account">
                        {"Belum punya akun? Klik disini untuk membuat akun"}
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default MobileLogin