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

    // Requete useEffect Collaborateur Random

    useEffect(() => {   
    
        collabService.getCollabRandom()

        .then(res =>{ 
            accountAuth.getToken(res.data.token)
            console.log(res.data)
            setCard(res.data)
        })

        .catch(err => console.log(err))
  

    }, []);

   
    // Refresh le collaborateur au hasard

    const onClick = () => {

        const againCollab = () => {   
    
        
            collabService.getCollabRandom()
            .then(res =>{ 

                accountAuth.getToken(res.data.token)
                console.log(res.data)
                setCard(res.data)
            })
        
            .catch(err => console.log(err))
        
        
        }

        againCollab()

    }
     

    return (
        <div>
            
            <div id={card.id} key={card.id} className='container-fluid col-12 card'>

                <div className='service'>
                    <h5>{card.service}</h5>
                </div>

                <div className='group-info'>
                    <img className='img-fluid img-user' src={card.photo} />

                    <div>
                        <p><i class="fa-solid fa-user"></i>    {card.firstname} {card.lastname}</p>
                    </div>
                    <div>
                        <p><i className="fa-solid fa-location-dot"></i>    {card.city}, {card.country}</p>
                    </div>
                    <div>
                        <p><i className="fa-solid fa-inbox"></i>    {card.email}</p>
                    </div>
                    <div>
                        <p><i className="fa-solid fa-phone"></i>    {card.phone}</p>
                    </div>
                    <div>
                        <p><i className="fa-solid fa-cake-candles"></i>    {card.birthdate}</p>
                    </div>

                </div>

            </div>

            <div className='btn-random'>
                <Link to='/accueil'>
                    <button className='btn-add' onClick={onClick}>
                        Dire bonjour à quelqu'un d'autre
                    </button>
                </Link>
            </div>



        </div>
    );
};

export default CollabCard ;