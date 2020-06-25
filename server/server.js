const path = require('path')
const express = require('express')

const express = require('express')
const path = require('path')


const root = require('./routes/routes')
const  = require('./routes/jokes')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.use('/api/setup', setup)
server.use('/api/punchline', punchline)

module.exports = server
