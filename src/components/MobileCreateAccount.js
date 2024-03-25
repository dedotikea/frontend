import React, { useState } from 'react'
import '../styles/create-account-page-style.css'
import { useNavigate, Link } from 'react-router-dom';
// import authApi from '../api/authApi';
import { Box, TextField } from '@mui/material';
import logoWebApp from '../assets/images/logo-no-background.png'
import { LoadingButton } from '@mui/lab';

const MobileCreateAccount = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState('');
    const [usernameErrorText, setUsernameErrorText] = useState('');
    const [passwordErrorText, setPasswordErrorText] = useState('');
    const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setEmailErrorText('');
        // setUsernameErrorText('');
        // setPasswordErrorText('');
        // setConfirmPasswordErrorText('');

        // const data = new FormData(e.target);
        // const email = data.get('email').trim();
        // const username = data.get('username').trim();
        // const password = data.get('password').trim();
        // const confirmPassword = data.get('confirmPassword').trim();

        // let err = false;

        // if (email === '') {
        //     err = true;
        //     setEmailErrorText('Tidak Boleh Kosong');
        // }
        // if (username === '') {
        //     err = true;
        //     setUsernameErrorText('Tidak Boleh Kosong');
        // }
        // if (password === '') {
        //     err = true;
        //     setPasswordErrorText('Tidak Boleh Kosong');
        // }
        // if (confirmPassword === '') {
        //     err = true;
        //     setConfirmPasswordErrorText('Tidak Boleh Kosong');
        // }
        // if (password !== confirmPassword) {
        //     err = true;
        //     setConfirmPasswordErrorText('Passwords do not match');
        // }

        // if (err) {
        //     return;
        // }

        // setLoading(true);

        // try {
        //     const res = await authApi.signup({
        //         email,
        //         username,
        //         password,
        //         confirmPassword,
        //     });
        //     setLoading(false);
        //     localStorage.setItem('token', res.token);
        //     navigate('/');
        // } catch (err) {
        //     const errors = err.data.errors;
        //     errors.forEach((e) => {
        //         if (e.param === 'email') {
        //             setEmailErrorText(e.msg);
        //         }
        //         if (e.param === 'username') {
        //             setUsernameErrorText(e.msg);
        //         }
        //         if (e.param === 'password') {
        //             setPasswordErrorText(e.msg);
        //         }
        //         if (e.param === 'confirmPassword') {
        //             setConfirmPasswordErrorText(e.msg);
        //         }
        //     });
        //     setLoading(false);
        // }
    };
    return (
        <div className='MobileCreateAccountContainer'>
            <Box component="form" overflow='scroll' sx={{
                background: 'white',
                width: '80vw',
                height: '80vh',
                margin: 'auto',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
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
                    <h2>Create Account</h2>
                    <p>Silahkan masukkan alamat email, username, dan password</p>
                </Box>
                <Box sx={{
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginBottom: '20px'
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
                        id="username"
                        label="Username"
                        name="username"
                        disabled={loading}
                        error={usernameErrorText !== ''}
                        helperText={usernameErrorText}
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmPassword"
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        disabled={loading}
                        error={confirmPasswordErrorText !== ''}
                        helperText={confirmPasswordErrorText}
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
                        Create Account
                    </LoadingButton>
                    <Link
                        component="button"
                        variant='body2'
                        to="../login">
                        {"Sudah punya akun? Klik disini untuk login"}
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default MobileCreateAccount