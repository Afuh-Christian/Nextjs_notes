import mongoose from "mongoose"



// const linker = "mongodb+srv://afuhchris:deLe1017@cluster0.3xjsj75.mongodb.net/QueenzeeDB?retryWrites=true&w=majority"
const linker = "mongodb://127.0.0.1:27017/QueenDB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0"

export const connectDB = async () =>{
    try{  
        await mongoose.connect( linker , {
            useUnifiedTopology : true ,  
            useNewUrlParser: true  
        })
        // console.log("Database Connected")
       
      }catch(err){console.log(err)}
}



