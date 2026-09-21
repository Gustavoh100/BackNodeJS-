import express from 'express'
import  database from './config/database.js'
import e from 'express'


const app = express()

app.use(express.json())


app.use("/api/v1/cliente", )

database.db 
    .sync({force:false}
    .then((_)=> {
        app.listen(3000 , () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch ((e) => {
        console.log(e)
    })
    )