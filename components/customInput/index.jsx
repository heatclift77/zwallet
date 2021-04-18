import { useEffect, useState } from 'react'
export default function CustomInput({placeholder, type, icon, onChange}) {
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
            <div className="d-flex" style={{color:"#DADADA", borderBottom:"3px solid #DADADA"}}>
                <span class="material-icons md-18 align-self-center">{icon}</span>
                <input type={togglePass.type} placeholder={placeholder} className="border-0 py-2 mx-3 w-100" style={{outline:"none", background:"transparent"}} onChange={onChange} />
                <div className={type == "password" ? "unHide" : "hide"}>
                    <button class="material-icons md-18 align-self-center border-0 bg-transparent" style={{color:"#DADADA"}} onClick={handleToggle} >{togglePass.type === "password"  ? togglePass.icon.on:togglePass.icon.off}</button>
                </div>
            </div>
        </div>
    )
}
