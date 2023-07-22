const allowedUsers = require("../utils/allowedUsers")
function login(req, res){
const {email, password} = req.query;

    allowedUsers.forEach((user)=> {
        if(user.email === email && user.password === password){
            access = true;
        }
})
    
}
module.exports = {login};