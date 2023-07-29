import { Schema } from "mongoose"

let PlanetSchema = new Schema({
    _id: { type: String },
    name: { type: String },
    rotation_period: { type: String },
    orbital_period: { type: String },
    diameter: { type: String },
    climate: { type: String },
    gravity: { type: String },
    terrain: { type: String },
    surface_water: { type: String },
    residents: [{ type: String, ref: "Character" }],
    films: [{ type: String, ref: "Film" }],
})

PlanetSchema.statics.list = async function () {
    return await this.find()
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"])
}

PlanetSchema.statics.getOne = async function (id) {
    return await this.findById(id)
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"])
}

PlanetSchema.statics.insert = async function (planet) {
    return await this.create(planet)
}


export default PlanetSchema
