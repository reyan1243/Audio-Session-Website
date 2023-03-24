import React, { useState } from 'react'
import styles from "./StepAvatar.module.css"
import Button from '../../../components/shared/button/Button'
import { Card } from '../../../components/shared/card/Card'
// import { Input } from '../../../components/shared/input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { activateSlice } from '../../../store/activateSlice'
import { activate } from '../../../http'
import { authSlice } from '../../../store/authSlice'


export const StepAvatar = ({ nextStep }) => {

  const [image, setImage] = useState("./images/monkey3.png")
  const dispatch = useDispatch()
  const action = activateSlice.actions
  const authAction = authSlice.actions
  const name = useSelector(state => state.activate.name)
  const avatar = useSelector(state => state.activate.avatar)


  const captureImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function () {
      setImage(reader.result)
      dispatch(action.setAvatar(reader.result))
    }
  }

  async function submit(){

    // server-request
    try {
        const {data} = await activate({name,avatar})
        dispatch(authAction.setAuth(data))
        console.log(data)
        // dispatch(action.setAuth(data))

    } catch (error) {
        console.log(error)
    }


    
}

  return (
    <div className={styles.cardWrapper}>

      <Card heading={`Okay, ${name}!`} logo={"images/name.png"} >
        <p className={styles.lite_text}>How's the photo</p>

        <div className={styles.avatar_container}>
          <img className={styles.avatar_img} src={image} alt="avtar" />
        </div>

        <div>
          <input
            onChange={captureImage}
            className={styles.avatar_input}
            type="file"
            id="avatarInput" />

          <label
            className={styles.avatar_label}
            htmlFor="avatarInput"
          >Choose a different photo</label>

        </div>

        <Button
          onClick={submit}
          btn_text={"Next"}
          arrow={"images/arrow2.png"}
        />


      </Card>
    </div>
  )
}
