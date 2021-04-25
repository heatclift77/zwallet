import { useSelector } from 'react-redux'
import CustomLayout from '../layout/CustomLayout'
import Link from 'next/link'
export default function History() {
    const {history} = useSelector(state=>state.historys)
    return (
        <div>
            <CustomLayout bg="bg-white">
                <div className="px-4">
                    <div className="d-flex justify-content-between mb-3">
                        <p className="fw-bold" style={{ color: "#000000" }}>Transaction History</p>
                        <Link href="/app/history"><a className="color-main">See all</a></Link>
                    </div>
                    {history.map(item => {
                        return <div className="d-flex justify-content-between mb-4">
                        <div className="d-flex">
                            <img src={item.img_profil} style={{width: "60px", height:"60px"}} className="rounded-sm my-auto" />
                            <div className="ms-3 my-auto">
                                <span className="d-inline-block text-truncate" style={{ maxWidth: "80px" }}>{item.username} {item.lastName}</span>
                                <p className="m-0" style={{fontSize:"12px"}}>transfer</p>
                            </div>
                        </div>
                        <div className="my-auto">
                            <p className="text-danger fw-bold m-0">-Rp {item.amount}</p>
                        </div>
                    </div>
                    })}
                </div>
            </CustomLayout>
        </div>
    )
}
