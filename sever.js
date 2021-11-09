const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const homeRouter = require('./routes/home')
const dictionaryRouter = require('./routes/dictionary')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.use('/', homeRouter)
app.use('/dictionary', dictionaryRouter)


app.listen(process.env.PORT || 3000, () => {
    console.log('Sever is listen on port', process.env.PORT || 3000)
})