import express from "express"
import ControllerCliente from '../controller/cliente.js'
import authMiddleware from "../middleware/auth.js"
const router = express.Router()

router.post("/login",  ControllerCliente.Login )

router.post("/criar" ,  ControllerCliente.Criar  )

// buscar todos
router.get("/buscar", authMiddleware , ControllerCliente.Buscar)
// buscar um 

router.get("/detalhe/:id", ControllerCliente.Detalhe)
//  alterar  
router.put("/alterar/:id", ControllerCliente.Alterar)
// deletar 
router.delete("/deletar/:id", ControllerCliente.Deletar)


export default router





