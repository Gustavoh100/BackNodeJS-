import atendimento from '../model/atendimento.js'


class RepositoryAtendimento {
    async Find() {
        const atendimentos = await atendimento.findAll()

        return atendimentos
    }

    async FindById(id) {
        const atendimentosDetalhes = await atendimento.findByPk(id)

        return atendimentosDetalhes
    }

    async Create(dia, hora, valor) {

        const criar = await atendimento.create({ dia, hora, valor })

        return criar
    }
    async Update(id, dia, hora, valor , concluido) {
        const atendimentoAtualizar = await atendimento.findByPk(id)
        if (!atendimentoAtualizar) { throw new Error("usuario não encontrado ") }

        atendimentoAtualizar.dia = dia
        atendimentoAtualizar.hora = hora
        atendimentoAtualizar.valor = valor 
        atendimentoAtualizar.concluido = concluido 
        await atendimentoAtualizar.save()
    }
    
  async Delete(id) {
    const atendimentoDeletar = await atendimento.findByPk(id)

    if (!atendimentoDeletar) {
      throw new Error("usuario não encontrado")
    }

    await atendimentoDeletar.destroy()

    return atendimentoDeletar

  }

} export default new RepositoryAtendimento()