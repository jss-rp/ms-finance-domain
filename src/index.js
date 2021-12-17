const sequelize = require('./config/sequelize')
const { swagger } = require('./config')
const env = require('./config/env')
const app = require('./app')

swagger(app)

app.listen(env.port, async () => {
  try {
    await sequelize.authenticate()

    if(env.sync_db)
      await sequelize.sync({force: true})
    console.log(`The server is online on port: ${env.port}`)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }  
})