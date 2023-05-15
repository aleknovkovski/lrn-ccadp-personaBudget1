const {envelopesDB, getById, updateById} = require("../db");

async function getEnvelopes (req, res, next) {
    try {
    res.status(200).send(envelopesDB);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getEnvelopeByID (req, res, next) {
    res.status(200).send(getById(req.envelopeID));
}

async function updateEnvelope (req, res, next) {
    const { title, budget } = req.body;
    updateById(req.envelopeID, title, budget)
    res.status(200).send(envelopesDB);
}

module.exports = {
    getEnvelopes,
    getEnvelopeByID,
    updateEnvelope
}