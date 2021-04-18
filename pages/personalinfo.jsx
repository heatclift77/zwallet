import React from 'react'
import {CustomLayout, TemplatePage} from '../components'
export default function Personalinfo() {
    return (
        <div>
            <TemplatePage type="general" page="profil">
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <div className="mb-4">
                            <p className="fw-bold" style={{ color: "#000000" }}>Transaction History</p>
                        </div>
                        <p className="mb-4" style={{ fontSize: "14px", maxWidth:"320px", lineHeight:"32px" }}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <p style={{fontSize:"12px"}}>First Name</p>
                            <span className="fs-6 fw-bold">Aditya</span>
                        </div>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <p style={{fontSize:"12px"}}>Last Name</p>
                            <span className="fs-6 fw-bold">Pratama</span>
                        </div>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <p style={{fontSize:"12px"}}>Verified E-mail</p>
                            <span className="fs-6 fw-bold">Adityapratama74@gmail.com</span>
                        </div>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <p style={{fontSize:"12px"}}>Phone Number</p>
                            <span className="fs-6 fw-bold">+62 813-9387-7946</span>
                        </div>
                    </div>
                </CustomLayout>
            </TemplatePage>
        </div>
    )
}