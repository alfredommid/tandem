import React, { useState, useContext } from 'react';
import 'animate.css'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertaContext from '../../context/alertas/alertaContext';

const UserForm = () => {
    //Alerta
    const alertaContext = useContext(AlertaContext);
    const {mostrarAlerta} = alertaContext;

    //Auth
    const authContext = useContext(AuthContext);
    const {registrarUsuario} = authContext;

    const [usuario, setUsuario] = useState({
        nombre:'',
        apellido:'',
        correo:'',
        password:'',
        confirmar:'',
        telefono: ''
    });

    const {nombre, apellido, correo, password, confirmar, telefono} = usuario;

    const signupChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

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
            password,
            telefono
        });
    }

    return (
        <form 
            className="container form-quest" 
            onSubmit={signupSubmit}
            autoComplete="off" 
            autoCapitalize="off">
            <div className="container form-body">
                <div className="campos-form cont-names">
                    <input
                        type="text"
                        className="input-box input-names mx-2"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        autoComplete="off"
                        value={nombre}
                        onChange={signupChange}
                    />
                    <input
                        type="text"
                        className="input-box input-names mx-2"
                        id="apellido"
                        name="apellido"
                        placeholder="Apellido"
                        autoComplete="off"
                        value={apellido}
                        onChange={signupChange}
                    />
                </div>
                <div className="campos-form">
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
                <div className="campos-form">
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
                <div className="campos-form">
                    <input 
                        type="password"
                        lassName="input-box"
                        d="confirmar"
                        ame="confirmar"
                        laceholder="Confirmar contraseña"
                        alue={confirmar}
                        nChange={signupChange}
                    />
                </div>
                <div className="campos-form">
                    <input
                        type="text"
                        className="input-box"
                        id="telefono"
                        name="telefono"
                        placeholder="Teléfono"
                        autoComplete="off"
                        value={telefono}
                        onChange={signupChange}
                    />
                </div>
            </div>
            <div className="container form-footer">
                <div className="campos-form">
                    <Link to={"/login"} className="logink">
                            ¿Ya tienes una cuenta? Inicia Sesión.
                    </Link>
                    <input type="submit" className="btn submit-btn" value="¡Listo!"/>
                </div>
            </div>
        </form>
        
     );
}
 
export default UserForm;