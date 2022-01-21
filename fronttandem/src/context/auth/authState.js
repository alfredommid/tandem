import React, {useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {REGISTRO_EXITOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, AFLOGIN_EXITOSO, OBTENER_AFILIADO, LOGIN_ERROR, CERRAR_SESION} from '../../types';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        afauth: null,
        afiliado: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Fns

    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/tandem/usuarios', datos);
            console.log(respuesta.data);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });

            //Obtener Usuario autenticado
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    }

    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token){
            // TODO Fn enviar token por headers
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/tandem/auth');
                dispatch({
                    type: OBTENER_USUARIO,
                    payload: respuesta.data
                })
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: LOGIN_ERROR
            })
        }
        
    }

    // Login Usuario
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/tandem/auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });

            //Obtener usuario autenticado
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    //Login Afiliado
    const afiliadoLogin = async datos => {
        try {
            const respuesta = await clienteAxios.post('/tandem/afiliados/login', datos);
            dispatch({
                type: AFLOGIN_EXITOSO,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    //obtener Afiliado
    const afiliadoAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token){
            // TODO Fn enviar token por headers
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/tandem/afiliados/login');
                dispatch({
                    type: OBTENER_AFILIADO,
                    payload: respuesta.data
                })
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: LOGIN_ERROR
            })
        }
        
    }

    //Logout
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        });
    }


    return ( 
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                afauth: state.afauth,
                afiliado: state.afiliado,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                afiliadoLogin,
                usuarioAutenticado,
                afiliadoAutenticado,
                cerrarSesion
            }}
        >
            {props.children}
        </authContext.Provider>
     );
}
 
export default AuthState;