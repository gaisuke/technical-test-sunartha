import React from 'react'
import { Icon } from '@mui/material'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <Icon>layers</Icon>
                <p className="logo-name">TEST</p>
            </div>
            <div className="side-menu">
                <p className="menu-label">Test Menu</p>
                <div className="menu-item">
                    <Icon sx={{fontSize: 18}}>tune</Icon>
                    <p className="menu-label">Test SM Warehouse</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar