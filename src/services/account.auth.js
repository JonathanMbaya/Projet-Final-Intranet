import Axios from "./callerService"

let login = (identify) => {
    return Axios.post('/api/login', identify)
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return token
}

let getToken = () => {
    return localStorage.getItem('token')
}


export const accountAuth = {
    login, saveToken, logout, isLogged, getToken
}