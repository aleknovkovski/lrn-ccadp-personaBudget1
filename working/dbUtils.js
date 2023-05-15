const {envelopesDB} = require("./db");

function getById(envelopes, id) {
  return envelopes.filter((envelope) => envelope.id === id)
}

function updateById(envelopes, id, title, budget) {
    return envelopes.map((envelope) => {
    if (envelope.id === id) {
      envelope.budget = budget
      envelope.title = title
    }
  })
}

function deleteById(envelopes, id) {
    envelopes.forEach((envelope, index, object) => {
        if (envelope.id === id) {
            object.splice(index, 1);
        }
    })
}

function transferAmount(envelopes, fromId, toId, amount) {
    const fromEnvelope = envelopes.findIndex((envelope) => envelope.id === Number(fromId))
    const toEnvelope = envelopes.findIndex((envelope) => envelope.id === Number(toId))
    envelopes[fromEnvelope].budget -= amount
    envelopes[toEnvelope].budget += amount
}


module.exports = {
    getById,
    updateById,
    deleteById,
    transferAmount
}