# if you want a function that will regenerat on every request .... 

getServerSideProps(){}

# .......
export  async function getServerSideProps(){}

-does not run during build process . 
-runs on server after deployment  .



# ...........................................
export async function getServerSideProps(context) {

    //fetch data 
    return {
        props: {
            meetups : DUMMY_MEETUPS
        }
    }
}
# ...........................................




export async function getServerSideProps(context) {

    const req = context.req 
    const res = context.res

    return {
        props: {
            meetups : DUMMY_MEETUPS
        }
    }
}

