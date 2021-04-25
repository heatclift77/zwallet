import { Navbar, Footer, SideNav } from '../../components'
import { useDispatch } from 'react-redux'
import { refresPage } from '../../config/redux/actions/user'
import { history } from '../../config/redux/actions/history'
import {wallet} from '../../config/redux/actions/wallet'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'
export default function TemplatePage({ page, children }) {
    const router = useRouter()
    const dispatch = useDispatch()
    const token = Cookies.get("token")
    useEffect(() => {
        if (token == undefined) {
            router.push("/")
        } else {
            axios.get(`${process.env.api}/v1/user/cekToken?token=${token}`)
                .then(response => {
                    dispatch(refresPage(response.data.data))
                    axios.get(`${process.env.api}/v1/user/saldo?email=${response.data.data.email}`)
                        .then(response => {
                            dispatch(wallet(response.data.saldo))
                    })
                    axios.get(`${process.env.api}/v1/transactions?id_user=${response.data.data.id_user}&limit=2`)
                        .then(response => {
                            dispatch(history(response.data.data))
                    })
                })
                .catch(err => {
                    Cookies.remove("token")
                    router.push("/")
                })
        }
    }, [token])
    return (
        <div>
            <Navbar 
            page={page}
            />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row h-100">
                            <div className="col-3 hide show-lg">
                                <div className="my-5 h-100">
                                    <SideNav
                                        page={page}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-9">
                                <div className="my-5">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

