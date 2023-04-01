import mongoose from "mongoose";

const { Schema, models,  model } = mongoose 

const CategorySchema = Schema({
    name: {
        type: String, 
        required : true 
    },
    imageurl: {
        type: String, 
        // required: true
    },
    imagename: String
    // avatar: {
    //     type: Buffer, 
    //     required: true 
    // }
})


const Category = models.Category ||  model('Category' , CategorySchema)

export default Category 