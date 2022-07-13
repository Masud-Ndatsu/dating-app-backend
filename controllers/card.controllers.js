const Card = require("../models/card.model");

const create = async (req, res) => {
  const dbCard = req.body;

  try {
    const card = await Card.create(dbCard);
    return res.status(200).send(card);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const list = async (req, res) => {
  try {
    const cards = await Card.find({});
    return res.status(200).send(cards);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { create, list };
