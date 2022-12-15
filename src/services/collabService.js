import Axios from './callerService';
import { accountAuth } from './Account.auth';


let getAllCollab = () => {

    return Axios.get(`api/collaborateurs`);
}

let getCollab = (id) => {

    return Axios.get(`/api/collaborateurs/`+id);

}

let getCollabRandom = () => {

    return Axios.get(`/api/collaborateurs/random`);

}


let getCollabEdit= () => {

    return Axios.put(`/api/collaborateurs/`+id , user);

}


let getCollabAdd= (user) => {
    return Axios.post(`/api/collaborateurs/`, user);

}



export const collabService = {
    getAllCollab, getCollab, getCollabRandom, getCollabEdit, getCollabAdd
}

