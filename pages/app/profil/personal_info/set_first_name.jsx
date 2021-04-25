import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CustomLayout, CustomInput, MainCustomBtn } from '../../../../components'
import { refresPage } from '../../../../config/redux/actions/user'
import { useRouter } from 'next/router'
import axios from 'axios'
import swal from 'sweetalert'
export default function SetFirstName() {
    const router = useRouter()
    const { data } = useSelector(state=>state.users)
    const dispatch = useDispatch() 
    const [state, setState] = useState({
        correct : "#6379F4",
        inCorrect : "#DADADA",
        danger : "#f44336",
        firstName : "",
    })
    const handleFirstName = (e) => {
        setState({
            ...state,
            firstName : e.target.value
        })
    }
    const handleConfirm = (e) => {
        if(state.firstName.length > 0){
            axios({
                method : "PUT",
                url : `${process.env.api}/v1/user`,
                data : {
                    update : "firstName",
                    value : state.firstName,
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
                    <p className="fw-bold" style={{ color: "#000000" }}>Set Your FirstName</p>
                </div>
                <div style={{maxWidth:"360px"}} className="mb-5">
                    <CustomInput type="text" icon="mode" placeholder="Write Your Firstname" color={state.firstName.length === 0 ? state.inCorrect : state.correct} onChange={handleFirstName} />
                </div>
                <div className="d-flex justify-content-end">
                    <MainCustomBtn width="180px" value="Confirm" type={state.firstName.length > 0 ? "primary" : "cancel" } onClick={handleConfirm} />
                </div>
            </div>
        </CustomLayout>
    )
}