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

let dataimage = Date.now()
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, "public" , "uploads");
        cb(null, path.join(process.cwd(), "public", "uploads"));
    },
    filename: function (req, file, cb) {
        // console.log(file)
        cb(null, dataimage + file.originalname)
    },
});
let upload = multer({
    storage:storage,
})
let uploadfile = upload.single("fileno")
handler.use(uploadfile)
handler.post((req, res) => {

    // let url = "http://localhost:3000/"
    // let parentpath = "uploads/"
    // let filename = req.file.filename
    // let result =  ImageModel.create({
    //     image : url + parentpath + filename 
    // })
   //url + parentpath +
    
   
    
    console.log("req",req.file.filename)
    console.log("body",req.body.data)
   return  res.status(200).send("Working.....")
})

export default handler

