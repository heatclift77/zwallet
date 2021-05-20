import React from 'react'
import { CustomLayout, MainCustomBtn } from '../../../components'
import connnection from '../../../config/db'
import { useRouter } from 'next/router'
export default function detail({ data }) {
    const reciever = JSON.parse(data)
    const router = useRouter()
    const formatRibuan = (value) => {
        const sisa = value.toString().length % 3
        let rupiah = value.toString().substr(0, sisa)
        const ribuan = value.toString().substr(sisa).match(/\d{3}/g);
        if (ribuan) {
        const separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
        }
        return rupiah
    }
    const dateFormat = (value) => {
        const date = new Date()
        const year = date.getFullYear(value)
        const month = date.getMonth(value)
        const day = date.getDate(value)
        return `${day}/${month}/${year}`
    }
    return (
        <div>
            <CustomLayout bg="bg-white">
                <p className="fw-bold px-4" style={{ color: "#3A3D42 !important" }}>Reciever</p>
                <div className="px-4">
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <div className="d-flex">
                            <img src={reciever.img_profil} style={{ width: "60px", height: "60px" }} className="rounded-sm my-auto" />
                            <div className="ms-3 my-auto">
                                <span className="fw-bold">{reciever.username}</span>
                                <p className="m-0" style={{ fontSize: "12px" }}>{reciever.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>amount</p>
                        <span className="fs-6 fw-bold">Rp.{formatRibuan(reciever.amount)}</span>
                    </div>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>Date & time</p>
                        <span className="fs-6 fw-bold">{dateFormat(reciever.date)}</span>
                    </div>
                    <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                        <p style={{ fontSize: "12px" }}>Notes</p>
                        <span className="fs-6 fw-bold">{reciever.notes}</span>
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

export const getServerSideProps = async (ctx) => {
    const data = await new Promise((resolve, reject) => {
        const {id_transaction} = ctx.params
        connnection.query(`SELECT username, img_profil, amount, notes, phoneNumber, date  FROM transaction INNER JOIN user ON transaction.id_reciever=user.id_user WHERE transaction.id_transaction='${id_transaction}'`, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result[0])
            }
        })
    })
    return {
        props: {
            data: JSON.stringify(data)
        }
    }
}