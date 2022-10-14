import React, {useState} from 'react'
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid
} from '@mui/material'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const GuestInfo = ({
        _id,
        firstname, 
        lastname, 
        email,
        phone,
        address,
        handleUpdate
    }) => {
    const navigate = useNavigate()

    const deleteGuest = () => {
        axios.delete(`http://localhost:8080/guest/${_id}`)
        .then(res =>
            navigate('/add-guest')
        )
    }

    // const updateGuest = () => {
        
    // }

    return (
        <Box>
            <Typography variant='h4'>
                {firstname}
            </Typography>
            <Typography variant='h5'>
                {lastname}
            </Typography>
            <Typography variant='h6'>
                {email}
            </Typography>
            <Typography variant='h6'>
                {phone}
            </Typography>
            <Typography variant='h6'>
                {address}
            </Typography>
            <Button onClick={deleteGuest} variant='contained'>Delete</Button>
            <Button onClick={handleUpdate} variant='contained'>Update</Button>
            <Button href='/add-guest' variant='contained'>Back</Button>
        </Box>
    )
}