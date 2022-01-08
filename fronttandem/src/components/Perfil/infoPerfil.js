import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import PerfilContext from '../../context/perfil/perfilContext';
import ArticuloContext from '../../context/articulos/articuloContext';
import NotificacionesPerfil from './notificaciones';
import ArticulosPerfil from './articulos';
import CitasPerfil from './citas';
import MensajesPErfil from './mensajes';
import FavoritosPerfil from './favoritos';
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

const InfoPerfil = () => {
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;

    const perfilContext = useContext(PerfilContext);
    const { dashboard, notificaciones, items, citas, msj, favs, fnArticulos, fnCitas, fnMsjs, fnFavs } = perfilContext;
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
                            <div className="container title-icon d-flex">
                                <p className="dashboard-title">Información Personal</p>
                                <div className="container edit-cont">
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
                            <div className="container">
                                <p className="dashboard-texto">Nombre: {usuario.nombre} {usuario.apellido}</p>
                                <p className="dashboard-texto">Correo: {usuario.correo}</p>
                                <p className="dashboard-texto">Ciudad: Querétaro</p>
                            </div>
                        </div>
                        <div onClick={fnArticulos} className="container dashboard dash-items">
                            <div className="container title-icon d-flex">
                                <p className="dashboard-title">Artículos</p>
                                <div className="container edit-cont">
                                    <button className="btn edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="5" cy="18" r="3" />
                                            <circle cx="19" cy="18" r="3" />
                                            <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                                            <circle cx="17" cy="5" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="container">
                                {articulos.articulos
                                    ?   articulos.articulos.map(articulo => 
                                            <Card key={articulo._id} className="col-8">
                                                <CardBody>
                                                    <CardTitle tag="h4">{articulo.tipoEntrada}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{articulo.marca}</CardSubtitle>
                                                    <CardText>{articulo.modelo}</CardText>
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
                                                </CardBody>
                                            </Card>
                                        )
                                    :   <p>{articulos.articulos.length}</p>
                                }
                            </div>
                        </div>
                        <div onClick={fnCitas} className="container dashboard dash-citas">
                            <div className="container title-icon d-flex">
                                <p className="dashboard-title">Citas</p>
                                <div className="container edit-cont">
                                    <button className="btn edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <rect x="4" y="5" width="16" height="16" rx="2" />
                                            <line x1="16" y1="3" x2="16" y2="7" />
                                            <line x1="8" y1="3" x2="8" y2="7" />
                                            <line x1="4" y1="11" x2="20" y2="11" />
                                            <rect x="8" y="15" width="2" height="2" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="citas-pendientes">
                                <div className="container pendientes-num d-flex row">
                                    <div className="container cita-info col-2">
                                        <h2>Hora</h2>
                                        {articulos.articulos.map(cita => <div key={cita._id} className="container cita-cont"><p className="dashboard-texto text-map">{cita.hora}</p></div>)}
                                    </div>
                                    <div className="container cita-info col-3">
                                        <h2>Fecha</h2>
                                        {articulos.articulos.map(cita => <div key={cita._id} className="container cita-cont"><p className="dashboard-texto text-map">{estandarizarFecha(cita.fecha)}</p></div>)}
                                    </div>
                                    <div className="container cita-info col-4">
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
                        <div onClick={fnMsjs} className="container dashboard dash-msjs">
                            <div className="container title-icon d-flex">
                                <p className="dashboard-title">Mensajes</p>
                                <div className="container edit-cont">
                                    <button className="btn edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-2" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                                            <line x1="8" y1="9" x2="16" y2="9" />
                                            <line x1="8" y1="13" x2="14" y2="13" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="container num-display text-center">
                                <p>0</p>
                            </div>
                        </div>
                        <div onClick={fnFavs} className="container dashboard dash-favs">
                            <div className="container title-icon d-flex">
                                <p className="dashboard-title">Favoritos</p>
                                <div className="container edit-cont">
                                    <button className="btn edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="container num-display text-center">
                                <p>0</p>
                            </div>
                        </div>
                    </main>
                :   null
            }
            { usuario && notificaciones && articulos ? <NotificacionesPerfil/> : null }
            { usuario && items && articulos ? <ArticulosPerfil/> : null }
            { usuario && citas ? <CitasPerfil/> : null }
            { usuario && msj ? <MensajesPErfil/> : null }
            { usuario && favs ? <FavoritosPerfil/> : null}
            
        </Fragment>
     );
}
 
export default InfoPerfil;