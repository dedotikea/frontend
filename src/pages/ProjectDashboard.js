import { useMediaQuery } from '@mui/material'
import React from 'react'
import DesktopProjectDashboard from '../components/DesktopProjectDashboard'
import MobileProjectDashboard from '../components/MobileProjectDashboard'


const ProjectDashboard = () => {
    const isMobile = useMediaQuery('(max-width:926px)')
    return (
        <>
            {/* Desktop components */}
            {!isMobile &&
                <DesktopProjectDashboard />
            }

            {/* Mobile components*/}
            {isMobile &&
                <MobileProjectDashboard />
            }
        </>
    )
}

export default ProjectDashboard