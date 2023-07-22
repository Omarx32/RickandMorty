const express = require("express").Router();
const {postFav, deleteFav, getFav} = require("../controllers/handleFavorite");

favoriteRouter.get("/", getFav)

favoriteRouter.post("/", postFav);

favoriteRouter.delete("/", deleteFav);



module.exports = favoriteRouter;