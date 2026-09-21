import { Sequelize } from "sequelize";

class DataBase {
    constructor() {
        this.init()
    }
    init() {
        this.db = new Sequelize({
            database: "agenda",
            host: "localhost",
            username: "root",
            password: "",
            dialect: "mysql"
        })
    }
}

export default new DataBase



