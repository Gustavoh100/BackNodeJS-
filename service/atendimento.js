
import RepositoryAtendimento from '../repository/atendimento.js'


class ServiceAtendimento {
    async Buscar() {
        return RepositoryAtendimento.Find()

    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("favor informar ")
        }
        const atendimento = await RepositoryAtendimento.FindById(id)
        if (!atendimento) {
            throw new Error(`ID ${id} do atendimento não encontrado`)
        }
        return atendimento
    }
    async Criar(dia, hora, valor, concluido) {
        if (!dia || !hora || !valor) {
            throw new Error("favor informar todos os dados ")
            return
        }

        const atendimento = await RepositoryAtendimento.Create(dia, hora, valor, concluido)


        return atendimento
    }

    async Alterar(id, dia, hora, valor, concluido) {
        if (!id || !dia || !hora || !valor, concluido) {
            throw new Error("favor informar id ")
        }
        const atendimentoAlterado = await RepositoryAtendimento.Update(id, dia, hora, valor, concluido)

        return atendimentoAlterado
    }

    async Deletar(id) {

        if (!id) {
            throw new Error("favor informar ")
        }
        const atendimento = RepositoryAtendimento.Delete(id)
        return id
    }


    // async Login(dia, hora,) {
    //     if (!dia || !hora) {
    //         throw new Error("Email ou hora invalido ")
    //     }
    //     const atendimento = await RepositoryAtendimento
    //     .FindByEmail(dia)

    //     if (!atendimento) {
    //         throw new Error("Email ou hora invalido")
    //     }
    //     if (
    //         !(await bcrypt.compare(String(hora), atendimento.hora))
    //     ) {
    //         throw new Error("Email ou hora invalido")
    //     }
    //     return jwt.sign(
    //         { id: atendimento.id, dia },
    //         segredo,
    //         { expiresIn: 60 * 60 }
    //     )
    // }


} export default new ServiceAtendimento()

















