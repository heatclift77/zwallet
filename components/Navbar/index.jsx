import { useSelector } from 'react-redux'
import Link from 'next/link'
import {useState} from 'react'
export default function Navbar({page}) {
    const { data } = useSelector(state=>state.users)
    const [status, setStatus] = useState({
        active : "#6379F4",
        InActive : "#3A3D42",
        navbar : false
    })
    const openNav = () => {
        if(status.navbar == false){
            setStatus({...status, navbar : true})
        }
    }
    const closeNav = () => {
        if(status.navbar){
            setStatus({...status, navbar : false})
        }
    }
    return (
        <nav className="shadow-sm bg-white position-relative" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto py-4">
                        <div className="row">
                            <div className="col-4 d-flex">
                                <h2 className="color-main fw-bold align-self-center">Zwallet</h2>
                            </div>
                            {/* nav desk */}
                            <div className="col-6 ms-auto">
                                <div className="hide show-lg">
                                    <div className="d-flex justify-content-end">
                                            <img src={data.img_profil} style={{width:"60px", height:"60px"}} className="rounded-sm" />
                                        <div className="align-self-center mx-4">
                                            <p className="fw-bold mb-2 fs-5" style={{color:"black"}}>{data.username}</p>
                                            <p className="fw-lighter mb-0">{data.phoneNumber}</p>
                                        </div>
                                        <button className="align-self-center bg-transparent border-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                            height="32px" 
                                            width="32px"
                                            viewBox="0 0 24 24" 
                                            fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/>
                                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                {/* toggle nav */}
                                <div className="hide-lg">
                                    <div className="d-flex justify-content-end">
                                        <button className="material-icons bg-transparent border-0" style={{fontSize:"32px"}} onClick={openNav}>menu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:"100vw", height:"100vh", position:"fixed", top:0, right:0, background:"rgba(0,0,0,0.4)", zIndex:999}} className={status.navbar == true ? "show" : "hide"} onClick={closeNav} >

            </div>
            <div style={{width:"60%", height:"100vh", position:"fixed", top:0, background:"white", transition:"all ease-in-out 0.4s", zIndex:9999}} className={status.navbar == true ? "navbarShow" : "navbarHide"} >
                <div className="row my-5">
                    <div className="col-12">
                        <div className="d-flex justify-content-end me-4">
                            <button className="material-icons bg-transparent border-0"  onClick={closeNav}>clear</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 py-3">
                        <div className="d-flex ms-4">
                            <div className="me-3">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6667 3.5H3.5V11.6667H11.6667V3.5Z" stroke={page === "dashboard" ? status.active : status.InActive} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.5 3.5H16.3333V11.6667H24.5V3.5Z" stroke={page === "dashboard" ? status.active : status.InActive}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.5 16.333H16.3333V24.4997H24.5V16.333Z" stroke={page === "dashboard" ? status.active : status.InActive}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.6667 16.333H3.5V24.4997H11.6667V16.333Z" stroke={page === "dashboard" ? status.active : status.InActive}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Link href="/app/dashboard"><a className="my-auto">Dasboard</a></Link>
                        </div>
                    </div>
                    <div className="col-12 py-3">
                        <div className="d-flex ms-4">
                            <div className="me-3">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 22.1663V5.83301" stroke={page === "transfer" ? status.active : status.InActive} stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.83333 13.9997L14 5.83301L22.1667 13.9997" stroke={page === "transfer" ? status.active : status.InActive} stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Link href="/app/transfer"><a className="my-auto">transfer</a></Link>
                        </div>
                    </div>
                    <div className="col-12 py-3">
                        <div className="d-flex ms-4">
                            <div className="me-3">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5.83301V22.1663" stroke={page === "topup" ? status.active : status.InActive} stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.83333 14H22.1667" stroke={page === "topup" ? status.active : status.InActive} stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Link href="/app/topup"><a className="my-auto">Top Up</a></Link>
                        </div>
                    </div>
                    <div className="col-12 py-3">
                        <div className="d-flex ms-4">
                            <span className={`align-self-center material-icons me-3 ${page === "profil" ? "color-active" : "color-inactive"}`}>person</span>
                            <Link href="/app/profil"><a className="my-auto">Profil</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

