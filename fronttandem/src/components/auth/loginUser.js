import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const LoginUser = () => {
    const alertaContext = useContext(AlertaContext);
    const {mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {iniciarSesion} = authContext;

    //Definir state para login
    const [usuario, setUsuario] =useState({
        correo:'',
        password:''
    });

    const {correo, password} = usuario;

    const loginChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    const loginSubmit = e => {
        e.preventDefault();

        //Validar los campos
        if(correo.trim() === '' || password.trim() === ''){mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')}

        //Pararlo al action
        if(correo.trim() !== '' && password.trim() !== ''){iniciarSesion({correo, password})};
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
                <input type="submit" className="login-submit usuario" value="Iniciar Sesión"/>
            </div>
            <Link to="/signup"><p className="loginLink">¿No tienes cuenta?, Regístrate aquí.</p></Link>
        </form>
     );
}
 
export default LoginUser;