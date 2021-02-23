export default (req, res) => {
  res.statusCode = 200
  res.json([
    { id: 0, name: 'All work', active: true },
    { id: 1, name: 'Web', active: false },
    { id: 2, name: 'Mobile', active: false },
    { id: 3, name: 'Marketing', active: false }
  ])
}

