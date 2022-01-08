import React, { Fragment, useContext, useEffect } from 'react';
import ArticuloContext from '../../context/articulos/articuloContext';
import AuthContext from '../../context/auth/authContext';
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

const ArticulosPerfil = () => {
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;
    
    const articuloContext = useContext(ArticuloContext);
    const { articulos, obtenerArticulosUsuario } = articuloContext;

    // eslint-disable-next-line
    useEffect(() => {usuarioAutenticado(), obtenerArticulosUsuario()}, []);

    const fechaRefactor = (fecha) => {
            const newFecha = new Date(fecha);
            return newFecha.toLocaleDateString()
    }

    return ( 
        <Fragment>
            <div className="container row articard-cont">
                {articulos
                    ?   articulos.articulos.map( item => 
                        <Card key={item._id} id={item._id} className="col-5 m-3">
                            <CardBody className="container">
                                <div className="container mb-4 d-flex item-icontitle">
                                    <CardTitle tag="h3">{item.modelo}</CardTitle>
                                    <div className="container item-icons">
                                        <button className="btn edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </button>
                                        <button className="btn edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                <line x1="16" y1="5" x2="19" y2="8" />
                                            </svg>
                                        </button>
                                    </div>
                                    
                                </div>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{item.marca}</CardSubtitle>
                                <CardText>Color: {item.color}</CardText>
                                <CardText>Talla: {item.talla}</CardText>
                                <CardText>Tipo: {item.tipoBicileta}</CardText>
                                <CardText>{item.tipoEntrada}</CardText>
                                <div className="container d-flex footer">
                                    <CardText>Creado: {fechaRefactor(item.creado)}</CardText>
                                    <CardText>Estatus: Pendiente</CardText>
                                </div>
                                
                            </CardBody>
                        </Card>
                        )
                    :   null
                }
            </div>
        </Fragment>
     );
}
 
export default ArticulosPerfil;