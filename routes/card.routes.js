const { create, list } = require("../controllers/card.controllers");

const router = require("express").Router();

router.post("/", create);
router.get("/", list);

module.exports = router;
