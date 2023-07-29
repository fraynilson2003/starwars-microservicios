const ClientError = require("../utils/clientError")
const planets = require("./planets.json")

module.exports = {
    list: async()=>{
        return planets
        throw new ClientError({
            message: "Error en extraccion de datos",
            statusCode: 402
        })
    }
}