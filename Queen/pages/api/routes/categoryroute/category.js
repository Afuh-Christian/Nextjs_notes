
import mongoose from "mongoose"
import { connectDB } from "../../config/mongodbconnect"
import verifyJWT from "../../middleware/verifJWT"
import Category from "../../models/CategoryModel"
import User_Roles from "../../models/RoleCodes"


// httpGet ... 
async function Handler(req, res) {
    await connectDB() 

    // ..........httpGET
    if (req.method === "GET") {
       
        const categorys = await  Category.find()    // to get Categorys ...
        if (!categorys) return res.status(204).json({ 'message': 'No Categorys found ..' })
        
      return  res.status(200).json(categorys)
    }
    // await mongoose.disconnect()

    } 
    export default Handler






    
       