import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import '../components/FilterCollab.css'
import '../components/FormEdit.css'
import CollaboCard from '../components/CollaboCard';

import { collabService } from '../services/collabService';
import { accountAuth } from '../services/Account.auth';

import './ListCollab.css'
import '../components/FilterCollab.css'


 function ListCollab () {

    // Stocker les données dans un tableau avec useState

     const [collabs, setCollab] = useState ([]);
     const [searchTerm, setSearchTerm] = useState([]);
     const [elementFilter, setelementFilter] = useState({
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


    const onChange = (e) => {
        const { name, value } = e.target
        elementFilter[name] = value
        setelementFilter(elementFilter)
        let champ
        switch (elementFilter.searchcase) {
            case "1":
                champ = collabs.filter(collab => (collab.firstname.toLowerCase().includes(elementFilter.searchBar.toLowerCase()) || collab.lastname.toLowerCase().includes(elementFilter.searchBar.toLowerCase())))
                break;
            case "2":
                champ = collabs.filter(collab => (collab.city.toLowerCase().includes(elementFilter.searchBar.toLowerCase()) || collab.country.toLowerCase().includes(elementFilter.searchBar.toLowerCase())))
                break;
            default:
                break;
        }
        if (elementFilter.category !== "all") {
            champ = champ.filter(collab => (collab.service.toLowerCase() === elementFilter.category.toLowerCase()))
        }
        setSearchTerm(champ)


    };


    // const delUser = (id) => {
    //     const deleteValid = () => {
    //         collabService.deleteUser(id)
    //         .then(res =>{
    //             accountAuth.getToken(res.token)
    //             console.log(res)
    //             setCollab(collabs.filter(collab => collab.id != id))
    //         })
    //         .catch(err => console.log(err))
    //     }

    //     deleteValid(id)
    // }


    return (
        <div className='list col-12'>

        <div className='scrollUp'>
            <i class="fa-solid fa-chevron-up"></i>
        </div>



            <Header/>

            <div className='container-fluid list-filter'>

                <h1 className='text-center'>Liste des collaborateurs</h1>

                <div className='text-center'>
                    <h3>Trouvez vos collaborateurs grâce à notre filtre</h3>

                    <p>Sélectionnez vos critères de recherche et tapez le nom ou la localisation dans la barre de recherche </p>

                </div>



                {/* <FilterCollab/> */}

                <form onSubmit={onSubmit} className='container col-md-12 row'>

                    <div className='group-filter col-md-2'>
                        Filtre <i class="fa-solid fa-arrow-down-wide-short"></i>
                    </div>

                    <div className='group-filter col-md-3'>
                        <input className='col-md-4' type="text" id="searchBar"  name="searchBar" placeholder='Recherche' onChange={onChange} />
                    </div>

                    <div className='group-filter col-md-3'>
                        <select id="searchcase" name="searchcase" className="form-select form-select-lg mb-3 col-md-4" aria-label=".form-select-lg example" onChange={onChange}>
                            <option select>Choisis un critère</option>
                            <option value="1">Nom</option>
                            <option value="2">Localisation</option>
                        </select>
                    </div>

                    <div className='group-filter col-md-3'>
                        <select id="category" name="category" className="form-select form-select-lg mb-3 col-md-4" aria-label=".form-select-lg example" onChange={onChange}>
                            <option value="all">Tous</option>
                            <option value="Technique">Technique</option>
                            <option value="Marketing<">Marketing</option>
                            <option value="Client">Client</option>
                        </select>
                    </div>

                </form>

                <div className='container col-md-12 col-sm-12 col-12 '>
                    {
                        searchTerm && 

                        <div className='results mt-5 pb-5'>

                            {searchTerm.map((collab, index) =>(

                            <CollaboCard
                            collab={collab} key={index} 
                            />


                            ))}

                        </div>
                    }

                </div>

            </div>




            
        </div>
    );
};

export default ListCollab;


