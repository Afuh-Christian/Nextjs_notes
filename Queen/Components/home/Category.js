import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../dataStore/CategorySlice/CategorySlice";
import classes from "./HomeQ.module.css"
import UpdateCategory from "./update/UpdateCategory";


function Category({ _id, avatar, name }) {
    const [openupdateform, setForm] = useState(false)
      // update .... put .... 
      const OnUpdateForm = () => {
        setForm(!openupdateform)
  }
  
  const dispatch = useDispatch()
  function deleteCat (){
    const form = new FormData() 
    form.append("_id", _id)
    
    dispatch(deleteCategory(form))
  }
    return ( <>
        <UpdateCategory _id={_id} name={name} openform={openupdateform} OnCreateForm={OnUpdateForm} />

<div className={classes.item} >
                  <div className={classes.subitem}><img src={avatar} className={classes.b}  onClick={OnUpdateForm}/></div>
                  <div className={classes.ww} onClick={deleteCat}>{name}</div>
        </div>
        </>
     );
}

export default Category;