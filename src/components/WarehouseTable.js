import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {field: 'WarehouseID', headerName: 'ID', width: 200},
    {field: 'Branch', headerName: 'Branch', width: 200},
    {field: 'Active', headerName: 'Active', width: 200},
    {field: 'Description', headerName: 'Desc.', width: 200},
    {field: 'LastSync', headerName: 'Last Sync', width: 200}
]

const WarehouseTable = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}`
        fetch(url)
            .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then((data) => {
            setData(data)
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
                getRowId={(row) => row.WarehouseID}
                rows={data}
                columns={columns}
                rowPerPageOptions={10}
            />
        </div>
    )
}

export default WarehouseTable