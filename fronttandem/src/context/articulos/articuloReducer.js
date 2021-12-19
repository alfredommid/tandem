import {  OBTENER_AFILIADOS, PRINCIPIO, INICIO_LISTO, TIPO_LISTO, INFO_LISTO, TALLER_LISTO, CITA_LISTA, IMGS_LISTO, OBTENER_ARTICULOS_USUARIO, REGISTRAR_ARTICULO, QUITAR_REGISTRO, ELIMINAR_ARTICULO, OBTENER_ARTICULOID } from '../../types'
/*OBTENER_ESPECIFICO, VALIDAR_FORMULARIO, ARTICULO_ACTUAL, ELIMINAR_ARTICULO,*/

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case OBTENER_AFILIADOS:
            return {
                ...state,
                afiliados: action.payload.afiliados
            }
        case PRINCIPIO:
            return {
                ...state,
                inicio:true,
                tipo:false,
                info:false,
                taller:false,
                cita:false,
                imgs:false,
                fin:false
            }
        case INICIO_LISTO:
            return {
                ...state,
                inicio:false,
                tipo:true,
                info:false
            }
        case TIPO_LISTO:
            return {
                ...state,
                inicio:false,
                tipo:false,
                info:true,
                taller:false
            }
        case INFO_LISTO:
            return {
                ...state,
                inicio:false,
                tipo:false,
                info:false,
                taller:true,
                cita:false,
                fin:false
            }
        case TALLER_LISTO:
            //TODO quitar el false de imgs y quitar todo el state de fin
            return {
                ...state,
                inicio:false,
                tipo:false,
                info:false,
                taller:false,
                cita:true,
                imgs:false,
                fin: false
            }
        case CITA_LISTA:
                //TODO quitar el false de imgs y quitar todo el state de fin
            return {
                ...state,
                inicio:false,
                tipo:false,
                info:false,
                taller:false,
                cita:false,
                imgs:false,
                fin: true
            }
        case IMGS_LISTO:
            return {
                ...state,
                inicio:false,
                tipo:false,
                info:false,
                taller:false,
                imgs:false,
                fin:true
            }
        case OBTENER_ARTICULOS_USUARIO:
            return {
                ...state,
                articulos: action.payload
            }
        case OBTENER_ARTICULOID:
            return {
                ...state,
                articulo:action.payload
            }
        case REGISTRAR_ARTICULO:
            return{
                ...state,
                registrado: true,
            }
        case QUITAR_REGISTRO:
            return{
                ...state,
                inicio:true,
                tipo:false,
                info:false,
                taller:false,
                imgs:false,
                fin:false,
                registrado: null
            }
        case ELIMINAR_ARTICULO:
            return{
                ...state,
                
            }
        default:
            return state;
    }
}