import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    {field: 'LocationID', headerName: 'Location ID', width: 200},
    {field: 'PickPriority', headerName: 'Pick Priority', width: 200},
    {field: 'Active', headerName: 'Active', width: 200},
    {field: 'Description', headerName: 'Desc.', width: 200},
    {field: 'SalesAllowed', headerName: 'Sales Allowed', width: 200},
    {field: 'TransfersAllowed', headerName: 'Transfers Allowed', width: 200}
]

const WarehouseDetailTable = () => {
    const params = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/${params.WarehouseID}`
        fetch(url)
            .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then((data) => {
            setData(data.Locations)
        })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            setError(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) return "Loading . . . "
    if (error) return "Error!"

    return (
        <div style={{width: '100%'}}>
            <DataGrid
                autoHeight={true}
                getRowId={(row) => row.LocationID}
                rows={data}
                columns={columns}
                rowPerPageOptions={10}
            />
        </div>
    )
}

export default WarehouseDetailTable