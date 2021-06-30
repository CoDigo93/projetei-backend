const { Router } = require('express') 
const PessoaFisicaController = require('./controllers/PessoaFisicaController')

const usuarioController = require('./usuario/controllers')


const router = Router()

const pessoaFisicaController = new PessoaFisicaController()

router.post('/insert', pessoaFisicaController.insert)
router.get('/index', pessoaFisicaController.index)
router.delete('/:id', pessoaFisicaController.remove)
router.put('/:id', pessoaFisicaController.update)
router.get('/show', pessoaFisicaController.show)

router.post('/autenticar', usuarioController.authenticate)





module.exports = router 