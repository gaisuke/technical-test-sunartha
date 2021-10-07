import React from 'react'
import WarehouseDetailTable from '../components/WarehouseDetailTable'
import { Breadcrumbs, Link, Typography } from '@mui/material'

const WarehouseDetail = () => {
    // const { WarehouseID } = props.match.params
    return (
        <div className="App">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="#">Home</Link>
                <Link underline="hover" color="inherit" href="/">Warehouse</Link>
                <Typography color="text.primary">Detail Location Warehouse - BLABLABLA</Typography>
            </Breadcrumbs>
            <WarehouseDetailTable />
        </div>
    );
}
  
export default WarehouseDetail