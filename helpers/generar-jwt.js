// GENERAR JWT

const jwt = require('jsonwebtoken');

const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = {uid}

        jwt.sign(payload, process.env.SECRETPRIVATEKEY, {
            expiresIn: '40h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('Error al generar Token')
            } else {
                resolve( token );
            }
        })
    })
}

module.exports = { generarJWT }