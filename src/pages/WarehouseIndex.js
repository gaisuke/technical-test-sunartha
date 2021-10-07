import React from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import WarehouseTable from '../components/WarehouseTable'

const WarehouseIndex = () => {
    return (
        <div className="margin-custom">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="#">
                Home
                </Link>
                <Typography color="text.primary">Warehouse</Typography>
            </Breadcrumbs>
            <h1>Warehouse</h1>
            <WarehouseTable />
        </div>
    )
}

export default WarehouseIndex