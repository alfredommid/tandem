import React, { Fragment } from 'react';
import LoggedHeader from '../Venta/Layout/loggedHeader';
import AdminCitas from '../Venta/adminCitas/adminCitas';

const Perfil = () => {
    const affiliateId = '61b80324633133b1675b3a2b'
    return ( 
        <Fragment>
            <LoggedHeader/>
            <h1>Hola desde el perfil</h1>
            <AdminCitas affiliateId={affiliateId}/>
        </Fragment>
        
     );
}
 
export default Perfil;