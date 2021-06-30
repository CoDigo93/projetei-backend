    const{DataTypes} = require('sequelize')
    

    

    const database = require('../database/db')
    
    
    const PessoaFisica = database.define('teste', {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:true,
            autoIncrement:true
            
        },

        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },

        phone:{
            type:DataTypes.STRING,
            allowNull:true,
        },

        birthdate:{
            type:DataTypes.STRING,
            allowNull:true
        },
        
        
        

})
    module.exports = PessoaFisica

 
