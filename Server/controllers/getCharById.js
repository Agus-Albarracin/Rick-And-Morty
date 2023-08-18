const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {


try{
const { id } = req.params;
const { data } = await axios.get(URL + id);

if (!data.name) throw new Error(`ID: ${id} Not Found`);

    const character = {
      id : data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species
      }
     return res.status(200).json(character); 

} catch(error){
   return   error.message.includes('ID')
   ? res.status(404).send(error.message)
   : res.status(500).send(error.response.data.error)
  }

}

module.exports = { getCharById }






//tarea de express
// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {
// const { id } = req.params
// try{
//     axios.get(URL + id)
//    .then(({data}) => { const {id, image, name, gender, species} = data;
//      if(data){  res.status(200).JSON(data); }
//                 res.status(404).JSON({messagge: "Not found"}) 
//    })

// }
// catch(error){ res.status(500).JSON({messagge: (error)})}
// }

// module.exports = { getCharById }






//TAREA DE PROMISSE
// const axios = require('axios');

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const {id, image, name, gender, species} = response.data;
//       res.writeHead(200, {"Content-Type": "application/json"});
//       res.end(JSON.stringify({id, image, name, gender, species}))
//     })
//     .catch((error)=>{
//     res.writeHead(500, {"Content-Type": "text/plain"})
//     res.end("error.message")
// })
// }
// module.exports = getCharById


// const axios = require ('axios');

// //successH y errorH son las funciones dentro de la peticion y para que quede mas ordenado
// //separo las funciones por un lado.
// const successH = (response, res) =>{
//     const {id, image, name, gender, species} = response.data;
//     res.writeHead(200, {"Content-Type": "application/json"});
//     res.end(JSON.stringify({id, image, name, gender, species}))
// }

// const errorH = (error, res) =>{
//     res.writeHead(500, {"Content-Type": "text/plain"})
//     res.end("Error.message")
// }

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => successH(response, res), error => errorH(error, res))
//     // .catch((error) => errorH(error, res))
// //el catch va a tomar todos los errores en general.
// }


// module.exports = getCharById