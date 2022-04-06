import { PERFIL_AF_DASHBOARD, TRAER_PENDIENTES, FILTRAR_PENDIENTES, TRAER_VALORADOS, CREAR_VALORADO, QUITAR_VALORADO, PERFIL_AF_EDITINFO, PERFIL_AF_VALORAR_ART,PERFIL_AF_ART_FORM_VALORAR, PERFIL_AF_VALORADOS, PERFIL_AF_REMOVE_SELECTED, PERFIL_AF_NOTIFICACIONES, PERFIL_AF_CITAS, PERFIL_AF_MSJ, CREAR_PENDIENTE } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case PERFIL_AF_DASHBOARD:
            return {
                ...state,
                dashboardAf:true,
                editInfoAf: false,
                valorarArtAf: false,
                valoradosAf: false,
                notificacionesAf: false,
                citasAf: false,
                msjPerfilAf: false
            }
        case PERFIL_AF_EDITINFO:
            return {
                ...state,
                dashboardAf:false,
                editInfoAf:true,
                valorarArtAf: false,
                valoradosAf: false,
                notificacionesAf: false,
                citasAf: false,
                msjPerfilAf: false
            }
        case PERFIL_AF_VALORAR_ART:
            return {
                ...state,
                dashboardAf: false,
                editInfoAf: false,
                valorarArtAf: true,
                valoradosAf: false,
                notificacionesAf: false,
                citasAf: false,
                msjPerfilAf: false
            }
        case PERFIL_AF_VALORADOS:
            return {
                ...state,
                dashboardAf: false,
                editInfoAf: false,
                valorarArtAf: false,
                valoradosAf: true,
                notificacionesAf: false,
                citasAf: false,
                msjPerfilAf: false
            }
        case PERFIL_AF_ART_FORM_VALORAR:
            return {
                ...state,
                artSelected: true,
                artAValorar: action.payload
            }
        case PERFIL_AF_REMOVE_SELECTED:
            return {
                ...state,
                artSelected: false,
                artAValorar: ''
            }
        case PERFIL_AF_NOTIFICACIONES:
            return {
                ...state,
                dashboardAf: false,
                editInfoAf: false,
                valorarArtAf: false,
                valoradosAf: false,
                notificacionesAf: true,
                citasAf: false,
                msjPerfilAf: false
            }
        case PERFIL_AF_CITAS:
            return {
                ...state,
                dashboardAf: false,
                editInfoAf: false,
                valorarArtAf: false,
                valoradosAf: false,
                notificacionesAf: false,
                citasAf: true,
                msjPerfilAf: false
            }
        case PERFIL_AF_MSJ:
            return {
                ...state,
                dashboardAf: false,
                editInfoAf: false,
                valorarArtAf: false,
                valoradosAf: false,
                notificacionesAf: false,
                citasAf: false,
                msjPerfilAf: true
            }
        case CREAR_PENDIENTE:
            return{
                ...state,
                aceptadosSesion: action.payload.data
            }
        case TRAER_PENDIENTES:
            return{
                ...state,
                pendientes: action.payload
            }
        case FILTRAR_PENDIENTES:
            return{
                ...state,
                artFiltrados: action.payload
            }
        case TRAER_VALORADOS:
            return{
                ...state,
                artsValoradosAf: action.payload
            }
        case CREAR_VALORADO:
            return{
                ...state,
                artValorado:true
            }
        case QUITAR_VALORADO:
            return{
                ...state,
                artValorado:false,
                dashboardAf:true
            }
        default:
            return state;
    }
}