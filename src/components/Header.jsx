import { Link } from 'react-router-dom';
import './BtnAddUser.css';
import './Header.css';
import BtnConnexion from './BtnConnexion';

function Header() {


    return (

        <div className='Navbar-home'>

            <div className='element-Nav'>
                <Link to={'/accueil'}>
                    <h1><span className='animate__animated animate__backInLeft'>In.</span>tranet</h1>
                </Link>
            </div>


            <div>
                <BtnConnexion/>
            </div>

        </div>

    )
}


export default Header;