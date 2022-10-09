import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'

const app = express()
const PORT = 8080
const uri = process.env.MONGO_URI
console.log(uri)

mongoose.Promise = global.Promise
mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(error => handleError(error));

app.use(bodyparser.urlencoded({extended:true}))
app.get('/', (req, res) => 
    res.send(`Naked React - MERN:${PORT}`)
)

app.listen(PORT,() => 
    console.log('SERVER STARTED')
)