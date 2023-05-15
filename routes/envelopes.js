const express = require('express')
const router = express.Router()
const {getEnvelopes,getEnvelopeByID} = require('../controllers/envelopes')

router.param('envelopeID', (req,res,next,id) => {
    req.envelopeID = Number(id)
    next()
})

router.get('/', getEnvelopes)
router.get('/:envelopeID', getEnvelopeByID)

module.exports = router