const { BankRepository } = require('../repository')
const { request } = require('../middle/index')

exports.create = async (req, res) => {
  request.simple(res, async () => {
    const bank = await BankRepository.create(req.body)
    return res.status(201).send(bank)
  })
}

exports.read = async (req, res) => {
  request.simple(res, async () => {
    const bank = await BankRepository.read(req.params.id)
    
    if(!bank)
      return res.status(404).send()

    return res.status(200).send(bank)
  })
}

exports.readAll = async (_, res) => {
  request.simple(res, async () => {
    const banks = await BankRepository.readAll()
    return res.status(200).send(banks)
  })
}