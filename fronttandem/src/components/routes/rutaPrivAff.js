import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router';
import AuthContext from '../../context/auth/authContext';

const RutaPrivAff = ({ component: Component, ...props }) => {
    const authContext = useContext(AuthContext);
    const { afauth, cargando, afiliadoAutenticado } = authContext;

    // eslint-disable-next-line
    useEffect(() => {afiliadoAutenticado()}, []);
    return ( 
        <Route { ...props } render={props => !afauth && !cargando ? (
            <Redirect to="/login/afiliado"/>
        ) : (
            <Component {...props}/>
        )}/>
     );
}
 
export default RutaPrivAff;