
const cookieParser = require('cookie-parser') 


function CookieMiddleware(Handler) {
    return async (req, res) => {
        cookieParser() 
        return Handler(req, res)
    }
 
}

export default CookieMiddleware