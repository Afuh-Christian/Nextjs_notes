import React, { useState } from 'react'

function FileUpload() {

    const [pic, setPic] = useState("") 
    const [imageurl ,setimage] = useState("")

    const handleInput =  (e) => {
        // e.preventDefault()
        const { name, files } = e.target
        setPic(files[0])
        const fileReader = new FileReader() 
        fileReader.onload = function (e) {
            const { result } = e.target
            console.log(result)
            setimage(result)
        }
        fileReader.readAsDataURL(files[0])
    }
    
    // if(pic)console.log(pic)
    // if (imageurl) console.log(imageurl) 

  return (
      <div>
          {/* <form onSubmit={handleInput}> */}
          <input
              type="file"
              name="pic"
           onChange={handleInput}/>
              {/* <button onClick={handleInput}>submit</button> */}
          {/* </form>  */}

          <br/>
          <br/>
          <br/>

          <h1>{pic && pic.name} </h1>
          
          <div><img src={imageurl} style={{height: 100}} /></div>
      </div>
      
  )
}

export default FileUpload