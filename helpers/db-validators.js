const User = require('../models/user');

// Valido si el email ya esta registrado
const emailExiste = async ( email  = '' ) => {

    const existeEmail = await User.findOne({ email });
    
    if ( existeEmail ) {
        throw new Error(`Este correo: ${ email } ya esta registrado`);
    }

}

// Valido si el usuario ya existe en la DB
const existeUsuarioPorID = async ( id ) => {
    
    const existeUsuario = await User.findById(id);
    
    if ( !existeUsuario ) {
        throw new Error(`El id: ${ id } no existe`);
    }

}

module.exports = {
    existeUsuarioPorID,
    emailExiste
}