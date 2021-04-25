import { useState } from 'react'
import { CustomLayout, CustomInput, MainCustomBtn } from '../../../components'
import axios from 'axios'
import {useSelector} from 'react-redux'
import swal from 'sweetalert'
import { useRouter } from 'next/router'
export default function Changepassword() {
    const router = useRouter()
    const {data} = useSelector(state=>state.users)
    const [state, setState] = useState({
        correct: "#6379F4",
        inCorrect: "#DADADA",
        danger: "#f44336",
        currentPass: "",
        newPass: "",
        confirmPass: "",
        error : {
            pass : "",
            confirmPass : ""
        }
    })
    const handlecurrentPass = (e) => {
        setState({
            ...state,
            currentPass: e.target.value,
            error : {
                ...state.error,
                pass : ""
            }
        })
    }
    const handlePass = (e) => {
        setState({
            ...state,
            newPass: e.target.value
        })
    }
    const handleConfirm = (e) => {
        setState({
            ...state,
            confirmPass: e.target.value,
            error : {
                ...state.error,
                confirmPass : ""
            }
        })
    }
    const handleSubmit = () => {
        if (state.confirmPass.length > 0 && state.currentPass.length > 0 && state.newPass.length > 0) {
            if(state.confirmPass == state.newPass){
                axios({
                    method : "PUT",
                    url : `${process.env.api}/v1/user`,
                    data : {
                        update : "password",
                        value : state.newPass,
                        id_user : data.id_user,
                        email : data.email,
                        pass : state.currentPass
                    }
                })
                .then(res => {
                    swal("Berhasil", res.data.message, "success")
                    router.push('/app/profil/personal_info')
                })
                .catch(err => {
                    setState({
                        ...state,
                        error : {
                            ...state.error,
                            pass : err.response.data.message
                        }
                    })
                })
            }else{
                setState({
                    ...state,
                    error : {
                        ...state.error,
                        confirmPass : "konfirmasi password tidak sama"
                    }
                })
            }
        }
    }
    return (
        <CustomLayout bg="bg-white">
            <div className="px-4">
                <div className="mb-4">
                    <p className="fw-bold" style={{ color: "#000000" }}>Change Password</p>
                </div>
                <p className="mb-5" style={{ fontSize: "14px", maxWidth: "320px", lineHeight: "32px" }}>You must enter your current password and then type your new password twice.</p>
                <div className="row mb-5">
                    <div className="col-6 mx-auto">
                        <div className="mb-5">
                            <CustomInput
                                type="password"
                                icon="lock"
                                placeholder="Current password"
                                color={state.currentPass.length === 0 ? state.inCorrect : state.error.pass.length > 0 ? state.danger : state.correct}
                                onChange={handlecurrentPass} />
                                <p className="text-danger my-2" style={{fontSize:"14px"}}>{state.error.pass}</p>
                        </div>
                        <div className="mb-5">
                            <CustomInput
                                type="password"
                                icon="lock"
                                placeholder="New password"
                                color={state.newPass.length === 0 ? state.inCorrect : state.correct}
                                onChange={handlePass} />
                        </div>
                        <div className="mb-5">
                            <CustomInput
                                type="password"
                                icon="lock"
                                placeholder="Repeat new password"
                                color={state.confirmPass.length === 0 ? state.inCorrect : state.error.confirmPass.length > 0 ? state.danger :  state.correct}
                                onChange={handleConfirm} />
                            <p className="text-danger my-2" style={{fontSize:"14px"}}>{state.error.confirmPass}</p>
                        </div>
                        <div>
                            <MainCustomBtn type={state.confirmPass.length > 0 && state.currentPass.length > 0 && state.newPass.length > 0  ? "primary" : "cancel"} value="Change Password" width="100%" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </CustomLayout>
    )
}

