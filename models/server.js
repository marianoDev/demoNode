const express = require('express');
const cors = require('cors');
const routerAuth = require('../routes/users');
const { dbConection } = require('../database/config');
const { routerRecipe } = require('../routes/recipes');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
       
        this.authPath = '/api/auth'
        this.recipePath = '/api/recipes'
       
        //Conectar a Mongo
        this.conectarDB();
       
        // Middlewares
        this.middlewares();
       
        //Rutas
        this.routes();
        
    }

    async conectarDB(){
        await dbConection()
    }

    middlewares(){
        this.app.use( cors());
        this.app.use( express.json() );
        this.app.use( express.static('public'));
    }

    routes() {
        this.app.use(this.authPath, routerAuth);
        this.app.use(this.recipePath, routerRecipe)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }
}

module.exports = Server;