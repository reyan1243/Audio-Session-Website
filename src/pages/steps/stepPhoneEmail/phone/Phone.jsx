import React, { useState } from 'react'
import { Card } from '../../../../components/shared/card/Card'
import Button from '../../../../components/shared/button/Button'
import { Input } from '../../../../components/shared/input/Input'
import styles from "../StepEmailPhone.module.css"
import {verifyNumber} from "../../../../http/index"
import { authSlice } from '../../../../store/authSlice'
import { useDispatch } from 'react-redux'


export const Phone = () => {
    const [ phoneNumber, setPhoneNumber ] = useState("")
    const action = authSlice.actions
    const dispatch =useDispatch()




    async function submit(){

        // server-request
        // let data
        try {
            const {data} = await verifyNumber({phone:phoneNumber})
            console.log(data)
            dispatch(action.setAuth(data))

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Card heading={"Enter your phone number"} logo={"images/phone.png"} >

            <Input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
            <Button onClick={submit} btn_text={"Next"} arrow={"images/arrow2.png"} />
            <p className={styles.bottomParagraph}>
                By entering your number , you're agreeing to our Terms of Services and Privacy Policy. Thanks!
            </p>

        </Card>
    )
}
