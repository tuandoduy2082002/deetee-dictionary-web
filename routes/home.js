const express = require('express')
const router = express.Router()
const wordnet = require('../models/wordnet')

router.get('/', (req, res) => {
    res.render('home')
})

router.post('/', async (req, res) => {
    const word = req.body.word.trim().toLowerCase()
    const data = await wordnet('word')
    if (data == null) {
        res.render('word-not-found')
    } else {
        res.redirect(`/dictionary/${word}`)
    }
})

module.exports = router