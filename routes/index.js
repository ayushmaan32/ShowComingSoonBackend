const express = require("express");

const router = express.Router();
const db = require("../config/mySql");

router.get("/", (req, res) => {
  const query = "SELECT * FROM banner ORDER BY id DESC LIMIT 1";
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error fetching banner data" });
      return;
    }
    res.json(result[0] || { description: "", timer: 0, link: "" });
  });
});

router.post("/update_banner", (req, res) => {
  const { description, timer, link, is_visible } = req.body;
  // console.log(req.body);

  const query =
    "INSERT INTO banner (`description`,`timer`,`link`,`is_visible`) VALUES(?)";
  const VALUES = [description, timer, link, is_visible];
  db.query(query, [VALUES], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error updating banner data" });
      return;
    }
    res.json({ message: "Banner updated successfully" });
  });
});

module.exports = router;
