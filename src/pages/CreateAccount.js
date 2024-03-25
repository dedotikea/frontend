import React from 'react'
import { useMediaQuery } from '@mui/material'
import DesktopCreateAccount from '../components/DesktopCreateAccount'
import MobileCreateAccount from '../components/MobileCreateAccount'

const CreateAccount = () => {
    const isMobile = useMediaQuery('(max-width:926px)')
    return (
        <>
            {/* Desktop components */}
            {!isMobile &&
                <DesktopCreateAccount />
            }

            {/* Mobile components*/}
            {isMobile &&
                <MobileCreateAccount />
            }
        </>
    )
}

export default CreateAccount