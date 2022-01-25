import React, {useState, useContext, useEffect} from 'react';
import foto1 from '../.././media/imgs/signup-laker-1.jpg';
import foto2 from '../.././media/imgs/signup-anna-tarazevich-2.jpg';
import foto3 from '../.././media/imgs/signup-alyssa-rose-3.jpg';
import UserForm from '../auth/userForm';
import AffForm from './affForm';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const SignUpAff = (props) => {
    //Valores del context
    //Alerta
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //Auth
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, afauth} = authContext;

    //UseEffect para la auth del usuario
    useEffect(() => {
        if(autenticado){
            props.history.push('/tienda');
        }
        if(afauth){
            props.history.push('/afiliado/dashboard')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }// eslint-disable-next-line
    }, [mensaje, autenticado, afauth, props.history])
    const [user, setUser]= useState(true);

    return ( 
        <main className="container-fluid sup-main-cont">
            {alerta ? ( <div className={`alerta`}><p className="alerta-text">{alerta.msg}</p></div>) : null}
            <div className="container chevron">
                <Link to="/">
                    <svg className="w-6 h-6 icon-chevron" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </Link>
            </div>
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
                { user 
                    ?   <UserForm/>
                    :   <AffForm/>}
            </div>
            <div className="cont-title">
                <p className="text">Registro</p>
            </div>
            <div className="container cont-user">
                { user
                    ?   <p className='link-aff'>Usuarios</p>
                    :   <p className='link-aff link-off' onClick={() => setUser(true)}>Usuarios</p>
                }
            </div>
            <div className="container cont-aff">
                { user
                    ?   <p className='link-aff link-off' onClick={() => setUser(false)}>Afiliados</p>
                    :   <p className='link-aff'>Afiliados</p>
                }
            </div>
        </main>
     );
}
 
export default SignUpAff;