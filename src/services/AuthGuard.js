import React from 'react';
import { useNavigate } from 'react-router-dom';
import { accountAuth } from './Account.auth';

function AuthGuard ({children}) {

    let navigate = useNavigate()

    if(window.localStorage.getItem("token") === ''){
        return navigate('*')
    }
    
    return  children
};

export default AuthGuard;