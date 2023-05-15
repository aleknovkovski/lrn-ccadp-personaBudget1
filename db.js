// This file approximates, or acts as a fake database

const envelopes = [
  {
    id: 1,
    title: "Dance Parties",
    budget: 150,
  },
  {
    id: 2,
    title: "Fun Food",
    budget: 200,
  },
  {
    id: 3,
    title: "Dating Related",
    budget: 400,
  },
];

function getById(id) {
  return envelopes.filter((envelope) => envelope.id === id)
}

module.exports = {
  envelopes,
  getById
};
