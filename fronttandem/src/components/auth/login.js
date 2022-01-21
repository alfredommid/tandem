import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';
import lowBanner from './media/lower_banner.svg';

const Login = (props) => {
    //Alerta
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //Auth
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, afauth, iniciarSesion} = authContext;

    //UseEffect para errores de log in
    useEffect(() => {
        if(autenticado){ props.history.push('/tienda') };
        if(mensaje){ mostrarAlerta(mensaje.msg, mensaje.categoria) };
        if(afauth){ props.history.push('/afiliado/dashboard')}
        // eslint-disable-next-line
    }, [mensaje, autenticado, afauth, props.history])

    const [tipoCliente, setTipoCliente] = useState({
        usuario:true,
        afiliado:false
    });

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

    //Para iniciar sesión
    const loginSubmit = e => {
        e.preventDefault();

        //Validar los campos
        if(correo.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
        }

        //Pararlo al action
        iniciarSesion({correo, password});
    }

    //TODO Form for the auth
    
    return ( 
        <main className="log-cont">
            <Link to="/">
                <svg className="w-6 h-6 backChevron" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </Link>
            {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <main className="form-container">
                <h1 className="titulo">¡A rodar!</h1>
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
                        <input type="submit" className="login-submit" value="Iniciar Sesión"/>
                    </div>
                </form>
                <Link to="/signup">
                    <p className="loginLink">
                        ¿No tienes cuenta?, Regístrate aquí.
                    </p>
                </Link>
            </main>
            <div className="banner-container">
                <img className="low-banner" src={lowBanner} alt="banner"/>
            </div>
        </main>
     );
}
 
export default Login;