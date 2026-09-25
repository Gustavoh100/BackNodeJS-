import database from "../config/database.js"



class Cliente {
    constructor() {

        this.model = database.db.define("clientes", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.STRING,
            }, 
            // pagamento: {
            //     type: database.db.Sequelize.BOOLEAN,
            //     allowNull: false,
            // //     defaultValue: false
            // }
            

        })
    }
}export default new Cliente().model
















