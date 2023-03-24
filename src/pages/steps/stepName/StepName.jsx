import React, { useState } from 'react'
import Button from '../../../components/shared/button/Button'
import { Card } from '../../../components/shared/card/Card'
import { Input } from '../../../components/shared/input/Input'
import styles from "./StepName.module.css"
import { useDispatch ,useSelector} from 'react-redux'
import { activateSlice } from '../../../store/activateSlice'

export const StepName = ({onNext}) => {

  const action = activateSlice.actions
  const dispatch = useDispatch()

  const name = useSelector((state)=>state.activate.name) 
  
  const [fullName,setFullName]= useState(name)
  // console.log(fullName)
  
  function nextStep(){
    if (!fullName){
      console.log("no name")
      return
    }
    dispatch(action.setName(fullName))
    console.log("printing new name global state")
    console.log(name)
    onNext()
  }

  return (
    <div className={styles.cardWrapper}>
      <Card heading={"What is your full name?"} logo={"images/name.png"} >

        <Input 
        value={fullName} 
        onChange={(e)=>setFullName(e.target.value)}
        />
        
        <p className={styles.bottomParagraph}>
          People use real names at YouthClub :) 
        </p>
        
        <Button 
        onClick={nextStep}
        btn_text={"Next"} 
        arrow={"images/arrow2.png"} 
        />
        

      </Card>
    </div>
  )
}
