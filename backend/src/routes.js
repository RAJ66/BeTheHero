const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({
    event: "OmniStack 11.0",
    student: "Vitor Barbosa"
  });
});

module.exports = routes;
