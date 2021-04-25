const initialstate = {
    data: {
        id_user: "",
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phoneNumber: "",
        id_wallet: "",
        img_profil: ""
    },
    loading: false,
    error: ''
}

const reciever = (state = initialstate, action) => {
    switch (action.type) {
        case "SET_RECIEVER":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default reciever

