import React, { useReducer } from 'react';
import perfilReducer from './perfilReducer';
import perfilContext from './perfilContext';
import { DASHBOARD, PERFIL_ARTICULO, PERFIL_EDITAR, PERFIL_CONFIRMAR_ELIMINAR, PERFIL_ELIMINARART } from '../../types'


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
        msj: false
    }

    const [state, dispatch] = useReducer(perfilReducer, initialState);

    const mainDashboard = () => {dispatch ({ type: DASHBOARD})}
    const mainArticulo = () => {dispatch ({ type: PERFIL_ARTICULO})}
    const editArticulo = () => {dispatch ({ type: PERFIL_EDITAR})}
    const confirmEliminar = () => {dispatch ({ type: PERFIL_CONFIRMAR_ELIMINAR})}
    const eliminar = () => {dispatch ({ type: PERFIL_ELIMINARART})}
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
                mainDashboard,
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