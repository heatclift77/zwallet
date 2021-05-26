import React, {useEffect, useState} from 'react'
import { CustomLayout, MainCustomBtn } from '../../../components'
import axios from 'axios'
import cookies from 'js-cookie'
function Detail (){
    const  id_transactions  = cookies.get("_ID_TRANS")
    const formatRibuan = (value) => {
        if(value !== undefined){
            const sisa = value.toString().length % 3
            let rupiah = value.toString().substr(0, sisa)
            const ribuan = value.toString().substr(sisa).match(/\d{3}/g);
            if (ribuan) {
            const separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
            }
            return rupiah
        }
    }
    const [dataTransaction, setDataTransaction] = useState({
        loading: false,
        data : {}
    })
    const dateFormat = (value) => {
        if(value !== undefined){
            const date = new Date()
            const year = date.getFullYear(value)
            const month = date.getMonth(value)
            const day = date.getDate(value)
            return `${day}/${month}/${year}`
        }
    }
    useEffect(()=>{
        setDataTransaction({...dataTransaction, loading:true})
        axios.get(`${process.env.api}/v1/transactions/details?id_transaction=${id_transactions}`)
        .then(res=> {
            setDataTransaction({data:res.data.data, loading:false})
        })
    },[])
    return (
        <div>
            <CustomLayout bg="bg-white">
                <p className="fw-bold px-4" style={{ color: "#3A3D42 !important" }}>Reciever</p>
                <div className="px-4">
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <div className="d-flex">
                            <img src={dataTransaction.data.img_profil} style={{ width: "60px", height: "60px" }} className="rounded-sm my-auto" />
                            <div className="ms-3 my-auto">
                                <span className="fw-bold">{dataTransaction.data.username}</span>
                                <p className="m-0" style={{ fontSize: "12px" }}>{dataTransaction.data.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>amount</p>
                        <span className="fs-6 fw-bold">Rp.{formatRibuan(dataTransaction.data.amount)}</span>
                    </div>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>Date & time</p>
                        <span className="fs-6 fw-bold">{dateFormat(dataTransaction.data.date)}</span>
                    </div>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>Notes</p>
                        <span className="fs-6 fw-bold">{dataTransaction.data.notes}</span>
                    </div>
                    <div className="d-flex justify-content-end my-5">
                        <MainCustomBtn
                            value="back"
                            type="primary"
                            width="140px"
                            onClick={()=>{router.push("/app/history")}}
                        />
                    </div>
                </div>
            </CustomLayout>
        </div>
    )
}

export default Detail