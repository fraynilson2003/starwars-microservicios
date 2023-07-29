const ClientError = require("../utils/clientError")
const films = require("./films.json")

module.exports = {
    list: async()=>{
        return films

        throw new ClientError({
            message: "Error en extraccion de datos",
            statusCode: 402
        })
    }
}