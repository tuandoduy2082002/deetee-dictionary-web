const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

const handle = require('./db/data')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static(path.join(__dirname, ('public'))))
app.use(express.static(('public')))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
    res.render('Home')
})

app.post('/', urlencodedParser, (req, res) => {
    const word = req.body.word.trim()
    const data = handle(word)
    if (data == null) {
        res.render('notfound');
    } else {
        res.redirect(`/dictionary/${word}`)
    }
})

app.get('/dictionary', (req, res) => {
    res.render('Dictionary')
})

app.get('/translate', (req, res) => {
    res.render('Translate')
})

app.get('/dictionary/:word', (req, res) => {
    const word = req.params.word
    const data = handle(word)
    if (data == null) {
        res.render('notfound');
    } else {
        res.render('word', data)
    }
})




app.listen(process.env.PORT || 3000, () => {
    console.log('Sever is listen on port', process.env.PORT || 3000)
})