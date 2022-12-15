import React from 'react';
import { useNavigate } from 'react-router-dom';
import { accountAuth } from './Account.auth';

function AuthGuard ({children}) {

    let navigate = useNavigate()

    if(!accountAuth.isLogged()){
        return navigate('/login')
    }
    
    return  children
};

export default AuthGuard;