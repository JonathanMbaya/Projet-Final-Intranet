import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCollab } from '../services/request';


import './ListCollab.css'

 function ListCollab () {

        // Stocker les données dans un tableau avec useState

        const [collabs, setCollab] = useState ([]);

        // Fonction de chargement de la requête axios à chaque affichage de la page (useEffect) depuis le fichier request.jsx
  
      useEffect(() => {   
          async function getRecetteLoad(){
              const collabs = await getCollab();
              setCollab(collabs);
          }
  
          getRecetteLoad();
  
      }, []);

    return (
        <div className='col-12'>

            <div>

                <Link to={'/accueil'}><p><i class="fa-solid fa-house"></i> Retourner à la page d'accueil</p></Link>
                
            </div>

            <h1>Liste des collaborateurs</h1>

            {collabs.map((collab) =>
            
            <div className='list-collab'>

                <img className='img-fluid col-md-1' src={collab.photo} />

                <div className='col-md-3'>
                    <h3><i className="fa-solid fa-user"></i>{collab.firstname} {collab.lastname}</h3>
                    <h3><i className="fa-solid fa-location-dot"></i>{collab.city}, {collab.country}</h3>
                    <h3><i className="fa-solid fa-inbox"></i>{collab.email}</h3>
                    <h3><i className="fa-solid fa-phone"></i>{collab.phone}</h3>
                    <h3><i className="fa-solid fa-cake-candles"></i>Anniversaire : {collab.birthdate}</h3>
                </div>

            </div>

            )}
            
        </div>
    );
};

export default ListCollab;


