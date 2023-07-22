const axios = require("axios");

const URL = "https://rickandmorty.com/api/character/"


function getCharById(req, res) {
    const { id } = req.params
    axios(`${URL}${id}`)
    .then(({ data }) => {
        if(data.error){
            return res.status(404).send(data.error)
        }
        const character = {
            id: Number(data.id),
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
        }

        res.status(200).json(character)


    }).catch(axiosError => {
        // no pude hacer la solicitud
        return res.status(500).send(axiosError.menssage)
    })

}



module.exports = { getCharById }