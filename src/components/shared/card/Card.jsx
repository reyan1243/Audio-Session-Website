import React from 'react'
import styles from "./Card.module.css"
// import { Link } from 'react-router-dom'

export const Card = ({ heading, logo, children }) => {
  return (
    <div className={styles.card}>

      <div className={styles.headingWrapper}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1 className={styles.heading}>{heading}</h1>
      </div>

      {children}
    </div>
  )
}
