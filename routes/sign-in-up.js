const express = require('express')
const router = express.Router()
const wordnet = require('../models/wordnet')

router.get('/', (req, res) => {
    res.render('sign-in-up')
})

module.exports = router