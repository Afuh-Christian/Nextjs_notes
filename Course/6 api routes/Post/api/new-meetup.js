 // api/new-meetup

 // POST 

 import { MongoClient } from  'mongodb'

 async function Handler(req, res) {
 
     if (req.method === 'POST') {
     const data = req.body 
     // store the data in a database .... 
  const client = await MongoClient.connect("mongodb+srv://afuhchris:deLe1017@cluster0.3xjsj75.mongodb.net/Meetups?retryWrites=true&w=majority")
     const db = client.db() 
     const meetupsCollection = db.collection('meetups') // creates a model .. 
     const  result = await meetupsCollection.insertOne(data) // add new data
     console.log(result)
     client.close() 
         res.status(201).json({ message: "Meetup inserted" })
     }
 }
 
 
 export default Handler