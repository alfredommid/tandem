import React, { useState, useContext } from 'react';
import 'animate.css'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertaContext from '../../context/alertas/alertaContext';

const AffForm = () => {
    //Alerta
    const alertaContext = useContext(AlertaContext);
    const {mostrarAlerta} = alertaContext;

    //Auth
    const authContext = useContext(AuthContext);
    const {registrarAfiliado} = authContext;

    const [afiliado, setAfiliado] = useState({
        nombre:'',
        correo:'',
        password:'',
        confirmar: '',
        telefono: '',
        colonia: '',
        cp: '',
        calleNo: '' 
    });

    const {nombre, correo, password,confirmar, telefono, colonia, cp, calleNo} = afiliado;

    const signupChange = e => {
        setAfiliado({
            ...afiliado,
            [e.target.name] : e.target.value
        })
    }

    const signupSubmit = e => {
        e.preventDefault();

        //TODO Validar los campos
        if(nombre.trim() === '' || correo.trim() === '' || password.trim() === '' || confirmar.trim() === '' || telefono.trim() === '' || colonia.trim() === '' || cp.trim() === '' || calleNo.trim() === '' ){
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
        registrarAfiliado({
            nombre,
            correo,
            password,
            telefono,
            colonia,
            cp,
            calleNo
        });
    }

    return (
        <form 
            className="container form-quest" 
            onSubmit={signupSubmit}
            autoComplete="off" 
            autoCapitalize="off">
            <div className="container form-body">
                <div className="campos-form campos-aff cont-names">
                    <input
                        type="text"
                        className="input-box  mx-2"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        autoComplete="off"
                        value={nombre}
                        onChange={signupChange}
                    />
                </div>
                <div className="campos-form campos-aff">
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
                <div className="campos-form campos-aff">
                    <input 
                        type="password"
                        className="input-box input-names mx-2"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={signupChange}
                    />
                    <input 
                        type="password"
                        className="input-box input-names mx-2"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Confirmar contraseña"
                        value={confirmar}
                        onChange={signupChange}
                    />
                </div>
                <div className="campos-form campos-aff">
                    <input
                        type="text"
                        className="input-box input-names mx-2"
                        id="colonia"
                        name="colonia"
                        placeholder="Colonia"
                        autoComplete="off"
                        value={colonia}
                        onChange={signupChange}
                    />
                    <input
                        type="text"
                        className="input-box input-names mx-2"
                        id="cp"
                        name="cp"
                        placeholder="CP"
                        autoComplete="off"
                        value={cp}
                        onChange={signupChange}
                    />
                </div>
                <div className="campos-form campos-aff">
                    <input
                        type="text"
                        className="input-box"
                        id="calleNo"
                        name="calleNo"
                        placeholder="Calle y número"
                        autoComplete="off"
                        value={calleNo}
                        onChange={signupChange}
                    />
                </div>
                <div className="campos-form campos-aff">
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
 
export default AffForm;