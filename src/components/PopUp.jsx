import React from 'react';
import "./PopUp.css"
import "./BtnAddUser.css"


function PopUp (props){
    return (props.trigger) ? (

        <div className='popup'>
            <div className='popup-inner'>

                {/* Bouton pour fermer la pop Up  */}
                <button className='close-btn btn-add' onClick= {() => props.setTrigger(false)}> <i class="fa-solid fa-ban"></i> </button>

                {props.children}
            </div>
        </div>

    ) : "";
}

export default PopUp;