import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navigation.module.css"

export const Navigation = () => {

  const brandStyle={
    color: "#fff",
    textDecoration: "none",
    fontSize:"28px",
    display:"flex",
    alignItems:"center"
}

const logoText={
marginLeft:"10px",
fontWeight:"bold"
}


  return (
    
        <nav className={`${styles.navbar} container`}>
          <Link to={"/"}  style={brandStyle}>
            <img src="images/logo2.png" alt="" /> 
            <span style={logoText}>Y-club</span>
          
          </Link>
        </nav>
    
  )
}
