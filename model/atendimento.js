import database from "../config/database.js"



class atendimento {
    constructor() {

        this.model = database.db.define("Atendimentos", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            valor: {
                type: database.db.Sequelize.STRING,
            },
            dia: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            hora: {
                type: database.db.Sequelize.STRING,
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }


        })
    }
} export default new atendimento().model
















