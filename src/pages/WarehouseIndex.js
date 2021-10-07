import React from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import WarehouseTable from '../components/WarehouseTable'

const WarehouseIndex = () => {
    return (
        <div width="warehouse-index">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="#">
                Home
                </Link>
                <Typography color="text.primary">Warehouse</Typography>
            </Breadcrumbs>
            <WarehouseTable />
        </div>
    )
}

export default WarehouseIndex