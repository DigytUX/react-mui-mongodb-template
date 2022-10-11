import mongoose from 'mongoose'
import {GuestSchema} from '../models/model' 

//Creating a vairable from the mongoose schema, will 
//automatically create a new collection under the name
// Example: Guest -> guests (collection in Atlas)
const Guest = mongoose.model('Guest', GuestSchema)

export const homeRoute = (req, res) => {
    res.send('Home')
}

export const addNewGuest = (req, res) => {
    let newGuest = new Guest(req.body)
    newGuest.save((err) => {
        if(err) res.send(err)
        res.json(Guest)
    })
}

export const getGuests = (req, res) => {
   Guest.find({}, (err, Guest) =>{
        if(err) res.send(err)
        res.json(Guest)
    })
}

export const getGuestById = (req, res) => {
    Guest.findById(req.params.id, (err, Guest) =>{
        if(err) res.send(err)
        res.json(Guest)
    })
}