const { CardRepository } = require('../repository')
const { request } = require('../middle/index')

exports.create = async (req, res) => {
  request.simple(res, async () => {
    const card = await CardRepository.create(req.body)
    return res.status(201).send(card)
  })
}

exports.read = async (req, res) => {
  request.simple(res, async () => {
    const card = await CardRepository.read(req.params.id)

    if(!card)
      return res.status(404).send()
    
    return res.status(200).send(card)
  })
}

exports.readByBank = async (req, res) => {
  request.simple(res, async () => {
    const card = await CardRepository.readByBank(req.params.id)

    return res.status(201).send(card)
  })
}

exports.readAll = async (_, res) => {
  request.simple(res, async () => {
    const cards = await CardRepository.readAll()

    return res.status(200).send(cards)
  })
}