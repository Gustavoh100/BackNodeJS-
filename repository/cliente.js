import cliente from '../model/cliente.js'


class RepositoryCliente{

async Create(email,senha){
    const criar = await cliente.create({email , senha})

    return criar
}

  async FindByEmail(email) {
    return cliente.findOne({ where: {email} })
  }

}export default new RepositoryCliente()