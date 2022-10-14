import React from 'react'
import {
    Box,
    Typography,
    Card,
    Button
} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export const GuestCard = ({data}) => {
    const navigate = useNavigate()

    const handleClick = async () => 
        navigate(`/guest/${data._id}`)
    
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
                    <Button onClick={handleClick} variant='contained'>View Profile</Button>
                </Box>
           </Card>
        </>
    )
}