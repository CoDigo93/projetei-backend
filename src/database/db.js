const Sequelize = require('sequelize')
const config = require('../config/config')

const database = new Sequelize(
     config.development.database, 
     config.development.username, 
     config.development.password,
     {
          dialect:'mysql', 
          host:config.development.host, 
          port:config.development.port
     })

const connection = database.authenticate().then(function (){
     console.log('database connection established!')

}).catch(function(error){
     console.log('connection error:',error)

})

module.exports = database