# back end ' 

# 1 ... disable the bodyparser .......
# https://nextjs.org/docs/api-routes/request-helpers#custom-config

export const config = {
    api: {
        bodyParser : false , 
    },
}

# 2 ... we use Multer to handle the images ... https://www.npmjs.com/package/multer


 npm install --save multer

# code ..
// multer middleware.... destination and source ... 
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null , path.join(process.cwd(),  "public", "uploads"))
        }, 
        filename: function (req, file, cb) {
            cb(null,new Date().getTime() + "-" + file.originalname)
        },
    })
})


# 3 ... How do we use this middleware...  

npm install next-connect 

# ... code .... 

import nc from "next-connect";

const Handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
    .use(upload.single('image'))
    .post((req, res) => {
        res.status(201).json(({ body: req.body }))
    })
  

export default Handler