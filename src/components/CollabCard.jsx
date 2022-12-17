import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collabService } from '../services/collabService';
import { accountAuth } from '../services/Account.auth';


import './CollabCard.css'

function CollabCard (){

       // Stocker les données dans un tableau avec useState

       const [card, setCard] = useState ({});

       const flag = useRef(false)
   
       // Fonction de chargement de la requête axios à chaque affichage de la page (useEffect) depuis le fichier request.jsx
     
       useEffect(() => {   
   
           if (flag.current === false){
   
               collabService.getCollabRandom()
               .then(res =>{ 
                   accountAuth.getToken(res.data.token)
                   console.log(res.data)
                   setCard(res.data)
               })
   
               .catch(err => console.log(err))
           }
   
           return () => flag.current = true
     
       }, []);
   


    return (
        <div>
            
            <div id={card.id} key={card.id} className='container card'>

                <div className='service'>
                    <h4>{card.service}</h4>
                </div>

                <div className='group-info'>
                    <img className='img-fluid img-user' src={card.photo} />

                    <div>
                        <h3><i class="fa-solid fa-user"></i>{card.firstname} {card.lastname}</h3>
                    </div>
                    <div>
                        <h3><i className="fa-solid fa-location-dot"></i>{card.city}, {card.country}</h3>
                    </div>
                    <div>
                        <h3><i className="fa-solid fa-inbox"></i>{card.email}</h3>
                    </div>
                    <div>
                        <h3><i className="fa-solid fa-phone"></i>{card.phone}</h3>
                    </div>
                    <div>
                        <h3><i className="fa-solid fa-cake-candles"></i>{card.birthdate}</h3>
                    </div>

                </div>

            </div>

            <div className='btn-random'>
                <Link to='/accueil'>
                    <button className='btn-add' onClick={collabService.getCollabRandom}>
                        Dire bonjour à quelqu'un d'autre
                    </button>
                </Link>
            </div>



        </div>
    );
};

export default CollabCard ;