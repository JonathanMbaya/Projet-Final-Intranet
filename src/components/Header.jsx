import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './BtnAddUser.css';
import './Header.css';
import BtnConnexion from './BtnConnexion';

function Header() {

    const url = window.localStorage.getItem('photo');
    const id = window.localStorage.getItem('id');
    const firstname = window.localStorage.getItem('firstname');

    return (

        <div className='Navbar-home'>

            <div className='element-Nav'>
                <Link to={'/accueil'}>
                    <h1><span className='animate__animated animate__backInLeft'>In.</span>tranet</h1>
                </Link>
            </div>

            <div className='icon-profil'>
                <Link  to={`/collaborateurs/edit/${id}`}>
                    <img className='profile' src={url} alt=""/>
                </Link>
                <p>Bonjour, {firstname}</p>
            </div>

            <div>
                <BtnConnexion/>
            </div>

        </div>

    )
}


export default Header;