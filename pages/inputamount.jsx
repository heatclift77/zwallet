import React from 'react'
import {CustomLayout, TemplatePage, CustomInput, MainCustomBtn} from '../components'
import Image from 'next/image'
export default function InputAmount() {
    const name = localStorage.getItem('name')
    const id_user = localStorage.getItem('id_user')
    const id_wallet = localStorage.getItem('id_wallet')
    const img = localStorage.getItem('img')
    return (
        <div>
            <TemplatePage type="general" page="transfer">
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <div className="mb-5">
                            <p className="fw-bold" style={{ color: "#000000" }}>Transaction Money</p>
                        </div>
                        <button className="border-0 bg-transparent mb-4 w-100 p-3 rounded-md shadow-sm text-start">
                            <div className="d-flex">
                                <img src={img} style={{width:"60px", height:"60px"}} />
                                <div className="ms-3 my-auto">
                                    <span>{name}</span>
                                    <p className="m-0" style={{ fontSize: "12px" }}>transfer</p>
                                </div>
                            </div>
                        </button>
                        <div className="mb-5">
                            <p className="m-0" style={{ fontSize: "10px" }} style={{maxWidth:"320px", lineHeight:"32px"}}>Type the amount you want to transfer and then press continue to the next steps.</p>
                        </div>
                        {/*  */}
                        <div className="row mb-5">
                            <div className="col-6 mx-auto">
                                <div className="d-flex flex-column justify-content-center text-center mb-5">
                                    <input type="number" className="inputAmount mb-4" placeholder="0.00" />
                                    <span className="fw-bold">Rp120.000 Available</span>
                                </div>
                                <CustomInput type="text" icon="mode" placeholder="Add some notes" />
                            </div>
                        </div>
                        {/*  */}
                        <div className="d-flex justify-content-end">
                            <MainCustomBtn type="primary" value="Continue" width="150px" />
                        </div>
                    </div>
                </CustomLayout>
            </TemplatePage>
        </div>
    )
}