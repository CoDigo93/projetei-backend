const jwt = require('jsonwebtoken')
const authConfig = require('../../config/authCredentials')

function tokenGenerator(params={}){
    const oneDay = 86400
    return jwt.sign(params, authConfig.secret,{
        expiresIn:oneDay

    })
}

module.exports = {
    
    async authenticate(request, response){
        try{
            const {username, password} = request.body

            const isUsernameEqual = username === authConfig.username ? true : false

            if(!isUsernameEqual){
                return response.status(400).send({error:'username incorreto!'})
            }

            const isPasswordEqual = password === authConfig.password ? true : false

            if(!isPasswordEqual){
                return response.status(400).send({error:'senha incorreta!'})
            }
            const token = tokenGenerator({id:authConfig.id})

            return response.send({token})

        }catch(error){
            return response.status(400).send({error:'Ops! Houve um erro. Tente novamente!'})
        }
    }

}