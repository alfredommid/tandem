import React, { useReducer } from 'react';
import cardContext from './cardContext';
import cardReducer from './cardReducer';
import { AFILIADOID } from '../../types';

const CardState = (props) => {
    const initialState = {
        idAfiliado:''
    }
    const [state, dispatch] = useReducer(cardReducer, initialState);

    const obtenerAfiliadoId = (id) => {
        try {
            dispatch({
                type: AFILIADOID,
                payload: id
            })
        } catch (error) {
            console.log(error.response)
        }
    }
    return ( 
        <cardContext.Provider
            value={{
                idAfiliado:state.idAfiliado,
                obtenerAfiliadoId
            }}
        >
            {props.children}
        </cardContext.Provider>
     );
}
 
export default CardState;