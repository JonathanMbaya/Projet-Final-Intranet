import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CollabCard.css'

import PopUp from './PopUp';
import './PopUp.css'



function CollaboCard ({collab , index, delUser }) {

    // vérification du statut de l'utilisateur 

    const isAdmin = window.localStorage.getItem('isAdmin');

    // Pop de confirmation avant la suppression d'un collaborateur

    const [buttonPopUp , setButtonPopUp] = useState(false);

    // Carte des utilsateurs

    return (
        <div className='carto animate__animated animate__backInUp'>

            <div id={collab.id} key={index} className='list-collab col-12 card'>

            <div className='service'>
                <h5>{collab.service}</h5>
            </div>

            <div className='group-info'>
                <img className='img-fluid img-user' src={collab.photo} />
                <p><i className="fa-solid fa-user"></i> {collab.firstname} {collab.lastname} {` (${new Date().getUTCFullYear() - new Date(collab.birthdate).getFullYear()} ans)`}</p>
                <p><i className="fa-solid fa-location-dot"></i> {collab.city}, {collab.country}</p>
                <p><i className="fa-solid fa-inbox"></i> {collab.email}</p>
                <p><i className="fa-solid fa-phone"></i> {collab.phone}</p>
                <p><i className="fa-solid fa-cake-candles"></i> Anniversaire : {new Date(collab.birthdate).toLocaleDateString("fr-FR", { month: 'long', day: 'numeric' })}</p>
            </div>

            {                
                (isAdmin === 'true' &&

                    <div>
                        <Link to={`edit/${collab.id}`}><button className='btn-add'>Modifier</button></Link>
                        
                        <button onClick={() => setButtonPopUp(true)} className='btn-add'>Supprimer</button>

                        {/* onClick={delUser(collab.id)} */}

                        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                            <h4>Voulez vous vraiment supprimer ce collaborateur ? </h4>

                            { collab.isAdmin = true &&

                                <button className='btn-add' onSubmit={delUser(collab.id)}>Oui , supprimer</button>

                            }

                        </PopUp>
                    </div> 

                )

            }


            </div>
            
        </div>
    );

};

export default CollaboCard ;