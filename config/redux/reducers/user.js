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

const user = (state = initialstate, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                data: action.payload
            }
        case "LOGIN_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case "LOGIN_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "REQUEST_USER":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default user

