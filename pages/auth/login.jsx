import Head from 'next/head'
import Link from 'next/link'
import {Auth, CustomInput, MainCustomBtn} from '../../components'
export default function login() {
    return (
        <div>
            <Auth>
                <div className="mb-5">
                    <h3 className="fw-bold mb-5">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
                    <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                </div>
                <div>
                    <div className="my-5">
                        <CustomInput
                            placeholder="Enter your e-mail"
                            type="text"
                            icon="email"
                        />
                    </div>
                    <div className="my-5">
                        <CustomInput
                            placeholder="Create Your Password"
                            type="password"
                            icon="lock"
                        />
                    </div>
                </div>
                <div className="w-100 d-flex">
                    <div className="ms-auto">
                        <Link href="/" ><a className="fw-bold link">Forgot Password</a></Link>
                    </div>
                </div>
                <div className="my-5">
                    <MainCustomBtn 
                    type="cancel"
                    value="Login"
                    width="100%"
                    />
                </div>
            </Auth>
        </div>
    )
}
