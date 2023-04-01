
import  Link  from "next/link"
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";


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

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    );
}



export async function getStaticProps() {
    // fetch data from api .... 
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate : 10
    }
}

export default HomePage;