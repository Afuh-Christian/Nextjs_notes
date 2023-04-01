
-page component is pre-rendered when you build your application

npm run build .....for production


-NB ... the page is not prerendered on the fly on the server ... but is pre-rendered when the developer build it for production ....

if data is updated ... you run to run build and redeploy again 


# there's an alternative way to do this .... 





# you create a component in side the page where you are to display the data an export it only for that component .... 

export function getStaticProps(){}
or
export async function getStaticProps(){}

# getStaticProps will run before the render of the main component that file ..... 

# the code within that function runs on the build process ... 

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
        }
    }
}


# it should alway return an object ..

this is how we move the data fetching from the client side to the build process ... 


# Now if you check the page souce you will find all these data ... 


# Now the data is fetched during the build process .... 