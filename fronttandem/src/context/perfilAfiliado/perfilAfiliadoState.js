import React, { useReducer } from 'react';
import perfilAfiliadoContext from './perfilAfiliadoContext';
import perfilAfiliadoReducer from './perfilAfiliadoReducer';
import {CREAR_PENDIENTE, TRAER_PENDIENTES, FILTRAR_PENDIENTES, CREAR_VALORADO, QUITAR_VALORADO, PERFIL_AF_DASHBOARD, PERFIL_AF_EDITINFO, PERFIL_AF_VALORAR_ART, PERFIL_AF_VALORADOS,  PERFIL_AF_ART_FORM_VALORAR, PERFIL_AF_REMOVE_SELECTED, PERFIL_AF_NOTIFICACIONES, PERFIL_AF_CITAS, PERFIL_AF_MSJ, TRAER_VALORADOS } from '../../types';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const PerfilAfiliadoState = (props) => {
    const initialState = {
        dashboardAf: true,
        editInfoAf: false,
        valorarArtAf: false,
        valoradosAf: false,
        artSelected: false,
        notificacionesAf: false,
        citasAf: false,
        msjPerfilAf: false,
        citasAceptAf: '',
        artsValoradosAf: '',
        artAValorar: '',
        pendientes: '',
        aceptadosSesion: '',
        msjsAf: '',
        artFiltrados: '',
        artValorado:false
    }

    const [state, dispatch] = useReducer(perfilAfiliadoReducer, initialState);

    const afDashboard = () => {dispatch ({ type: PERFIL_AF_DASHBOARD})};
    const afEditInfo = () => {dispatch ({ type: PERFIL_AF_EDITINFO})};
    const afValorarArt = () => {dispatch ({ type: PERFIL_AF_VALORAR_ART})};
    const afValorados = () => {dispatch ({type: PERFIL_AF_VALORADOS})};
    const afArtSelected = (arreglo) => {dispatch ({ type: PERFIL_AF_ART_FORM_VALORAR, payload: arreglo})};
    const afRemoveSelected = () => {dispatch ({ type: PERFIL_AF_REMOVE_SELECTED})};
    const afNotificaciones = () => {dispatch ({ type: PERFIL_AF_NOTIFICACIONES})};
    const afCitas = () => {dispatch ({ type: PERFIL_AF_CITAS})};
    const afMsjs = () => {dispatch ({ type: PERFIL_AF_MSJ})};
    const afAprobarPendiente = async (idArt) => {
        const token = localStorage.getItem('token');
        if(token){tokenAuth(token)}
        try {
            const respuesta = await clienteAxios.post(`/tandem/pendientes/crear/${idArt}`);
            dispatch({
                type: CREAR_PENDIENTE,
                payload: respuesta
            })
        } catch (error) {
            console.log(error);
        }
        
    };
    const afCrearValorado = async(idPen, datos) => {
        const token = localStorage.getItem('token');
        if(token){tokenAuth(token)};
        try {
            const respuesta = await clienteAxios.post(`/tandem/valorados/${idPen}`, datos);
            dispatch({
                type: CREAR_VALORADO,
                payload: respuesta.data
            });
            setTimeout(() => {
                dispatch({
                    type: QUITAR_VALORADO
                })
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    };
    const afGetPendientes = async () => {
        const token = localStorage.getItem('token');
        if(token){tokenAuth(token)}
        try {
            const respuesta = await clienteAxios.get('/tandem/pendientes/confirmado');
            dispatch({
                type: TRAER_PENDIENTES,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error)
        }
    }
    const filtrarArticulosAf = (arr1, arr2) => {
        try {
            const arrayFiltrado = arr1.filter(art => !arr2.find( pendObj => pendObj.articuloId === art._id));
            dispatch({
                type: FILTRAR_PENDIENTES,
                payload: arrayFiltrado
            })
        } catch (error) {
            console.log(error)
        }
    }

    const afGetValorados = async() => {
        const token = localStorage.getItem('token');
        if(token){tokenAuth(token)}
        try {
            const respuesta = await clienteAxios.get('/tandem/valorados/afiliado');
            console.log(respuesta.data);
            dispatch({
                type: TRAER_VALORADOS,
                payload: respuesta.data
            })
        } catch (error) {
            
        }
    }

    return(
        <perfilAfiliadoContext.Provider value={{
            dashboardAf:state.dashboardAf,
            editInfoAf:state.editInfoAf,
            valorarArtAf:state.valorarArtAf,
            valoradosAf:state.valoradosAf,
            artSelected:state.artSelected,
            notificacionesAf:state.notificacionesAf,
            citasAf:state.citasAf,
            msjPerfilAf:state.msjPerfilAf,
            citasAceptAf:state.citasAceptAf,
            artsValoradosAf:state.artsValoradosAf,
            artAValorar:state.artAValorar,
            pendientes:state.pendientes,
            aceptadosSesion:state.aceptadosSesion,
            msjsAf:state.msjsAf,
            artFiltrados:state.artFiltrados,
            artValorado:state.artValorado,
            afDashboard,
            afEditInfo,
            afValorarArt,
            afValorados,
            afArtSelected,
            afRemoveSelected,
            afNotificaciones,
            afCitas,
            afMsjs,
            afAprobarPendiente,
            afCrearValorado,
            afGetPendientes,
            filtrarArticulosAf,
            afGetValorados
        }}>
            {props.children}
        </perfilAfiliadoContext.Provider>
    )
}

export default PerfilAfiliadoState;