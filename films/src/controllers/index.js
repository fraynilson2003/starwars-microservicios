const getFilms = require("./getFilms");
const catchedError = require("../utils/catchedError")

module.exports = {
    getFilms: catchedError(getFilms),
}

