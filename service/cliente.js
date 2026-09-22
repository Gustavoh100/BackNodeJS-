
import RepositoryCliente from '../repository/cliente.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const segredo = 'S3gr3d0'

class ServiceCliente {

    async Criar(email, senha, nome) {
        if (!email || !senha || !nome) {
            throw new Error("favor informar todos os dados ")
            return
        }
        const senhaCripto = await bcrypt.hash(senha, 12)

        const cliente = await RepositoryCliente.Create(email, senhaCripto)


        return cliente
    }
    async Login(email, senha, ) {
        if (!email || !senha ) {
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

















