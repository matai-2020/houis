const express = require('express')
const request = require('superagent')

const router = express.Router()
const jokesURL = 'https://official-joke-api.appspot.com/random_joke'

router.get('/', (req, res) => {
  request.get(jokesURL)
    .then(response => {
      res.json(response.body)
    })
    .catch(err => {
      res.status(500).send('ERROR:' + err.message)
    })
})

module.exports = router
