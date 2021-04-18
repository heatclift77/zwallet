import React from 'react'
import {CustomLayout, TemplatePage } from '../components'
export default function Managephonenumber() {
    return (
        <div>
            <TemplatePage type="general" page="profil">
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <div className="mb-4">
                            <p className="fw-bold" style={{ color: "#000000" }}>Manage Phone Number</p>
                        </div>
                        <p className="mb-5" style={{ fontSize: "14px", maxWidth:"320px", lineHeight:"32px" }}>You can only delete the phone number and then you must add another phone number.</p>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start d-flex justify-content-between">
                            <div className="align-self-center">
                                <p style={{fontSize:"12px"}}>Primary</p>
                                <span className="fs-6 fw-bold">+62 813 9387 7946</span>
                            </div>
                            <button className="align-self-center border-0 bg-transparent">
                                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 7H5.83333H24.5" stroke="#BBBBBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.33398 6.99967V4.66634C9.33398 4.0475 9.57982 3.45401 10.0174 3.01643C10.455 2.57884 11.0485 2.33301 11.6673 2.33301H16.334C16.9528 2.33301 17.5463 2.57884 17.9839 3.01643C18.4215 3.45401 18.6673 4.0475 18.6673 4.66634V6.99967M22.1673 6.99967V23.333C22.1673 23.9518 21.9215 24.5453 21.4839 24.9829C21.0463 25.4205 20.4528 25.6663 19.834 25.6663H8.16732C7.54848 25.6663 6.95499 25.4205 6.5174 24.9829C6.07982 24.5453 5.83398 23.9518 5.83398 23.333V6.99967H22.1673Z" stroke="#BBBBBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </CustomLayout>
            </TemplatePage>
        </div>
    )
}
