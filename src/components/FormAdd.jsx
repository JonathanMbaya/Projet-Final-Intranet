import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { collabService } from '../services/collabService';

function FormAdd () {

    let navigate = useNavigate()

    const [user, setUser] = useState([])
    const [gender, setGender] = useState("");
    const [service,setService] = useState("");

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        collabService.getCollabAdd(user)

        .then(res => navigate('/collaborateurs'))
        .catch(err => console.log(err))
    }

    return (
        <div>

            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="civile">Civilité</label>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"

                        name="gender"
                        id="gender"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                        
                    >
                        <option value="male" >Homme</option>
                        <option value="female">Femme</option>
                    </select>
                </div>

                <div className="group">
                    <label htmlFor="categorie">Catégorie</label>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" 
                    
                        name="service"
                        id="service"
                        value={service}
                        onChange={(event) => setService(event.target.value)}
                    
                    >
                        <option value="Marketing">Marketing</option>
                        <option value="Technique">Technique</option>
                        <option value="Client">Client</option>
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
                    <input type="text" name="email" value={user.email} onChange={onChange}/>
                </div>

                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" value={user.password} placeholder='(min. 8 caractères)' onChange={onChange}/>
                </div>

                <div className="group">
                    <label htmlFor="password">Confirmation</label>
                    <input type="password" name="password" value={user.password} placeholder='(min. 8 caractères)' onChange={onChange}/>
                </div>

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

                <div className="group">
                    <input type="submit" value="Ajouter" />
                </div>


            </form>
            
        </div>
    );
};

export default FormAdd ;