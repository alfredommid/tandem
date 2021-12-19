import { DASHBOARD, PERFIL_ARTICULO, PERFIL_EDITAR, PERFIL_CONFIRMAR_ELIMINAR, PERFIL_ELIMINARART } from '../../types'

//Obtener articulos por usuario fn foranea --> Desplegar con .map los artículos o artículo (dashboar:true) --> click  uno en específico con Fn foránea obtenerArticuloId() && fn perfilArticulo(articulo:true) --> 
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case PERFIL_ARTICULO:
            return {
                ...state,
                dashboard:false,
                articulo: true
            }
        case DASHBOARD:
            return {
                ...state,
                dashboard:true,
                articulo:false,
                eliminado:false
            }
        case PERFIL_EDITAR:
            return {
                ...state,
                dashboard: false,
                articulo: false,
                editarArt: true
            }
        case PERFIL_CONFIRMAR_ELIMINAR:
            return {
                ...state,
                dashboard: false,
                articulo: false,
                editarArt: false,
                confEliminar:true
            }
        case PERFIL_ELIMINARART:
            return {
                ...state,
                dashboard: false,
                articulo: false,
                editarArt: false,
                confEliminar:false,
                eliminado:true
            }
            default:
                return state;
    }
}