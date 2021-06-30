const PessoaFisica = require('../models/PessoaFisicaModel')


class PessoaFisicaController {
    
    async insert(request, response){
        
        try{

            const { cpf, name, phone, birthdate } = request.body
    
            const personAlreadyExists = await PessoaFisica.findOne({where:{cpf:cpf}})
    
            if(personAlreadyExists !== null){
                return response.status(400).json({error:'Essa pessoa já existe!'})
            }
    
            const person = await PessoaFisica.create({
                name,
                cpf,
                phone,
                birthdate
                
            })
            
            return response.status(201).json(person)
        
        }catch(error){
        
            return response.status(400).send({error:'Erro ao cadastrar pessoa, tente novamente!'})
        }

    }




    async index(request, response){
        try{

            const people = await PessoaFisica.findAll()
            return response.status(200).json(people)

        }catch(error){
            return response.status(400).send({error:'Erro ao carregar pessoas. Recarregue a pagina!'})
        }
    }




    async remove(request, response) {
        try{

            
            const { id } = request.params 
    
            const person = await PessoaFisica.findOne({where:{id}})
    
            if(person === null){
                return response.status(400).json({error:"Essa pessoa não existe!"})
            }
    
             await PessoaFisica.destroy({where:{id}})
    
            return response.status(200).json(`${person.name} foi deletedo(a)!`)
        
        }catch(error){
            return response.status(400).send({})
        }

    }



    async update(request, response){
        try{
            const params = request.params

            const fields = ['name','cpf','phone','birthdate']
            const person = await PessoaFisica.findOne({where:{id:params.id}})

            if(!person){
                return response.status(400).json("Essa pessoa não existe!")
            }

            fields.map(fieldname =>{
                const newValue = request.body[fieldname]
                if(newValue !== undefined){
                    person[fieldname] = newValue
                }
            })

            await person.save()

            return response.status(200).json(person)

        }catch(error){
            console.log(error)
            return response.status(400).send({error:'Erro ao atualizar registro. Tente novamente!'})
        }
        


    }


    async show(request, response){
        try{

            const { cpf } = request.body
    
            const person = await PessoaFisica.findOne({where:{cpf}})
    
            if(!person){
                return response.status(400).json("Essa pessoa não existe!")
            }

            return response.status(200).json(person)
        }catch(error){
            return response.status(400).send({error})

        }
    }
}



module.exports = PessoaFisicaController 