import React from 'react'
import { useSelector } from 'react-redux'
import { CustomLayout } from '../../../../components'
import Link from 'next/link'
export default function Personalinfo() {
    const { data } = useSelector(state=>state.users)
    return (
        <CustomLayout bg="bg-white">
            <div className="px-4">
                <div className="mb-4">
                    <p className="fw-bold" style={{ color: "#000000" }}>Personal Information</p>
                </div>
                <p style={{maxWidth:"360px", lineHeight:"26px", fontSize:"14px"}} className="mb-4" >We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                <div className="mb-3 w-100 p-3 d-flex justify-content-between rounded-md shadow-sm text-start">
                    <div>
                        <p style={{ fontSize: "12px" }}>First Name</p>
                        <span className="fs-6 fw-bold">{data.firstName}</span>
                    </div>
                    <Link href="/app/profil/personal_info/set_first_name"><a className="color-active align-self-center" style={{fontSize:"14px"}}>Setting</a></Link>
                </div>
                <div className="mb-3 w-100 p-3 d-flex justify-content-between rounded-md shadow-sm text-start">
                    <div>
                        <p style={{ fontSize: "12px" }}>Last Name</p>
                        <span className="fs-6 fw-bold">{data.lastName}</span>
                    </div>
                    <Link href="/app/profil/personal_info/set_last_name"><a className="color-active align-self-center" style={{fontSize:"14px"}}>Setting</a></Link>
                </div>
                <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                    <p style={{ fontSize: "12px" }}>Verified E-mail</p>
                    <p className="fs-6 fw-bold">{data.email}</p>
                </div>
                <div className="mb-3 w-100 p-3 d-flex justify-content-between rounded-md shadow-sm text-start">
                    <div>
                        <p style={{ fontSize: "12px" }}>Phone Number</p>
                        <span className="fs-6 fw-bold">{data.phoneNumber}</span>
                    </div>
                    <Link href="/app/profil/personal_info/manage_phonenumber"><a className="color-active align-self-center" style={{fontSize:"14px"}}>Manage</a></Link>
                </div>
            </div>
        </CustomLayout>
    )
}