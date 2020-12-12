const express = require("express");
const burger = require("../models/burger");

const router = express.Router()

// Get request to acquire data
router.get('/', (req, res) => {
    burger.getAll((burgers) => {
        res.render('index', { burgers })
    })
})

// Post request to post information to the list of Current Burgers
router.post('/api/burger/new', (req, res) => {
    burger.addBurger(req.body.burgerName, () => {
        res.redirect('back');
    })
})

// Post request to post information to the list of Devoured Burgers
router.post('/api/burger/devoured', (req, res) => {
    burger.devouredBurger(req.body.devoured, () => {
        res.redirect('back');
    })

})

module.exports = router;