const { Sequelize } = require('sequelize')
const env = require('./env')

const sequelize = new Sequelize(env.db_uri)

module.exports = sequelize