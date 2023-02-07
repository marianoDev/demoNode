// CONFIGURACION PARA CONECTARSE A LA DB VIA MONGOOSE USANDO DOTENV

const mongoose = require('mongoose');
const dotenv = require("dotenv");
mongoose.set('strictQuery',false);

const dbConection = async() => {

    try {
        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
        });

        console.log('Dale capo nunca te rindas!!');

    } catch (error) {

        console.log(error);
        throw new Error('Explota la DB chabon, cual te mandaste');
    }

}

module.exports = {
    dbConection
}
