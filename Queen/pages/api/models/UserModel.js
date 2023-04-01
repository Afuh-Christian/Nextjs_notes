import mongoose from "mongoose"
import User_Roles from "./RoleCodes"

const { Schema, models, model } = mongoose


const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roles :{
        User : {
                type : Number ,
                default : User_Roles.user
                },
        Admin: Number,
        Editor : Number
},

    password: {
        type: String,
        required: true
    },
    refreshToken: String, 
    imageurl: {
        type: String, 
        // required: true
    }
})

const UserModel = models.UserModel || model("UserModel", UserSchema)

export default UserModel