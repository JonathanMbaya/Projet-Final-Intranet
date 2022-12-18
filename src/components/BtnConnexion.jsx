import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { accountAuth } from "../services/Account.auth"



// Bouton de déconnexion avec contion d'affichage du bouton d'ajout

function BtnConnexion () {

    // vérification du statut de l'utilisateur 

    const isAdmin = window.localStorage.getItem('isAdmin');

    let navigate = useNavigate()

    // Action de déconnection onClick

    const logout = () => {
        accountAuth.logout()
        navigate('/')
    }


    // Condition d'affichage 
    
    if (isAdmin === 'false' ) {

        return (
            
            <div className='element-Nav'>
                
                <Link to={'/collaborateurs'}><button className='btn-nav-list btn-add'><i className="fa-solid fa-list-ul"></i>Liste</button></Link>

                <button onClick={logout} className='btn-nav-connexion btn-add'><i className="fa-solid fa-user"></i>Déconnexion</button>
            </div>
    
        )

    }

    else {

        return (

           <div>
                {
                    (isAdmin === 'true' &&
                        
                    <div className='element-Nav'>

                        <Link to='/ajouter'>
                            <button className='btn-add'><i className="fa-solid fa-person-circle-plus"></i>Ajouter</button>
                        </Link>



                        <Link to={'/collaborateurs'}><button className='btn-nav-list btn-add'><i className="fa-solid fa-list-ul"></i>Liste</button></Link>

                        <button onClick={logout} className='btn-nav-connexion btn-add'><i className="fa-solid fa-user"></i>Déconnexion</button>
            
                        
                    </div>

                    )
                }

            </div>

        )

    }
};

export default BtnConnexion;