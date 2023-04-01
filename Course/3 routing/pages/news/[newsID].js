import Router, { useRouter } from 'next/router'


function SomeThingPage() {

    const router = useRouter()

    const id = Router.query.newsID

    const id1 = router.query.newsID
    
    return ( <>
        <div>SomeThingPage  {id}</div>
        <div>SomeThingPage  {id1}</div>
        </>
     );
}

export default SomeThingPage;