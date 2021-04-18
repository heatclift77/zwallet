import React from 'react'
import {CustomLayout, TemplatePage, MainCustomBtn} from '../components'
export default function Changepin() {
    return (
        <div>
            <TemplatePage type="general" page="profil">
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <div className="mb-4">
                            <p className="fw-bold" style={{ color: "#000000" }}>Change Pin</p>
                        </div>
                        <p className="mb-5" style={{ fontSize: "14px", maxWidth:"320px", lineHeight:"32px" }}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
                        <div className="row mb-5">
                            <div className="col-6 mx-auto">
                                <div className="d-flex justify-content-between mb-5">
                                    <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                                    <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                                    <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                                    <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                                    <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                                    <input type="text" className="py-4 px-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                                </div>
                                <MainCustomBtn type="primary" value="Confirm" width="100%" />
                            </div>
                        </div>
                    </div>
                </CustomLayout>
            </TemplatePage>
        </div>
    )
}