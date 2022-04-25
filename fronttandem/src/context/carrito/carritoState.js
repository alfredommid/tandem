import React, { useReducer, useState } from 'react';
import { ADD_CART, DELETE_CART, STOP_LOADING, DEF_CAT } from '../../types';
import carritoContext from './carritoContext';
import carritoReducer from './carritoReducer';

const CarritoState = props => {

    const initialState = {
        sesion: '',
        cartItems: [],
        cant: '',
        cargando: false,
        catBic: 'Todas'
    }

    const [state, dispatch] = useReducer(carritoReducer, initialState);
    
    const stopLoading = () => {dispatch({type: STOP_LOADING})}

    const agregarCart = (item) =>{
        const {modelo, marca, year, color, precio, _id} = item;
        const bicicleta = {
            id: _id,
            modeloBic: modelo,
            marcaBic: marca,
            yearBic: year,
            colorBic: color,
            precioBic: precio
        }
        dispatch({
            type: ADD_CART,
            payload: bicicleta
        })
        setTimeout(() => {
            stopLoading();
        }, 1500);
    }

    const eliminarCart = (id) => {
        const indexOfArray = state.cartItems.findIndex( item => (item._id === id ? true : null));
        dispatch({
            type: DELETE_CART,
            payload: indexOfArray
        })
        setTimeout(() => {
            stopLoading();
        }, 1500);
    }

    const defCat = (tipo) => {
        dispatch({
            type: DEF_CAT,
            payload: tipo
        })
    }

    return ( 
        <carritoContext.Provider
        value={{
            sesion: state.sesion,
            cartItems: state.cartItems,
            cant: state.cant,
            cargando: state.cargando,
            catBic: state.catBic,
            agregarCart,
            eliminarCart,
            defCat
        }}>
            {props.children}
        </carritoContext.Provider>
     );
}
 
export default CarritoState;