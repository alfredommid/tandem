import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import PerfilContext from '../../context/perfil/perfilContext';
import ArticuloContext from '../../context/articulos/articuloContext';

const InfoPerfil = () => {
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;

    const perfilContext = useContext(PerfilContext);
    const { dashboard, notificaciones, items, citas, msj } = perfilContext;
    //TODO agregar funciones para cambiar el state y hacer el cambio de botones
    const articuloContext = useContext(ArticuloContext);
    const { articulos, obtenerArticulosUsuario } = articuloContext;

    // eslint-disable-next-line
    useEffect(() => {usuarioAutenticado(), obtenerArticulosUsuario()}, []);

    console.log(articulos)

    return ( 
        <Fragment>
            {usuario && dashboard
                ?   <h1>Hola {usuario.nombre}</h1>
                :   <h1>Hola Usuario</h1>
            }
            
        </Fragment>
     );
}
 
export default InfoPerfil;