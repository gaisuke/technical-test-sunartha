import React from 'react'
import { List, ListItem, ListItemText, Drawer } from '@mui/material'

const Sidebar = () => {
    return (
        <Drawer>
            <List>
                <ListItem>
                    <ListItemText primary="Test SM Warehouse"/>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default Sidebar