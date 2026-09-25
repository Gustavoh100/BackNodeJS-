
import ServiceAtendimento from '../service/atendimento.js'



class ControllerAtendimento {

    async Buscar(req, res) {
        try {
            console.log(req.session)
            const atendimentos = await ServiceAtendimento.Buscar()
            res.send({ mensagem: atendimentos })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const atendimento = await ServiceAtendimento.Detalhe(id)

            res.send({ mensagem: atendimento })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }
    async Criar(req, res) {
        try {
            const { dia, hora, valor, concluido } = req.body
            await ServiceAtendimento.Criar(dia, hora, valor, concluido)
            res.send({ message: "cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { dia, hora, valor, concluido  } = req.query

            await ServiceAtendimento.Alterar(id, dia, hora, valor, concluido )
            res.send({ mensagem: "alterado com sucesso " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

   async Deletar(req, res) {
        try {
            const identificador = req.params.id

          await ServiceAtendimento.Deletar(identificador)
            res.send({ mensagem: "deletado " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }
} export default new ControllerAtendimento()






