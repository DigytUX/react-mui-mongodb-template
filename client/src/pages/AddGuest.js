import React, {useEffect,useState} from 'react'
import {
    Box,
    Card,
    Grid,
    Typography,
    Button
} from '@mui/material'
import {Form} from '../components/Form'
import axios from 'axios'

const GuestCard = ({data}) => {
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
                    <Typography variant='body1'>
                        {data.phone}
                    </Typography>
                    <Typography variant='body1'>
                        {data.address}
                    </Typography>
                </Box>
           </Card>
        </>
    )
}

export const AddGuest = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/guests')
        .then(res => setData(res['data']))
    },[])

    return (
        <Box>
            <Box pt={3} pl={5}>
                <Button variant="contained" href="/">Home</Button>
            </Box>
            <Box p={5}>
                <Form />
            </Box>
            <Box p={5}>   
                <Grid container spacing={3}>
                    {data && data.map((item, i) =>(
                        <Grid key={i} item xs={3}>
                            <GuestCard data={item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}