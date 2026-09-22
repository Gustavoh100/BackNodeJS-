
import ServiceCliente from '../service/cliente.js'



class ControllerCliente {

    async Criar(req, res) {
        try {
            const { email, senha, nome } = req.body
            await ServiceCliente.Criar(email, senha, nome)
            res.send({ message: "cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Login(req,res){
        try {
            const {email , senha,} = req.body
            const token = await ServiceCliente.Login(email , senha)
            res.status(200).send({
              token
            })
            
        } catch (error) {
            res.status(500).send({
            message : error.message
            })
        }

    }

} export default new ControllerCliente()






