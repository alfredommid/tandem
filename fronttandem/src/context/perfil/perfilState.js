import React, { useReducer } from 'react';
import perfilReducer from './perfilReducer';
import perfilContext from './perfilContext';
import { DASHBOARD, PERFIL_ARTICULO, PERFIL_EDITAR, PERFIL_CONFIRMAR_ELIMINAR, PERFIL_ELIMINARART, ARTICULOS, NOTIFICACIONES, CITAS, MENSAJES, FAVORITOS } from '../../types'


const PerfilState = (props) => {
    const initialState = {
        dashboard: true,
        articulo: false,
        editarArt: false,
        eliminarArt: false,
        confEliminar: false,
        eliminado: false,
        editarInfo: false,
        notificaciones:false,
        items: false,
        citas: false,
        msj: false,
        favs: false
    }

    const [state, dispatch] = useReducer(perfilReducer, initialState);

    const mainDashboard = () => {dispatch ({ type: DASHBOARD})};
    const fnNotificaciones = () => {dispatch ({ type: NOTIFICACIONES})};
    const fnArticulos = () => {dispatch ({ type: ARTICULOS})};
    const fnCitas = () => {dispatch ({ type: CITAS})};
    const fnMsjs = () => {dispatch ({ type: MENSAJES})};
    const fnFavs = () => {dispatch ({ type: FAVORITOS})};
    const mainArticulo = () => {dispatch ({ type: PERFIL_ARTICULO})};
    const editArticulo = () => {dispatch ({ type: PERFIL_EDITAR})};
    const confirmEliminar = () => {dispatch ({ type: PERFIL_CONFIRMAR_ELIMINAR})};
    const eliminar = () => {dispatch ({ type: PERFIL_ELIMINARART})};
    return ( 
        <perfilContext.Provider value={{
                dashboard: state.dashboard,
                articulo: state.articulo,
                editarArt: state.editarArt,
                eliminarArt: state.eliminarArt,
                confEliminar: state.confEliminar,
                eliminado: state.eliminado,
                notificaciones: state.notificaciones,
                items: state.items,
                citas: state.citas,
                msj: state.msj,
                favs: state.favs,
                mainDashboard,
                fnNotificaciones,
                fnArticulos,
                fnCitas,
                fnMsjs,
                fnFavs,
                mainArticulo,
                editArticulo,
                confirmEliminar,
                eliminar
            }}>
            {props.children}
        </perfilContext.Provider>
     );
}
 
export default PerfilState;