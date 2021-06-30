const jwt = require('jsonwebtoken')
const authConfig = require('../../config/authCredentials')


module.exports = (request, response, next) => {
    
    const authHeader = request.headers.authorization;

    if (!authHeader)
        return response.status(401).send({error:'Token não informado'});

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
        return response.status(401).send({error:'Erro no Token'});

    const [scheme, token] = parts;

    if (! /^Bearer$/i.test(scheme))
        return response.status(401).send({error:'Erro de formatação no token'});

    jwt.verify(token, authConfig.secret, (err,decoded) => {
        if (err) return response.status(401).send({error: 'Token inválido'});
        
        request.userId = decoded.id;
        return next();
    });   
}