const express = require("express");
const burger = require("../models/burger");

//  Create the `router` for the app, and export the `router` at the end of your file.

const router = express.Router()

router.get('/', (req, res) => {
    burger.getAll((burgers) => {
        res.render('index', { burgers })
    })
})

router.post('/api/burger/new', (req, res) => {
    burger.addBurger(req.body.burgerName, () => {
        res.redirect('back');
    })
})

router.post('/api/burger/devoured', (req, res) => {
    burger.devouredBurger(req.body.devoured, () => {
        res.redirect('back');
    })

})

module.exports = router;