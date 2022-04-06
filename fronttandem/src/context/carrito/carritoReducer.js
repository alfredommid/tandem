import { ADD_CART, DELETE_CART, STOP_LOADING, DEF_CAT } from '../../types'

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case DELETE_CART:
            const newArr = [...state.cartItems];
            newArr.splice(action.payload, 1);
            return {
                ...state,
                cartItems: newArr,
                cargando: true
            }
        case ADD_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                cargando: true
            }
        case STOP_LOADING:
            return {
                ...state,
                cargando: false
            }
        case DEF_CAT:
            return {
                ...state,
                catBic: action.payload
            }
        default:
            return state;
    }
}