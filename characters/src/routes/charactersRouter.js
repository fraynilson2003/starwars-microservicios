const { Router } = require("express");
const controller = require("../controllers")

const characterRouter = Router();

characterRouter.get("/", controller.getCharacter);

module.exports = characterRouter;
