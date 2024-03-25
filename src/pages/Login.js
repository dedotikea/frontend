import { useMediaQuery } from '@mui/material'
import React from 'react'
import DesktopLogin from '../components/DesktopLogin'
import MobileLogin from '../components/MobileLogin'

const Login = () => {
    const isMobile = useMediaQuery('(max-width:926px)')
    return (
        <>
            {/* Desktop components */}
            {!isMobile &&
                <DesktopLogin />
            }

            {/* Mobile components*/}
            {isMobile &&
                <MobileLogin />
            }
        </>
    )
}

export default Login