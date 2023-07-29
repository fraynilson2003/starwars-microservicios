const { Router } = require("express");
const characterRouter = require("./charactersRouter")

const router = Router();


router.use("/planets", characterRouter);

module.exports = router;
