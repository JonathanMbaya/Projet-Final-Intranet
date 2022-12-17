import Axios from './callerService';


let getAllCollab = () => {
    return Axios.get(`api/collaborateurs`);
}

let getCollab = (id) => {

    return Axios.get(`/api/collaborateurs/`+id);

}

let getCollabRandom = () => {

    return Axios.get(`/api/collaborateurs/random`);

}


let getCollabEdit= (user, id) => {

    return Axios.put(`/api/collaborateurs/`+id , user );

}


let getCollabAdd= (user) => {
    return Axios.post(`/api/collaborateurs`, user);

}


let deleteUser = (id) => {
    return Axios.delete(`/api/collaborateurs/`+id);
}



export const collabService = {
    getAllCollab, getCollab, getCollabRandom, getCollabEdit, getCollabAdd, deleteUser
}

