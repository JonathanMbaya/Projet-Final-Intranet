import React, { useEffect, useReducer, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { accountAuth } from "../services/Account.auth"


function BtnConnexion () {


    let navigate = useNavigate()

    const logout = () => {
        accountAuth.logout()
        navigate('/')
    }


    if (!accountAuth.isLogged) {

        return (
            
            <div className='element-Nav'>
                <button className='btn-nav-connexion'><i className="fa-solid fa-user"></i>Connexion</button>
            </div>
    
        )
        
    }

    else {

        return (
            <div className='element-Nav'>

                {

                    <Link to='/ajouter'>
                        <button className='btn-add'><i className="fa-solid fa-person-circle-plus"></i>Ajouter</button>
                    </Link>
                }



                <Link to={'/collaborateurs'}><button className='btn-nav-list btn-add'><i className="fa-solid fa-list-ul"></i>Liste</button></Link>

                <div>
                    <button onClick={logout} className='btn-nav-connexion btn-add'><i className="fa-solid fa-user"></i>Déconnexion</button>
                </div>
                

            </div>

    
        )

    }
};

export default BtnConnexion;