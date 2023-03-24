import React, { useState } from 'react'
import { Phone } from './phone/Phone';
import { Email } from './email/Email';
import styles from "./StepEmailPhone.module.css"

export const StepPhoneEmail = ({ nextStep }) => {

  const phoneEmailMap = {
    phone: Phone,
    email: Email,
  };


  const [type, setType] = useState('phone')

  const Component = phoneEmailMap[type]

  return (

    <>

      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrapper}>
            <button className={`${styles.tabButton} ${type==="phone"? styles.active:""}`} onClick={() => setType("phone")}>
              <img className={styles.imgStyle} src="images/phone_type.png" alt="" />
            </button>
            <button className={`${styles.tabButton} ${type==="email"? styles.active:""}`} onClick={() => setType("email")} >
              <img className={styles.imgStyle} src="images/email_type.png" alt="" />
            </button>
          </div>
          <Component nextStep={nextStep} />
        </div>
      </div>



    </>
  )
}
