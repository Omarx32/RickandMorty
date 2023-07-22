let myFavorites = [];


function postFav (req, res){
    myFavorites.push(req.body);
    return res.json(myFavorites);

}

function deleteFav (req, res){
const {id } = req.params;
const noDelete = myFavorites.filter(pjFav => pjFav.id !== id);
 myFavorites = noDelete    

return res.json(myFavorites);
}

 function getFav (){

 }
module.exports = (
    deleteFav, 
    getFav,
    postFav
    )