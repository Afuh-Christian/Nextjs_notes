import React  , { useState } from 'react'
import { createPost } from './client'

function ImageUpload() {
    const [image, setImage] = useState()
    const [imageInput, setImageInput] = useState()
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const handleImage = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setImageInput(file)
        const fileReader = new FileReader() 
        fileReader.onload = function (e) {
            console.log(e.target.result)
            setImage(e.target.result)
        }
        fileReader.readAsDataURL(file) 
    }
    const handleForData = async (e) => {
        e.preventDefault();

        const form = new FormData(); 
        form.append('title',title);
        form.append('desc', desc);
        form.append('image', imageInput);

        const result = await createPost(form)
        console.log(result)
    }
  return (
      <div className="container post-create">
          <form onSubmit={handleForData}>
          <div className="row">
              <div className="col">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Title"
            //   id="floatingInput"
            //   name="name"
              value={title}
            onChange={e => setTitle(e.target.value)}      
          >
          </input>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <textarea
                      type="text"
                      className="form-control"
                      placeholder="Enter Description"
            //   id="floatingInput"
            //   name="name"
              value={desc}
            onChange={e => setDesc(e.target.value)}      
          >
          </textarea>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <input
                      type="file"
                      className="form-control"
                 
            //   id="floatingInput"
            //   name="name"
            //   value={name}
            onChange={handleImage}      
          >
          </input>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <button>Submit</button>
              </div>
          </div>
          </form>

         {image && <div><img src={image} width="200"/></div>}
    </div>
  )
}

export default ImageUpload