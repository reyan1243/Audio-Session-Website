import React from 'react'
import styles from "./Button.module.css"

function Button({btn_text,arrow,onClick}) {
  return (
    
    <button onClick={onClick} className={styles.btnStyle}>
      <span style={{marginRight:"5px"}}>{btn_text}</span>
      <img src="images/arrow2.png" alt="arrow" />  
    </button>


  )
}

export default Button