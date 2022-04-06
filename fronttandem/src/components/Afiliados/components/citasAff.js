import React, { useEffect, useContext } from 'react';
import ArticuloContext from '../../../context/articulos/articuloContext';
import AuthContext from '../../../context/auth/authContext';
import PerfilAfiliadoContext from '../../../context/perfilAfiliado/perfilAfiliadoContext';

const CitasAff = () => {
    const authContext = useContext(AuthContext);
    const { afiliado, afiliadoAutenticado, obtenerUsuarioId, nombresUsuarios } = authContext;
    
    const articuloContext = useContext(ArticuloContext);
    const { articulos, obtenerArticulosAfiliado } = articuloContext;

    const perfilAfiliadoContext = useContext(PerfilAfiliadoContext);
    const { afAprobarPendiente, pendientes, artFiltrados, afGetPendientes, filtrarArticulosAf } = perfilAfiliadoContext;

    // eslint-disable-next-line
    useEffect(() => {afiliadoAutenticado(), obtenerArticulosAfiliado(), afGetPendientes()}, []);
    // eslint-disable-next-line
    useEffect(() => {if(articulos){obtenerUsuarioId(articulos.articulos)}}, []);
    // eslint-disable-next-line
    useEffect(() => {if(articulos && pendientes){filtrarArticulosAf(articulos.articulos, pendientes.pendientes)}}, [pendientes.pendientes])

    const estandarizarFecha = (fechaLarga) => {
        const fecha = new Date(fechaLarga);
        let newFecha = fecha.toLocaleDateString();
        return newFecha;
    }

    const estandarizarPendFecha = (idArt) => {
        if(articulos){
            const buscarArt = articulos.articulos.filter(entry => entry._id === idArt);
            const fechaLarga = buscarArt[0].fecha;
            const fecha = new Date(fechaLarga);
            return fecha.toLocaleDateString();
        }
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


    return ( 
        <main className="citas-contenedor d-flex mx-3">
            <div className="toAcc-cont">
                <div className="title-citas-cont">
                    <p className="title-citas-text">Citas por aceptar</p>
                </div>
                <div className="cont-map-citas">
                    {afiliado && artFiltrados
                        ?   artFiltrados.map(item => 
                                <div key={item._id} className="container cardbody-cita">
                                    <p className="char-cita nombre-cita">{returnNames(item.usuarioId)}</p>
                                    <p className="char-cita fecha-cita">{estandarizarFecha(item.fecha)}</p>
                                    <p className="char-cita hora-cita">{item.hora} hrs.</p>
                                    <button onClick={() => afAprobarPendiente(item._id)} className="icon-cita-cont accepted-btn">
                                        <p className="btn btn-accept">Aceptar</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#45BF55" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="M9 12l2 2l4 -4" />
                                        </svg>
                                    </button>
                                </div>
                            )
                        :   null
                    }
                </div>
            </div>
            <div className="acc-cont">
                <div className="title-citas-cont">
                    <p className="title-citas-text">Citas Aceptadas</p>
                </div>
                <div className="cont-map-citas">
                    {afiliado && pendientes
                        ?   pendientes.pendientes.map(item => 
                                <div key={item._id} className="container cardbody-cita">
                                    <p className="char-cita nombre-cita">{returnPendNames(item.articuloId)}</p>
                                    <p className="char-cita fecha-cita">{estandarizarPendFecha(item.articuloId)}</p>
                                    <p className="char-cita hora-cita">{returnHora(item.articuloId)} hrs.</p>
                                </div>
                            )
                        :   null
                    }
                </div>
            </div>
        </main>
     );
}
 
export default CitasAff;