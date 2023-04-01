import multer from "multer"
import { connectDB } from "../config/mongodbconnect"
import nc from "next-connect";
import ImageModel from "./model";

// disable bodyparser because we are getting form data and not json data ... 
export const config = {
    api: {
        bodyParser : false 
    },
// }

// multer middleware.... destination and source ...

    
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null , path.join(process.cwd(),  "public", "uploads"))
        },
        filename: function (req, file, cb) {
            cb(null,new Date().getTime() + "-" + file.originalname)
        }
    })
})

const handler =   nc({
    onError: (err, req, res, next) => {
      console.error(err.stack);
     return  res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
     return res.status(404).end("Page is not found");
    },
  })
      .use(upload.single('image'))
      .post(async (req, res) => {
          // try {
              // const session = await getSession({ req })
          const image =  new ImageModel({
              ...req.body,
              image: `http://localhost:3000/uploads/${req.file.filename}`
          })
          await connectDB()
          const savedPost = await image.save();
          if (savedPost) {
              responseHandler(savedPost, res)
          } else {
              errorHandler(savedPost ,res)
          }
             await  res.status(201).json(({ body:req.body , file: req.file }))
          // }
        
      })
  
//  handler
// async function handler(req, res) {
//     return res.status(200).json(req.body)
// }
 



// export default function handler(req, res) {
//     // req.body.a
//     if (req.method === "POST") {
//         res.json(req.body)
//     }
 
// }