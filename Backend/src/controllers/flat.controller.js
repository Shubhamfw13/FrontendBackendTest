const express = require("express");
const router = express.Router();
const Flat = require("../models/flat.model");
const crudController = require("./crud.controller");
const authenticate = require("../middlewares/authenticate");

router.post("", authenticate, async (req, res) => {
  try {
    const user_id = req.user._id;
    const item = await Flat.create({
      user_id: user_id,
      id: req.body.id,
      resident_type: req.body.resident_type,
      flat_block: req.body.flat_block,
      flat_floor: req.body.flat_floor,
      flat_no: req.body.flat_no,
      residents: req.body.residents,
    });
    return res.status(201).send(item);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});
router.get("", async (req, res) => {
  try {
    let flat;
    let sort = req.query.sort;
    let filter = req.query.resident_type;
    const page = req.query.page || 1;
    const size = req.query.size || 10;
    let TotalPages = Math.ceil((await Flat.find().countDocuments()) / size);
    if (sort == "ASC") {
      flat = await Flat.find()
        .populate({ path: "user_id" })
        .populate("residents")
        .sort({ flat_no: 1 });
      return res.send(flat);
    }
    if (sort == "DSC") {
      flat = await Flat.find()
        .populate({ path: "user_id" })
        .populate("residents")
        .sort({ flat_no: -1 });
      return res.send(flat);
    }
    if (filter) {
      flat = await Flat.find({ resident_type: filter })
        .populate({ path: "user_id" })
        .populate("residents")
        .sort({ flat_no: 1 });
      return res.send(flat);
    }
    if (size > 10) {
      return res.send("Please enter a valid size");
    }
    flat = await Flat.find()
      .populate({ path: "user_id" })
      .populate("residents")
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();

    return res.send({ flat, TotalPages });
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const flat = await Flat.find({ id: req.params.id })
      .populate({ path: "user_id" })
      .populate("residents")
      .lean()
      .exec();
    return res.send(flat);
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
});
router.delete("/:id", crudController(Flat).patch);
router.patch("/:id", crudController(Flat).patch);

module.exports = router;
