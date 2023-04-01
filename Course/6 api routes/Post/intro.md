# -backend 
 // api/new-meetup

 // POST 
# code ............
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
# ......................

# front end ...

-sending a request to the api route is like for any backend ...

- since this is not an external api ... there no special way to to this .... 
 -we can use fetch or axios .... 

# code .............
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

 function NewMeetupPage() {
 #   async function AddMeetUpHandler(enteredData) {
        const response = await fetch('/api/new-meetup', {
            method: "POST", 
            body: JSON.stringify(enteredData), 
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const data =  await response.json() 
        console.log(`new ${JSON.stringify(data)} `)
#    }
    return ( 
        <>
        <NewMeetupForm  onAddMeetup={AddMeetUpHandler} />
        </>
     );
}

export default NewMeetupPage;

# ..................





