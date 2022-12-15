import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import FilterCollab from '../components/FilterCollab';
import { collabService } from '../services/collabService';

import './ListCollab.css'
import { accountAuth } from '../services/Account.auth';


 function ListCollab () {

    // Stocker les données dans un tableau avec useState

     const [collabs, setCollab] = useState ([]);
    const flag = useRef(false)

    // Fonction de chargement de la requête axios à chaque affichage de la page (useEffect) depuis le fichier request.jsx
  
    useEffect(() => {   

        if (flag.current === false){

            collabService.getAllCollab()
            .then(res =>{ 
                accountAuth.getToken(res.data.token)
                console.log(res.data)
                setCollab(res.data)
            })

            .catch(err => console.log(err))
        }

        return () => flag.current = true
  
    }, []);

    return (
        <div className='col-12'>

            <Header/>

            <div>

                <Link to={'/accueil'}><p><i class="fa-solid fa-house"></i> Retourner à la page d'accueil</p></Link>
                
            </div>

            <h1>Liste des collaborateurs</h1>

            <FilterCollab/>

            {collabs.map((collab) =>
            
            <div id={collab.id} key={collab.id} className='list-collab'>

                <img className='img-fluid col-md-1' src={collab.photo} />

                <div className='col-md-3'>
                    <h3><i className="fa-solid fa-user"></i>{collab.firstname} {collab.lastname}</h3>
                    <h3><i className="fa-solid fa-location-dot"></i>{collab.city}, {collab.country}</h3>
                    <h3><i className="fa-solid fa-inbox"></i>{collab.email}</h3>
                    <h3><i className="fa-solid fa-phone"></i>{collab.phone}</h3>
                    <h3><i className="fa-solid fa-cake-candles"></i>Anniversaire : {collab.birthdate}</h3>
                </div>

                <div>
                    <Link to={`edit/${collab.id}`}><button>Modifier</button></Link>
                    <Link><button id={collab.id}>Supprimer</button></Link>
                </div>

            </div>

            )}
            
        </div>
    );
};

export default ListCollab;


