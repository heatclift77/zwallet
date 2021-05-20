import { TemplatePage, CustomLayout, MainCustomBtn } from '../../../components'
import { useSelector, useDispatch } from 'react-redux'
import {} from '../../../config/redux/actions/user'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { useState } from 'react'
import axios from 'axios'
import { wallet } from '../../../config/redux/actions/wallet'
import { history } from '../../../config/redux/actions/history'
export default function Confirmation() {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.details_transactions)
    const user = useSelector(state => state.users)
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
        toggleModal: false,
        errorPinMessage : "",
        loading : {
            cekPin : false,
            requestTransaction : false
        }
    })
    // format ribuan
    const sisa = data.sisaSaldo.toString().length % 3
    let rupiah = data.sisaSaldo.toString().substr(0, sisa)
    const ribuan = data.sisaSaldo.toString().substr(sisa).match(/\d{3}/g);
    if (ribuan) {
        const separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    // --------
    const handleOpenModal = () => {
        setState({
            ...state,
            toggleModal: true
        })
    }
    const handleCloseModal = () => {
        setState({
            ...state,
            toggleModal: false,
            errorPinMessage : ""
        })
    }
    const handleSubmit = () => {
        if (pin.pin1.length > 0 && pin.pin2.length > 0 && pin.pin3.length > 0 && pin.pin4.length > 0 && pin.pin5.length > 0 && pin.pin6.length > 0) {
            setState({...state, loading : {...state.loading, cekPin : true}})
            axios({
                method: "POST",
                url: `${process.env.api}/v1/user/cekPin`,
                data: {
                    id_user: user.data.id_user,
                    pin : `${pin.pin1}${pin.pin2}${pin.pin3}${pin.pin4}${pin.pin5}${pin.pin6}`
                }
            })
            .then(response => {
                setState({...state, toggleModal : false, loading : {requestTransaction: true, cekPin : false}})
                axios({
                    method : "POST",
                    url : `${process.env.api}/v1/transactions`,
                    data : {
                        id_reciever : data.id_reciever,
                        id_user : user.data.id_user,
                        reciever : data.username,
                        amount : data.amount.split("Rp.").join("").split(",").join(""),
                        notes : data.notes
                    }
                })
                .then(res => {
                    axios.get(`${process.env.api}/v1/user/saldo?email=${user.data.email}`).then(res=>dispatch(wallet(res.data.saldo)))
                    setState({...state, toggleModal: false, loading : { ...state.loading, requestTransaction: false}})
                    axios.get(`${process.env.api}/v1/transactions?id_user=${user.data.id_user}&limit=4`)
                    .then(response => {
                        dispatch(history(response.data.data))
                })
                    router.push("/app/transfer/status")
                })
                .catch(err => {
                    setState({...state, loading : { ...state.loading, requestTransaction: false}})
                })
            })
            .catch(err => {
                setState({...state, errorPinMessage : err.response.data.message, loading : {...state.loading, cekPin : false}})
            })
        }
    }
    return (
        <div>
            <CustomLayout bg="bg-white">
                <div className="px-4">
                    <div className="mb-5">
                        <p className="fw-bold" style={{ color: "#3A3D42 !important" }}>Transfer To</p>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <div className="d-flex">
                                <img src={data.img_profil} style={{ width: "60px", height: "60px" }} className="rounded-sm my-auto" />
                                <div className="ms-3 my-auto">
                                    <span className="fw-bold">{data.username}</span>
                                    <p className="m-0" style={{ fontSize: "12px" }}>{data.phoneNumber}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="fw-bold mb-4" style={{ color: "#3A3D42 !important" }}>Details</p>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>Amount</p>
                        <span className="fs-6 fw-bold">{data.amount}</span>
                    </div>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>Balance</p>
                        <span className="fs-6 fw-bold">Rp {rupiah}</span>
                    </div>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>Date & time</p>
                        <span className="fs-6 fw-bold">{data.tgl}</span>
                    </div>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>Notes</p>
                        <span className="fs-6 fw-bold">{data.notes}</span>
                    </div>
                    <div className="mb-3 w-100 p-3 d-flex justify-content-end">
                        <div>
                            <MainCustomBtn type="primary" value="Confirm" width="150px" onClick={handleOpenModal} />
                        </div>
                    </div>
                </div>
            </CustomLayout>
            <Modal
                isOpen={state.toggleModal}
                className="modalSize"
                overlayClassName="overlayConfig"
                closeTimeoutMS={400}
                ariaHideApp={false}
            >
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <div className="d-flex justify-content-between mb-3">
                            <p className="fw-bold fs-6" style={{ color: "#3A3D42" }}>Enter PIN to Transfer</p>
                            <button className="bg-transparent border-0" onClick={handleCloseModal}>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 7L7 21" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7 7L21 21" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mb-3">
                            <p style={{ fontSize: "14px", maxWidth: "300px", lineHeight: "26px" }}>Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                        </div>
                        <div className="d-flex justify-content-center">
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
                        <p className="text-danger text-center mb-4 mt-2" style={{fontSize:"14px"}}>{state.errorPinMessage}</p>
                        <div className="w-100 d-flex justify-content-end">
                            <MainCustomBtn type={pin.pin1.length > 0 && pin.pin2.length > 0 && pin.pin3.length > 0 && pin.pin4.length > 0 && pin.pin5.length > 0 && pin.pin6.length > 0 ? "primary" : "cancel"} value={state.loading.cekPin == true ? "...loading" : "Continue"} width="140px" onClick={handleSubmit} />
                        </div>
                    </div>
                </CustomLayout>
            </Modal>
            <div style={{width:"100vw", height:"100vh", position:"fixed", top:0, left:0, background:"black", opacity:"0.4", transition:"ease-in-out all 0.4s"}} className={state.loading.requestTransaction == true ? "" : "hide"}>
                <div class="spinner-border text-primary" role="status" style={{position:"absolute", top:"50%", left:"50%", transform:"translaate(-50%, -50%)"}}>
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

