import { useEffect, useState } from 'react'
import { CustomLayout, History, Chart } from '../../components'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import axios from 'axios'
export default function Dashboard() {
    const { saldo } = useSelector(state => state.wallets)
    const { data } = useSelector(state => state.users)
    const router = useRouter()
    // format ribuan
    const sisa = saldo.length % 3
    let rupiah = saldo.substr(0, sisa)
    const ribuan = saldo.substr(sisa).match(/\d{3}/g);
    if (ribuan) {
        const separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    // --------
    return (
        <div className="row">
            <div className="col-12 mb-3">
                <CustomLayout bg="bg-main">
                    <div className="row px-4">
                        <div className="col-5">
                            <p className="fw-light m-0" style={{ color: "#f5f6ff" }}>Balance</p>
                            <h1 className="text-white">Rp {rupiah}</h1>
                            <p className="fw-light" style={{ color: "#f5f6ff" }}>{data.phoneNumber}</p>
                        </div>
                        <div className="col-5 col-lg-3 ms-auto">
                            <button className="rounded-sm py-2 px-3 d-flex mb-3 w-100" style={{ border: "2px solid #f5f6ff", background: "rgba(255, 255, 255,0.3)" }} onClick={() => { router.push("/app/transfer") }}>
                                <div className="me-2">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 22.1663V5.83301" stroke="#f5f6ff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.83333 13.9997L14 5.83301L22.1667 13.9997" stroke="#f5f6ff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-white fw-bold m-0 align-self-center">Transfer</p>
                            </button>
                            <button className="rounded-sm py-2 px-3 d-flex w-100" style={{ border: "2px solid #f5f6ff", background: "rgba(255, 255, 255,0.3)" }} onClick={() => { router.push("/app/topup") }} >
                                <div className="me-2">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5.83301V22.1663" stroke="#f5f6ff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.83333 14H22.1667" stroke="#f5f6ff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-white fw-bold m-0 align-self-center">Top Up</p>
                            </button>
                        </div>
                    </div>
                </CustomLayout>
            </div>
            <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                <Chart />
            </div>
            <div className="col-12 col-lg-5">
                <History />
            </div>
        </div>
    )
}

