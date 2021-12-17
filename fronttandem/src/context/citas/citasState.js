import React, { useReducer } from 'react';
import citasReducer from './citasReducer';
import CitasContext from './citasContext';
import tokenAuth from '../../config/tokenAuth';
import clienteAxios from '../../config/axios';
import { OBTENER_AFILIADOID, ASIGNAR_HORA, ASIGNAR_FECHA } from '../../types';

const CitasState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        afiliadoInfo: '',
        horaCita:'',
        fechaCita:''
    }
    const [state, dispatch] = useReducer(citasReducer, initialState);

    const obtenerAfiliadoId = async (id) => {
        const token = localStorage.getItem('token');
        if(token){
            // Fn enviar token por headers
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get(`/tandem/afiliados/${id}`);
                dispatch({
                    type: OBTENER_AFILIADOID,
                    payload: respuesta.data.afiliado
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const definirHora = (hora) => {
        dispatch({
            type: ASIGNAR_HORA,
            payload: hora
        })
    }

    const definirFecha = (fecha) => {
        dispatch({
            type:ASIGNAR_FECHA,
            payload:fecha
        })
    }


    return ( 
        <CitasContext.Provider value={{
            afiliadoInfo:state.afiliadoInfo,
            horaCita: state.horaCita,
            fechaCita:state.fechaCita,
            obtenerAfiliadoId,
            definirHora,
            definirFecha
        }}>
            {props.children}
        </CitasContext.Provider>
     );
}
 
export default CitasState;
