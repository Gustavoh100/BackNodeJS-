import express from "express"
import ControllerAtendimento from '../controller/atendimento.js'
import authMiddleware from "../middleware/auth.js"
const router = express.Router()


router.post("/criar" ,  ControllerAtendimento.Criar  )

// buscar todos
router.get("/buscar", authMiddleware , ControllerAtendimento.Buscar)
// buscar um 

router.get("/detalhe/:id", ControllerAtendimento.Detalhe)
//  alterar  
router.put("/alterar/:id", ControllerAtendimento.Alterar)
// deletar 
router.delete("/deletar/:id", ControllerAtendimento.Deletar)


export default router





