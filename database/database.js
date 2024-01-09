import { Sequelize } from 'sequelize'

export const connection = new Sequelize('guiaperguntas', 'root', 'mysql',{
  host: 'localhost',
  dialect: 'mysql'
})

