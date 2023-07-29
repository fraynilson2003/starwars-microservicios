const Character = require("../data/index")
const { response } = require("../utils")
const axios = require("axios")

const getCharacter = async (req, res) => {
    const response = await axios.get("http://database:8004/Character")
    res.status(200).json(response.data)

}

module.exports = getCharacter;