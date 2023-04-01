

import React from 'react'
import classes from "./Modal.module.css"


const Modal = ({open,onCloseModal}) => {

    // this means the Modal function will return null so will now display in the parent
    if(!open) return null;


    //Stop propagation function .... does no go further to the child elements 

  return (
    //
    <div onClick={onCloseModal} className={classes.overlay}>
        {/* stop the other elements from having the click event  */}
        <div onClick={
            (e)=>{
                e.stopPropagation()
            }
        } className={classes.modalContainer}>
            <img className={classes.img} src="logo192.png"/>
              <div className={classes.modalRight}>
                <p onClick={onCloseModal} className={classes.closeBtn}>X</p>
                  <div className={classes.content}>
                    <p>Do you want a</p>
                    <h1>$20 CREDIT</h1>
                    <p>for your firt trade?</p>
                </div>
                  <div className={classes.btnContainer}>
                      <button className={classes.btnPrimary}>
                          <span className={classes.bold}>YES</span>, I love NFT's
                    </button>
                      <button className={classes.btnOutline}>
                          <span className={classes.bold}>NO</span>, thanks
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal