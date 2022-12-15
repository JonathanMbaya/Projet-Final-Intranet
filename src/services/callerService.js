import axios from "axios";
import { accountAuth } from "./Account.auth";

    const Axios = axios.create({
        baseURL : 'http://localhost:7000/'
    })

    // Intercepteur pour le token
    Axios.interceptors.request.use(request => {
        if (accountAuth.isLogged()){
            request.headers.Accept = "application/json"
            request.headers.Authorization = `Bearer ${accountAuth.getToken()}`
        }
        
        return request
    })

export default Axios