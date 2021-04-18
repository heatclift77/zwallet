import React from 'react'
import { TemplatePage, CustomLayout, History } from '../components'
export default function Dashboard() {
    return (
        <div>
            <TemplatePage type="general" page="dashboard">
                <div className="row">
                    <div className="col-12 mb-3">
                        <CustomLayout bg="bg-main">
                            <div>
                                <div className="row px-4">
                                    <div className="col-5">
                                        <p className="fw-light" style={{ color: "#f5f6ff" }}>Balance</p>
                                        <h1 className="text-white">Rp120.000</h1>
                                        <p className="fw-light" style={{ color: "#f5f6ff" }}>+62 813-9387-7946</p>
                                    </div>
                                    <div className="col-3 ms-auto">
                                        <button className="rounded-sm py-2 px-3 d-flex mb-3 w-100" style={{ border: "2px solid #f5f6ff", background: "rgba(255, 255, 255,0.3)" }}>
                                            <div className="me-2">
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 22.1663V5.83301" stroke="#f5f6ff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M5.83333 13.9997L14 5.83301L22.1667 13.9997" stroke="#f5f6ff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-white fw-bold m-0 align-self-center">Transfer</p>
                                        </button>
                                        <button className="rounded-sm py-2 px-3 d-flex w-100" style={{ border: "2px solid #f5f6ff", background: "rgba(255, 255, 255,0.3)" }}>
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
                            </div>
                        </CustomLayout>
                    </div>
                    <div className="col-7">
                        <CustomLayout bg="bg-white">

                        </CustomLayout>
                    </div>
                    <div className="col-5">
                        <History />
                    </div>
                </div>
            </TemplatePage>
        </div>
    )
}

