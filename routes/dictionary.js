const express = require('express')
const router = express.Router()
const wordnet = require('../models/wordnet')

router.get('/', (req, res) => {
    res.render('dictionary')
})

router.get('/:word', async (req, res) => {
    const word = req.params.word
    const data = await wordnet(word)
    if (data == null) {
        res.render('word-not-found')
    } else {
        res.render('glossary', data)
    }
})

module.exports = router