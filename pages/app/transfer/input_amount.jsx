import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CustomLayout, TemplatePage, CustomInput, MainCustomBtn } from '../../../components'
import { useSelector, useDispatch } from 'react-redux'
import { detail_transaction } from '../../../config/redux/actions/detail_transaction'
import NumberFormat from 'react-number-format';
export default function InputAmount() {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.recievers)
    const { saldo } = useSelector(state => state.wallets)
    const router = useRouter()
    const [state, setState] = useState({
        correct: "#6379F4",
        inCorrect: "#DADADA",
        danger: "#f44336",
        note: "",
        amount: "",
        message: {
            error: ""
        }
    })
    // date format
    const d = new Date()
    const date = d.getDate()
    const years = d.getFullYear()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[d.getMonth()];
    const format = `${date} ${month} ${years}`
    // -----------
    // setup state
    const details = {
        username: data.username,
        id_reciever: data.id_user,
        img_profil: data.img_profil,
        phoneNumber: data.phoneNumber,
        amount: state.amount,
        sisaSaldo: Number(saldo) - Number(state.amount.split("Rp.").join("").split(",").join("")),
        tgl: format,
        notes: state.note
    }
    // format ribuan
    const sisa = saldo.length % 3
    let rupiah = saldo.substr(0, sisa)
    const ribuan = saldo.substr(sisa).match(/\d{3}/g);
    if (ribuan) {
        const separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    // --------
    const handleNote = (e) => {
        setState({
            ...state,
            note: e.target.value
        })
    }
    const handleSubmit = () => {
        if (state.note.length > 0 && state.amount.length > 0) {
            if (Number(saldo) > Number(state.amount.split("Rp.").join("").split(",").join(""))) {
                dispatch(detail_transaction(details))
                router.push("/app/transfer/confirmation")
            } else {
                setState({
                    ...state,
                    message: {
                        error: "saldo anda tidak cukup"
                    }
                })
            }
        }
    }
    return (
        <CustomLayout bg="bg-white">
            <div className="px-4">
                <div className="mb-5">
                    <p className="fw-bold" style={{ color: "#000000" }}>Transaction Money</p>
                </div>
                <div className="mb-4 w-100 p-3 rounded-md shadow-sm text-start">
                    <div className="d-flex">
                        <img src={data.img_profil} style={{ width: "60px", height: "60px" }} className="rounded-sm" />
                        <div className="ms-3 my-auto">
                            <span>{data.username}</span>
                            <p className="m-0" style={{ fontSize: "12px" }}>transfer</p>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="m-0 ms-3" style={{ fontSize: "10px" }} style={{ maxWidth: "320px", lineHeight: "32px" }}>Type the amount you want to transfer and then press continue to the next steps.</p>
                </div>
                {/*  */}
                <div className="row mb-5">
                    <div className="col-6 mx-auto">
                        <div className="d-flex flex-column justify-content-center text-center mb-5">
                            <NumberFormat displayType={'number'} className="inputAmount mb-4" placeholder="0.00" thousandSeparator={true} prefix={'Rp.'} onChange={(e) => {
                                setState({
                                    ...state,
                                    amount: e.target.value,
                                    message: {
                                        error: ""
                                    }
                                })
                            }} />
                            <span className="fw-bold">Rp {rupiah} Available</span>
                            <p className="text-danger mb-2">{state.message.error}</p>
                        </div>
                        <CustomInput type="text" icon="mode" placeholder="Add some notes" color={state.note.length === 0 ? state.inCorrect : state.correct} onChange={handleNote} />
                    </div>
                </div>
                {/*  */}
                <div className="d-flex justify-content-end">
                </div>
                <div className="d-flex justify-content-end">
                    <MainCustomBtn type={state.note.length > 0 && state.amount.length > 0 ? "primary" : "cancel"} value="Continue" width="150px" onClick={handleSubmit} />
                </div>
            </div>
        </CustomLayout>
    )
}