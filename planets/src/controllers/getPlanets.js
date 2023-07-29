const Character = require("../data/index")
const { response } = require("../utils")

const  getPlanets= async(req, res)=>{
    const characterList = await Character.list()
    response({
        res,
        statusCode: 200,
        message: "success",
        data: characterList,

    })

}

module.exports = getPlanets;