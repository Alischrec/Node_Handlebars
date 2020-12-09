const express = require("express");
const models = require("../models/burger");

//  Create the `router` for the app, and export the `router` at the end of your file.

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {})
})

module.export = router;