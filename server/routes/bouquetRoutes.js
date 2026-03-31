const express = require("express");
const router = express.Router();
const Bouquet = require("../models/Bouquet");


// ✅ Save bouquet
router.post("/save", async (req, res) => {
  try {
    const bouquet = await Bouquet.create(req.body);
    res.json({ success: true, id: bouquet._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Get bouquet by ID (for share link)
router.get("/:id", async (req, res) => {
  try {
    const bouquet = await Bouquet.findById(req.params.id);
    if (!bouquet) {
      return res.status(404).json({ error: "Bouquet not found" });
    }
    res.json(bouquet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;