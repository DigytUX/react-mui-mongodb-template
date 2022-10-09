import express from 'express'

const app = express()
const PORT = 8080

app.get('/', (req, res) => 
    res.send(`Naked React - MERN:${PORT}`)
)

app.listen(PORT,() => console.log('SERVER STARTED'))