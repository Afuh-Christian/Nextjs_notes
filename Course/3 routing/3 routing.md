# file based ... we route according to file location link traditional html ...  

news 
    index.js
    news.js 


if we visit /news .... 
    we get the index.js page in the  news folder because it is set as the defualt first page ... 


http://localhost:3000/news  =  news/index.js 
http://localhost:3000/news/something = news/something.js





# ....2 ... Dynamic routes 
    -the file name will be different , something understood by next js ... 

news
    index.js
    [newsID].js     

http://localhost:3000/news/sdfadfa = [newsID].js   
http://localhost:3000/news/meas = [newsID].js   
http://localhost:3000/news/cook = [newsID].js   

for now typing anything gives you the page... 

#   to extract the value into the component found in the [newsID].js


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


# Router and userRouter hook gives thesame result ... 
# use the useRouter hook ..



# 3 Link  

 we could still use the <a href> but this cause the whole app to load this gives the app a behavior of a multipage site ... 

 Link is the best way to do this..... 

 import Link from 'next/Link' 

 <Link href="/newpage">new page</Link>





# .. we can also create dynamic  folders and continue nesting ..

 [meetupID] 
    index.js 
    [submeetupID]
        index.js       
            ...