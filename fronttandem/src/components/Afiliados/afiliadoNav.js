import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom'
import headLogo from '../../media/imgs/head_tandem.svg';
import AuthContext from '../../context/auth/authContext';

const AfiliadoNav = () => {
    const authContext = useContext(AuthContext);
    const { afiliado, afiliadoAutenticado, cerrarSesion } = authContext;

    // eslint-disable-next-line
    useEffect(() => {afiliadoAutenticado()}, []);

    return ( 
        <nav className="loggedHead-cont">
            <div className="logo-cont">
                <Link to="/afiliado/dashboard" style={{ textDecoration: 'none' }}>
                    <img src={headLogo} alt="logo-s-tandem"/>
                </Link>
                {afiliado    ? <p className="saludo-usuario">Hola <Link to="/afiliado/dashboard" style={{ textDecoration: 'none' }}><span className="nombre"> {afiliado.nombre}</span></Link></p>  : null}
            </div>
            <div className='routes-cont'></div>
            <div className="icons-cont">
                <Link to="/afiliado/dashboard" style={{ textDecoration: 'none' }}>
                    <p className="route">Contacto</p>
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
        </nav>
     );
}
 
export default AfiliadoNav;