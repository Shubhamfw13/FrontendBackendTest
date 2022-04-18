const express = require("express");
const router = express.Router();
const Resident = require("../models/resident.model");
const crudController = require("./crud.controller");
const authenticate = require("../middlewares/authenticate");

router.post("", authenticate, async (req, res) => {
  try {
    const user_id = req.user._id;
    const item = await Resident.create({
      user_id: user_id,
      id: req.body.id,
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
    });
    return res.status(201).send(item);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});
router.get("", crudController(Resident).getAll);
router.get("/:id", crudController(Resident).getOne);
router.delete("/:id", crudController(Resident).patch);
router.patch("/:id", crudController(Resident).patch);

module.exports = router;
