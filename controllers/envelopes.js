const {envelopesDB, getById} = require("../db");

async function getEnvelopes (req, res, next) {
    try {
    // mock retrieval of a real DB with async/await
    const envelopes = await envelopesDB;
    res.status(200).send(envelopes);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getEnvelopeByID (req, res, next) {
    res.status(200).send(getById(1));
}

module.exports = {
    getEnvelopes,
    getEnvelopeByID
}