
const mongoose = require("mongoose");
 

const { model,models, Schema } = mongoose 


const itemsShema = new Schema({
    name: {
        type: String, 
        required :  true 
    }, 
    price: {
        type: Number, 
        required : true 
    }, 
    imageurl: {
        type: String, 
        // required : true
    },
    imagename: String,
})

const Item = models.Item ||  model('Item', itemsShema)

module.exports = Item



