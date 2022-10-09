import mongoose from 'mongoose'
import {EmployeeSchema} from '../models/model' 

const Employee = mongoose.model('Employee', EmployeeSchema)

export const addNewEmployee = (req, res) => {
    let newEmployee = new Employee(req.body)

    newEmployee.save((err) => {
        if(err) res.send(err)
        
        res.json(Employee)
    })
}