# NB ..

-getStaticPaths 
-OjectId 
etc ..... 






# full code ..........

import Meetupdetails from "../../components/meetups/Meetupdetails";
import { useRouter } from 'next/router'
import { MongoClient , ObjectId } from  'mongodb'



function MeetupDetails(props) {

    return ( 
        <Meetupdetails title={props.meetupData.title} image={props.meetupData.image} address={props.meetupData.address} description={props.meetupData.description} />
     );
}


export async function getStaticPaths() {

    const client = await MongoClient.connect("mongodb+srv://afuhchris:deLe1017@cluster0.3xjsj75.mongodb.net/Meetups?retryWrites=true&w=majority")
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.find({}, { _id: 1 }).toArray()  // to get all objects , and get only thier _id
    client.close()

    return {
        fallback: false
        ,
        paths: result.map((m) => ({
                params: {
                    meetupID : m._id.toString()
                }
            }))
    }
}
    

export async function getStaticProps(context) {
    // fetch data from api ....
    const meetup_id = context.params.meetupID 
    const client = await MongoClient.connect("mongodb+srv://afuhchris:deLe1017@cluster0.3xjsj75.mongodb.net/Meetups?retryWrites=true&w=majority")
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const item = await meetupsCollection.findOne({_id : ObjectId(meetup_id)})

    return {
        props: {
            meetupData: {
                id: item._id.toString(),
                title: item.title,
                image: item.image, 
                address: item.address, 
                description : item.description
            }
        },
        revalidate : 1
    }
}


export default MeetupDetails;



    // fetch data from api ....
 
   
   # .........................