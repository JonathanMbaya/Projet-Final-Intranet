import React from 'react';

import './FilterCollab.css'

const FilterCollab = () => {
    return (
        <div className='container filters'>

            <div className='group'>
                <input type="text" placeholder='Recherche' />
            </div>

            <div className='group'>
                <h4>Rechercher par :</h4>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Nom</option>
                    <option value="1">Localisation</option>
                    <option value="2">Catégorie</option>
                </select>
            </div>

            <div className='group'>
                <h4>Catégorie</h4>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Technique</option>
                    <option value="1">Marketing</option>
                    <option value="2">Client</option>
                </select>
            </div>
            
        </div>
    );
};

export default FilterCollab;