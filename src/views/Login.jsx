import './Login.css'

import {useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {useForm} from 'react-hook-form'

import { accountAuth } from '../services/Account.auth';
import HeaderConnex from '../components/HeaderConnex';


function Login () {


    let navigate = useNavigate()
    // const [login, setLogin] = useState('')
    // const [password, setPassword] = useState('')

    const { register, handleSubmit } = useForm()
  

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

        accountAuth.login(identify)
            .then (res => {
                console.log(res)
                accountAuth.saveToken(res.data.token)
                navigate('/accueil')
            })

            .catch(error => console.log(error))
    }

    return (

        <div className='login'>

            <HeaderConnex/>

            <div className='group-login container col-md-6 col-12'>

                <div className='text-connexion'>

                    <h1>Connexion</h1>

                    <h2> Pour vous connecter, entrez votre identifiant et votre mot de passe</h2>

                </div>

    {/* 
                <form id={identify.id} onSubmit={onSubmit} className='form-connexion'>

                    <div className="group">
                        <label htmlFor='email'>Adresse email </label>
                        <input type="text" name="email" value={identify.email} onChange={onChange} placeholder='ex:jonathanmbaya@gmail.com'/>
                    </div>

                    <div className="group">
                        <label htmlFor='password'>Mot de passe </label>
                        <input type="password" name="password" value={identify.password} onChange={onChange}/>
                    </div>

                    <div className="group"> */}
                        {/* <Link to={'/accueil'} className='nav-link'> */}
                            {/* <input type="submit" value="Connexion" /> */}
                        {/* </Link> */}
                    {/* </div>

                </form> */}

                <form key={identify.id} id={identify.id} onSubmit={handleSubmit(onSubmit)} className='form-connexion'>
                    <div className='group'>
                        <label htmlFor='email'>Email</label>
                        <input
                        type='email'
                        name="email"
                        className='form-input'
                        {...register('email')}
                        value={identify.email}
                        required
                        onChange={onChange}
                        />
                    </div>
                    <div className='group'>
                        <label htmlFor='password'>Password</label>
                        <input
                        type='password'
                        name="password"
                        className='form-input'
                        {...register('password')}
                        value={identify.password}
                        required
                        onChange={onChange}
                        />
                    </div>

                    <div className='group btn-connexion-login'>
                        <input type="submit" value="Connexion" />
                    </div>
                </form>
            </div>
        </div>

    )

}

export default Login;