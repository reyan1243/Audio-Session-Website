import React from 'react'
import { StepOtp } from '../steps/stepOtp/StepOtp'
import { StepPhoneEmail } from '../steps/stepPhoneEmail/StepPhoneEmail'
import styles from "./Authenticate.module.css"
import { useState } from 'react'

const steps={
    1:StepPhoneEmail,
    2:StepOtp
}

export const Authenticate = () => {

  const [step,setStep]=useState(1)

  const Step =steps[step]

  function nextStep(){
    setStep(step+1)
  } 

  return (

<div className={styles.cardWrapper}>
  
        <Step nextStep={nextStep}/>
    </div>
  )
}
