import React, {useState, useContext, useEffect} from 'react';
import foto1 from '../.././media/imgs/signup-laker-1.jpg'
import foto2 from '../.././media/imgs/signup-anna-tarazevich-2.jpg'
import foto3 from '../.././media/imgs/signup-alyssa-rose-3.jpg'
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const SignUpAff = (props) => {
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

    const [usuario, setUsuario] = useState({
        nombre:'',
        apellido:'',
        correo:'',
        password:'',
        confirmar:'',
        telefono: ''
    });

    const [user, setUser]= useState(true);

    const {nombre, apellido, correo, password, confirmar, telefono} = usuario;

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
            password,
            telefono
        });
    }
    return ( 
        <main className="container-fluid sup-main-cont">
            {alerta ? ( <div className={`alerta ${alerta.categoria}`}><p className="alerta-text">{alerta.msg}</p></div>) : null}
            <div className="cont-img one">
                <img className="image-fit" src={foto2} alt="sup-img"/>
            </div>
            <div className="cont-img two">
                <img className="image-fit" src={foto1} alt="sup-img"/>
            </div>
            <div className="cont-img three">
                <img className="image-fit" src={foto3} alt="sup-img"/>
            </div>
            <div className="cont-main-form">
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
                                    className="input-box"
                                    id="confirmar"
                                    name="confirmar"
                                    placeholder="Confirmar contraseña"
                                    value={confirmar}
                                    onChange={signupChange}
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
            </div>
            <div className="cont-title">
                <p className="text">Registro</p>
            </div>
            <div className="container cont-aff">
                <p className='link-aff' onClick={() => setUser(false)}>Afiliados</p>
            </div>
        </main>
     );
}
 
export default SignUpAff;