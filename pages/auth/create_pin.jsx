import { useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MainCustomBtn } from '../../components'
import axios from 'axios'
import swal from 'sweetalert'
import {useEffect} from 'react'
export default function login() {
    const data = useSelector(state=>state.users.data)
    useEffect(()=>{
        if(data.username.length == 0 || data.email.length == 0 || data.password.length == 0){
            router.push("/")
        }
    },[data])
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
    })
    const handleSubmit = () => {
        if (pin.pin1.length > 0 && pin.pin2.length > 0 && pin.pin3.length > 0 && pin.pin4.length > 0 && pin.pin5.length > 0 && pin.pin6.length > 0) {
            axios({
                method : "POST",
                url : `${process.env.api}/v1/user/register`,
                headers: { 'content-type': 'application/json' },
                data : {
                    username : data.username,
                    email : data.email,
                    password : data.password,
                    pin : `${pin.pin1}${pin.pin2}${pin.pin3}${pin.pin4}${pin.pin5}${pin.pin6}`
                }
            })
            .then(response => {
                swal("Berhasil", response.data.message, "success")
                router.push('/auth/login')
            })
            .catch(err =>{
                console.log(err.response.data.message);
            })
        }
    }
    return (
        <div>
            <div className="mb-5">
                <h3 className="fw-bold mb-5">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h3>
                <p>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
            </div>
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
            <div className="my-5">
                <MainCustomBtn
                    type={pin.pin1.length > 0 && pin.pin2.length > 0 && pin.pin3.length > 0 && pin.pin4.length > 0 && pin.pin5.length > 0 && pin.pin6.length > 0 ? "primary" : "cancel"}
                    value="Login"
                    width="100%"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
}
