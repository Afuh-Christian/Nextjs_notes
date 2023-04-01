import { deleteCookie, getCookies } from "cookies-next"
import UserModel from "../../models/UserModel"



async function Handler(req, res)  {
    const cookies = getCookies({req,res})
    if(!cookies?.jwt) return res.status(204).json("No content") // No content ... 
    const refreshToken = cookies.jwt 

    //To Clear cookie if refreshToken exist .... 

    const foundUser = await UserModel.findOne({refreshToken : refreshToken}).exec()
   if(!foundUser) { 
    deleteCookie('jwt' , {req , res , httpOnly : true});
   return res.status(204).json("No content") // No content ... 
    }

    //To clear refresh token from logging out user in db .... 
    foundUser.refreshToken = '' 
    const result = await foundUser.save()
    console.log(result)

    // clear cookie ... 
    // deleteCookie('key', { req, res });
     deleteCookie('jwt', {req, res , httpOnly: true ,sameSite : "None" , 
      maxAge: 24 * 60 * 60 * 1000}) // secure = true ... during production ... this will make it only server on "https". 
//secure : true
    return res.status(204).json("No content") // No Content .... 
    }


  export default Handler





