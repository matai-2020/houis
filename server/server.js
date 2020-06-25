const path = require('path')
const express = require('express')

const express = require('express')
const path = require('path')


const root = require('./routes/routes')
const  jokes = require('./routes/jokes')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.use('/api/jokes', jokes)


module.exports = server
