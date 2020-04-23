const express = require('express')
const bodyParser = require('body-parser')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const morgan = require('morgan')
// const cors = require('cors')
const app = express()
require('dotenv').config()

const db = require('./models')
 
// const routes = require('./routes')


// Middleware ----------------------------- //



// Handle Cors



// Handle Cors



// BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Express Session - Authentication



// Routes --------------------------------- //
app.get('/', (req, res) => {
    res.send('<h1>Server works<h1>')
})


app.post('/api/v1/auth/register', (req, res) => {
    // if (!req.body.name || !req.body.email || !req.body.password){
    //     return res.status(400).json({
    //         status: 400,
    //         message: "Please enter a name, email, and password"
    //     })
    // }
    // db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    //     // error checking for a problem with the server or DB
    //     if (err) return res.status(500).json({
    //         status: 500,
    //         message: 'Something went wrong. Please try again.'
    //     })
    //     if (foundUser) return res.status(400).json({
    //         status: 400,
    //         message: "A user with that email address already exists!"
    //     })
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    db.User.create(newUser, (err, savedUser) => {
        if (err) return res.status(500).json({ status: 500, message: err })
        return res.status(200).json({ status: 200, message: "User registered!" })
    })
})


// Server --------------------------------- //
app.listen(3001, () => {
    return console.log(`Server connected at http://localhost:3001`)
})