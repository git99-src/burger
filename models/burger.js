// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
};
  // Export the database functions for the controller (burgerController.js).
  module.exports = burger;