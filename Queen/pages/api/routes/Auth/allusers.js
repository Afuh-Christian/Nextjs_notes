import { JsonWebTokenError } from "jsonwebtoken";
import { connectDB } from "../../config/mongodbconnect";
import UserModel from "../../models/UserModel";


async function Handler(req, res) {
    await connectDB()
    if (req.method === "GET"){
        const alluser = await UserModel.find() 
        if (!alluser) return res.status(204).json({ 'message': 'No User found ..' })
        console.log(alluser.length)
        return res.status(200).json(alluser)
    }
}

export default Handler






