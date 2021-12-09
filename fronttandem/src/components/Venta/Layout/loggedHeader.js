import React from 'react';
import { Link } from 'react-router-dom'
import headLogo from '../../../media/imgs/head_tandem.svg';

const LoggedHeader = () => {
    return ( 
        <nav className="loggedHead-cont">
            <div className="logo-cont">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={headLogo} alt="logo-s-tandem"/>
                </Link>
            </div>
            <div className='routes-cont'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <div className="icons-cont">
                <Link to="/venta" style={{ textDecoration: 'none' }}>
                    <p className="route">Publicar</p>
                </Link>
                <Link to="/tienda" style={{ textDecoration: 'none' }}> 
                    <p className="route">Tienda</p>
                </Link>
                <Link to="/contacto" style={{ textDecoration: 'none' }}>
                    <p className="route">Contacto</p>
                </Link>
                <Link to="/perfil" style={{ textDecoration: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
                <Link to="/carrito" style={{ textDecoration: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </Link>
            </div>
        </nav>
     );
}
 
export default LoggedHeader;