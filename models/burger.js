// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  // updateOne -
  // parm 1: burgers (table)
  // parm 2: devoured: true 
  // parm 3: id of burger
  update: (burgerData, criteria, cb) => {
    orm.updateOne("burgers", burgerData, criteria, (res) => {
      cb(res);
    });
  },
    // insertOne -
    // parm 1: burgers (table)
    // parm 2: burger_name 
    create: (newBurger, cb) => {
      orm.insertOne("burgers", newBurger, (res) => {
        cb(res);
      });
    },
};
  // Export the database functions for the controller (burgerController.js).
  module.exports = burger;