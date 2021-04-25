import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CustomLayout } from '../../../components'
import axios from 'axios'
import { useRouter } from 'next/router'
export default function History() {
    const router = useRouter()
    const { history } = useSelector(state => state.historys)
    const {data} = useSelector(state=>state.users)
    const [state, setState] = useState({
        data : history,
        loading : false,
        page : 1,
        limit : 4,
        sort:""
    })
    const handleSort = (e) => {
        setState({...state,loading: true})
        axios.get(`${process.env.api}/v1/transactions?id_user=${data.id_user}&limit=${state.limit}&sort=${e.target.value}&page=${state.page}`)
        .then(res=> {
            setState({...state, sort:e.target.value, data : res.data.data, loading:false})
        })
    }
    const handleNextPage = () => {
        setState({...state, loading: true})
        axios.get(`${process.env.api}/v1/transactions?id_user=${data.id_user}&limit=${state.limit}&sort=${state.sort}&page=${state.page + 1}`)
        .then(res=> {
            if(res.data.data.length == 0){
                setState({...state, loading:false})
            }else{
                setState({...state, data : res.data.data, loading:false, page: state.page + 1})
            }
        })
    }
    const handlePreviousPage = () => {
        if(state.page !== 1){
            setState({...state, loading: true})
            axios.get(`${process.env.api}/v1/transactions?id_user=${data.id_user}&limit=${state.limit}&sort=${state.sort}&page=${state.page - 1}`)
            .then(res=> {
                setState({...state, data : res.data.data, loading:false, page : state.page - 1})
            })
        }
    }
    return (
        <div>
            <CustomLayout bg="bg-white">
                <div className="px-4">
                    <div className="mb-3">
                        <p className="fw-bold" style={{ color: "#000000" }}>Transaction History</p>
                    </div>
                    <select class="form-select mb-3" style={{maxWidth:"160px"}} aria-label="Default select example" onChange={handleSort}>
                        <option selected>Sort</option>
                        <option value="today">Today</option>
                        <option value="thisWeek">This Week</option>
                        <option value="thisMonth">This Month</option>
                    </select>
                    <div className={state.loading == true ? "d-flex justify-content-center" : "hide"}>
                        <div className="spinner-border text-primary my-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    {state.data.map(item => {
                        return <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex">
                                <img src={item.img_profil} style={{ width: "60px", height: "60px" }} className="rounded-sm my-auto" />
                                <div className="ms-3 my-auto">
                                    <span className="" style={{ maxWidth: "80px" }}>{item.username}</span>
                                    <p className="m-0" style={{ fontSize: "12px" }}>transfer</p>
                                </div>
                            </div>
                            <div className="my-auto d-flex">
                                <p className="text-danger fw-bold m-0 align-self-center me-3">Rp {item.amount}</p>
                                <button className="btn-details-history" onClick={()=>{router.push(`/app/history/${item.id_transaction}`)}}>Details</button>
                            </div>
                        </div>
                    })}
                    <div className="d-flex justify-content-center">
                        <div>
                            <button className="material-icons color-main rounded-sm p-2 bg-transparent me-4"  style={{border:"3px solid #6379F4"}} onClick={handlePreviousPage} >arrow_back_ios</button>
                            <button className="material-icons color-main rounded-sm p-2 bg-transparent"  style={{border:"3px solid #6379F4"}} onClick={handleNextPage} >arrow_forward_ios</button>
                        </div>
                    </div>
                </div>
            </CustomLayout>
        </div>
    )
}
