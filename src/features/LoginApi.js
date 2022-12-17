import Axios from "../services/callerService"


function LoginApi() {

    return Axios.post('/api/login', identify)

    .then(res => res.json())
    .then(posts => {
      resolve ({data: posts});
    })

}

export default LoginApi