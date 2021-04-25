import { useState } from 'react'
import Link from 'next/link'
import { CustomInput, MainCustomBtn } from '../../components'
export default function login() {
    const [state, setState] = useState({
        correct: "#6379F4",
        inCorrect: "#DADADA",
        danger: "#f44336",
        email: "",
    })
    const handleEmail = (e) => {
        setState({
            ...state,
            email: e.target.value
        })
    }
    const handleSubmit = () => {
        if (state.email.length > 0 && state.password.length > 0) {
            console.log("ok")
        }
    }
    return (
        <div>
            <div className="mb-5">
                <h3 className="fw-bold mb-5">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h3>
                <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
            </div>
            <div>
                <div className="my-5">
                    <CustomInput
                        placeholder="Enter your e-mail"
                        type="text"
                        icon="email"
                        color={state.email.length === 0 ? state.inCorrect : state.correct}
                        onChange={handleEmail}
                    />
                </div>
            </div>
            <div className="my-5">
                <MainCustomBtn
                    type={state.email.length > 0 ? "primary" : "cancel"}
                    value="Confirm"
                    width="100%"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
}
