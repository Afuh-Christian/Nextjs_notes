

import React, { useState } from 'react'
import Modal from './Modal'
import classes from "./Modal.module.css"

export default function Modal_window() {
    const [openModal, setModal] = useState(false) 
   function onCloseModal(){
    setModal(!openModal)
   }


  return (
    <div>
        <button className={classes.modalBt} onClick={() => setModal(!openModal)}>
            Modal
        </button>
    
        <Modal open={openModal} onCloseModal={onCloseModal}/>
    </div>
  )
}
