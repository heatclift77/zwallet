const initialstate = {
    history : []
}

const history = (state = initialstate, action) => {
    switch (action.type) {
        case "SET_HISTORY":
            return {
                ...state,
                history: action.payload
            }
        default:
            return state
    }
}

export default history