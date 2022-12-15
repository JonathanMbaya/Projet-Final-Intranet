import './Login.css'

import {useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import HeaderConnex from '../components/HeaderConnex';
import { accountAuth } from '../services/Account.auth';


function Login () {
    let navigate = useNavigate()
    // const [login, setLogin] = useState('')
    // const [password, setPassword] = useState('')

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

        accountAuth.login(identify)
            .then (res => {
                console.log(res)
                accountAuth.saveToken(res.data.token)
                navigate('/accueil')
            })

            .catch(error => console.log(error))
    }

    return (

        <div>

            <HeaderConnex/>

            <div className='text-connexion'>

                <h1>Connexion</h1>

                <h2> Pour vous connecter, entrez votre identifiant et votre mot de passe</h2>

            </div>


            <form onSubmit={onSubmit} className='form-connexion'>

                <div className="group">
                    <label htmlFor='email'>Adresse email </label>
                    <input type="text" name="email" value={identify.email} onChange={onChange} placeholder='ex:jonathanmbaya@gmail.com'/>
                </div>

                <div className="group">
                    <label htmlFor='password'>Mot de passe </label>
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