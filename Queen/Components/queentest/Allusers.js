import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Allusers() {

  const [image, setimage] = useState()
 const [allImage, setAllImage] = useState()

  //  const get = async()=>{
  //       const res = await axios.get("api/routes/Auth/allusers/")
  //       return res.data
  //   }
  //   useEffect(() => {
  //       return async () => {
  //           const response = await get()
  //           console.log(response)
  //       }
  //   }, [])

   const get = async()=>{
        const res = await axios.get("api/imagetest/allImage/")
        return res.data
    }
    useEffect(() => {
        return async () => {
            const response = await get()
          console.log(response)
           setAllImage(response)
        }
    }, [])
    
  if (allImage) console.log(allImage[0].image)
  
  
  
  //   const post = async () => {
        
  //       const form = new FormData() 
  //       form.append("username","A199")
  //       form.append("password", "delfffe")

  //       let data = {username:"A1" ,password:"dele"}
  //       // const response = await fetch('/api/routes/Auth/registerRoute/', {
  //       //     method: 'POST',
  //       //     body: data
  //       // })
  //       // const json = await response.json() 
  //       // console.log(json) 

  //       console.log(form.get("username"))
  //       try{
  //       const res = await axios.post("/api/imagetest/img/", data ,
  //           {
  //               headers: {
  //                   'accept': 'application/json',
  //               'Accept-Language': 'en-US,en;q=0.8',
  //               'Content-Type': "multipart/form-data",
  //           }
  //       }
  //       )
  //           console.log(res.data)
  //       } catch (err) {
  //           console.log(err.message)
  //       }
  // }
  
  const post = async () => {
        
    const form = new FormData()
    // form.append("filename", image , image.name)
    form.append("data", "Number things")
    form.append("fileno", image )
    try {
      const res = await axios.post("/api/imagetest/img", form
        , 
        {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': "multipart/form-data",
          }
        }
      )
            console.log(res.data)
        } catch (err) {
            console.log(err.message)
        }

  }
  if(image) console.log(image.name)


  // function handleImage(e) {
    
  // }
        
  return (
    <div>
      Allusers <button onClick={post}>post</button>
    
    <input
                      type="file"
                      className="form-control"
                  onChange={(e)=>setimage(e.target.files[0])}
            //   id="floatingInput"
            //   name="name"
            //   value={name}
      />
      
      <img src={ allImage && allImage[0].image} width="100px"/>
    </div>
  )
}

export default Allusers