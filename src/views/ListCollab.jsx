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

    const delUser = (id) => {
        console.log(id)
        collabService.deleteUser(id)
        .then(res =>{
            accountAuth.getToken(res.token)
            console.log(res)
            setCollab(collabs.filter(collab => collab.id != id))
        })
        .catch(err => console.log(err))


    }

    return (
        <div className='list col-12'>

            <Header/>

            <div className='container-fluid'>

                <h1>Liste des collaborateurs</h1>

                <FilterCollab/>

                <div className='container row list-collab-all col-md-12 col-sm-12 col-12 offset-md-1'>
                    {collabs.map((collab) =>
                    
                    <div id={collab.id} key={collab.id} className='list-collab col-md-4 offset-md-2'>

                        <div className='service'>
                            <h4>{collab.service}</h4>
                        </div>

                        <div className='group-info'>
                            <img className='img-fluid img-user' src={collab.photo} />
                            <h4><i className="fa-solid fa-user"></i> {collab.firstname} {collab.lastname}</h4>
                            <h4><i className="fa-solid fa-location-dot"></i> {collab.city}, {collab.country}</h4>
                            <h4><i className="fa-solid fa-inbox"></i> {collab.email}</h4>
                            <h4><i className="fa-solid fa-phone"></i> {collab.phone}</h4>
                            <h4><i className="fa-solid fa-cake-candles"></i> Anniversaire : {collab.birthdate}</h4>
                        </div>

                        {

                            <div>
                                <Link to={`edit/${collab.id}`}><button className='btn-add'>Modifier</button></Link>
                                <button onClick={delUser(collab.id)} className='btn-add'>Supprimer</button>
                            </div>
                        }



                    </div>

                    )}

                </div>

            </div>




            
        </div>
    );
};

export default ListCollab;


