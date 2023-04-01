import { connectDB } from "../../../config/mongodbconnect";
import verifyJWT from "../../../middleware/verifJWT";
import verifyRoles from "../../../middleware/verifyroles";
import User_Roles from "../../../models/RoleCodes";
import UserModel from "../../../models/UserModel";


async function Handler(req, res) {
    await connectDB()

    if (req.method === "PUT") {
        if(!req?.body?._id && !req?.body?.isEditor ){
            return res.status(400).json({'messsage' : 'An _id and isEditor is required ... '})
        }
        const { _id, isEditor } = req.body
        const user = await UserModel.findOne({ _id: _id })
        if (isEditor === true) {
            user.roles.Editor = User_Roles.editor
        } else {
            user.roles.Editor = null
        }
        const result = await user.save()

        return res.status(200).json(user)
        
    }


    if (req.method === "DELETE") {
        if (!req?.body?._id) {
            return res.status(400).json( "Must pass an Id to delete a user") 
        }

        const user = await UserModel.findOne({_id: req.body._id })
        if (!user) {
            return res.status(200).json(`User with id : ${req.body._id} does not exist ... `)
        }

        const result = await UserModel.deleteOne({ _id: req.body._id })
        
        return res.status(200).json(`${result.username} has been deleted`)
        
    }

}

export default verifyJWT(verifyRoles(Handler, User_Roles.admin)) 