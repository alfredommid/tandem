import React, {useReducer} from 'react';
import perfilReducer from './perfilReducer';
import perfilContext from './perfilContext';
import { DASHBOARD, PERFIL_ARTICULO, PERFIL_EDITAR, PERFIL_CONFIRMAR_ELIMINAR, PERFIL_ELIMINARART } from '../../types'


const PerfilState = (props) => {
    const initialState = {
        dashborad: true,
        articulo: false,
        editarArt: false,
        eliminarArt: false,
        confEliminar: false,
        eliminado: false
    }

    const [state, dispatch] = useReducer(perfilReducer, initialState);

    const mainDashboard = () => {dispatch ({ type: DASHBOARD})}
    const mainArticulo = () => {dispatch ({ type: PERFIL_ARTICULO})}
    const editArticulo = () => {dispatch ({ type: PERFIL_EDITAR})}
    const confirmEliminar = () => {dispatch ({ type: PERFIL_CONFIRMAR_ELIMINAR})}
    const eliminar = () => {dispatch ({ type: PERFIL_ELIMINARART})}
    return ( 
        <perfilContext.children
            value={{
                dashboard: state.dashborad,
                articulo: state.articulo,
                articuloId: state.articuloId,
                editarArt: state.editarArt,
                eliminarArt: state.eliminarArt,
                mainDashboard,
                mainArticulo,
                editArticulo,
                confirmEliminar,
                eliminar
            }}
            >
            {props.children}
        </perfilContext.children>
     );
}
 
export default PerfilState;