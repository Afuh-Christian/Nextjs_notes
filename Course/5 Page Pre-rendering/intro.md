In react 

useEffect hook is used to get data from api 
    -it runs after the first load of the app .... 
    -this means on the first render of the component the 
    variable to store the fetched data is empty and is filled when the useEffect runs 
    -this is the reason for the loading delay when fetching data from an api .... 


# we solve this small issue with pre-rendering .... 

Next js has a built in page pre-rendering 

-if a request is sent to some route 
    -Return a pre-rendered page (we might be missing data)
        -Page is hydrated with react once loaded 
        -it is turned into a single page app
        -Now the useEffect() will be executed 
        -data might be fetch and data might be updated 
        -In the browser (not on server) (after the page was received in the browser) 
            -Now we hav a full interactive page/app with all the data we need 

- but if we want to pre-render a page with data so that the initially return html code already returns the data  ... 

# for this we have .... 2 Rendering forms 

# STATCIC GENERATION ...

# SERVER - SIDE RENDERING ...

