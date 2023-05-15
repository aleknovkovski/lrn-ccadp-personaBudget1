let {envelopesDB} = require("../db");
const {getById, updateById, deleteById, transferAmount} = require("../dbUtils")

async function getEnvelopes (req, res, next) {
    try {
    res.status(200).send(envelopesDB);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getEnvelopeByID (req, res, next) {
    res.status(200).send(getById(envelopesDB, req.envelopeID));
}

async function updateEnvelope (req, res, next) {
    const { title, budget } = req.body;
    updateById(envelopesDB, req.envelopeID, title, budget)
    res.status(200).send(envelopesDB);
}

async function deleteEnvelope (req, res, next) {
    deleteById(envelopesDB, req.envelopeID)
    res.status(200).send(envelopesDB);
}

function transfer (req, res) {

    const { fromId, toId } = req.params;
    const { amount } = req.body

    transferAmount(envelopesDB, fromId, toId, amount)
    // const fromEnvelope = getById(envelopesDB, fromId);

    return res.status(201).send(envelopesDB);
}

module.exports = {
    getEnvelopes,
    getEnvelopeByID,
    updateEnvelope,
    deleteEnvelope,
    transfer
}