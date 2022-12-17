import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { collabService } from '../services/collabService';
import './FormEdit.css'

function FormEdit () {

    const [user, setUser] = useState([])

    const flag = useRef(false)

    const {id} = useParams()

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        collabService.getCollabEdit(user, id)
    }

    useEffect(() =>{

        if (flag.current === false){

            collabService.getCollab(id)
            .then(res =>{        
                console.log(res.data)
                setUser(res.data)
            })

            .catch(err => console.log(err))
        }

        return () => flag.current = true

    }, [])

    return (
        <div>

            <form id={user.id} onSubmit={onSubmit}>
 
                <div className='container input-form'>

                    <div className='col-md-6 form-1'>

                        <div className="contaier group">
                            <label htmlFor="civile">Civilité</label>
                            <select className="col-md-6 form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                type="text"
                                name="gender"
                                id="gender"
                                onChange={onChange}
                                required="required"
                            >
                                <option value={user.gender} onChange={onChange} required="required">male</option>
                                <option value={user.gender} onChange={onChange} required="required">female</option>
                            </select>
                        </div>

                        <div className="group">
                            <label htmlFor="categorie">Catégorie</label>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" 
                                type="text"
                                name="service"
                                id="service"
                                onChange={onChange}
                                required ="required"
                            >
                                <option name="service" value={user.service} onChange={onChange} required ="required">Marketing</option>
                                <option name="service"  value={user.service} onChange={onChange} required="required">Technique</option>
                                <option name="service"  value={user.service} onChange={onChange} required="required">Client</option>
                            </select>
                        </div>

                        <div className="group">
                            <label htmlFor="lastname">Nom</label>
                            <input type="text" name="lastname" value={user.lastname} onChange={onChange}/>
                        </div>

                        <div className="group">
                            <label htmlFor="firstname">Prenom</label>
                            <input type="text" name="firstname" value={user.firstname} onChange={onChange}/>
                        </div>

                        <div className="group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={user.email} onChange={onChange}/>
                        </div>

                        <div className="group">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" name="password" value={user.password} placeholder='(min. 8 caractères)' onChange={onChange}/>
                        </div>

                        </div>

                        <div className='col-md-6 form-2'>

                        <div className="group">
                            <label htmlFor="phone">Téléphone</label>
                            <input type="text" name="phone" value={user.phone} placeholder='(ex: 07-00-00-00-00)' onChange={onChange}/>
                        </div>

                        <div className="group">
                            <label htmlFor="birthdate">Date de naissance</label>
                            <input type="date" name="birthdate" value={user.birthdate} placeholder='dd/mm/yyyy' onChange={onChange}/>
                        </div>

                        <div className="group">
                            <label htmlFor="city">Ville</label>
                            <input type="text" name="city" value={user.city} onChange={onChange}/>
                        </div>

                        <div className="group">
                            <label htmlFor="country">Pays</label>
                            <input type="text" name="country" value={user.country} onChange={onChange}/>
                        </div>

                        <div className="group">
                            <label htmlFor="photo">URL de la photo</label>
                            <input type="text" name="photo" value={user.photo} onChange={onChange}/>
                        </div>

                    </div>

                </div>
                
               



                <div className="group">
                    <input className='btn-add' type="submit" value="Modifier" />
                </div>


            </form>
            
        </div>
    );
};

export default FormEdit ;