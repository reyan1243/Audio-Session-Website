import React from 'react'
import { Card } from '../../components/shared/card/Card'
import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import Button from '../../components/shared/button/Button'
// import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  const naviateLogin = () => {
    navigate("/authenticate")
  }


  return (
    <div className={styles.cardWrapper}>
      <Card heading={"Welcome to Y-club"} logo={"images/logo1.png"} >

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Reiciendis hic excepturi quas quos consectetur perferendis facere labore ad vitae! Dolores atque ducimus omnis blanditiis, asperiores corporis aliquid praesentium saepe voluptatum voluptates explicabo.
        </p>
        <Button onClick={naviateLogin} btn_text={"Let's Go"} arrow={"images/arrow2.png"} />
      </Card>

    </div>
  )
}
