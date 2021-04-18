import React from 'react'
import {CustomLayout, TemplatePage, MainCustomBtn, CustomInput} from '../components'
export default function Addphonenumber() {
    return (
        <div>
            <TemplatePage type="general" page="profil">
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <div className="mb-4">
                            <p className="fw-bold" style={{ color: "#000000" }}>Add Phone Number</p>
                        </div>
                        <p className="mb-5" style={{ fontSize: "14px", maxWidth:"320px", lineHeight:"32px" }}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                        <div className="row mb-5">
                            <div className="col-6 mx-auto">
                                <div className="mb-5">
                                    <CustomInput type="text" icon="smartphone" placeholder="+62 Enter your phone number" />
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
