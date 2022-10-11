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
            <Typography>
                {firstname}
            </Typography>
            <Typography>
                {lastname}
            </Typography>
            <Typography>
                {email}
            </Typography>
            <Typography>
                {phone}
            </Typography>
            <Typography>
                {address}
            </Typography>
            <Button variant="contained">Delete</Button>
        </Box>
    )
}