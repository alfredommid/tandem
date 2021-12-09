import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../../media/imgs/logo_tandem.svg';

const landingHeader = () => {
    return ( 
        <header className="header">
            <nav>
                <Link to="/signup">
                    <button className='btn btn-header'>Registrarse</button>
                </Link>
                <Link to="/">
                    <img className="logo" src={Logo} alt="Logo"/>
                </Link>
                <Link to="/login">
                    <button className='btn btn-header'>Iniciar Sesión</button>
                </Link>
            </nav>
        </header>
     );
}
 
export default landingHeader;