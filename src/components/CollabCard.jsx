import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
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
            
            <div id={card.id} key={card.id} className='container list-card'>

                <img className='img-fluid' src={card.photo} />

                <div className='group-info'>
                    <h3>{card.firstname} {card.lastname}</h3>
                    <h3>{card.city}, {card.country}</h3>
                    <h3>{card.email}</h3>
                    <h3>{card.phone}</h3>
                    <h3>{card.email}</h3>
                    <h3>{card.birthdate}</h3>

                </div>

            </div>

            <button onClick={collabService.getCollabRandom}>
                Dire bonjour à quelqu'un d'autre
            </button>


        </div>
    );
};

export default CollabCard ;