import React, { useReducer } from 'react';
import articuloReducer from './articuloReducer';
import articuloContext from './articuloContext';
import tokenAuth from '../../config/tokenAuth';
import clienteAxios from '../../config/axios';
import {  OBTENER_AFILIADOS, PRINCIPIO, INICIO_LISTO, TIPO_LISTO, INFO_LISTO, TALLER_LISTO, CITA_LISTA, IMGS_LISTO, OBTENER_ARTICULOS_USUARIO, OBTENER_ARTICULOID, REGISTRAR_ARTICULO, QUITAR_REGISTRO, ELIMINAR_ARTICULO } from '../../types'

const ArticuloState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        afiliados: '',
        inicio: true,
        tipo: false,
        info: false,
        taller: false,
        cita: false,
        imgs: false,
        fin: false,
        registrado: false,
        articulos: '',
        articulo: ''
    }

    const [state, dispatch] = useReducer(articuloReducer, initialState);

    const obtenerAfiliados = async () => {
        const token = localStorage.getItem('token');
        if(token){
            // Fn enviar token por headers
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/tandem/afiliados');
                dispatch({
                    type: OBTENER_AFILIADOS,
                    payload: respuesta.data
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    const principioFn = () => { dispatch ( { type: PRINCIPIO } ) }
    const inicioFn = () => { dispatch ( { type: INICIO_LISTO } ) }
    const tipoFn = () => { dispatch ( { type: TIPO_LISTO } ) }
    const infoFn = () => { dispatch ( { type: INFO_LISTO } ) }
    const tallerFn = () => { dispatch ( { type: TALLER_LISTO } ) }
    const citaFn = () => { dispatch ( { type: CITA_LISTA } ) }
    const imgsFn = () => { dispatch ( { type: IMGS_LISTO } ) }
    const registrarArticulo = async datos => {
        const token = localStorage.getItem('token');
        if(token){
            // Fn enviar token por headers
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.post('/tandem/articulos', datos);
            dispatch({
                type: REGISTRAR_ARTICULO,
                payload: respuesta.data
            });
            setTimeout(() => {
                dispatch({
                    type: QUITAR_REGISTRO
                })
            }, 2000);
        } catch (error) {
            console.log(error.response);
        }

    }

    const obtenerArticulosUsuario = async () => {
        const token = localStorage.getItem('token');
        if(token){
            // Fn enviar token por headers
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/tandem/articulos')
            dispatch({
                type: OBTENER_ARTICULOS_USUARIO,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const obtenerArticuloId = async (articuloId) => {
        const token = localStorage.get('token');
        if(token){
            // Fn enviar token por headers
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get(`/tandem/articulos/${articuloId}`);
            dispatch({
                type: OBTENER_ARTICULOID,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const eliminarArticuloId = async (articuloId) => {
        const token = localStorage.get('token');
        if(token){
            // Fn enviar token por headers
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.delete(`/tandem/articulos/${articuloId}`);
            dispatch({
                type: ELIMINAR_ARTICULO,
                payload: respuesta
            });
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <articuloContext.Provider
        value={{
            token:state.token,
            afiliados:state.afiliados,
            inicio:state.inicio,
            tipo: state.tipo,
            info: state.info,
            taller: state.taller,
            cita: state.cita,
            imgs: state.imgs,
            fin: state.fin,
            registrado: state.registrado,
            articulos: state.articulos,
            articulo: state.articulo,
            principioFn,
            inicioFn,
            tipoFn,
            infoFn,
            tallerFn,
            citaFn,
            imgsFn,
            obtenerAfiliados,
            registrarArticulo,
            obtenerArticulosUsuario,
            obtenerArticuloId,
            eliminarArticuloId
        }}>
            {props.children}
        </articuloContext.Provider>
    )
}

export default ArticuloState;

