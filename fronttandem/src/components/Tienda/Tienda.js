import React, { Fragment, useContext, useEffect } from 'react';
import LoggedHeader from '../Venta/Layout/loggedHeader';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import AuthContext from '../../context/auth/authContext';
import Categorias from './Categorias';

const Tienda = () => {
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext

    // eslint-disable-next-line
    useEffect(() => {usuarioAutenticado()}, [])
    
    return ( 
        <Fragment>
            <LoggedHeader/>
            <main className="container-fluid main-tienda">
                <div className="container categorias-tienda">
                    <Categorias/>
                </div>
                <div className="container row cont-cardstienda">
                    <Card className="col-5">
                        <CardBody>
                            <CardTitle tag="h4">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary" size="lg">Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </main>
        </Fragment>
     );
}
 
export default Tienda;