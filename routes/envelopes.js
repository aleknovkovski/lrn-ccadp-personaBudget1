const express = require('express')
const router = express.Router()
const {getEnvelopes} = require('../controllers/envelopes')
router.get('/', getEnvelopes)

module.exports = router