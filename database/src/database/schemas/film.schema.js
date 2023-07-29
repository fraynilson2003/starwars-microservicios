import { Schema } from "mongoose"

let FilmSchema = new Schema({
    _id: { type: String },
    title: { type: String },
    opening_crawl: { type: String },
    director: { type: String },
    producer: { type: String },
    release_date: { type: Date },
    characters: [{ type: String, ref: "Character" }],
    planets: [{ type: String, ref: "Planet" }],
})

FilmSchema.statics.list = async function () {
    return await this.find()
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"])
}

FilmSchema.statics.getOne = async function (id) {
    return await this.findById(id)
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"])
}

FilmSchema.statics.insert = async function (film) {
    return await this.create(film)
}

export default FilmSchema