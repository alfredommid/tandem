import { DASHBOARD, NOTIFICACIONES, ARTICULOS, CITAS, MENSAJES, FAVORITOS, PERFIL_ARTICULO, PERFIL_EDITAR, PERFIL_CONFIRMAR_ELIMINAR, PERFIL_ELIMINARART } from '../../types'

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
                notificaciones:false,
                items: false,
                citas: false,
                msj: false,
                favs: false,
                articulo:false,
                eliminado:false
            }
        case NOTIFICACIONES:
            return {
                ...state,
                dashboard:false,
                notificaciones:true,
                items: false,
                citas: false,
                msj: false,
                favs: false
            }
        case ARTICULOS:
            return {
                ...state,
                dashboard:false,
                notificaciones:false,
                items: true,
                citas: false,
                msj: false,
                favs: false
            }
        case CITAS:
            return {
                ...state,
                dashboard:false,
                notificaciones:false,
                items: false,
                citas: true,
                msj: false,
                favs: false
            }
        case MENSAJES:
            return {
                ...state,
                dashboard:false,
                notificaciones:false,
                items: false,
                citas: false,
                msj: true,
                favs: false
            }
        case FAVORITOS:
            return {
                ...state,
                dashboard:false,
                notificaciones:false,
                items: false,
                citas: false,
                msj: false,
                favs: true
            }
        case PERFIL_EDITAR:
            return {
                ...state,
                dashboard: true,
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