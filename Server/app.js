const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const axios = require("axios")
const dotenv = require("dotenv")
dotenv.config()
// const URL = "https://harry-potter-api.onrender.com/personajes"
const {URL_API} = process.env
const app = express();


app.use(morgan("dev"))



app.use((req,res,next)=>{
    
    console.log(req.url);
    next();
});

app.use(cors());
app.use(express.json());







var base_datos = []
app.get("/character/getAll", async (req, res)=>{
    
    const {apodo} = req.query
    try{
    if(base_datos.length < 1){
        const {data} = await axios(URL_API);
        base_datos = {...data};
    }
    
    const {data} = await axios(URL_API)
    if(apodo){
        const filter = data.find(pj=> pj.apodo === apodo);
        if(filter){
            return res.json(filter);
        }else{
            return res.status(404).send("Detail not Found")
        }
        return res.json(filter)
}
    base_datos = [...data];
    return res.json(base_datos);
    } catch(error){
       return res.send(error.message);
    }


})
app.post("/character/create", (req, res)=>{

    const {   character  } = req.body;
    if(character.id && character.apodo && character.casaDeHogwarts){
    base_datos.push(req.body);
}else{
    return res.status(400).send("character debe tener todo subnormal")
}
    return res.json(base_datos);
})
app.put("/character/update/:id", (req, res)=>{
   const {id} = req.params;
   const { edit } = req.body;

   if (!id) return res.status(400).send("Debes proveer un ID")
   
   const characterToEdit = base_datos.find(pj => pj.id === Number(id))
   characterToEdit = {...}

   return res.json({msg: "Modificado Correctmente", data: characterToEdit})
 })
app.delete("/character/delete/:id", (req, res)=>{
    res.send("Soy el delete");
})

// Libros
app.get("/", (req, res)=>{
    axios(URL_LIBROS).then(response =>{
        return res.json(res.data)
    })
    .catch((err)=>{

    })
});
// app.get()

app.get("/",(req,res =>{
    res.send("Ok");
}))




module.exports = app;