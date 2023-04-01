# This function is needed alongside getStaticProps to get dynamic data .. 


next js needs to generate all versions of the dynamic pagees in advance ... 

-fallback = true , that all the ids listed are just some of the available pages 
-fallback = false , that all the ids listed are all of the pages and would give an error if the value passed in that params does not match any.. 





# code .. ................................................................................................................................................
import Meetupdetails from "../../components/meetups/Meetupdetails";
import { useRouter } from 'next/router'

const DUMMY_MEETUPS = [
    {
        id: 'm1', 
        title: 'A first Meetup',
        image: 'vercel.svg',
        address: 'some adress',
        description : 'This is the first meetup'
    },
    {
        id: 'm2', 
        title: 'A Second Meetup',
        image: 'vercel.svg',
        address: '2nd adress',
        description : 'This is the first meetup'
    },
    {
        id: 'm3', 
        title: 'A third Meetup',
        image: 'favicon.ico',
        address: '3rd adress',
        description : 'This is the first meetup'
    },
]


function MeetupDetails(props) {
    // const router = useRouter() 
    // const id = router.query.meetupID
   
    // console.log(item)
    return ( 
        <Meetupdetails title={props.meetupData.title} image={props.meetupData.image} address={props.meetupData.address} description={props.meetupData.description} />
     );
}


export async function getStaticPaths() {
    return {
        fallback : false
        ,
        paths: [
            {
                params: {
                    meetupID : "m1"
                }
            },
            {
                params: {
                    meetupID : "m2"
                }
            },
            {
                params: {
                    meetupID : "m3"
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data from api ....

    const id = context.params.meetupID 
    const item = DUMMY_MEETUPS.find((a) => a.id === id)
    console.log(id)
    return {
        props: {
            meetupData: {
                id: item.id, 
                title: item.title,
                image: item.image,
                address: item.address,
                description : item.description 
            }
        },
        revalidate : 10
    }
}

export default MeetupDetails;
# .................

