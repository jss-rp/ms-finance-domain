const { ProfileRepository } = require('../repository')

exports.create = async (req, res) => {
  let profile = await ProfileRepository.create(req.body)

  return res.status(201).send(profile)
}

exports.listAll = async (req, res) => {
  let profiles = await ProfileRepository.listAll()

  return res.status(200).send(profiles)
}

exports.read = async (req, res) => {
  let profile = await ProfileRepository.read(req.params.id)

  return res.status(200).send(profile)
}