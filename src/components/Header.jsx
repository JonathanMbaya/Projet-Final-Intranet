import './Header.css';
import BtnConnexion from './BtnConnexion';
import BtnAddUser from './BtnAddUser';



function Header() {

    return (

        <div className='container-fluid Navbar'>

            <div className='element-Nav'>
                <h1>Intranet</h1>

            </div>

            
            <div>
                <BtnAddUser/>
            </div>

            <div>
                <BtnConnexion/>
            </div>



        </div>

    )
}


export default Header;