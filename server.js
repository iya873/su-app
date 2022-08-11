const express = require('express');
const app = express()

const characters = require('./models/characters')
const characterData = require('./models/characters')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
const port = 8000

app.get('/', (req, res) => {
    res.send("Welcome to Steven's Universe!")
})
app.get('/characters', (req, res) => {
    res.render('Index')
})
app.get('/characters/:id', (req, res) => {
    res.render('Show', {characters: characterData[req.params.id]})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})