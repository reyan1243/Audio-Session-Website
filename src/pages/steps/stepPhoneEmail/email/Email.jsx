import React, { useState } from 'react'
import { Card } from '../../../../components/shared/card/Card'
import Button from '../../../../components/shared/button/Button'
import { Input } from '../../../../components/shared/input/Input'
import styles from "../StepEmailPhone.module.css"

export const Email = ({nextStep}) => {

    const [emailAddress, setEmailAddress] = useState("")

    return (
        <div>
            <Card heading={"Enter your email address"} logo={"images/email.png"} >

                <Input value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />

                <Button onClick={nextStep} btn_text={"Next"} arrow={"images/arrow2.png"} />

                <p className={styles.bottomParagraph}>
                    By entering your Emial adderess , you're agreeing to our Terms of Services and Privacy Policy. Thanks!
                </p>

            </Card>
        </div>
    )
}
