import axios from 'axios'
import Cookies from 'js-cookie'
const loginRequest = () => {
    return { type: 'LOGIN_REQUEST' }
}
const loginSuccess = (dataUser) => {
    return { type: 'LOGIN_SUCCESS', payload: dataUser }
}
const loginFailure = (error) => {
    return { type: 'LOGIN_ERROR', payload: error }
}

export const register = (data) => (dispatch) =>
    dispatch({
        type: "REGISTER",
        payload: data,
    })
export const signin = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loginRequest())
        axios({
            method: "POST",
            url: `${process.env.api}/v1/user/login`,
            headers: { 'content-type': 'application/json' },
            data: data,
            withCredentials : true
        })
        .then((res) => {
            const dataUser = res.data
            dispatch(loginSuccess(dataUser))
            Cookies.set("token", dataUser.token, { expires: 1 })
            resolve(dataUser)
        })
        .catch((err) => {
            if(err.message == "Network Error"){
                reject({
                    message : err.message
                })
            }else{
                reject({
                    message : err.response.data.message
                })
            }
        })
    })
}

export const refresPage = (data) => (dispatch) =>
    dispatch({
        type: "REQUEST_USER",
        payload: data,
    })
