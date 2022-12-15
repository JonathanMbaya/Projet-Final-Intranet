import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { collabService } from '../services/collabService';

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
        collabService.getCollabEdit(user)
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

            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="civile">Civilité</label>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>{user.gender}</option>
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                    </select>
                </div>

                <div className="group">
                    <label htmlFor="categorie">Catégorie</label>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected >{user.service}</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Technique">Technique</option>
                        <option value="Client">Client</option>
                    </select>
                </div>

                <div className="group">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" value={user.lastname}/>
                </div>

                <div className="group">
                    <label htmlFor="firstname">Prenom</label>
                    <input type="text" name="firstname" value={user.firstname}/>
                </div>

                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={user.email}/>
                </div>

                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name="password" value={user.password} placeholder='(min. 8 caractères)'/>
                </div>

                <div className="group">
                    <label htmlFor="password">Confirmation</label>
                    <input type="text" name="password" value={user.password} placeholder='(min. 8 caractères)'/>
                </div>

                <div className="group">
                    <label htmlFor="phone">Téléphone</label>
                    <input type="text" name="phone" value={user.phone} placeholder='(ex: 07-00-00-00-00)'/>
                </div>

                <div className="group">
                    <label htmlFor="birthdate">Date de naissance</label>
                    <input type="date" name="birthdate" value={user.birthdate} placeholder='dd/mm/yyyy'/>
                </div>

                <div className="group">
                    <label htmlFor="city">Ville</label>
                    <input type="text" name="city" value={user.city}/>
                </div>

                <div className="group">
                    <label htmlFor="country">Pays</label>
                    <input type="text" name="country" value={user.country}/>
                </div>

                <div className="group">
                    <label htmlFor="photo">URL de la photo</label>
                    <input type="text" name="photo" value={user.photo}/>
                </div>

                <div className="group">
                    <input type="submit" value="Modifier" />
                </div>


            </form>
            
        </div>
    );
};

export default FormEdit ;