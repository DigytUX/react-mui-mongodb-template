import React, {useEffect, useState} from 'react'
import {Box, Grid, TextField, Typography, Button, Dialog, DialogTitle} from '@mui/material'
import {GuestInfo} from '../components/GuestInfo'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export const GuestProfile = () => {
    const [data, setData] = useState(null)
    const { id } = useParams()
    const [open, isOpen] = useState(false)

    useEffect(()=> {
        axios.get(`http://localhost:8080/guest/${id}`)
        .then(res => {
            setData(res['data'])
        })
    },[])
   
    const handleCloseModal = () => 
        isOpen(false)

    const handleOpenModal = () =>
        isOpen(true)

    const UpdateDialog = () => {
        const [firstname, setFirstname] = useState()
        const [lastname, setLastname] = useState()
        const [email, setEmail] = useState()
        const [phone, setPhone] = useState()
        const [address, setAddress] = useState()
    
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
            console.log('submitting form')
            const query = {
                firstName:firstname,
                lastName:lastname,
                email:email,
                phone:phone,
                address:address
            }
            try {
                axios
                    .put(`http://localhost:8080/guest/${id}`, query)
            } catch(err) {
                console.log('we gots a prahlem:', err)
            }
        }

        const styles = {
            Field: {
                width:'100%'
            },
            Button: {
                width:'100%'
            }
        }
    
        return (
            <Dialog open={open}>
                <Box p={3}>
                    <DialogTitle>Update user</DialogTitle>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='h4'>Add Guest</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={styles.Field}
                                label='First Name'
                                onChange={(e) => handleFirstname(e)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={styles.Field}
                                label='Last Name'
                                onChange={e => handleLastname(e)}
                                
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={styles.Field}
                                label='Email'
                                onChange={e => handleEmail(e)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={styles.Field}
                                label='Phone'
                                type='number'
                                onChange={e => handlePhone(e)}
                            />
                        </Grid>
                        <Grid item xs={12}> 
                            <TextField
                                sx={styles.Field}
                                label='Address'
                                onChange={e => handleAddress(e)}
                            />
                        </Grid>
                        <Grid item xs={12}> 
                            <Button onClick={handleSubmit} sx={styles.Button} variant='contained'>Submit</Button>
                        </Grid>
                    </Grid>
                    <Button onClick={handleCloseModal}>Close</Button>
                </Box>
            </Dialog>
        )
    }

    return (
        <>
            <Box p={5}>
                <UpdateDialog 
                    open={open} 
                />
                {data && (
                    <GuestInfo
                        _id={id}
                        firstname={data.firstName} 
                        lastname={data.lastName}
                        email={data.email}
                        phone={data.phone}
                        address={data.address}
                        handleUpdate={handleOpenModal}
                    />
                )}
            </Box>
        </>
    )
}