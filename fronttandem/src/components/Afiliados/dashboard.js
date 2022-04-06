import React, { Fragment } from 'react';
import AsideAf from './asideAf';
import PerfilAfiliado from './perfilAfiliado';
import AfiliadoNav from './afiliadoNav';

const Dashboard = () => {
    return ( 
        <Fragment>
            <AfiliadoNav/>
            <main className="container-fluid d-flex perfil">
                <AsideAf/>
                <div className="container info-perfil">
                    <PerfilAfiliado/>
                </div>
            </main>
        </Fragment>
     );
}
 
export default Dashboard;