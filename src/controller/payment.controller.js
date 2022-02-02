const { PaymentRepository } = require('../repository')
const { request } = require('../middle')

exports.create = async (req, res) => {
  request.simple(res, async () => {
    const payment = await PaymentRepository.create(req.body)
    return res.status(201).send(payment)
  })
}

exports.read = async (req, res) => {
  request.simple(res, async () => {
    const payment = await PaymentRepository.read(req.params.id)

    if(!payment) return res.status(404).send()

    return res.status(200).send(payment)
  })
}

exports.readByPurchase = async (req, res) => {
  request.simple(res, async () => {
    const payments = await PaymentRepository.readByPurchase(req.params.id)

    if(payments.length === 0) return res.status(204).send()

    return res.status(200).send(payments)
  })
}