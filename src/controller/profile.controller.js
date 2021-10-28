const Profile = require('../repository/profile.repository')

exports.create = async (req, res) => {
  let profile = await Profile.create(req.body)

  return res.status(201).send(profile)
}

exports.listAll = async (req, res) => {
  let profiles = await Profile.listAll()

  return res.status(200).send(profiles)
}