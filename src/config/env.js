const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, '../../.env')})

module.exports = {
    port: process.env.PORT,
    mongo_uri: process.env.MONGO_URI,
    db_uri: process.env.DB_URI,
    sync_db: process.env.SYNC_DB == "true"
}