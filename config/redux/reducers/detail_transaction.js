const initalstate = {
    data : {
        id_reciever : "",
        img_profil  : "",
        phoneNumber : "",
        amount : "",
        sisaSaldo : "",
        tgl : "",
        notes : ""
    }
}

const detail_transaction = (state = initalstate, action) => {
    switch (action.type) {
        case "SET_INFORMATION":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default detail_transaction