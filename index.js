require('dotenv').config()

const config = require('./app/config')
const app = require('./app')

const { port } = config

app.listen(port, () => {
  console.log(`application is listening on port ${port}`)
})
