import {useState} from 'react'
export default function MainCustomBtn({value, type, width, onClick}) {
    const [button, setButton] = useState({
        type : {
            primary : "bg-main text-white fw-bold rounded-sm border-0 p-3",
            cancel : "bg-second color-second fw-bold rounded-sm border-0 p-3",
        }
    })
    return (
        <div>
            <button className={ type == "primary" ? button.type.primary : button.type.cancel } style={{width:width}} onClick={onClick}>{value}</button>
        </div>
    )
}
