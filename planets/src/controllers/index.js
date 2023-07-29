const getPlanets = require("./getPlanets");
const catchedError = require("../utils/catchedError")

module.exports = {
    getPlanets: catchedError(getPlanets),
}

