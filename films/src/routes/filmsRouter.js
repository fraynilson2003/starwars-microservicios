const { Router } = require("express");
const controller = require("../controllers")

const characterRouter = Router();

characterRouter.get("/", controller.getFilms);

module.exports = characterRouter;
