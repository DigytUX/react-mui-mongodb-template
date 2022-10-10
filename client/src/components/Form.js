import React, {useState} from 'react'
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid
} from '@mui/material'

export const Form = () =>   {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()

    const styles = {
        Field: {
            width:'100%'
        },
        Button: {
            width:'100%'
        }
    }
   
    const handleFirstname = (e) => {
        const newValue =  e.target.value
        setFirstname(newValue)
    }
    const handleLastname = (e) => {
        const newValue =  e.target.value
        setLastname(newValue)
    }
    const handleEmail = (e) => {
        const newValue =  e.target.value
        setEmail(newValue)
    }
    const handlePhone = (e) => {
        const newValue =  e.target.value
        setPhone(newValue)
    }
    const handleAddress = (e) => {
        const newValue =  e.target.value
        setAddress(newValue)
    }

    const handleSubmit = () => {
        const query = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            phone:phone,
            address:address
        }
    
        console.log(query) // submit this!
    }

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4">Form</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={styles.Field}
                        label="First Name"
                        onChange={(e) => handleFirstname(e)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={styles.Field}
                        label="Last Name"
                        onChange={e => handleLastname(e)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={styles.Field}
                        label="Email"
                        onChange={e => handleEmail(e)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={styles.Field}
                        label="Phone"
                        onChange={e => handlePhone(e)}
                    />
                </Grid>
                <Grid item xs={12}> 
                    <TextField
                        sx={styles.Field}
                        label="Address"
                        onChange={e => handleAddress(e)}
                    />
                </Grid>
                <Grid item xs={12}> 
                    <Button onClick={handleSubmit} sx={styles.Button} variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Box>
    )
}
   