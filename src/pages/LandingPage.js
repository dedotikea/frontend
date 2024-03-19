import React from 'react'
import Logo from '../assets/images/logo-no-background.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <img src={Logo} alt='Logo.png' width="50%"></img>
            <div>
                <span>teks penjelasan web-app-euy</span>
                <div>
                    <Link to="login">Login</Link>
                    <br/>
                    <Link to="create-account">Create Account</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage