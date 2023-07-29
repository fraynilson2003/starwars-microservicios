import mongoose from "mongoose"
import EnvironmentEnv from "../config/envs.js"
import CharacterSchema from "./schemas/character.schema.js"
import FilmSchema from "./schemas/film.schema.js";
import PlanetSchema from "./schemas/planet.schema.js";

console.log(EnvironmentEnv.getString("MONGO_URI"));
const conn = mongoose.createConnection(EnvironmentEnv.getString("MONGO_URI"))

export let Character = conn.model("Character", CharacterSchema, "Character")
export let Film = conn.model("Film", FilmSchema, "Film")
export let Planet = conn.model("Planet", PlanetSchema, "Planet")

Film.findById()
