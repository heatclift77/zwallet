const initialstate = {
    saldo : ""
}

const wallet = (state = initialstate, action) => {
    switch (action.type) {
        case "SET_WALLET":
            return {
                ...state,
                saldo: action.payload
            }
        default:
            return state
    }
}

export default wallet