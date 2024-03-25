import React from 'react'
import Logo from '../assets/images/logo-no-background.png'
import { Link } from 'react-router-dom'
import "../styles/landing-page-style.css"

const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <div className='LogoImage'>
                <img src={Logo} alt='Logo.png' className='LandingPageImage'></img>
            </div>
            <div className='Information'>
                <h1>Welcome!</h1>
                <p className='p-1'>Selamat datang di web-app Skray</p>
                <br />
                <p className='p-2'>Silahkan login untuk mengakses web-app, atau create account untuk membuat akun baru</p>
                <br />
                <div className='LinkContainer'>
                    <Link to="login">Login</Link>
                    <Link to="create-account">Create new account</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage