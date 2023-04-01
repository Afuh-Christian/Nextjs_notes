import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    function AddMeetUpHandler(enteredData) {
        console.log(enteredData)
    }

    return ( 
        <>
        <NewMeetupForm  onAddMeetup={AddMeetUpHandler} />
        </>
     );
}

export default NewMeetupPage;