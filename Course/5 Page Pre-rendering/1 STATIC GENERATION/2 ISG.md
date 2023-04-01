# Since the data is set on the build process .. changes made to the database will not be seen ... we would need to build agian .... 


-this is good for personal blogs 

SSG

# Solution to this ..... 
    -we will add a new property to the object returned from the getStaticProps ... revalidate : 10
    -this unlocks a feature called incremental static generation 
    ISG



    -getStaticProps will generated every 10 second now on the server .... if there are request coming into the page 


# code ..... 

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
#        revalidate : 10
    }
}


# .......