const express = require('express')
const router = express.Router()
const {getEnvelopes,getEnvelopeByID} = require('../controllers/envelopes')

router.get('/', getEnvelopes)
router.get('/:id', getEnvelopeByID)

module.exports = router