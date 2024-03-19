import React from 'react'
import Logo from '../assets/images/logo-no-background.png'
import { Link } from 'react-router-dom'
import BackHandIcon from '@mui/icons-material/BackHand';

const LandingPage = () => {
    return (
        <div>
            <img src={Logo} alt='Logo.png' width="50%"></img>
            <div>
                <span>teks penjelasan web-app man i swear if this is still not deployable...</span>
                <div>
                    <Link to="login">Login</Link>
                    <br/>
                    <Link to="create-account">Create Account</Link>
                    <BackHandIcon></BackHandIcon>
                </div>
            </div>
        </div>
    )
}

export default LandingPage