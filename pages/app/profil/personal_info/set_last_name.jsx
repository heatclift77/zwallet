import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CustomLayout, CustomInput, MainCustomBtn } from '../../../../components'
import { refresPage } from '../../../../config/redux/actions/user'
import { useRouter } from 'next/router'
import axios from 'axios'
import swal from 'sweetalert'
export default function SetLastName() {
    const router = useRouter()
    const { data } = useSelector(state=>state.users)
    const dispatch = useDispatch() 
    const [state, setState] = useState({
        correct : "#6379F4",
        inCorrect : "#DADADA",
        danger : "#f44336",
        lastName : ""
    })
    const handleLastName = (e) => {
        setState({
            ...state,
            lastName : e.target.value
        })
    }
    const handleConfirm = (e) => {
        if(state.lastName.length > 0){
            axios({
                method : "PUT",
                url : `${process.env.api}/v1/user`,
                data : {
                    update : "lastName",
                    value : state.lastName,
                    id_user : data.id_user
                }
            })
            .then(res => {
                dispatch(refresPage(res.data.data))
                swal("Berhasil", res.data.message)
                router.push('/app/profil/personal_info')
            })
        }
    }
    return (
        <CustomLayout bg="bg-white">
            <div className="px-4">
                <div className="mb-4">
                    <p className="fw-bold" style={{ color: "#000000" }}>Set Your LastName</p>
                </div>
                <div style={{maxWidth:"360px"}} className="mb-5">
                    <CustomInput type="text" icon="mode" placeholder="Write Your Lastname" color={state.lastName.length === 0 ? state.inCorrect : state.correct} onChange={handleLastName} />
                </div>
                <div className="d-flex justify-content-end">
                    <MainCustomBtn width="180px" value="Confirm" type={state.lastName.length > 0 ? "primary" : "cancel" } onClick={handleConfirm} />
                </div>
            </div>
        </CustomLayout>
    )
}