import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CustomInput, MainCustomBtn } from '../../components'
import { signin } from '../../config/redux/actions/user'
import {wallet} from '../../config/redux/actions/wallet'
import swal from 'sweetalert'
import axios from 'axios'
import cookies from 'js-cookie'
export default function login() {
    const {data, loading, error} = useSelector(state=>state.users)
    const dispatch = useDispatch()
    const router = useRouter()
    const page =  router.pathname.split('/')[2]
    const [state, setState] = useState({
        correct: "#6379F4",
        inCorrect: "#DADADA",
        danger: "#f44336",
        email: "",
        password: "",
        error : {
            errorEmail : "",
            errorPass : ""
        }
    })
    useEffect(()=>{
        const token = cookies.get('token')
        if(token !== undefined){
            router.push('/app/dashboard')
        }
    },[])
    const handleEmail = (e) => {
        setState({
            ...state,
            email: e.target.value
        })
    }
    const handlePass = (e) => {
        setState({
            ...state,
            password: e.target.value
        })
    }
    const submit = () => {
        const akun = {
            email : state.email,
            pass : state.password
        }
        dispatch(signin(akun))
        .then(res => {
            axios.get(`${process.env.api}/v1/user/saldo?email=${akun.email}`)
            .then(response => {
                dispatch(wallet(response.data.saldo))
            })
            router.push('/app/dashboard')
        })
        .catch(err => {
            swal("Oops", err.message, "error")
            if(err.status == 500){
                swal("Oops", err.message , "error")
            }
        })
    }
    const handleClick = () => {
        if (state.email.length > 0 && state.password.length > 0) {
            submit()
        }
    }
    const handleKeyUp = (e) =>{
        if(e.key == "Enter"){
            submit()
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
                        placeholder="Enter your e-mail"
                        type="text"
                        icon="email"
                        color={state.email.length === 0 ? state.inCorrect : error == "email belum terverifikasi" || error == "email belum terdaftar" ? state.danger : state.correct}
                        onChange={handleEmail}
                    />
                    <p className="text-danger">{error == "email belum terverifikasi" ? error : error == "email belum terdaftar" ? error : ""}</p>
                </div>
                <div className="my-3">
                    <CustomInput
                        placeholder="Create Your Password"
                        type="password"
                        icon="lock"
                        color={state.password.length === 0 ? state.inCorrect : error == "Password salah" ? state.danger : state.correct}
                        onChange={handlePass}
                    />
                    <p className="text-danger">{error == "Password salah" ? error : ""}</p>
                </div>
            </div>
            <div className="w-100 d-flex">
                <div className="ms-auto">
                    <Link href="/auth/reset_password" ><a className="fw-bold link">Forgot Password</a></Link>
                </div>
            </div>
            <div className="my-5">
                <MainCustomBtn
                    type={state.email.length > 0 && state.password.length > 0 ? "primary" : "cancel"}
                    value={loading == true ? "...loading" : "Login"}
                    width="100%"
                    onClick={handleClick}
                    onKeyUp={handleKeyUp}
                />
            </div>
            <p className="text-center">Don’t have an account? Let’s <Link href="/auth/signup"><a style={{ color: "#6379F4 !important" }}>Sign Up</a></Link></p>
        </div>
    )
}
