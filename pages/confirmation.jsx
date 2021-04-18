import { TemplatePage, CustomLayout, MainCustomBtn } from '../components'
import Modal from 'react-modal'
import {useState} from 'react'
import Image from 'next/image'
export default function Confirmation() {
    const [toggleModal,setToggleModal] = useState(false)
    const handleOpenModal = () => {
        setToggleModal(true)
    }
    const handleCloseModal = () => {
        setToggleModal(false)
    }
    return (
        <div>
            <TemplatePage page="transfer"  type="general">
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <div className="mb-5">
                            <p className="fw-bold" style={{color:"#3A3D42 !important"}}>Transfer To</p>
                            <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                                <div className="d-flex">
                                    <Image
                                        src="/assets/profil.png"
                                        width={60}
                                        height={60}
                                        className="rounded-sm my-auto"
                                    />
                                    <div className="ms-3 my-auto">
                                        <span className="fw-bold">Aditya Pratama</span>
                                        <p className="m-0" style={{ fontSize: "12px" }}>+62 813-8492-9994</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="fw-bold mb-4" style={{color:"#3A3D42 !important"}}>Details</p>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <p style={{fontSize:"12px"}}>Amount</p>
                            <span className="fs-6 fw-bold">Rp.100.000</span>
                        </div>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <p style={{fontSize:"12px"}}>Balance</p>
                            <span className="fs-6 fw-bold">Rp.20.000</span>
                        </div>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <p style={{fontSize:"12px"}}>Date & time</p>
                            <span className="fs-6 fw-bold">May 11, 2020 - 12.20</span>
                        </div>
                        <div className="mb-3 w-100 p-3 rounded-md shadow-sm text-start">
                            <p style={{fontSize:"12px"}}>Notes</p>
                            <span className="fs-6 fw-bold">For buying some socks</span>
                        </div>
                        <div className="mb-3 w-100 p-3 d-flex justify-content-end">
                            <div>
                                <MainCustomBtn type="primary" value="Confirm" width="150px" onClick={handleOpenModal}  />
                            </div>
                        </div>
                    </div>
                </CustomLayout>
            </TemplatePage>
            <Modal
            isOpen={toggleModal}
            className="modalSize"
            overlayClassName="overlayConfig"
            closeTimeoutMS={400}
            >
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <div className="d-flex justify-content-between mb-3">
                            <p className="fw-bold fs-6" style={{color:"#3A3D42"}}>Enter PIN to Transfer</p>
                            <button className="bg-transparent border-0" onClick={handleCloseModal}>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 7L7 21" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 7L21 21" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="mb-5">
                            <p style={{fontSize:"14px", maxWidth:"300px", lineHeight:"26px"}}>Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                        </div>
                        <div className="d-flex justify-content-between mb-5">
                            <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                            <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                            <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                            <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                            <input type="text" className="py-4 px-3 me-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                            <input type="text" className="py-4 px-3 border rounded-sm" style={{width:"50px", outline:"none"}} />
                        </div>
                        <div className="w-100 d-flex justify-content-end">
                            <MainCustomBtn type="primary" value="Continue" width="140px" />
                        </div>
                    </div>
                </CustomLayout>
            </Modal>
        </div>
    )
}

