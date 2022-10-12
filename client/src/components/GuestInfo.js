import React, {useState} from 'react'
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid
} from '@mui/material'
import axios from 'axios'

export const GuestInfo = ({
    firstname, 
    lastname, 
    email,
    phone,
    address
}) => {
    return (
        <Box>
            <Typography variant="h4">
                {firstname}
            </Typography>
            <Typography variant="h5">
                {lastname}
            </Typography>
            <Typography variant="h6">
                {email}
            </Typography>
            <Typography variant="h6">
                {phone}
            </Typography>
            <Typography variant="h6">
                {address}
            </Typography>
            <Button variant="contained">Delete</Button>
            <Button href="/add-guest" variant="contained">Back</Button>
        </Box>
    )
}