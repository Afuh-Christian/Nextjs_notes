import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemApi } from '../../dataStore/ItemSlice/ItemSlice';
import classes from './Items.module.css'
import UpdateItem from './update/UpdateItem';
import UpdateCategory from './update/UpdateItem';


function OneItem({ itemID_Parent, avatar, name, price }) {
    const [openupdateform, setForm] = useState(false)

    const OnUpdateForm = () => {
        setForm(!openupdateform)
    }

    const dispatch = useDispatch()

   
    function deleteitem() {
        // console.log(itemID_Parent)
        const formdata = new FormData() 
        formdata.append("_id",itemID_Parent)
        formdata.append("id",itemID_Parent+"hello")
    
       dispatch(deleteItemApi(formdata))
    }
    

    return ( 
        <>
            <UpdateItem _id={itemID_Parent} avatar={avatar} name={name} price={price} openform={openupdateform} OnCreateForm={OnUpdateForm} />
            
        <div className={classes.item}>
        <div className={classes.img}><img src={avatar} alt=""/></div>
        <div className={classes.share}>Buy</div> 
        <div className={classes.itemdescription}>
                <div className={classes.name}>{name}</div>
       <div className={classes.price}>{price}frs</div> 
   </div>
   <div className={classes.btn}>
       <button className={classes.btn1} onClick={OnUpdateForm}>Update</button>
       <button className={classes.btn2} onClick={deleteitem}>Delete</button>
   </div>
                </div> </>
     );
}

export default OneItem;