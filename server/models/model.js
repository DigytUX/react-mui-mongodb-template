import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const EmployeeSchema = new Schema({
    created_date:{
        type:Date,
        default:Date.now
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    }
})