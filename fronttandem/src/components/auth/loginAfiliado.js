import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertaContext from '../../context/alertas/alertaContext';

const LoginAfiliado = (props) => {
    //Alerta
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //Auth
    const authContext = useContext(AuthContext);
    const {mensaje, afauth, afiliadoLogin} = authContext;

    useEffect(() => {
        if(mensaje){ mostrarAlerta(mensaje.msg, mensaje.categoria) };
        if(afauth){ props.history.push('/afiliado/dashboard')}
        // eslint-disable-next-line
    }, [mensaje, afauth, props.history]);

    //Definir state para login
    const [afiliado, setAfiliado] =useState({
        correo:'',
        password:''
    });

    const {correo, password} = afiliado;

    const loginChange = e => {
        setAfiliado({
            ...afiliado,
            [e.target.name] : e.target.value
        })
    }

    //Para iniciar sesión
    const loginSubmit = e => {
        e.preventDefault();

        //Validar los campos
        if(correo.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
        }

        //Pararlo al action
        afiliadoLogin({correo, password});
    }
    
    return ( 
        <main>
            <h1>Gracias por estar de vuelta</h1>
        </main>
     );
}
 
export default LoginAfiliado;