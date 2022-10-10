import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyparser from 'body-parser'
import routes from './routes/routes'

const app = express()
const PORT = 8080
const uri = process.env.MONGO_URI

mongoose
    .Promise = global.Promise
mongoose
    .connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log('connected to mongodb'))
    .catch(error => handleError(error));

app.use(bodyparser.urlencoded({extended:true}))
//app.use(bodyparser.json())
app.use(express.json())
app.use(cors())

routes(app)

app.get('/', (req, res) => 
    res.send(`Naked React - MERN:${PORT}`)
)

app.listen(PORT,() => 
    console.log('SERVER STARTED')
)