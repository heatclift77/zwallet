export const wallet = (data) => (dispatch) =>
    dispatch({
        type: "SET_WALLET",
        payload: data,
    })
