import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertaContext from '../../context/alertas/alertaContext';

const LoginAfiliado = () => {
    //Alerta
    const alertaContext = useContext(AlertaContext);
    const {mostrarAlerta} = alertaContext;

    //Auth
    const authContext = useContext(AuthContext);
    const {afiliadoLogin} = authContext;

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
        if(correo.trim() === '' || password.trim() === ''){mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')}
        if(correo.trim() !== '' && password.trim() !== ''){afiliadoLogin({correo, password})};
    }
    
    return ( 
        <form 
            className="cont-login"
            onSubmit={loginSubmit}>
            <div className="login-form">
                <input
                    type="email"
                    className="loginput-box"
                    id="correo"
                    name="correo"
                    placeholder="nombre@correo.com"
                    autoComplete="off"
                    value={correo}
                    onChange={loginChange}
                />
            </div>
            <div className="login-form">
                <input 
                    type="password"
                    className="loginput-box"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    autoComplete="off"
                    value={password}
                    onChange={loginChange}
                />
            </div>
            <div className="login-form">
                <input type="submit" className="login-submit afiliado" value="Iniciar Sesión"/>
            </div>
            <Link to="/signup"><p className="loginLink">¿No tienes cuenta?, Regístrate aquí.</p></Link>
        </form>
     );
}
 
export default LoginAfiliado;