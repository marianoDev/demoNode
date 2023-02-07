const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');
const { generarJWT } = require("../helpers/generar-jwt");

// LOGIN = Ingreso al front con datos logeados
const login = async( req = request, res = response ) => {
    
    const { email, password } = req.body;
    try {

        // VALIDAR EMAIL
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'Email fail'
            })
        }

        // VALIDAR PASSWORD
        const validPassword = bcryptjs.compareSync( password, user.password );
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Password fail'
            })  
        }
        
        res.status(200).json({
            email: user.email,
            localId: user.localId,
            idToken: user.idToken,
            expiresIn: user.expiresIn
    })
        
    // Atajo el error y notifico al usuario
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:'ERROR - Talk to admin'
        })
    }
    
}

// SIGNUP = Creo el usuario en mi front
const singup = async (req, res) => {

    const { email, password } = req.body;
    const user = new User({ email, password });

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    const token = await generarJWT( user.id );
    user.idToken = token;

    // Guardar usuario en Mongo
    await user.save();

    res.status(200).json({
        email: user.email,
        localId: user.localId,
        idToken: user.idToken,
        expiresIn: user.expiresIn
    })
}

module.exports = {
    login,
    singup
}