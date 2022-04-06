import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import ArticuloContext from '../../context/articulos/articuloContext';
import PerfilAfiliadoContext from '../../context/perfilAfiliado/perfilAfiliadoContext';
import CitasAff from './components/citasAff';
import EditInfo from './components/editInfo';
import ValorarArt from './components/valorarArt';
import NotificacionesAff from './components/notificacionesAff';
import MensajesAff from './components/mensajesAff';
import ValoradosAf from './components/valoradosAf';

const PerfilAfiliado = () => {
    const authContext = useContext(AuthContext);
    const { afiliado, afiliadoAutenticado, obtenerUsuarioId, nombresUsuarios } = authContext;

    const articuloContext = useContext(ArticuloContext);
    const { articulos, obtenerArticulosAfiliado } = articuloContext;

    const perfilAfiliadoContext = useContext(PerfilAfiliadoContext);
    const { dashboardAf, editInfoAf, valorarArtAf, valoradosAf, notificacionesAf, citasAf, msjPerfilAf, pendientes, artFiltrados, artsValoradosAf, afEditInfo, afValorarArt, afCitas, afMsjs, afNotificaciones, afGetPendientes, filtrarArticulosAf, afGetValorados, afValorados } = perfilAfiliadoContext;
    //dashboard, notificaciones, items, citas, msj, favs, 
    // eslint-disable-next-line
    useEffect(() => {afiliadoAutenticado(), obtenerArticulosAfiliado(), afGetPendientes(), afGetValorados()}, []);
    //conseguir los nombres de los usuarios por Id.
    // eslint-disable-next-line
    useEffect(() => {if(articulos){obtenerUsuarioId(articulos.articulos)}}, [articulos]); 
    // eslint-disable-next-line
    useEffect(() => {if(articulos && pendientes){filtrarArticulosAf(articulos.articulos, pendientes.pendientes)}}, [pendientes.pendientes])
    // eslint-disable-next-line
    useEffect(() => {if(articulos && pendientes){console.log('listo')}}, []);

    const estandarizarFecha = (fechaLarga) => {
        const fecha = new Date(fechaLarga);
        let newFecha = fecha.toLocaleDateString();
        return newFecha;
    }

    const returnNames = (id) => {
        if(nombresUsuarios){
            const userName = nombresUsuarios.filter(entrada => entrada.idUsuario === id);
        return userName[0].nombre;
        }
    }

    const returnPendNames = (id) => {
        if(nombresUsuarios){
            const userPendName = nombresUsuarios.filter( entrada => entrada.idArticulo === id);
            return userPendName[0].nombre;
        }
    }

    const returnHora = (idArt) => {
        if(articulos){
            const buscarArt = articulos.articulos.filter(entry => entry._id === idArt);
            return buscarArt[0].hora;
        }
    }

    const estandarizarPendFecha = (idArt) => {
        if(articulos){
            const buscarArt = articulos.articulos.filter(entry => entry._id === idArt);
            const fechaLarga = buscarArt[0].fecha;
            const fecha = new Date(fechaLarga);
            return fecha.toLocaleDateString();
        }
    }

    return ( 
        <Fragment>
            {afiliado && articulos && dashboardAf && artFiltrados
                ?   <main className="perfil-dashboard aff-dash">
                        <div className="container dashboard dashboard-aff dash-info-aff">
                            <div className="container title-icon d-flex">
                                <p className="dashboard-title">Info. Personal</p>
                                <div className="container edit-cont">
                                    <button onClick={afEditInfo} className="btn edit">
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
                                <p className="dashboard-texto">Nombre: {afiliado.nombre}</p>
                                <p className="dashboard-texto">Correo: {afiliado.correo}</p>
                                <p className="dashboard-texto">Ciudad: {afiliado.ciudad}</p>
                                <p className="dashboard-texto">Colonia: {afiliado.colonia}</p>
                                <p className="dashboard-texto">Dirección: {afiliado.calleNo}</p>
                                <p className="dashboard-texto">Teléfono: {afiliado.telefono}</p>
                            </div>
                        </div>
                        <div className="container dashboard dashboard-aff dash-items-aff">
                            <div className="sub-cont-items" onClick={afValorarArt}>
                                <div className="title-icon">
                                    <p className="dashboard-title">Artículos por valorar</p>
                                    <div className="edit-cont">
                                        <button className="btn edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F5DBE1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <circle cx="5" cy="18" r="3" />
                                                <circle cx="19" cy="18" r="3" />
                                                <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                                                <circle cx="17" cy="5" r="1" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="items-container row">
                                    {articulos.articulos
                                        ?   articulos.articulos.map(articulo => 
                                                <div key={articulo._id} className="cardcontainer mx-2 col-4">
                                                    <div className="contheader-item">
                                                        <p className="text text-tipo">{articulo.tipoEntrada}</p>
                                                    </div>
                                                    <div className="contmain-item">
                                                        <p className="text text-conttitle">{articulo.marca}</p>
                                                        <p className="text text-modelo">{articulo.modelo}</p>
                                                    </div>
                                                    <div className="contfooter-item">
                                                        <p className="text text-tipo">{articulo.tipoBicicleta}</p>
                                                    </div>
                                                </div>
                                            )
                                        :   <p>{articulos.articulos.length}</p>
                                    }
                                </div>
                            </div>
                            <div className="sub-cont-items valorados" onClick={afValorados}>
                                <div className="title-icon">
                                    <p className="dashboard-title">Artículos Valorados</p>
                                    <div className="edit-cont">
                                        <button className="btn edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F5DBE1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <circle cx="5" cy="18" r="3" />
                                                <circle cx="19" cy="18" r="3" />
                                                <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                                                <circle cx="17" cy="5" r="1" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="cont-number-valorados">
                                    {artsValoradosAf
                                        ?   <p className="text-number">{artsValoradosAf.valoradosAf.length}</p>
                                        :   <p className="text-number">0</p>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="container dashboard dashboard-aff dash-citas-aff">
                            <div onClick={afCitas} className="sub-cont">
                                <div className="title-icon d-flex">
                                    <p className="container dashboard-title">Citas Pendientes</p>
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
                                    {artFiltrados.map( cita => 
                                        <div key={cita._id} className="pendientes-cont">
                                            <div className="cita-cont">
                                                <p className="dashboard-texto text-center text-map">{returnNames(cita.usuarioId)}</p>
                                            </div>
                                            <div className="cita-cont">
                                                <p className="dashboard-texto text-center text-map">{estandarizarFecha(cita.fecha)}</p>
                                            </div>
                                            <div className="cita-cont">
                                                <p className="dashboard-texto text-center text-map">{cita.hora} hrs.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="sub-cont aceptadas">
                                <div className="title-icon d-flex">
                                    <p className="container dashboard-title">Citas Aceptadas</p>
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
                                    { pendientes.pendientes
                                        ?   pendientes.pendientes.map( cita => 
                                                <div key={cita._id} className="pendientes-cont">
                                                    <div className="cita-cont">
                                                        <p className="dashboard-texto text-center text-map">{returnPendNames(cita.articuloId)}</p>
                                                    </div>
                                                    <div className="cita-cont">
                                                        <p className="dashboard-texto text-center text-map">{estandarizarPendFecha(cita.articuloId)}</p>
                                                    </div>
                                                    <div className="cita-cont">
                                                        <p className="dashboard-texto text-center text-map">{returnHora(cita.articuloId)} hrs.</p>
                                                    </div>
                                                </div>
                                            )
                                        :   null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="container dashboard dashboard-aff dash-msjs-aff" onClick={afMsjs}>
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
                        <div className="container dashboard dashboard-aff dash-favs-aff" onClick={afNotificaciones}>
                            <div className="container title-icon d-flex">
                                <p className="dashboard-title">Notificaciones</p>
                                <div className="container edit-cont">
                                    <button className="btn edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell-ringing" width="22" height="22"  strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                                            <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
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
            {afiliado && editInfoAf ? <EditInfo/> : null}
            {afiliado && citasAf ? <CitasAff/> : null}
            {afiliado && valorarArtAf ? <ValorarArt/> : null}
            {afiliado && valoradosAf ? <ValoradosAf/> : null}
            {afiliado && notificacionesAf ? <NotificacionesAff/> : null}
            {afiliado && msjPerfilAf ? <MensajesAff/> : null}
        </Fragment>
     );
}
 
export default PerfilAfiliado;