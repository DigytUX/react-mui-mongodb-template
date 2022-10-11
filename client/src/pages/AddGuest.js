//This file is a simple example showing how to 
//interact with the crud endpoints in the app
import React, {useEffect,useState} from 'react'
import {
    Box,
    Grid,
    Button
} from '@mui/material'
import {Form} from '../components/Form'
import {GuestCard} from '../components/GuestCard'
import axios from 'axios'


export const AddGuest = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        //the port number is what you set in the 
        //.env in your /server folder
        axios.get(`http://localhost:8080/guests`)
        .then(res => setData(res['data']))
    },[])

    return (
        <Box>
            <Box pt={3} pl={5}>
                <Button variant='contained' href='/'>Home</Button>
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