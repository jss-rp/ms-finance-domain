const sequelize = require('./config/sequelize')
const env = require('./config/env')
const app = require('./app')

app.listen(env.port, async () => {
  try {
    await sequelize.authenticate()    
    // await sequelize.sync({force: true})
    console.log(`The server is online on port: ${env.port}`)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }  
})