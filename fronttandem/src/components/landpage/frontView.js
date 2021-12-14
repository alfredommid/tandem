import React, {Fragment} from 'react';
import LandingHeader from './layout/header';
import MainLanding from './layout/MainLanding';

const frontView = (props) => {
   const token = localStorage.getItem('token');
        if (token){ props.history.push('/tienda'); }

    return ( 
        <Fragment>
            <LandingHeader/>
            <MainLanding/>
        </Fragment>
     );
}
 
export default frontView;