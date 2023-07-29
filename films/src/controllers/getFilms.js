const Character = require("../data/index")
const { response } = require("../utils")

const  getFilms = async(req, res)=>{
    const characterList = await Character.list()
    response({
        res,
        statusCode: 200,
        message: "success",
        data: characterList,

    })

}

module.exports = getFilms;