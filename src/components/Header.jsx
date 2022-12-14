import './Header.css';
import BtnConnexion from './BtnConnexion';



function Header() {
    return (

        <div className='container-fluid Navbar'>

            <div className='element-Nav'>
                <h2>Intranet</h2>

            </div>
            <div>
                <BtnConnexion/>
            </div>



        </div>

    )
}


export default Header;