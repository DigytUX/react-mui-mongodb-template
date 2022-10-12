import React, {useState} from 'react'
import {
    Box,
    Typography,
    Card,
    Button
} from '@mui/material'
import axios from 'axios'
import {useNavigate, useParams} from "react-router-dom";

export const GuestCard = ({data}) => {
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const result = await axios.get(
                `http://localhost:8080/guest/${data._id}`, 
                //req params for the backend
                {
                    id: data._id
                }
            )
            console.log(result)
            navigate(`/guest/${data._id}`)
        } catch(err) {
            console.log('we gots a prahlem:', err)
        }
    }
    
    return (
        <>
           <Card>
                <Box p={5}>
                    <Typography variant='h4'>
                        {data.firstName}
                    </Typography>
                    <Typography variant='h6'>
                        {data.lastName}
                    </Typography>
                    <Button onClick={handleClick} variant="contained">View Profile</Button>
                </Box>
           </Card>
        </>
    )
}