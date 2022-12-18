import Axios from "./callerService"

let login = (identify) => {
    return Axios.post('/api/login', identify)
}


let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('isAdmin')
    localStorage.removeItem('photo')
    localStorage.removeItem('firsname')
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