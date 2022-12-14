import './Login.css'
import {Link , useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

import { accountAuth } from '../services/account.auth';


function Login () {
    let navigate = useNavigate()
    // const [login, setLogin] = useState('')
    // const [password, setPassword] = useState('')

    const APP_TOKEN_SECRET="COLLABORATEUR_APP_POWAAAA_SECRET"

    const [identify, setIdentify] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setIdentify ({
            ...identify,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(identify)

        axios.post('http://127.0.0.1:5173/src/server-json/data/collaborateurs.json', identify)
        .then (res => console.log(res))
        accountAuth.saveToken(APP_TOKEN_SECRET)
        navigate('/accueil')
        .catch(error => console.log(error))
    }

    return (

        <div>

            <div className='text-connexion'>

                <h1>Connexion</h1>

                <h2> Pour vous connecter, entrez votre identifiant et votre mot de passe</h2>

            </div>



            <form onSubmit={onSubmit} className='form-connexion'>

                <div className="group">
                    <label>Adresse email </label>
                    <input type="text" name="email" value={identify.email} onChange={onChange} placeholder='ex:jonathanmbaya@gmail.com'/>
                </div>

                <div className="group">
                    <label>Mot de passe </label>
                    <input type="password" name="password" value={identify.password} onChange={onChange}/>
                </div>

                <div className="group">
                    {/* <Link to={'/accueil'} className='nav-link'> */}
                        <input type="submit" value="Connexion" />
                    {/* </Link> */}
                </div>

            </form>

        </div>



    )
}

export default Login;