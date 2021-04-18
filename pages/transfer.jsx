import { TemplatePage, CustomLayout } from '../components'
import Image from 'next/Image'
import route from 'next/router'
import {useState} from 'react'
import axios from 'axios'
export default function Transfer() {
    const [key, setKey] = useState('')
    const [data, setData] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const search = () => {
        axios.get(`${process.env.api}/v1/user/search?key=${key}`)
            .then(response => {
                if(response.data.data.length === 0){
                    setData([])
                    setErrorMessage("data tidak ditemukan")
                }else{
                    setData(response.data.data)
                    setErrorMessage("")
                }
            })
    }
    const handleClick = (e) => {
        search()
    }
    const handleKeyUp = (e) => {
        if(e.keyCode === 13){
            search()
        }
    }
    const handleChange = (e) =>{
        setKey(e.target.value)
    }
    return (
        <div>
            <TemplatePage
                page="transfer"
                type="general"
            >
                <CustomLayout bg="bg-white">
                    <div className="px-4">
                        <p className="mb-4 fw-bold" style={{ color: "black" }}>Search Receiver</p>
                        <div className="w-100 rounded-sm bg-second d-flex p-3 mb-5">
                            <button class="border-0 bg-transparent material-icons color-second me-3" onClick={handleClick}>search</button>
                            <input type="text" className="border-0 align-self-center bg-second w-100" style={{ outline: "none" }} placeholder="Search receiver here" onChange={handleChange} onKeyUp={handleKeyUp} />
                        </div>
                        {data.map(item => {
                            return  <button className="border-0 bg-transparent mb-3 w-100 p-3 rounded-md shadow-sm text-start" onClick={()=>{
                                localStorage.setItem('img', item.img_profil)
                                localStorage.setItem('name', `${item.firstName} ${item.lastName}`)
                                localStorage.setItem('id_user', item.id_user)
                                localStorage.setItem('id_wallet', item.id_wallet)
                                route.push('/inputamount')
                            }}>
                            <div className="d-flex">
                                <img src={item.img_profil} style={{width:"60px", height:"60px"}} className="rounded-sm my-auto" />
                                <div className="ms-3 my-auto">
                                    <span>{`${item.firstName} ${item.lastName}`}</span>
                                    <p className="m-0" style={{ fontSize: "12px" }}>Transfer</p>
                                </div>
                            </div>
                        </button>
                        })}
                        <h4 className="color-second text-center my-5 fw-bold">{errorMessage}</h4>
                    </div>
                </CustomLayout>
            </TemplatePage>
        </div>
    )
}
