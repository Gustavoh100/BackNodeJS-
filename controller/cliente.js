
import ServiceCliente from '../service/cliente.js'



class ControllerCliente {

    async Buscar(req, res) {
        try {
            console.log(req.session)
            const clientes = await ServiceCliente.Buscar()
            res.send({ mensagem: clientes })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const cliente = await ServiceCliente.Detalhe(id)

            res.send({ mensagem: cliente })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }
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

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { email, senha, nome } = req.query

            await ServiceCliente.Alterar(id, email, senha, nome )
            res.send({ mensagem: "alterado com sucesso " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

   async Deletar(req, res) {
        try {
            const identificador = req.session.id

          await ServiceCliente.Deletar(identificador)
            res.send({ mensagem: "deletado " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha, } = req.body
            const token = await ServiceCliente.Login(email, senha)
            res.status(200).send({
                token
            })

        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }

    }

} export default new ControllerCliente()






