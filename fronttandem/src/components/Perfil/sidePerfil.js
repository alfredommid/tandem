import React, { useState } from 'react';

const SidePerfil = () => {
    const [ estatus, setEstatus ] = useState({
        not: false,
        art: false,
        cit: false,
        msj: false
    });

    const onEnter = (e) => {
        const tipo = e.target.id
        console.log(tipo)
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
            <div className="container sidebar-icons">
                {estatus.not
                    ?   <p onPointerOut={onOut} id="not" className="sidebar-text">Notificaciones</p>
                    :   <svg onPointerEnter={onEnter} id="not" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                }
            </div>
            <div className="container sidebar-icons">
                {estatus.art
                    ?   <p onPointerOut={onOut} id="art" className="sidebar-text">Artículos</p>
                    :   <svg onPointerEnter={onEnter} id="art" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="5" cy="18" r="3" />
                            <circle cx="19" cy="18" r="3" />
                            <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                            <circle cx="17" cy="5" r="1" />
                        </svg>
                }
            </div>
            <div className="container sidebar-icons">
                {estatus.cit
                    ?   <p onPointerOut={onOut} id="cit" className="sidebar-text">Citas</p>
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
            <div className="container sidebar-icons">
                {estatus.msj
                    ?   <p onPointerOut={onOut} id="msj" className="sidebar-text">Mensajes</p>
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
 
export default SidePerfil;