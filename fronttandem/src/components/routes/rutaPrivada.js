import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router';
import AuthContext from '../../context/auth/authContext';

const RutaPrivada = ({ component: Component, ...props }) => {
    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    // eslint-disable-next-line
    useEffect(() => {usuarioAutenticado()}, []);
    return ( 
        <Route { ...props } render={props => !autenticado && !cargando ? (
            <Redirect to="/login"/>
        ) : (
            <Component {...props}/>
        )}/>
     );
}
 
export default RutaPrivada;