const { Router } = require("express");
const characterRouter = require("./charactersRouter")

const router = Router();


router.use("/characters", characterRouter);

module.exports = router;
