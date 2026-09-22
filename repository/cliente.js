import cliente from '../model/cliente.js'


class RepositoryCliente {
    async Find() {
        const clientes = await cliente.findAll()

        return clientes
    }

    async FindById(id) {
        const clienteDetalhes = await cliente.findByPk(id)

        return clienteDetalhes
    }

    async Create(email, senha, nome) {

        const criar = await cliente.create({ email, senha, nome })

        return criar
    }
    async Update(id, email, senha, nome) {
        const clienteAtualizar = await cliente.findByPk(id)
        if (!clienteAtualizar) { throw new Error("usuario não encontrado ") }

        clienteAtualizar.email = email
        clienteAtualizar.senha = senha
        clienteAtualizar.nome = nome 
        await clienteAtualizar.save()
    }
    
  async Delete(id) {
    const clienteDeletar = await cliente.findByPk(id)

    if (!clienteDeletar) {
      throw new Error("usuario não encontrado")
    }

    await clienteDeletar.destroy()

    return clienteDeletar

  }

    async FindByEmail(email) {
        return cliente.findOne({ where: { email } })
    }

} export default new RepositoryCliente()