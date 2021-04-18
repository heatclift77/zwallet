import React from 'react'
import Image from 'next/image'
import {CustomLayout, TemplatePage} from '../components'
export default function Profil() {
    return (
        <div>
            <TemplatePage
                page="profil"
                type="general"
            >
                <CustomLayout bg="bg-white">
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <div className="mx-auto text-center mb-5 mt-4">
                                <Image
                                    src="/assets/profil.png"
                                    width={120}
                                    height={120}
                                    className="rounded-sm my-auto"
                                />
                                <div className="my-5">
                                    <h4 className="fw-bold">Aditya Pratama</h4>
                                    <p>+62 813-9387-7946</p>
                                </div>
                            </div>
                            <button className="rounded-sm text-start border-0 d-flex mb-4 justify-content-between w-100 py-3 px-3" style={{background:"#E5E8ED"}}>
                                <p className="fw-bold m-0" style={{color:"#4D4B57"}}>Personal Information</p>
                                <div>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.83366 14L22.167 14" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.0003 5.83365L22.167 14.0003L14.0003 22.167" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </button>
                            <button className="rounded-sm text-start border-0 d-flex mb-4 justify-content-between w-100 py-3 px-3" style={{background:"#E5E8ED"}}>
                                <p className="fw-bold m-0" style={{color:"#4D4B57"}}>Change Password</p>
                                <div>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.83366 14L22.167 14" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.0003 5.83365L22.167 14.0003L14.0003 22.167" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </button>
                            <button className="rounded-sm text-start border-0 d-flex mb-4 justify-content-between w-100 py-3 px-3" style={{background:"#E5E8ED"}}>
                                <p className="fw-bold m-0" style={{color:"#4D4B57"}}>Change Pin</p>
                                <div>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.83366 14L22.167 14" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.0003 5.83365L22.167 14.0003L14.0003 22.167" stroke="#4D4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </button>
                            <button className="rounded-sm text-start border-0 mb-4 justify-content-between w-100 py-3 px-3" style={{background:"#E5E8ED"}}>
                                <p className="fw-bold m-0" style={{color:"#4D4B57"}}>Log Out</p>
                            </button>
                        </div>
                    </div>
                </CustomLayout>
            </TemplatePage>
        </div>
    )
}
