const { TransactionRepository } = require('../repository')
const { request } = require('../middle')

exports.create = async (req, res) => {
  request.simple(res, async () => {
    let transaction = await TransactionRepository.create(req.body)
    return res.status(201).send(transaction)
  })
}

exports.read = async (req, res) => {
  request.simple(res, async () => {
    let transaction = await TransactionRepository.read(req.params.id)

    if(!transaction)
      return res.status(404).send()

    return res.status(200).send(transaction)
  })
}

exports.readByBank = async (req, res) => {
  request.simple(res, async () => {
    let transaction = await TransactionRepository.readByBank(req.params.id)

    if(!transaction)
      return res.status(404).send()

    return res.status(200).send(transaction)
  })
}

exports.readByCard = async (req, res) => {
  request.simple(res, async () => {
    let transaction = await TransactionRepository.readByCard(req.params.id)

    if(!transaction)
      return res.status(404).send()

    return res.status(200).send(transaction)
  })
}

exports.readByTag = async (req, res) => {
  request.simple(res, async () => {
    let transaction = await TransactionRepository.readByCard(req.params.id)

    if(!transaction)
      return res.status(404).send()

    return res.status(200).send(transaction)
  })
}

exports.readAll = async (_, res) => {
  request.simple(res, async () => {
    let transactions = await TransactionRepository.readAll()
    return res.status(200).send(transactions)
  })
}