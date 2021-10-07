import React from 'react'
import WarehouseDetailTable from '../components/WarehouseDetailTable'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const WarehouseDetail = () => {
    const params = useParams()

    return (
        <div className="margin-custom">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="#">Home</Link>
                <Link underline="hover" color="inherit" href="/">Warehouse</Link>
                <Typography color="text.primary">Detail Location Warehouse - {params.WarehouseID}</Typography>
            </Breadcrumbs>
            <h1>Detail Location Warehouse - {params.WarehouseID}</h1>
            <WarehouseDetailTable />
        </div>
    );
}
  
export default WarehouseDetail