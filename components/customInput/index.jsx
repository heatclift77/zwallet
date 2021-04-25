import { useEffect, useState } from 'react'
export default function CustomInput({placeholder, type, icon, onChange, color, ...rest}) {
    const [togglePass, setTogglePass] = useState({
        icon : {
            on : "visibility",
            off : "visibility_off"
        },
        type : type
    })
    const handleToggle = (e) => {
        if(togglePass.type == "password"){
            setTogglePass({
                ...togglePass,
                type : "text"
            })
        }else{
            setTogglePass({
                ...togglePass,
                type : "password"
            })
        }
    } 
    return (
        <div>
            <div className="d-flex" style={{color:color, borderBottom:`3px solid ${color}`, transition:"all ease-in-out 0.2s"}}>
                <span class="material-icons md-18 align-self-center">{icon}</span>
                <input type={togglePass.type} placeholder={placeholder} className="border-0 py-2 mx-3 w-100" style={{outline:"none", background:"transparent"}} onChange={onChange} {...rest} />
                <div className={type == "password" ? "unHide" : "hide"}>
                    <div class="material-icons md-18 align-self-center c-pointer" style={{color:"#DADADA"}} onClick={handleToggle} >{togglePass.type === "text"  ? togglePass.icon.on:togglePass.icon.off}</div>
                </div>
            </div>
        </div>
    )
}
