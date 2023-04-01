import mongoose from "mongoose";


const { model, models, Schema } = mongoose 

const imageSchema = Schema({
    image : String  
})

const ImageModel = models.ImageModel || model("ImageModel", imageSchema)



export default ImageModel