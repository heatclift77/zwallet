import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="shadow-sm bg-white">
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
                                            <Image 
                                            src="/assets/profil.png"
                                            width={65}
                                            height={65}
                                            className="rounded-sm align-self-center"
                                            />
                                        <div className="align-self-center mx-4">
                                            <p className="fw-bold mb-2 fs-5" style={{color:"black"}}>Robert Chandler</p>
                                            <p className="fw-lighter mb-0">+62 8139 3877 7946</p>
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
                                        <button className="material-icons bg-transparent border-0" style={{fontSize:"32px"}}>menu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

