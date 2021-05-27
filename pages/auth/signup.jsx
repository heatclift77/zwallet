import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CustomInput, MainCustomBtn } from '../../components'
import axios from 'axios'
import {register} from '../../config/redux/actions/user'
import swal from 'sweetalert'
export default function SignUp() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [state, setState] = useState({
        correct: "#6379F4",
        inCorrect: "#DADADA",
        danger: "#f44336",
        email: "",
        password: "",
        username: "",
        message : {
            errorEmail : "",
            errorUsername : "",
            errorPass : ""
        }
    })
    const handleUsername = (e) => {
        setState({
            ...state,
            username: e.target.value,
            message : {
                ...state.message,
                errorUsername : ""
            }
        })
    }
    const handleEmail = (e) => {
        setState({
            ...state,
            email: e.target.value,
            message : {
                ...state.message,
                errorEmail : ""
            }
        })
    }
    const handlePass = (e) => {
        setState({
            ...state,
            password: e.target.value
        })
    }
    const handleSubmit = () => {
        if (state.email.length > 0 && state.password.length > 0 && state.username.length > 0) {
            axios.get(`${process.env.api}/v1/user/cekAcount?username=${state.username}&email=${state.email}`)
            .then(response => {
                const data = {
                    username : state.username,
                    email : state.email,
                    password : state.password
                }
                dispatch(register(data))
                router.push("/auth/create_pin")
            })
            .catch(err => {
                swal("error", err.response.data.message, "error")
                if(err.response.data.message == "username sudah digunakan"){
                    setState({
                        ...state,
                        message : {
                            ...state.message,
                            errorUsername : err.response.data.message
                        }
                    })
                }else if(err.response.data.message == "email sudah terdaftar"){
                    swal("error", err.response.message ,"error")
                    setState({
                        ...state,
                        message : {
                            ...state.message,
                            errorEmail :err.response.data.message
                        }
                    })
                }
            })
        }
    }
    return (
        <div>
            <div className="mb-5">
                <h3 className="fw-bold mb-5">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
                <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            </div>
            <div>
                <div className="my-5">
                    <CustomInput
                        placeholder="Enter your username"
                        type="text"
                        icon="person"
                        color={state.username.length === 0 ? state.inCorrect : state.message.errorUsername.length > 0 ? state.danger : state.correct }
                        onChange={handleUsername}
                    />
                    <p className="m-0 text-danger">{state.message.errorUsername}</p>
                </div>
                <div className="my-5">
                    <CustomInput
                        placeholder="Enter your e-mail"
                        type="text"
                        icon="email"
                        color={state.email.length === 0 ? state.inCorrect : state.message.errorEmail.length > 0 ? state.danger : state.correct }
                        onChange={handleEmail}
                    />
                    <p className="m-0 text-danger">{state.message.errorEmail}</p>
                </div>
                <div className="my-5">
                    <CustomInput
                        placeholder="Create Your Password"
                        type="password"
                        icon="lock"
                        color={state.password.length === 0 ? state.inCorrect : state.correct}
                        onChange={handlePass}
                    />
                </div>
            </div>
            <div className="my-5">
                <MainCustomBtn
                    type={state.email.length > 0 && state.password.length > 0 && state.username.length > 0 ? "primary" : "cancel"}
                    value="Sign Up"
                    width="100%"
                    onClick={handleSubmit}
                />
            </div>
            <p className="text-center">Already have an account? Let’s <Link href="/auth/login"><a style={{ color: "#6379F4 !important" }}>Login</a></Link></p>
        </div>
    )
}
