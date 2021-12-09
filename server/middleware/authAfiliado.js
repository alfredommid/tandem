const { request } = require('express');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    //Leer token en header
    const token = req.header('x-auth-token');

    //Revisar si no hay token
    if(!token){
        return res.status(401).json({msg: 'No se cuenta con los permisos necesarios'})
    }

    //validar token
    try {
        const verifiedToken = jwt.verify(token, process.env.SECRETA);
        
        req.afiliado = verifiedToken.afiliado; 
        console.log(verifiedToken)
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: 'Token no válido'})
    }
}