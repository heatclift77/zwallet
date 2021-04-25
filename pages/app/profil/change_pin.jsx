import { useState } from 'react'
import { CustomLayout, TemplatePage, MainCustomBtn } from '../../../components'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/router'
export default function Changepin() {
    const {data} = useSelector(state=>state.users)
    const router = useRouter()
    const [pin, setPin] = useState({
        pin1: "",
        pin2: "",
        pin3: "",
        pin4: "",
        pin5: "",
        pin6: "",
    })
    const [state, setState] = useState({
        correct: "#6379F4",
        inCorrect: "#DADADA",
        danger: "#f44336",
        error : ""
    })
    const handleSubmit = () => {
        if (pin.pin1.length > 0 && pin.pin2.length > 0 && pin.pin3.length > 0 && pin.pin4.length > 0 && pin.pin5.length > 0 && pin.pin6.length > 0) {
            const completePin = `${pin.pin1}${pin.pin2}${pin.pin3}${pin.pin4}${pin.pin5}${pin.pin6}`
            axios({
                method : "POST",
                url : `${process.env.api}/v1/user/cekPin`,
                data : {
                    id_user : data.id_user,
                    pin : completePin
                }
            }).then(res => {
                router.push("/app/profil/add_new_pin")
            }).catch(err => {
                setState({
                    ...state,
                    error : err.response.data.message
                })
            })
        }
    }
    return (
        <CustomLayout bg="bg-white">
            <div className="px-4">
                <div className="mb-4">
                    <p className="fw-bold" style={{ color: "#000000" }}>Change Pin</p>
                </div>
                <p className="mb-5" style={{ fontSize: "14px", maxWidth: "320px", lineHeight: "32px" }}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
                <div className="row mb-5">
                    <div className="col-6 mx-auto">
                        <div>
                            <input type="number" maxlength="1" value={pin.pin1} className="py-3 px-3 me-3 my-2 rounded-sm fs-3 fw-bold" style={{ width: "50px", outline: "none", border: pin.pin1.length > 0 ? "2px solid #6379F4" : "2px solid #88888F" }} onKeyUp={(e) => {
                                if (e.keyCode >= 48 && e.keyCode <= 57) {
                                    setPin({
                                        ...pin,
                                        pin1: e.key,
                                    })
                                }
                                else if (e.key == "Backspace") {
                                    setPin({
                                        ...pin,
                                        pin1: ""
                                    })
                                }
                            }} />
                            <input type="number" maxlength="1" value={pin.pin2} className="py-3 px-3 me-3 my-2 rounded-sm fs-3 fw-bold" style={{ width: "50px", outline: "none", border: pin.pin2.length > 0 ? "2px solid #6379F4" : "2px solid #88888F" }} onKeyUp={(e) => {
                                if (e.keyCode >= 48 && e.keyCode <= 57) {
                                    setPin({
                                        ...pin,
                                        pin2: e.key,
                                    })
                                }
                                else if (e.key == "Backspace") {
                                    setPin({
                                        ...pin,
                                        pin2: ""
                                    })
                                }
                            }} />
                            <input type="number" maxlength="1" value={pin.pin3} className="py-3 px-3 me-3 my-2 rounded-sm fs-3 fw-bold" style={{ width: "50px", outline: "none", border: pin.pin3.length > 0 ? "2px solid #6379F4" : "2px solid #88888F" }} onKeyUp={(e) => {
                                if (e.keyCode >= 48 && e.keyCode <= 57) {
                                    setPin({
                                        ...pin,
                                        pin3: e.key,
                                    })
                                }
                                else if (e.key == "Backspace") {
                                    setPin({
                                        ...pin,
                                        pin3: ""
                                    })
                                }
                            }} />
                            <input type="number" maxlength="1" value={pin.pin4} className="py-3 px-3 me-3 my-2 rounded-sm fs-3 fw-bold" style={{ width: "50px", outline: "none", border: pin.pin4.length > 0 ? "2px solid #6379F4" : "2px solid #88888F" }} onKeyUp={(e) => {
                                if (e.keyCode >= 48 && e.keyCode <= 57) {
                                    setPin({
                                        ...pin,
                                        pin4: e.key,
                                    })
                                }
                                else if (e.key == "Backspace") {
                                    setPin({
                                        ...pin,
                                        pin4: ""
                                    })
                                }
                            }} />
                            <input type="number" maxlength="1" value={pin.pin5} className="py-3 px-3 me-3 my-2 rounded-sm fs-3 fw-bold" style={{ width: "50px", outline: "none", border: pin.pin5.length > 0 ? "2px solid #6379F4" : "2px solid #88888F" }} onKeyUp={(e) => {
                                if (e.keyCode >= 48 && e.keyCode <= 57) {
                                    setPin({
                                        ...pin,
                                        pin5: e.key,
                                    })
                                }
                                else if (e.key == "Backspace") {
                                    setPin({
                                        ...pin,
                                        pin5: ""
                                    })
                                }
                            }} />
                            <input type="number" maxlength="1" value={pin.pin6} className="py-3 px-3 me-3 my-2 rounded-sm fs-3 fw-bold" style={{ width: "50px", outline: "none", border: pin.pin6.length > 0 ? "2px solid #6379F4" : "2px solid #88888F" }} onKeyUp={(e) => {
                                if (e.keyCode >= 48 && e.keyCode <= 57) {
                                    setPin({
                                        ...pin,
                                        pin6: e.key,
                                    })
                                }
                                else if (e.key == "Backspace") {
                                    setPin({
                                        ...pin,
                                        pin6: ""
                                    })
                                }
                            }} />
                        </div>
                        <p className="text-danger text-center my-2" style={{fontSize:"14px"}}>{state.error}</p>
                        <div className="my-5">
                            <MainCustomBtn
                                type={pin.pin1.length > 0 && pin.pin2.length > 0 && pin.pin3.length > 0 && pin.pin4.length > 0 && pin.pin5.length > 0 && pin.pin6.length > 0 ? "primary" : "cancel"}
                                value="Login"
                                width="100%"
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CustomLayout>
    )
}