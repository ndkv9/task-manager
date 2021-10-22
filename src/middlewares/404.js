const notFound = (_req, res) => {
  res.status(404).send('cannot find the resource')
}

module.exports = notFound
