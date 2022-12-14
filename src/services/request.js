import axios from 'axios';

const API_URL = `http://127.0.0.1:5173/src/server-json/data/collaborateurs.json`;


export async function getCollab (){
    try{
        const {data} = await axios.get(`${API_URL}`);
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);
    }
}

