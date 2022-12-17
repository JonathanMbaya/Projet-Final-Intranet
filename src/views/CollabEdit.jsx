import React, {useRef} from 'react';


import Header from '../components/Header';
import FormEdit from '../components/FormEdit';

import './CollabEdit.css'

function CollabEdit () {

    return (
        <div className='edit'>

            <Header/>

            <h1>Modifier le profil</h1>

            <hr />

            <FormEdit/>

            
        </div>
    );
};

export default CollabEdit ;