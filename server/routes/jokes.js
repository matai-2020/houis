const express = require('express')
const request = require('superagent')

const router = express.Router()
const jokesURL = 'https://official-joke-api.appspot.com/random_joke'

router.get('/setup', (req, res) => {
  request.get(jokesURL)
    .then(response => {  
      const { joke } = response.body
      res.json(response.body.setup)
    })
    .catch(err => {
      res.status(500).send('ERROR:' + err.message)
    })
})

router.get('/punchline', (req, res) => {
  request.get(jokesURL)
    .then(response => {
      const { joke } = response.body
      res.json(response.body.punchline)
    })
    .catch(err => {
      res.status(500).send('ERROR:' + err.message)
    })
})

module.exports = router