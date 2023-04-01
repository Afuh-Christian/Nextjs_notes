
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { putItemApi } from '../../../dataStore/ItemSlice/ItemSlice';
// import { items } from '../../../api/sampledata';
import classes from  "./UpdateItem.module.css"
// import { useDispatch } from 'react-redux';
// import { postItem } from '../../../api/items/ItemSlice';
// import { useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
// import { postItemApi } from '../../../api/items/ItemSlice';


 function UpdateItem({ _id ,name, price ,avatar,  openform,OnCreateForm}) {

   console.log(price)
    const [formobject, setFormPost] = useState({
      _id:_id,
      name:name,
      price: price ,
      imageurl:null
    }) 

    // const [itemData, setItems] = useState(items)

  //  console.log("Category Create")

    // const dispatch = useDispatch()

  if(!openform) return null;

 
 function B(e){
       setFormPost((prevdata) => {
       const {name, value, files} = e.target
        if(name==='imageurl'){
          return {
            ...prevdata,
            [name] : files[0]
          }
        }else{
          return {
            ...prevdata,
            [name] : value
          }
        }
      
 })
}

 const dispatch = useDispatch()

    function OnSForm() {
    
      const FData = new FormData()
      FData.append('_id',formobject._id)
      FData.append('name',formobject.name)
      FData.append('price',formobject.price)
      if (formobject.imageurl) {
      FData.append('Itemfile', formobject.imageurl)
      } else if(!formobject.imageurl ) {
        
      }

   dispatch(putItemApi(FData))

      // OnCreateForm()
      // window.location.reload()
  }

   return (
    
    <div onClick={OnCreateForm} className={classes.overlay_A}  >
      <div onClick={
        (e) => {
          e.stopPropagation()
        }
      } className={classes.modalContainer_A}>
        <div className={classes.modalRight}>
          <p onClick={OnCreateForm} className={classes.closeBtn_A}><FaTimes/></p>
            <h1>Update {name}</h1>
          <div className={classes.content_A}>
                       
                <div>
                  <input
                  type='text'
                className={classes.name_c}
                  name='name'
                  placeholder='   Name'
                  onChange={B}
                  value={formobject.name}
                  />
                  </div>

                  <div>
                  <input
                  type='number'
                className={classes.price_c}
                  name='price'
                  placeholder='   Price'
                  onChange={B}
                  value={formobject.price}
                  />
                  </div>

                  <div>
                  <input
                  type='file'
                className={classes.price_c}
                  name='imageurl'
                  placeholder='   imageurl'
                  onChange={B}
                  // value={formobject.imageurl}
                  />
                  </div>

          
                 
               
                  <div>
              <button className={classes.btn_c}  disabled={(formobject.name === "" && formobject.price === '')?  true : false }
                  onClick={OnSForm}
                  
                  >OK</button>
                  {/* <button  className={classes.btn_c' type='submit'>OK</button> */}
                  </div>
                {/* </form> */}
                
            </div>
          
        </div>
    </div>
</div>
  )
}

export default React.memo(UpdateItem)





