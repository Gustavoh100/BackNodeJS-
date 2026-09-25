
import RepositoryCliente from '../repository/cliente.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const segredo = 'S3gr3d0'

class ServiceCliente {
    async Buscar() {
        return RepositoryCliente.Find()

    }
    
    async Detalhe(id) {
        if (!id) {
            throw new Error("favor informar ")
        }
        const cliente = await RepositoryCliente.FindById(id)
        if (!cliente) {
            throw new Error(`ID ${id} do cliente não encontrado`)
        }
        return cliente
    }
    async Criar(email, senha, nome , pago ) {
        if (!email || !senha || !nome) {
            throw new Error("favor informar todos os dados ")
            return
        }
        const senhaCripto = await bcrypt.hash(senha, 12)

        const cliente = await RepositoryCliente.Create(email, senhaCripto, nome , pago )


        return cliente
    }
    
    async Alterar(id, email, senha, nome , pago) {
        if (!id || !email || !senha || !nome) {
            throw new Error("favor informar id ")
        }
        const senhaCripto = !senha
            ? undefined
            : await bcrypt.hash(senha, 12)

        const clienteAlterado = await RepositoryCliente.Update(id, email, senhaCripto, nome, pago)

        return clienteAlterado
    }
    
    async Deletar(id) {

        if (!id) {
            throw new Error("favor informar ")
        }
        const Cliente = RepositoryCliente.Delete(id)
        return id
    }


    async Login(email, senha,) {
        if (!email || !senha) {
            throw new Error("Email ou senha invalido ")
        }
        const cliente = await RepositoryCliente.FindByEmail(email)

        if (!cliente) {
            throw new Error("Email ou senha invalido")
        }
        if (
            !(await bcrypt.compare(String(senha), cliente.senha))
        ) {
            throw new Error("Email ou senha invalido")
        }
        return jwt.sign(
            { id: cliente.id, email },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }


} export default new ServiceCliente()

















