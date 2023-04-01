
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchItems, selectAllErrors, selectAllItems, selectAllStatus } from '../../dataStore/ItemSlice/ItemSlice';
import OneItem from './Item';
import classes from './Items.module.css'

function ItemsPage() {
    
   
 const itemStatus = useSelector(selectAllStatus)
 const errors = useSelector(selectAllErrors)
    const dispatch = useDispatch()
   

 useEffect(()=>{
  
  if(itemStatus === ''){
    dispatch(fetchItems())
  }

     
 },[itemStatus,dispatch])

    const item_s = useSelector(selectAllItems)
    console.log(item_s)

 let QueryItems 
if(itemStatus === "loading"){
  QueryItems =  <p>loading......</p>
}else if(itemStatus === "Succeed"){
   QueryItems = item_s.map((item) => {

    return <OneItem itemID_Parent={item._id} name={item.name} price={item.price} avatar={item.imageurl}/>
   })
    
    

}else if(itemStatus === "failed") {
  QueryItems = <p>{errors}</p>
}




    return ( 
        <div className={classes.body}>
    <section className={classes.section}>
   
{QueryItems}
   
                



    </section>
</div>

     );
}

export default ItemsPage;