const express = require('express')
const router = require('./routes')
const cors = require('cors')

const db = require('./database/db')


const app = express()
app.use(cors())

app.use(express.json())

require('./usuario/controllers/authController')(app)
app.use(router)






db.sync().then(()=>{
    
    app.listen(process.env.PORT || 3333, ()=> {
    console.log(`server is running`)
    })
}).catch(err => console.log(err))




