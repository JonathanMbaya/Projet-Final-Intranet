import React from 'react';
import { Link } from 'react-router-dom';
import './BtnAddUser.css'


function BtnAddUser() {
    return (
        <div>

            <Link to='/ajouter'>
                <button className='btn-add'>Ajouter</button>
            </Link>

            
        </div>
    );
};

export default BtnAddUser;