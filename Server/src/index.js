const dotenv = require("dotenv");
dotenv.config();
const { PORT, PASSWORD } = process.env
const morgan = require("morgan");

const characterRouter = require("./routes/character")
const userRoute = require("./routes/users")
const favoriteRouter = require ("./routes/favorites")


const express = require("express");
const server = express();


server.use(express.json());
server.use("/character", characterRouter)
server.use("/user", userRoute)
server.use("/favorite", favoriteRouter)

    


server.get("/health-check/:id", (req, res) => {
    res.send("Working")
})


server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
})