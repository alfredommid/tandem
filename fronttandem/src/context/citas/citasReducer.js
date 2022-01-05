import {ASIGNAR_FECHA, ASIGNAR_HORA, OBTENER_AFILIADOID} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case OBTENER_AFILIADOID:
            return {
                ...state,
                afiliadoInfo:action.payload.afiliado
            }
        case ASIGNAR_FECHA:
            return{
                ...state,
                fechaCita:action.payload
            }
        case ASIGNAR_HORA:
            return{
                ...state,
                horaCita:action.payload
        }
        default:
            return state;
    }
}