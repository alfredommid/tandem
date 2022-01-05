import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import PerfilContext from '../../context/perfil/perfilContext';
import ArticuloContext from '../../context/articulos/articuloContext';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const InfoPerfil = () => {
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;

    const perfilContext = useContext(PerfilContext);
    const { dashboard, notificaciones, items, citas, msj } = perfilContext;
    //TODO agregar funciones para cambiar el state y hacer el cambio de botones
    const articuloContext = useContext(ArticuloContext);
    const { articulos, afiliados, obtenerAfiliados, obtenerArticulosUsuario } = articuloContext;

    // eslint-disable-next-line
    useEffect(() => {usuarioAutenticado(), obtenerArticulosUsuario(), obtenerAfiliados()}, []);

    const estandarizarFecha = (fechaLarga) => {
        const fecha = new Date(fechaLarga);
        let newFecha = fecha.toLocaleDateString();
        return newFecha;
    }

    const nombreAfiliado = (id) => {
        if(afiliados){
            const affiliate = afiliados.filter( afiliado => afiliado._id === id)
            return affiliate[0].nombre
        }
    }

    return ( 
        <Fragment>
            {usuario && dashboard && articulos
                ?   <main className="perfil-dashboard">
                        <div className="container dashboard dash-info">
                            <p className="dashboard-title">Información Personal</p>
                            <div className="container">
                                <p className="dashboard-texto">Nombre: {usuario.nombre} {usuario.apellido}</p>
                                <p className="dashboard-texto">Correo: {usuario.correo}</p>
                                <p className="dashboard-texto">Ciudad: Querétaro</p>
                            </div>
                        </div>
                        <div className="container dashboard dash-items">
                            <p className="dashboard-title">Artículos</p>
                            <div className="container">
                                {articulos.articulos
                                    ?   articulos.articulos.map(articulo => 
                                            <Card key={articulo._id} className="col-8">
                                                <CardBody>
                                                    <CardTitle tag="h4">{articulo.tipoEntrada}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{articulo.marca}</CardSubtitle>
                                                    <CardText>{articulo.modelo}</CardText>
                                                    <Button color="primary" size="lg">Eiminar</Button>
                                                </CardBody>
                                            </Card>
                                        )
                                    :   <p>{articulos.articulos.length}</p>
                                }
                            </div>
                        </div>
                        <div className="container dashboard dash-citas">
                            <p className="dashboard-title">Citas</p>
                            <div className="citas-pendientes">
                                <div className="pendientes-num d-flex row">
                                    <div className="container cita-info col-2">
                                        <h2>Hora</h2>
                                        {articulos.articulos.map(cita => <div key={cita._id} className="container cita-cont"><p className="dashboard-texto text-map">{cita.hora}</p></div>)}
                                    </div>
                                    <div className="container cita-info col-2">
                                        <h2>Fecha</h2>
                                        {articulos.articulos.map(cita => <div key={cita._id} className="container cita-cont"><p className="dashboard-texto text-map">{estandarizarFecha(cita.fecha)}</p></div>)}
                                    </div>
                                    <div className="container cita-info col-5">
                                        <h2>Afiliado</h2>
                                        {articulos.articulos.map(cita => <div key={cita._id} className="container cita-cont"><p className="dashboard-texto text-map">{nombreAfiliado(cita.afiliadoId)}</p></div>)}
                                    </div>
                                    <div className="container cita-info col-3">
                                        <h2>Estatus</h2>
                                        {articulos.articulos.map(cita => <div key={cita._id} className="container cita-cont"><p className="dashboard-texto text-map">Pendiente</p></div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container dashboard dash-msjs">
                            <p className="dashboard-title">Mensajes</p>
                            <div className="container">
                                <p>0</p>
                            </div>
                        </div>
                        <div className="container dashboard dash-favs">
                            <p className="dashboard-title">Favoritos</p>
                            <div className="container">
                                <p>0</p>
                            </div>
                        </div>
                    </main>
                :   <h1>Hola Usuario</h1>
            }
            
        </Fragment>
     );
}
 
export default InfoPerfil;