import { Schema } from "mongoose"

let CharacterSchema = new Schema({
    _id: { type: String },
    name: { type: String },
    height: { type: String },
    mass: { type: String },
    hair_color: { type: String },
    skin_color: { type: String },
    eye_color: { type: String },
    birth_year: { type: String },
    gender: { type: String },
    homeworld: { type: String, ref: "Planet" },
    films: [{ type: String, ref: "Film" }]
})

CharacterSchema.statics.list = async function () {
    return await this.find()
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"])
}

CharacterSchema.statics.getOne = async function (id) {
    return await this.findById(id)
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"])
}

CharacterSchema.statics.insert = async function (character) {
    return await this.create(character)
}

export default CharacterSchema



