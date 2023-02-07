// CONFIGURACION PARA CONECTARSE A LA DB VIA MONGOOSE USANDO DOTENV

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

const dbConection = async() => {

    try {
        await mongoose.connect(mongodb+srv://clCafe:INTRO-cluster2023@clustercafe.suyazhs.mongodb.net/cafeDB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
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
