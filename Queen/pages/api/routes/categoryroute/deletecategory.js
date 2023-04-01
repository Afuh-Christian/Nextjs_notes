
import multer from 'multer'
import nextConnect from 'next-connect'
import path from 'path' 
import { connectDB } from '../../config/mongodbconnect'
import Category from '../../models/CategoryModel'
import fsPromises from 'fs/promises'

export const config = {
    api: {
        bodyParser:false 
    }
}

const handler = nextConnect() 

connectDB() 
let datanow = Date.now()
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null , path.join(process.cwd(), "public")) 
    }
    , 
    filename: (req, file, cb) => {
        cb(null , datanow + file.originalname )
    }
})

let upload = multer({
    storage: storage
})

let fileupload = upload.single('file')

handler.use(
    fileupload
)

handler.post(async(req, res) => {
        if (req.method === "POST") {
        if(!req?.body?._id){
            return res.status(400).json({'messsage' : 'An ID is required ... '})
        }
    
        const category = await Category.findOne({_id :req.body._id})
    
        // if error in no Category 
        if(!category){
            res.status(200).json({'message': `Category with id: ${req.body._id} does not exist`})
        }
            // await fsPromises.unlinkSync(path.join(process.cwd(), 'uploads', 'category', category.imagename))
            await fsPromises.unlink(path.join(process.cwd(), 'public','uploads','category', category.imagename))
            const result = await Category.deleteOne({ _id: req.body._id })
          
       return res.json(result)
    }
   
})


export default handler
