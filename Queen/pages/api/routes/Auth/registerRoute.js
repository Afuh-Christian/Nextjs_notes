import UserModel from '../../models/UserModel'
import User_Roles from '../../models/RoleCodes'
import { connectDB } from '../../config/mongodbconnect'
import nextConnect from 'next-connect'
import multer from 'multer'
import path from "path"
const bcrypt = require('bcryptjs')


export const config = {
    api: {
        bodyParser: false
    }
}

const handler = nextConnect() 
connectDB() 

let dataUser = Date.now()
let storage = multer.diskStorage({
    destination: (req, file , cb ) => {
        cb(null , path.join(process.cwd() , "public" , "uploads" , "Users"))
    },
    filename: (req, file, cb) => {
        cb(null ,dataUser + file.originalname )
    }
})

let upload = multer({
    storage: storage
})

let uploadFile = upload.single("Registerfile")

handler.use(uploadFile) 
handler.post(async (req, res) => {
    
    if (req.method === "POST") {
        const { username, password, roles, email } = req.body
        console.log(username)
        console.log(password)
        console.log(email)
        if (!username || !password) return res.status(400).json({ 'message': `Username or Password has not been given` })
        //Check for duplicates
        const duplicate = await UserModel.findOne({ username: username }).exec()
        if (duplicate) return res.status(409).json(`${duplicate.username} already exist`) //conflict
        try {
            const encryptpassword = await bcrypt.hash(password, 10)
            const allusers = await UserModel.find()
            let url = "http://localhost:3000/"
            let parentpath = "uploads/Users/"
            let filename = req.file.filename
            if (allusers.length === 0) {
                const result = await UserModel.create({
                    username: username,
                    password: encryptpassword,
                    roles: {
                        Admin: User_Roles.admin,
                        Editor: User_Roles.editor,
                    },
                    imageurl: url + parentpath + filename,
                    email: req.body.email
                })
                console.log(result)
                return res.status(201).json(result)
            } else {
                const result = await UserModel.create({
                    username: username,
                    password: encryptpassword,
                    imageurl: url + parentpath + filename,
                    email: req.body.email
                })
                console.log(result)
                return res.status(201).json(result)
            }

            // return res.(201).json({'success': `New user ${username} created`})
        }
        catch (err) {
            return res.status(500).json({ 'message': err.message })
        }
    }
    }
)



export default handler




















































// async function Handler(req, res) {
//     await connectDB()
//     // return res.json("Register works")

// }

// export default Handler







// import nextConnect from "next-connect";
// import multer from "multer";

// const handler = nextConnect({
//   onError(error, req, res) {
//     res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method "${req.method}" Not Allowed` });
//   },
// });

// handler.use(multer().any());

// handler.post((req, res) => {
//   console.log(req.files); // Your files here
//   console.log(req.body); // Your form data here
//   // Any logic with your data here
//   res.status(200).json({ data: "success" });
// });

// export default handler;

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };



// import { NextApiRequest, NextApiResponse } from 'next'
// import formidable from 'formidable'

// //set bodyparser
// export const config = {
//   api: {
//     bodyParser: false
//   }
// }

// export default async ( NextApiRequest,  NextApiResponse) => {
//   const data = await new Promise((resolve, reject) => {
//     const form =  new formidable()

//     form.parse(NextApiRequest, (err, fields, files) => {
//       if (err) reject({ err })
//       resolve({ err, fields, files })
//     }) 
//   })

//   //return the data back or just do whatever you want with it
//   NextApiResponse.status(200).json({
//     status: 'ok',
//     data
//   })
// }