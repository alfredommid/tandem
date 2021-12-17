import React, { Fragment, useContext, useEffect } from 'react';
import LoggedHeader from '../Venta/Layout/loggedHeader';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import SideBar from '../landpage/layout/SideBar';
import AuthContext from '../../context/auth/authContext';

const Tienda = () => {
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext

    // eslint-disable-next-line
    useEffect(() => {usuarioAutenticado()}, [])
    
    return ( 
        <Fragment>
            <LoggedHeader/>
            <SideBar/>
            <div className="container row">
                <Card className="col-8">
                    <CardImg top width="100%" src="#" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h4">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="primary" size="lg">Button</Button>
                    </CardBody>
                </Card>
            </div>
        </Fragment>
     );
}
 
export default Tienda;