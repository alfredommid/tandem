import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';

const SideBar = () => {
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])

    return ( 
        <aside className="sideBar">
            {usuario 
                ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p>
                : null}
            <Link to="/">
                <button 
                    className="btn cerrar-sesion"
                    onClick={() => cerrarSesion()}
                >Cerrar Sesión</button>
            </Link>
        </aside>
     );
}
 
export default SideBar;