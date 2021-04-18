import React from 'react'
import CustomLayout from '../layout/CustomLayout'
import Link from 'next/link'
import Image from 'next/image'
export default function History() {
    return (
        <div>
            <CustomLayout bg="bg-white">
                <div className="px-4">
                    <div className="d-flex justify-content-between mb-3">
                        <p className="fw-bold" style={{ color: "#000000" }}>Transaction History</p>
                        <Link href="/dashboard"><a className="color-main">See all</a></Link>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <div className="d-flex">
                            <Image
                                src="/assets/profil.png"
                                width={60}
                                height={60}
                                className="rounded-sm my-auto"
                            />
                            <div className="ms-3 my-auto">
                                <span className="d-inline-block text-truncate" style={{ maxWidth: "80px" }}>Aditya Pratama</span>
                                <p className="m-0" style={{fontSize:"12px"}}>transfer</p>
                            </div>
                        </div>
                        <div className="my-auto">
                            <p className="text-danger fw-bold m-0">-Rp.150.000</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <Image
                                src="/assets/profil.png"
                                width={60}
                                height={60}
                                className="rounded-sm my-auto"
                            />
                            <div className="ms-3 my-auto">
                                <span className="d-inline-block text-truncate" style={{ maxWidth: "80px" }}>Aditya Pratama</span>
                                <p className="m-0" style={{fontSize:"12px"}}>transfer</p>
                            </div>
                        </div>
                        <div className="my-auto">
                            <p className="text-danger fw-bold m-0">-Rp.150.000</p>
                        </div>
                    </div>
                </div>
            </CustomLayout>
        </div>
    )
}
