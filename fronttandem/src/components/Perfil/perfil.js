import React, { Fragment } from 'react';
import LoggedHeader from '../Venta/Layout/loggedHeader';
import SidePerfil from './sidePerfil';
import InfoPerfil from './infoPerfil';

const Perfil = () => {

    return ( 
        <Fragment>
            <LoggedHeader/>
            <main className="container-fluid d-flex perfil">
                <SidePerfil/>
                <div className="container info-perfil">
                    <InfoPerfil/>
                </div>
            </main>
            
        </Fragment>
        
     );
}
 
export default Perfil;