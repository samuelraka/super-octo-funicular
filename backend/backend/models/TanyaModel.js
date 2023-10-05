import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Tanya = db.define('tanya', {
    id_question: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    pertanyaan: DataTypes.STRING
}, {
    freezeTableName: true
});

const Jawaban = db.define('jawaban', {
    id_jawaban: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_question: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tanya', 
            key: 'id_question' 
        }
    },
    jawaban: DataTypes.STRING
}, {
    freezeTableName: true
});


export { Tanya, Jawaban };

(async()=>{
    await db.sync();
})();