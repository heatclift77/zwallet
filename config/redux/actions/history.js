export const history = (data) => (dispatch) =>
    dispatch({
        type: "SET_HISTORY",
        payload: data,
    })
