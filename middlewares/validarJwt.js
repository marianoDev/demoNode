const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user')

validarJWT = async(req = request, res = response, next) => {
    const token = req.header('x-token');

    // SI NO HAY TOKEN

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    // VALIDACION DEL TOKEN

    try {

        const { uid } = jwt.verify( token, process.env.SECRETPRIVATEKEY );
        
        // leer usuario que corresponde al uid
        const user = await User.findById(uid);
        
        // Usuario borrado
        if (!user) {
            return res.status(400).json({
                msg: 'No existe el usuario en la DB'
            })
        }

        req.user = user;

        next();
    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        })
        
    }
    
}

module.exports = {
    validarJWT
}