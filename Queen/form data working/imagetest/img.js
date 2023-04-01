import multer from "multer";
import path from "path"
import nextConnect from "next-connect";
import ImageModel from "./model";
import { connectDB } from "../config/mongodbconnect";

export const config = {
    api: {
        bodyParser: false
    }
}
const handler = nextConnect()

connectDB()

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public" , "uploads");
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.originalname)
    },
});
let upload = multer({
    storage:storage,
})
let uploadFile = upload.single("file")
handler.use(uploadFile)
handler.post((req, res) => {
    // let url = "http://localhost:3000/"
    // let parentpath = "public/"
    // let filename = req.file.filename
    // let result = new ImageModel({
    //     image : url + parentpath + filename 
    // })
    // result.save()
    console.log("req",req.file)
    console.log("body",req.body)
   return  res.status(200).send("Working.....")
})

export default handler

