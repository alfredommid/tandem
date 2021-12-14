import React, { Fragment } from 'react';
import LoggedHeader from '../Venta/Layout/loggedHeader';
import Dropdown from '../Venta/dropdown/dropdown';

const Perfil = () => {
    return ( 
        <Fragment>
            <LoggedHeader/>
            <h1>Hola desde el perfil</h1>
            <Dropdown/>
        </Fragment>
        
     );
}
 
export default Perfil;