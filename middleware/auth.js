
import jwt from 'jsonwebtoken'


const segredo = 'S3gr3d0'

export default async function authMiddleware(req, res, next) {
    console.log("AAAAQUI")
    try {
        // verificar se o JWT é valido 
        const token = req.headers['authorization']
        console.log(token)
        if (!token) {
            throw new Error()
        }
        const decoded = jwt.verify(token, segredo)



        req.session = decoded

       
        next()
    } catch (error) {
        res.status(403).send({
            message: "Usuário ou senha inválido"
        })
    }

}

