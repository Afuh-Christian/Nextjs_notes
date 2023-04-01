import multer from "multer"
import nextConnect from "next-connect"
import { connectDB } from "../../config/mongodbconnect"
import path from 'path'
import Item from "../../models/Item"

// const fsPromises = require('fs').promises

import fsPromises from 'fs/promises'


export const config = {
    api:{
        bodyParser:false ,
    }
}

const handler = nextConnect() 

connectDB()

let dataimage = Date.now()
let storage = multer.diskStorage({
    destination :  (req, file, cb) => {
        cb(null , path.join(process.cwd() , "public"))
    },
    filename: (req, file , cb ) => {
        cb(null , dataimage + file.originalname)
    }
})

let upload = multer({
    storage: storage
})

let uploadfile = upload.single('file')


handler.use(uploadfile)

handler.post( async (req, res) => {
    if(req.method === "POST"){
       if (!req?.body?._id) {
            return res.status(400).json({ 'messsage': 'An ID is required ... ' })
        }
    
        const item = await Item.findOne({ _id: req.body._id })
    
        // if error in no Item
        if (!item) {
            res.status(204).json({ 'message': `Item with id: ${req.body._id} does not exist` })
        }
        console.log(item.imagename)
        await fsPromises.unlink(path.join(process.cwd(), 'public','uploads','Items', item.imagename))
        const result = await item.deleteOne({ _id: req.body._id })
    
    
        return res.json(result)    
    }
})

export default handler

