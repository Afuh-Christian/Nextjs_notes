import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router'


function NewMeetupPage() {
     const router = useRouter()
    async function AddMeetUpHandler(enteredData) {
        const response = await fetch('/api/new-meetup', {
            method: "POST", 
            body: JSON.stringify(enteredData), 
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const data =  await response.json() 
        console.log(`new ${JSON.stringify(data)} `)

       await router.push('/')
    }
    return ( 
        <>
        <NewMeetupForm  onAddMeetup={AddMeetUpHandler} />
        </>
     );
}
export default NewMeetupPage;