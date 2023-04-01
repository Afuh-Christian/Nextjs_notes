# since the code in getStaticProps is not seen on the browser ...
 we can still write the server side code inside this function ...

#  Backend .....


export async function getStaticProps() {
    // fetch data from api ....
    const client = await MongoClient.connect("mongodb+srv://afuhchris:deLe1017@cluster0.3xjsj75.mongodb.net/Meetups?retryWrites=true&w=majority")
     const db = client.db() 
     const meetupsCollection = db.collection('meetups')
    
    const result = await meetupsCollection.find().toArray() 

    client.close()
    return {
        props: {
# // the data was not in thesage format as on the client 
            meetups: result.map(m => ({
                id: m._id.toString(),
                title: m.title,
                image: m.image, 
                address: m.address, 
                description : m.description
            }))
        },
        revalidate : 1
    }
}

export default HomePage;

# ..............





# front end + backend .... 


import  Link  from "next/link"
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

import { MongoClient } from  'mongodb'


function HomePage(props) {
    console.log(props.meetups)
    return (
        <MeetupList meetups={props.meetups} />
    );
}



export async function getStaticProps() {
    // fetch data from api ....
    const client = await MongoClient.connect("mongodb+srv://afuhchris:deLe1017@cluster0.3xjsj75.mongodb.net/Meetups?retryWrites=true&w=majority")
     const db = client.db() 
     const meetupsCollection = db.collection('meetups')
    
    const result = await meetupsCollection.find().toArray() 

    client.close()
    return {
        props: {
            meetups: result.map(m => ({
                id: m._id.toString(),
                title: m.title,
                image: m.image, 
                address: m.address, 
                description : m.description
            }))
        },
        revalidate : 1
    }
}

export default HomePage;
# ..................