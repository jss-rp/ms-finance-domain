exports.simple = (res, callback) => {
  try {
    return callback()
  } catch(err) {
    console.error(err)
    return res.status(500).send(err)
  }
}