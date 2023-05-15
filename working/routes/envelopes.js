const express = require('express')
const router = express.Router()
const {getEnvelopes,getEnvelopeByID, updateEnvelope, deleteEnvelope, transfer} = require('../controllers/envelopes')

router.param('envelopeID', (req,res,next,id) => {
    req.envelopeID = Number(id)
    next()
})

router.get('/', getEnvelopes)
router.get('/:envelopeID', getEnvelopeByID)
router.put('/:envelopeID', updateEnvelope)
router.delete('/:envelopeID', deleteEnvelope)
router.post('/:fromId/transfer/:toId', transfer);

module.exports = router