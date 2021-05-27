import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { CustomLayout, MainCustomBtn } from '../../../components'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import axios from 'axios'
import swal from 'sweetalert'
import { refresPage } from '../../../config/redux/actions/user'
export default function Profil() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { data } = useSelector(state => state.users)
    const [state, setState] = useState({
        avatar: data.img_profil,
        dataImg: "",
        changeState: false
    })
    const onImageChange = (event) => {
        if(event.target.files[0].type === "image/png" || event.target.files[0].type === "image/jpg" || event.target.files[0].type === "image/jpeg"){
            if(event.target.files[0].size < 2000000){
                if(event.target.files && event.target.files[0]) {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        setState({...state, avatar: e.target.result , dataImg:event.target.files[0], changeState:true});
                    };
                    reader.readAsDataURL(event.target.files[0]);
                }
            }else{
                swal("Oops", "ukuran file maksimal 2mb ya", "error")
            }
        }else{
            swal("Oops", "hanya mendukung format png, jpg dan jpeg", "error")
        }
    }
    const handleLogOut = () => {
        Cookies.remove("token")
        router.push("/")
    }
    const cancelChange = () => {
        setState({...state, changeState:false, avatar:data.img_profil})
    }
    const applyChange = () => {
        const form = new FormData()
        form.append("img", state.dataImg)
        form.append("id_user", data.id_user)
        axios({
            method : "put",
            url : `${process.env.api}/v1/user/changeImage`,
            data : form
        })
        .then(res => {
            dispatch(refresPage(res.data.data))
            setState({...state, changeState:false})
            swal("berhasil", res.data.message)
        })
    }
    return (
        <CustomLayout bg="bg-white">
            <div className="row">
                <div className="col-6 mx-auto">
                    <div className="mx-auto text-center mb-5 mt-4">
                        <div className="position-relative mx-auto" style={{ overflow: "hidden", width: "120px", height: "120px" }} >
                            <div className="rounded-sm my-auto d-flex justify-content-center" style={{ width: "120px", height: "120px", backgroundPosition:"center", overflow:"hidden" }}>
                                <img src={state.avatar} style={{width:"100%", height:"auto"}} className="align-self-center" />
                            </div>
                            <div style={{ background: "black", width: "100%", height: "30px", position: "absolute", bottom: 0, borderBottomLeftRadius: "0.8rem", borderBottomRightRadius: "0.8rem", opacity: 0.6 }} className="text-center c-pointer"><span className="material-icons text-white pt-1" style={{ fontSize: "22px" }}>create</span></div>
                            <input type="file" style={{ position: "absolute", bottom: 0, left: 0, opacity: 0 }} className="c-pointer" onChange={onImageChange} />
                        </div>
                        <div className={state.changeState == true ? "d-flex mx-auto mt-4 justify-content-between": "hide"} style={{maxWidth:"200px"}}>
                            <button className="border-0 bg-main text-white py-1 px-4 rounded-sm" style={{fontSize:"14px"}} onClick={applyChange}>save</button>
                            <button className="border-0 bg-second color-second py-1 px-4 rounded-sm" style={{fontSize:"14px"}} onClick={cancelChange}>cancel</button>
                        </div>
                        <div className="my-5">
                            <div className="d-flex justify-content-center">
                                <h4 className="fw-bold align-self-center me-2">{data.username}</h4>
                                <span className="material-icons rounded-circle c-pointer align-self-start" style={{ background: "rgba(136, 136, 143, 0.3)", color: "#6379F4", fontSize: "16px", padding: "5px" }} onClick={() => { router.push("/app/profil/change_username") }} >create</span>
                            </div>
                            <p>{data.phoneNumber}</p>
                        </div>
                    </div>
                    <button className="rounded-sm text-start border-0 d-flex mb-4 justify-content-between w-100 py-3 px-3" style={{ background: "#E5E8ED" }} onClick={() => { router.push('/app/profil/personal_info') }} >
                        <p className="fw-bold m-0" style={{ color: "#4D4B57" }}>Personal Information</p>
                        <div>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83366 14L22.167 14" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.0003 5.83365L22.167 14.0003L14.0003 22.167" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </button>
                    <button className="rounded-sm text-start border-0 d-flex mb-4 justify-content-between w-100 py-3 px-3" style={{ background: "#E5E8ED" }} onClick={() => { router.push('/app/profil/change_password') }} >
                        <p className="fw-bold m-0" style={{ color: "#4D4B57" }}>Change Password</p>
                        <div>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83366 14L22.167 14" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.0003 5.83365L22.167 14.0003L14.0003 22.167" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </button>
                    <button className="rounded-sm text-start border-0 d-flex mb-4 justify-content-between w-100 py-3 px-3" style={{ background: "#E5E8ED" }} onClick={() => { router.push('/app/profil/change_pin') }} >
                        <p className="fw-bold m-0" style={{ color: "#4D4B57" }}>Change Pin</p>
                        <div>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83366 14L22.167 14" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.0003 5.83365L22.167 14.0003L14.0003 22.167" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </button>
                    <button className="rounded-sm text-start border-0 mb-4 justify-content-between w-100 py-3 px-3" style={{ background: "#E5E8ED" }} onClick={handleLogOut} >
                        <p className="fw-bold m-0" style={{ color: "#4D4B57" }}>Log Out</p>
                    </button>
                </div>
            </div>
        </CustomLayout>
    )
}
