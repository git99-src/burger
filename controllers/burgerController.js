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
      // console.log(hbsObject);
      res.render("index", burgerObject);
    });
  });

// Export routes for server.js to use.
module.exports = router;