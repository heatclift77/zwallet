import React from 'react'
import {CustomLayout, TemplatePage, CustomInput, MainCustomBtn} from '../components'
export default function Changepassword() {
    return (
        <div>
            <TemplatePage type="general" page="profil">
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <div className="mb-4">
                            <p className="fw-bold" style={{ color: "#000000" }}>Change Password</p>
                        </div>
                        <p className="mb-5" style={{ fontSize: "14px", maxWidth:"320px", lineHeight:"32px" }}>You must enter your current password and then type your new password twice.</p>
                        <div className="row mb-5">
                            <div className="col-6 mx-auto">
                                <div className="mb-5">
                                    <CustomInput type="password" icon="lock" placeholder="Current password" />
                                </div>
                                <div className="mb-5">
                                    <CustomInput type="password" icon="lock" placeholder="New password" />
                                </div>
                                <div className="mb-5">
                                    <CustomInput type="password" icon="lock" placeholder="Repeat new password" />
                                </div>
                                <div>
                                    <MainCustomBtn type="cancel" value="Change Password" width="100%"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomLayout>
            </TemplatePage>
        </div>
    )
}

