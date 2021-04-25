import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { CustomLayout, MainCustomBtn, CustomInput } from '../../../../components'
import { refresPage } from '../../../../config/redux/actions/user'
import axios from 'axios'
import swal from 'sweetalert'
import {useRouter} from 'next/router'
export default function Addphonenumber() {
    const disptach = useDispatch()
    const router = useRouter()
    const {data} = useSelector(state=>state.users)
    const [state, setState] = useState({
        correct : "#6379F4",
        inCorrect : "#DADADA",
        danger : "#f44336",
        phoneNumber : "",
    })
    const handleClick = () => {
        if(state.phoneNumber.length > 0){
            axios({
                method : "PUT",
                url : `${process.env.api}/v1/user`,
                data : {
                    update : "phoneNumber",
                    value : state.phoneNumber,
                    id_user : data.id_user
                }
            })
            .then(res => {
                disptach(refresPage(res.data.data))
                swal("Berhasil", res.data.message)
                router.push('/app/profil/personal_info')
            })
        }
    }
    return (
        <div>
            <CustomLayout bg="bg-white">
                <div className="px-4">
                    <div className="mb-4">
                        <p className="fw-bold" style={{ color: "#000000" }}>Add Phone Number</p>
                    </div>
                    <p className="mb-5" style={{ fontSize: "14px", maxWidth: "320px", lineHeight: "32px" }}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                    <div className="row mb-5">
                        <div className="col-6 mx-auto">
                            <div className="mb-5">
                                <CustomInput type="number" icon="smartphone" placeholder="+62 Enter your phone number" color={state.phoneNumber.length === 0 ? state.inCorrect : state.correct} onChange={(e)=>setState({...state, phoneNumber:e.target.value})}  />
                            </div>
                            <MainCustomBtn type={state.phoneNumber.length > 0 ? "primary" : "cancel" } value="Confirm" width="100%" onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </CustomLayout>
        </div>
    )
}
