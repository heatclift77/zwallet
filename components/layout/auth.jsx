import React from 'react'
import Image from 'next/image'
import style from './auth.module.css'
export default function Auth({children}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-7 position-relative" style={{ background: "#6379F4" , height:"100vh"}}>
                    <div className="position-absolute" style={{ top: "90px", left: "0px" }}>
                        <Image
                            src="/assets/vector.png"
                            width={890}
                            height={538}
                        />
                    </div>
                    <div className="row">
                        <div className="col-8 mx-auto" >
                            <div className="pt-5">
                                <h2 className="text-white fw-bold">Zwallet</h2>
                            </div>
                            <div className="position-relative">
                                <Image
                                    src="/assets/phone2.png"
                                    width={295}
                                    height={470}
                                />
                                <div className="position-absolute top-0" style={{ left: "140px" }}>
                                    <Image
                                        src="/assets/phone.png"
                                        width={295}
                                        height={470}
                                    />
                                </div>
                            </div>
                            <div className="my-4 text-center text-lg-start">
                                <div>
                                    <h3 className="text-white fw-bold">App that Covering Banking Needs.</h3>
                                    <p className="text-white my-4 fw-light">Zwallet is an application that focussing in banking needs for all users
                                    in the world. Always updated and always following world trends.
                                    5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4" style={{ height:"100vh"}}>
                    <div className="d-flex flex-column">
                        <div className="align-self-center py-5 ps-5 pe-5 pe-lg-0 ps-lg-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
