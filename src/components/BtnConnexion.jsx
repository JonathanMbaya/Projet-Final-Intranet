import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { accountAuth } from "../services/account.auth";

function BtnConnexion () {

    let navigate = useNavigate()

    const logout = () => {
        accountAuth.logout()
        navigate('/')
    }

    if (accountAuth.isLogged) {

        return (
            
            <div className='element-Nav'>
                <Link to={'/collaborateurs'}><button className='btn-nav-list'><i className="fa-solid fa-list-ul"></i>Liste</button></Link>
                

                <button onClick={logout} className='btn-nav-connexion'><i className="fa-solid fa-user"></i>Déonnexion</button>
            </div>
    

        )
    }

    else {

        return (
            
            <div className='element-Nav'>
                <button className='btn-nav-connexion'><i className="fa-solid fa-user"></i>Connexion</button>
            </div>
    

        )

    }
};

export default BtnConnexion;