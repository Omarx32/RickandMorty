// Rutas de characters
const express = requiere("express")

const {getCharById} = require("../controllers/getCharById")

const characterRouter = express.Router();
// Todas las req que lleguen a este archivo tiene el ./characters implicito
// "3001/characters/:id"
characterRouter.ger("/:id", getCharById)


module.exports = characterRouter