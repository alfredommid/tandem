import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';
import banner from './media/banner.svg';
import logo_s from'./media/logo_s.svg';

const SignUp = (props) => {
    //Valores del context
    //Alerta
    const alertaContext = useContext(AlertaContext); 
    const {alerta, mostrarAlerta} = alertaContext;

    //Auth
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario} = authContext;

    //UseEffect para la auth del usuario
    useEffect(() => {
        if(autenticado){
            props.history.push('/tienda');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }// eslint-disable-next-line
    }, [mensaje, autenticado, props.history])

    const [usuario, setUsuario] =useState({
        nombre:'',
        apellido:'',
        correo:'',
        password:'',
        confirmar:''
    });

    const {nombre, apellido, correo, password, confirmar} = usuario;

    const signupChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Para iniciar sesión
    const signupSubmit = e => {
        e.preventDefault();

        //TODO Validar los campos
        if(nombre.trim() === '' || apellido.trim() === '' || correo.trim() === '' || password.trim() === '' || confirmar.trim() === '' ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        //TODO password mínimo de 6 caracters
        if(password.length < 6){
            mostrarAlerta('La contraseña debe de ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        //TODO passwords que match
        if(password !== confirmar){
            mostrarAlerta('Las contraseñas no coinciden', 'alerta-error');
            return;
        }

        //TODO Pasarlo al action(hacer el .post en la API)
        registrarUsuario({
            nombre,
            apellido,
            correo,
            password
        });
    }

    //Form para auth
    return (
        <div className="signup">
            {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="cont-form">
                <Link to="/">
                    <svg className="w-6 h-6 chevron" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </Link>
                <p className="titulo">Registro</p>
                <form 
                    className="form-quest" 
                    onSubmit={signupSubmit}
                    autoComplete="off" 
                    autoCapitalize="off">
                    <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                className="input-box"
                                id="nombre"
                                name="nombre"
                                placeholder="Nombre y Apellido"
                                value={nombre}
                                onChange={signupChange}
                            />
                    </div>
                    <div className="campo-form">
                            <label htmlFor="apellido">Apellido</label>
                            <input
                                type="text"
                                className="input-box"
                                id="apellido"
                                name="apellido"
                                placeholder="Nombre y Apellido"
                                value={apellido}
                                onChange={signupChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="correo">Correo</label>
                        <input 
                                type="correo"
                                className="input-box"
                                id="correo"
                                name="correo"
                                placeholder="nombre@correo.com"
                                autoComplete="off"
                                value={correo}
                                onChange={signupChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input 
                                type="password"
                                className="input-box"
                                id="password"
                                name="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={signupChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar contraseña</label>
                        <input 
                                type="password"
                                className="input-box"
                                id="confirmar"
                                name="confirmar"
                                placeholder="Confirmar contraseña"
                                value={confirmar}
                                onChange={signupChange}
                        />
                        <Link to={"/login"} className="logink">
                        ¿Ya tienes una cuenta? Inicia Sesión.
                        </Link>
                    </div>
                    
                    <div className="campo-form">
                        <input type="submit" className="submit-btn" value="¡Listo!"/>
                    </div>
                    
                    <div className="cont-logo animate__animated animate__rubberBand animate__delay-2s animate__slower">
                        <img className="logo-small" src={logo_s} alt="logo-s"/>
                    </div> 
                </form>
                
            </div>
            
            <div className="cont-banner">
                <img className="banner" src={banner} alt="banner"/>
            </div>
        </div>
     );
}
 
export default SignUp;