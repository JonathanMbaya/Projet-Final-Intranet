import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import '../components/FilterCollab.css'
import '../components/FormEdit.css'
import { collabService } from '../services/collabService';

import './ListCollab.css'
import { accountAuth } from '../services/Account.auth';


 function ListCollab () {

    // Stocker les données dans un tableau avec useState

     const [collabs, setCollab] = useState ([]);
     const [searchTerm, setSearchTerm] = useState([]);
     const [filters, setFilters] = useState({
        searchBar: "",
        searchcase: "",
        category: "all"
    })


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

    const onSubmit = (e) => {
        e.preventDefault()
    }


    const handleSearchTerm = (e) => {
        const { name, value } = e.target
        filters[name] = value
        setFilters(filters)
        let index
        switch (filters.searchcase) {
            case "1":
                index = collabs.filter(collab => (collab.firstname.toLowerCase().includes(filters.searchBar.toLowerCase()) || collab.lastname.toLowerCase().includes(filters.searchBar.toLowerCase())))
                break;
            case "2":
                index = collabs.filter(collab => (collab.city.toLowerCase().includes(filters.searchBar.toLowerCase()) || collab.country.toLowerCase().includes(filters.searchBar.toLowerCase())))
                break;
            default:
                break;
        }
        if (filters.category !== "all") {
            index = index.filter(collab => (collab.service.toLowerCase() === filters.category.toLowerCase()))
        }
        setSearchTerm(index)


    };

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

                {/* <FilterCollab/> */}

                <form onSubmit={onSubmit} className='row'>

                    <div className='group-filter'>
                        <input type="text" id="searchBar" name="searchBar" placeholder='Recherche' onChange={handleSearchTerm} />
                    </div>

                    <div className='group-filter'>
                        <h4 htmlFor="searchby">Rechercher par :</h4>
                        <select id="searchcase" name="searchcase" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleSearchTerm}>
                            <option select>Choisis un critère</option>
                            <option value="1">Nom</option>
                            <option value="2">Localisation</option>
                        </select>
                    </div>

                    <div className='group-filter'>
                        <h4 htmlFor="searchby">Catégorie</h4>
                        <select id="category" name="category" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleSearchTerm}>
                            <option value="all">Tous</option>
                            <option value="Technique">Technique</option>
                            <option value="Marketing<">Marketing</option>
                            <option value="Client">Client</option>
                        </select>
                    </div>

                </form>

                <div className='container row list-collab-all col-md-12 col-sm-12 col-12 offset-md-1'>
                    {
                        searchTerm && 
                        searchTerm.map((collab) =>

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


