import mongoose, { isValidObjectId } from "mongoose"
import RenderResult from "next/dist/server/render-result"
import { connectDB } from "../../config/mongodbconnect"
import Item from "../../models/Item"



// httpGet ... 
async function Handler(req, res) {
    await connectDB() 

    // ..........httpGET
    if (req.method === "GET") {
       
        const items = await  Item.find()    // to get items ...
        if (!items) return res.status(204).json({ 'message': 'No items found ..' })
        
      return  res.status(200).json(items)

        

       
    }

    }



    
    // await mongoose.disconnect()


    export default Handler


       