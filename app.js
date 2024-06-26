const express = require('express')

const app = express()

// imports 
const specialEventsController = require('./controllers/special-events.controller')
const locationsController = require('./controllers/locations.controller')
const machinesController = require('./controllers/machines.controller')
const personsController = require('./controllers/persons.controller')
const plansController = require('./controllers/plans.controller')


app.get('/', (req,res) => {
    res.send("Hello, world!")
})

// Routing 
app.use('/special-events', specialEventsController)
app.use('/locations', locationsController)
app.use('/machines', machinesController)
app.use('/persons', personsController)
app.use('/plans', plansController)

// Error Message
app.use((req, res) => {
    //checks the status and then if it is an error? return the message.
    res.status(404).send("<h1>Sorry, no page found!</h1>");
});




module.exports = app