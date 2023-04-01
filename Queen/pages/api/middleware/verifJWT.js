const jwt = require('jsonwebtoken')
require('dotenv').config() 


function verifyJWT(Handler) {
    return async (req, res) => {
        // authorization sometimes starts with small or capital letter ... 
        const authHeader = req.headers.authorization || req.headers.Authorization;
        // if the authHeader starts with Bearer      
        if (!authHeader?.startsWith('Bearer ')) return res.status(401).json("Unauthorized")// Unauthorized        
        const token = authHeader.split(' ')[1];
        
        jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET,
            (err, decoded) => {
                console.log(process.env.ACCESS_TOKEN_SECRET)
                // const roles  = Object.values()
                if (err) return res.status(403).json("Forbidden ..") // forbidden // invalid token 
                // req.auth = token;
                // the username and roles are in the UserInfo ... set the roles too .. .
                req.username = decoded.UserInfo.username;
                req.roles = decoded.UserInfo.roles;
                
            }
        )
            return Handler(req, res)
    }
}

export default verifyJWT