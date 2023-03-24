import React, { useState } from 'react'
import {StepName} from '../steps/stepName/StepName'
import {StepAvatar} from '../steps/stepAvatar/StepAvatar'

const steps= {
  "1":StepName,
  "2":StepAvatar
}
export const Activate = () => {
  const [step , setStep]= useState(1)

  function nextStep(){
    setStep(step+1)
  } 

  const Step =steps[step]

  return (
    <div>
      <Step onNext={nextStep}/>
    </div>
  )
}
