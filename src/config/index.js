const pino = require('pino')

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'yyyy-mm-dd HH:MM:ss',
      timestampKey: 'time',
    }
  }
})

module.exports = logger 