export const reciever = (data) => (dispatch) =>
    dispatch({
        type: "SET_RECIEVER",
        payload: data,
    })
