import React from 'react';
import { useState} from 'react';
import { collabService } from '../services/collabService';
import { accountAuth } from '../services/Account.auth';

import './FilterCollab.css'

const FilterCollab = () => {

    // const [collabs, setCollab] = useState ([]);
    const [searchTerm, setSearchTerm] = useState("");
    // const [filtredCollabsTab, setFiltredCollabsTab] = useState([])
    // const [filters, setFilters] = useState({
    //     research: "",
    //     searchby: "1",
    //     category: "all"
    // })


    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
        // const {name, value} = e.target
        // filters[name] = value
        // setFilters(filters)
        // let temp
        // switch (filters.searchby) {
        //     case "1":
        //         temp = collabs.filter(collab => (collab.firstname.toLowerCase().includes(filters.research.toLowerCase()) || collab.lastname.toLowerCase().includes(filters.research.toLowerCase())))
        //         break;
        //     case "2":
        //         temp = collabs.filter(collab => (collab.city.toLowerCase().includes(filters.research.toLowerCase()) || collab.country.toLowerCase().includes(filters.research.toLowerCase())))
        //         break;
        //     default:
        //         break;
        // }
        // if(filters.category !== "all"){
        //     temp = temp.filter(collab => (collab.service.toLowerCase() === filters.category.toLowerCase()))
        // }
        // setFiltredCollabsTab(temp)
    };

    // const onSubmit = (e) => {
    //     e.preventDefault()
    // }

    return (
        <div className='container'>

            <form className='row'>

                <div className='group-filter'>
                    <input type="text" id="searchBar" name="searchBar" placeholder='Recherche' onChange={handleSearchTerm} />
                </div>

                <div className='group-filter'>
                    <h4 htmlFor="searchby">Rechercher par :</h4>
                    <select id="research" name="research" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value="1">Nom</option>
                        <option value="2">Localisation</option>
                    </select>
                </div>

                <div className='group-filter'>
                    <h4 htmlFor="searchby">Catégorie</h4>
                    <select id="category" name="category" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value="all">Tous</option>
                        <option value="Technique">Technique</option>
                        <option value="Marketing<">Marketing</option>
                        <option value="Client">Client</option>
                    </select>
                </div>

            </form>
            
        </div>
    );
};

export default FilterCollab;