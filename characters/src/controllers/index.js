const getCharacter = require("./getCharacters");
const catchedError = require("../utils/catchedError")

module.exports = {
    getCharacter: catchedError(getCharacter),
}

