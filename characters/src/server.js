const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index")
const server = express();
const expressErrorController = require("./middlewares/expressErrorController")


server.use(express.json());
server.use(morgan("dev"));
server.use(router)
//final route
server.use(expressErrorController)


module.exports = server;
