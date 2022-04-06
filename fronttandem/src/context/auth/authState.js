import React, {useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {REGISTRO_EXITOSO, REGISTROAF_EXITOSO, ACT_AFILIADO, REGISTRO_ERROR, OBTENER_USUARIO, OBTENER_NOMBRES_USUARIOS, LOGIN_EXITOSO, AFLOGIN_EXITOSO, OBTENER_AFILIADO, LOGIN_ERROR, CERRAR_SESION} from '../../types';
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
        cargando: true,
        nombresUsuarios: '',
        afAct: false
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

    //registrar Afiliado
    const registrarAfiliado = async datos => {
        try {
            const respuesta = await clienteAxios.post('/tandem/afiliados', datos);
            dispatch({
                type: REGISTROAF_EXITOSO,
                payload: respuesta.data
            });
            //Obtener Usuario autenticado
            afiliadoAutenticado();
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
    //Login Afiliado
    const afiliadoLogin = async datos => {
        try {
            const respuesta = await clienteAxios.post('/tandem/afiliados/login', datos);
            dispatch({
                type: AFLOGIN_EXITOSO,
                payload: respuesta.data
            })
        } catch (error) {
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
    const obtenerUsuarioId = async(arreglo) => {
        const token = localStorage.getItem('token');
        if(token){
            // TODO Fn enviar token por headers
            tokenAuth(token);
        }
        try {
            let stateNames = []
            let i = 0
            while (i < arreglo.length ) {
                const respuesta = await Promise.resolve(clienteAxios.get(`/tandem/usuarios/${arreglo[i].usuarioId}`));
                const nombreFinal = `${respuesta.data.usuario.nombre} ${respuesta.data.usuario.apellido}`;
                // eslint-disable-next-line no-loop-func
                stateNames.push({ 'idUsuario' : arreglo[i].usuarioId, 'nombre': nombreFinal, 'idArticulo': arreglo[i]._id })
                i++
            }
            dispatch({
                type: OBTENER_NOMBRES_USUARIOS,
                payload: stateNames
            });
        } catch (error) {
            console.log(error)
        }
    }

    const editarAfiliado = (id, datos) => {
        const respuesta = clienteAxios.put(`/tandem/afiliados/${id}`, datos)
        try {
            dispatch({
                type: ACT_AFILIADO,
                payload: respuesta.data
            });
        } catch (error) {
            console.log(error)
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
                nombresUsuarios: state.nombresUsuarios,
                registrarUsuario,
                iniciarSesion,
                registrarAfiliado,
                afiliadoLogin,
                usuarioAutenticado,
                afiliadoAutenticado,
                obtenerUsuarioId,
                editarAfiliado,
                cerrarSesion
            }}
        >
            {props.children}
        </authContext.Provider>
     );
}
 
export default AuthState;