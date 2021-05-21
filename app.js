const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Camilo Jimenez',
        titulo: 'Biblioteca'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic')
})

app.get('/elements', (req, res) => {
    res.render('elements')
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})