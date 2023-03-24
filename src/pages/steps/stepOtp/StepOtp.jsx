import React, { useState } from 'react'
import Button from '../../../components/shared/button/Button'
import { Card } from '../../../components/shared/card/Card'
import { Input } from '../../../components/shared/input/Input'
// import styles from "../stepPhoneEmail/StepEmailPhone.module.css"
import styles from "./StepOtp.module.css"

export const StepOtp = ({nextStep}) => {

const [otp,setOtp] = useState("")
  return (
<div className={styles.cardWrapper}>
<Card heading={"Enter the code we just texted you"} logo={"images/lock.png"} >

<Input value={otp} onChange={(e) => setOtp(e.target.value)} />
<Button btn_text={"Next"} arrow={"images/arrow2.png"} />
<p className={styles.bottomParagraph}>
    By entering your number , you're agreeing to our Terms of Services and Privacy Policy. Thanks!
</p>

</Card>
</div>
  )
}
