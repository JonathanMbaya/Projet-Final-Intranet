import React from 'react';
import Header from '../components/Header';
import FormAdd from '../components/FormAdd';

import './CollabEdit.css'

function CollabAdd () {

    return (
        <div className='add'>

            <Header/>

            <h1>Créer un utilisateur</h1>

            <hr />

            <FormAdd/>


            
        </div>
    );
};

export default CollabAdd ;