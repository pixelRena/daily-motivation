const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const buildPath = path.join(__dirname, 'build')

app.use(express.static(buildPath))

app.use(cors({ origin: true }))
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})