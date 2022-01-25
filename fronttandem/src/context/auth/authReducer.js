import {REGISTRO_EXITOSO, REGISTROAF_EXITOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, AFLOGIN_EXITOSO, OBTENER_AFILIADO, LOGIN_ERROR, CERRAR_SESION} from '../../types';

// eslint-disable-next-line
export default (state, action ) => {
    switch(action.type){
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado:true,
                mensaje: null,
                cargando: false
            }
        case REGISTROAF_EXITOSO:
        case AFLOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                afauth: true,
                mensaje: null,
                cargando: false
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload.usuario,
                cargando: false
            }
        case OBTENER_AFILIADO:
            return {
                ...state,
                afauth: true,
                afiliado: action.payload.afiliado,
                cargando: false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload,
                cargando:false
            }

        default:
            return state;
    }
}
