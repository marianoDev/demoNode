const express = require('express');
require('dotenv').config();
const app = express();

port = process.env.PORT;

//Middleware para servir contenido estatico
app.use(express.static('public'));

//Rutas
// app.get('*', (req, res) => {
//     res.sendFile(`${__dirname}/public/index.html`);
// })

app.listen(port, () => {
    console.log('Server on port', port);
});