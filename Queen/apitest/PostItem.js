

import mongoose from 'mongoose'
import React , {useEffect, useState} from 'react'
function PostItem() {

    const [objectitem, setObject] = React.useState({
        name: "", 
        price: "" 
    })

 
  
    const setObjectfun = (e) => {
        const { name, value } = e.target
        setObject(prev => ({
            ...prev, 
            [name]: value
        }))
    }

  

    function submitform(e) {
        e.preventDefault() 
        // const apiroute = '/api/routes/itemroute/items'
        // console.log(apiroute)
        // fetch(apiroute, {
        //     method: "POST",
        //     body: JSON.stringify(objectitem),
        //     headers: {
        //         'Content-Type': 'application/json'
        //       },
        // })
  }
  
  

  return (
      <div>
          <form onSubmit={submitform}>
          <div>   Name: <input
                  type="text"
                  name="name" 
                  onChange={setObjectfun}
              ></input></div><br/>
           <div>  Prices : <input
                  type="text"
                  name="price" 
                  onChange={setObjectfun}
              ></input>
              </div><br/>
              <input type="submit" value="submitdata"/>
          </form>

          <p>{objectitem.name}</p>
          <p>{objectitem.price}</p>  <h1>Hello</h1>
    </div>
  )
}

export default PostItem