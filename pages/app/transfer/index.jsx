import { CustomLayout } from '../../../components'
import route from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reciever } from '../../../config/redux/actions/reciever'
import axios from 'axios'
export default function Transfer() {
    const {data} = useSelector(state=>state.users)
    const dispatch = useDispatch()
    const [state, setState] = useState({
        key : "",
        data : [],
        loading : false,
        message : ""
    })
    const search = () => {
        setState({...state, loading:true, message:"...loading"})
        axios.get(`${process.env.api}/v1/user/search?key=${state.key}&id_user=${data.id_user}`)
            .then(response => {
                if (response.data.data.length === 0) {
                    setState({
                        ...state,
                        data : [],
                        loading:false,
                        message:"404 not found"
                    })
                } else {
                    setState({
                        ...state,
                        data : response.data.data,
                        loading:false,
                        message:""
                    })
                }
            })
    }
    const handleClick = (e) => {
        search()
    }
    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            search()
        }
    }
    const handleChange = (e) => {
        setState({...state, key : e.target.value})
    }
    return (
        <CustomLayout bg="bg-white">
            <div className="px-4">
                <p className="mb-4 fw-bold" style={{ color: "black" }}>Search Receiver</p>
                <div className="w-100 rounded-sm bg-second d-flex p-3 mb-3 mb-lg-5">
                    <button class="border-0 bg-transparent material-icons color-second me-3" onClick={handleClick}>search</button>
                    <input type="text" className="border-0 align-self-center bg-second w-100" style={{ outline: "none" }} placeholder="Search receiver here" onChange={handleChange} onKeyUp={handleKeyUp} />
                </div>
                {state.data.map(item => {
                    return <button className="border-0 bg-transparent mb-3 w-100 p-3 rounded-md shadow-sm text-start" onClick={() => {
                        dispatch(reciever(item))
                        route.push('/app/transfer/input_amount')
                    }}>
                        <div className="d-flex">
                            <img src={item.img_profil} style={{ width: "60px", height: "60px" }} className="rounded-sm my-auto" />
                            <div className="ms-3 my-auto">
                                <span>{`${item.username}`}</span>
                                <p className="m-0" style={{ fontSize: "12px" }}>Transfer</p>
                            </div>
                        </div>
                    </button>
                })}
                <h4 className="color-second text-center my-5 fw-bold">{state.message}</h4>
            </div>
        </CustomLayout>
    )
}
