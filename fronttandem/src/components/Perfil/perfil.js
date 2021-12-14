import React, { Fragment } from 'react';
import LoggedHeader from '../Venta/Layout/loggedHeader';
import AfiliadosCard from '../Venta/Card/card';

const Perfil = () => {
    return ( 
        <Fragment>
            <LoggedHeader/>
            <h1>Hola desde el perfil</h1>
            <AfiliadosCard/>
        </Fragment>
        
     );
}
 
export default Perfil;