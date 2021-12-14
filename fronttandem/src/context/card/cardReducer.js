import {AFILIADOID} from '../../types'

// eslint-disable-next-line
export default (state,action) => {
    switch(action.type){
        case AFILIADOID :
            return {
                ...state,
                idAfiliado:action.payload
            }
        default: 
            return state;
    }
}