import React, {useRef} from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { collabService } from '../services/collabService';

import Header from '../components/Header';
import FormEdit from '../components/FormEdit';

function CollabEdit () {
    const flag = useRef(false)

    const {id} = useParams()
    console.log(id)

    useEffect(() =>{

        if (flag.current === false){

            collabService.getCollab(id)
            .then(res =>{ 
                    
                console.log(res.data)

            })

            .catch(err => console.log(err))
        }

        return () => flag.current = true

    }, [])
    return (
        <div>

            <Header/>

            <h1>Modifier le profil</h1>

            <hr />

            <FormEdit/>

            
        </div>
    );
};

export default CollabEdit ;