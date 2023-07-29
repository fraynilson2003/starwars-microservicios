const { Router } = require("express");
const controller = require("../controllers")

const characterRouter = Router();

characterRouter.get("/", controller.getPlanets);

module.exports = characterRouter;
