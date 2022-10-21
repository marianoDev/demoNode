const express = require('express');
require('dotenv').config();
const app = express();

port = process.env.PORT;

//Middleware para servir contenido estatico
app.use(express.static('public'));

//Rutas
app.get('/generic', (req, res) => {
    res.sendFile(`${__dirname}/public/generic.html`);
})

app.get('/elements', (req, res) => {
    res.sendFile(`${__dirname}/public/elements.html`);
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
})

app.listen(port, () => {
    console.log('Server on port', port);
});