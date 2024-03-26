import { useMediaQuery } from '@mui/material'
import React from 'react'
import DesktopUserDashboard from '../components/DesktopUserDashboard'
import MobileUserDashboard from '../components/MobileUserDashboard'

const UserDashboard = () => {
    const isMobile = useMediaQuery('(max-width:926px)')
    return (
        <>
            {/* Desktop components */}
            {!isMobile &&
                <DesktopUserDashboard />
            }

            {/* Mobile components*/}
            {isMobile &&
                <MobileUserDashboard />
            }
        </>
    )
}

export default UserDashboard