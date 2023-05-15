// This file approximates, or acts as a fake database

let envelopesDB = [
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
  return envelopesDB.filter((envelope) => envelope.id === id)
}

function updateById(id, title, budget) {
  console.log(envelopesDB)

  envelopesDB = envelopesDB.map((envelope) => {
    if (envelope.id === id) {
      envelope.budget = budget
      envelope.title = title
    }
  })
}

module.exports = {
  envelopesDB,
  getById,
  updateById
};
