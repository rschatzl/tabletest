//imports
const express = require('express')
const bodyParser = require('body-parser')

//instantiated 
const app = express()

//Serves your public folder for clientside
// assets to this location localhost:3000/
app.use(express.static('public'))

// parses request body of requests that 
// hit this process localhost:3000
app.use(bodyParser())

// save endpoint 
// captures requests to localhost:3000/save
app.post('/save', function (req, res) {
    console.log(req.body)    
    
    res.send("OK")
})

//sets port
app.listen(3000)



