import {useState} from 'react'
import CustomLayout from '../layout/CustomLayout'
import Link from 'next/link'
export default function SideNav({page}) {
    const [status, setStatus] = useState({
        active : "#6379F4",
        InActive : "#3A3D42"
    })
    return (
        <div>
            <CustomLayout
            bg="bg-white"
            >
                <div className={`d-flex mb-5 ps-4 ${page === "dashboard" || page === "history" ? "link-active" : "link-inactive"}`}>
                    <div className="me-3">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5H3.5V11.6667H11.6667V3.5Z" stroke={page === "dashboard" || page === "history" ? status.active : status.InActive} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.5 3.5H16.3333V11.6667H24.5V3.5Z" stroke={page === "dashboard" || page === "history" ? status.active : status.InActive}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.5 16.333H16.3333V24.4997H24.5V16.333Z" stroke={page === "dashboard" || page === "history" ? status.active : status.InActive}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.6667 16.333H3.5V24.4997H11.6667V16.333Z" stroke={page === "dashboard" || page === "history" ? status.active : status.InActive}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <Link href="/app/dashboard"><a className={`m-0 align-self-center ${page === "dashboard" ? "color-active" : "color-inactive"}`} onClick={(e)=>{}}>Dashboard</a></Link>
                </div>
                <div className={`d-flex mb-5 ps-4 ${page === "transfer" ? "link-active" : "link-inactive"}`}>
                    <div className="me-3">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 22.1663V5.83301" stroke={page === "transfer" ? status.active : status.InActive} stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.83333 13.9997L14 5.83301L22.1667 13.9997" stroke={page === "transfer" ? status.active : status.InActive} stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <Link href="/app/transfer"><a className={`m-0 align-self-center ${page === "transfer" ? "color-active" : "color-inactive"}`}>Transfer</a></Link>
                </div>
                <div className={`d-flex mb-5 ps-4 ${page === "topup" ? "link-active" : "link-inactive"}`}>
                    <div className="me-3">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5.83301V22.1663" stroke={page === "topup" ? status.active : status.InActive} stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.83333 14H22.1667" stroke={page === "topup" ? status.active : status.InActive} stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <Link href="/app/topup"><a className={`m-0 align-self-center ${page === "topup" ? "color-active" : "color-inactive"}`}>Top Up</a></Link>
                </div>
                <div className={`d-flex mb-5 ps-4 ${page === "profil" ? "link-active" : "link-inactive"}`}>
                    <span className={`align-self-center material-icons me-3 ${page === "profil" ? "color-active" : "color-inactive"}`}>person</span>
                    <Link href="/app/profil"><a className={`m-0 align-self-center ${page === "profil" ? "color-active" : "color-inactive"}`}>Profil</a></Link>
                </div>
            </CustomLayout>
        </div>
    )
}

