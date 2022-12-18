import './Login.css'
import {useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react';
import {useForm} from 'react-hook-form'

import { accountAuth } from '../services/Account.auth';
import HeaderConnex from '../components/HeaderConnex';


function Login () {


    let navigate = useNavigate()

    const { register, handleSubmit } = useForm()
  

    const [identify, setIdentify] = useState({
        email: '',
        password: ''
    })


    // useEffect(() => {
    //     if (identify.data) {
    //       const { token } = identify.data;
    //       const { id, firstname, lastname, photo, isAdmin } =
    //         identify.data;
    //         localStorage.setItem({ token, id, firstname, lastname, photo, isAdmin });
    //     }
    //   }, [setIdentify]);

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
                window.localStorage.setItem("photo", res.data.user.photo)
                window.localStorage.setItem("isAdmin", res.data.user.isAdmin)
                window.localStorage.setItem("id", res.data.user.id)
                window.localStorage.setItem("firstname", res.data.user.firstname)
                navigate('/accueil')
            })

            // .then (data => {
            //     window.localStorage.setItem(data.user.isAdmin)
            // })

            .catch(error => console.log(error))
    }

    return (

        <div className='container-fluid col-sm-12 login'>

            <HeaderConnex/>

            <div className='group-login container col-md-6 col-12'>

                <div className='text-connexion'>

                    <h1 className=''>Connexion</h1>

                    <h2> Pour vous connecter, entrez votre identifiant et votre mot de passe</h2>

                </div>

                <form  id={identify.id} onSubmit={handleSubmit(onSubmit)} className='form-connexion'>
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