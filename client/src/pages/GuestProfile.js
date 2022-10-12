import React, {useEffect, useState} from 'react'
import {Box} from '@mui/material'
import {GuestInfo} from '../components/GuestInfo'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export const GuestProfile = () => {
    const [data, setData] = useState(null)
    const { id } = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:8080/guest/${id}`)
        .then(res => setData(res['data']))
    },[])

    return (
        <>
            <Box p={5}>
                {data && (
                    <GuestInfo 
                        firstname={data.firstName} 
                        lastname={data.lastName}
                        email={data.email}
                        phone={data.phone}
                        address={data.address}
                    />
                )}
            </Box>
        </>
    )
}