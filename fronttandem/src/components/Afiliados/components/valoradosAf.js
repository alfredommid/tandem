/* eslint-disable no-unreachable */
import React, { useContext, useEffect } from 'react';
import PerfilAfiliadoContext from '../../../context/perfilAfiliado/perfilAfiliadoContext';
import { Card, CardBody, CardFooter } from 'reactstrap';

const ValoradosAf = () => {
    const perfilAfiliadoContext = useContext(PerfilAfiliadoContext);
    const { artsValoradosAf, afGetValorados, afArtSelected} = perfilAfiliadoContext;

    // eslint-disable-next-line
    useEffect(() => {afGetValorados()}, []);

    const setColor = (tipo) => {
        // eslint-disable-next-line default-case
        switch(tipo){
            case 'Triatlon': return '#DBE709'; break;
            case 'Ruta': return '#FF6A5D'; break;
            case 'Montaña': return '#894FDA'; break;
            case 'Urbana': return '#F69A11'; break;
            case 'Otra': return '#F5DBE1'; break;
        }
    }

    const sendInfo = (id) => {
        const artSeleccionado = artsValoradosAf.valoradosAf.filter(art => art._id === id);
        afArtSelected(artSeleccionado[0]);
    }
    return ( 
        <main className="container articard-cont">
            {artsValoradosAf
                ?   artsValoradosAf.valoradosAf.map(item => 
                        <Card key={item._id} id={item._id} className="col-3 mx-2 cont-card">
                            <CardBody className="cont-cardbody">
                                    <div className="cont-color" style={{backgroundColor: setColor(item.tipoBicicleta)}}>
                                        <div className="container cont-img"></div>
                                    </div>
                                    <div className="container cont-info">
                                        <div className="container title-sub">
                                            <p className="text-1">{item.modelo}</p>
                                            <p  className="text-2">{item.marca}</p>
                                        </div>
                                        <div className="container specs">
                                            <p className="text-3">Talla: {item.talla}</p>
                                            <p className="text-3">{item.tipoBicicleta}</p>
                                            <p className="text-3 estatus">Pendiente</p>
                                        </div>
                                    </div>
                            </CardBody>
                            <CardFooter className="cont-cardfooter">
                                    <p className="footer-text">{item.tipoEntrada}</p>
                                    <button onClick={()=>sendInfo(item._id)} className="btn edit d-flex">
                                        <p className="btn btn-text">Evaluar</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                                            <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                                            <polyline points="12 8 7 3 3 7 8 12" />
                                            <line x1="7" y1="8" x2="5.5" y2="9.5" />
                                            <polyline points="16 12 21 17 17 21 12 16" />
                                            <line x1="16" y1="17" x2="14.5" y2="18.5" />
                                        </svg>
                                    </button>
                            </CardFooter>
                        </Card>
                    )
                :   null
            }
        </main>
    );
}
 
export default ValoradosAf;