import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import headLogo from '../../../media/imgs/head_tandem.svg';
import AuthContext from '../../../context/auth/authContext';

const LoggedHeader = () => {
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    // eslint-disable-next-line
    useEffect(() => {usuarioAutenticado()}, []);

    const [search, setSearch] = useState(false);

    const [busqueda, setBusqueda] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setBusqueda(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault();
        if(busqueda){console.log(busqueda)};
        setBusqueda('');
    }

    return ( 
        <nav className="loggedHead-cont">
            <div className="logo-cont">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={headLogo} alt="logo-s-tandem"/>
                </Link>
                {usuario    ? <p className="saludo-usuario">Hola <Link to="/perfil" style={{ textDecoration: 'none' }}><span className="nombre"> {usuario.nombre}</span></Link></p>  : null}
            </div>
            <div className='routes-cont'>
                {search
                    ?   <div className="container search-cont">
                            <form onClick={submitSearch} className="container form-cont">
                                <input className="search-input" onChange={handleChange} type="text" placeholder="Buscar"/>
                                <button type="submit" className="btn icon-search">
                                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                                <button className="btn icon-back" onClick={() => setSearch(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x header-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        
                    :   <button className="btn search-icon" onClick={() => setSearch(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                }
                
            </div>
            {usuario
                ?   <div className="icons-cont">
                        <Link to="/venta" style={{ textDecoration: 'none' }}>
                            <p className="route">Publicar</p>
                        </Link>
                        <Link to="/contacto" style={{ textDecoration: 'none' }}>
                            <p className="route">Contacto</p>
                        </Link>
                        <Link to="/perfil" style={{ textDecoration: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                        <Link to="/carrito" style={{ textDecoration: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell header-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                        </Link>
                        <Link to="/carrito" style={{ textDecoration: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                        <Link to="/">
                            <button 
                                className="btn cerrar-sesion"
                                onClick={() => cerrarSesion()}
                            >
                                <svg className="w-6 h-6 header-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" strokeWidth="1.5" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                :   <div className="icons-cont">
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <p className="route">Iniciar Sesión</p>
                        </Link>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <p className="route">Registrarse</p>
                        </Link>
                        <Link to="/contacto" style={{ textDecoration: 'none' }}>
                            <p className="route">Contacto</p>
                        </Link>
                    </div>
            }
            
        </nav>
     );
}
 
export default LoggedHeader;