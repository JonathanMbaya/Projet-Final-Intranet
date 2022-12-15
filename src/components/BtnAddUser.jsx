import React from 'react';
import { Link } from 'react-router-dom';

function BtnAddUser() {
    return (
        <div>

            <Link to='/ajouter'>
                <button>Ajouter</button>
            </Link>

            
        </div>
    );
};

export default BtnAddUser;