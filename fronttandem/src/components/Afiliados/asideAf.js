import React, {useState, useContext} from 'react';
import PerfilAfiliadoContext from '../../context/perfilAfiliado/perfilAfiliadoContext';

const AsideAf = () => {
    const [ estatus, setEstatus ] = useState({
        dash: true,
        not: false,
        cit: false,
        pen: false,
        vals: false,
        msj: false
    });

    const perfilAfiliadoContext = useContext(PerfilAfiliadoContext);
    const {afDashboard, afValorarArt, afValorados, afNotificaciones, afCitas, afMsjs } = perfilAfiliadoContext;

    const onEnter = (e) => {
        const tipo = e.target.id
        if(!estatus.tipo){
            setEstatus({...estatus, [tipo]:true})
        }else{
            setEstatus({...estatus, [tipo]:false})
        }
    }
    const onOut = (e) => {
        const tipo = e.target.id
        setEstatus({...estatus, [tipo]:false})

    }
    return ( 
        <aside className="container sidebar-perfil">
            <div className="container sidebar-icons dash">
                {estatus.dash
                    ?   <p onPointerOut={onOut} onClick={afDashboard} id="dash" className="sidebar-text">Dashboard</p>
                    :   <svg onPointerEnter={onEnter} xmlns="http://www.w3.org/2000/svg" id="dash" className="icon icon-tabler icon-tabler-smart-home" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
                            <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
                        </svg>
                }
            </div>
            <div className="container sidebar-icons not">
                {estatus.not
                    ?   <p onPointerOut={onOut} onClick={afNotificaciones} id="not" className="sidebar-text">Notificaciones</p>
                    :   <svg onPointerEnter={onEnter} id="not" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                }
            </div>
            <div className="container sidebar-icons pen">
                {estatus.pen
                    ?   <p onPointerOut={onOut} onClick={afValorarArt} id="pen" className="sidebar-text">Por Valorar</p>
                    :   <svg onPointerEnter={onEnter} id="pen" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-check" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="10" cy="10" r="7" />
                        <path d="M21 21l-6 -6" />
                        <path d="M7 10l2 2l4 -4" />
                      </svg>
                }
            </div>
            <div className="container sidebar-icons vals">
                {estatus.vals
                    ?   <p onPointerOut={onOut} onClick={afValorados} id="vals" className="sidebar-text">Valorados</p>
                    :   <svg onPointerEnter={onEnter} id="vals" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checks" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 12l5 5l10 -10" />
                        <path d="M2 12l5 5m5 -5l5 -5" />
                      </svg>
                }
            </div>
            <div className="container sidebar-icons cit">
                {estatus.cit
                    ?   <p onPointerOut={onOut} onClick={afCitas} id="cit" className="sidebar-text">Citas</p>
                    :   <svg onPointerEnter={onEnter} id="cit" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="5" width="16" height="16" rx="2" />
                            <line x1="16" y1="3" x2="16" y2="7" />
                            <line x1="8" y1="3" x2="8" y2="7" />
                            <line x1="4" y1="11" x2="20" y2="11" />
                            <rect x="8" y="15" width="2" height="2" />
                        </svg>
                }
            </div>
            <div className="container sidebar-icons msj">
                {estatus.msj
                    ?   <p onPointerOut={onOut} onClick={afMsjs} id="msj" className="sidebar-text">Mensajes</p>
                    :   <svg onPointerEnter={onEnter} id="msj" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-2"viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                            <line x1="8" y1="9" x2="16" y2="9" />
                            <line x1="8" y1="13" x2="14" y2="13" />
                        </svg>
                }
            </div>
        </aside>
     );
}
 
export default AsideAf;