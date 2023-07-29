const ClientError = require("../utils/clientError")
const characters = require("./characters.json")

module.exports = {
    list: async()=>{
        return characters

        throw new ClientError({
            message: "Error en extraccion de datos",
            statusCode: 402
        })
    }
}