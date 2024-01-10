import { Sequelize } from "sequelize";
import { connection } from './database.js'

export const Reply = connection.define('reply', {
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  questionId:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Reply.sync({force: false})