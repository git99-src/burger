const express = require("express");

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");
const router = express.Router();


// Create route to get all burgers
router.get("/", (req, res) => {
  burger.all((data) => {
    const burgerObject = {
      burgers: data,
    };

    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create({ burger_name: req.body.name }, (result) => {
    // Send back the ID of the burger
    res.json({ id: result.insertId });
  });
});

// change the value of devoured to true 
router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });

});
// Export routes for server.js to use.
module.exports = router;