import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';
import lowBanner from './media/lower_banner.svg';
import LoginUser from './loginUser';
import LoginAfiliado from './loginAfiliado'

const Login = (props) => {
    //Alerta
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //Auth
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, afauth} = authContext;

    //UseEffect para errores de log in
    useEffect(() => {
        if(autenticado){ props.history.push('/tienda') };
        if(mensaje){ mostrarAlerta(mensaje.msg, mensaje.categoria) };
        if(afauth){ props.history.push('/afiliado/dashboard')}
        // eslint-disable-next-line
    }, [mensaje, autenticado, afauth, props.history])

    const [cliente, setCliente] = useState('usuario');

    //TODO Form for the auth
    
    return ( 
        <main className={`log-cont ${cliente}`}>
            <div className="header-cont">
                <Link to="/">
                    <svg className="w-6 h-6 backChevron" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </Link>
                {alerta ? ( <div className={`alerta`}><p className="alerta-text">{alerta.msg}</p></div>) : null}
            </div>
            <main className="form-container">
                {cliente === 'usuario'
                    ?   <div className="container link-cont">
                            <p className="container mx-2 type-cont link-on link-usuario" onClick={() => setCliente('usuario')}>Usuario</p>
                            <p className="container mx-2 type-cont link-off link-afiliado" onClick={() => setCliente('afiliado')}>Afiliado</p>
                        </div>
                    :   null
                }
                {cliente === 'afiliado'
                    ?   <div className="container link-cont">
                            <p className="container mx-2 type-cont link-off link-usuario" onClick={() => setCliente('usuario')}>Usuario</p>
                            <p className="container mx-2 type-cont link-on link-afiliado" onClick={() => setCliente('afiliado')}>Afiliado</p>
                        </div>
                    :   null
                }
                
                <div className={`container principal-cont ${cliente}-selected`}>
                    <h1 className="titulo">¡A rodar!</h1>
                    {cliente === 'usuario'
                        ?   <LoginUser/>
                        :   null
                    }
                    {cliente === 'afiliado'
                        ?   <LoginAfiliado/>
                        :   null
                    }
                </div>
            </main>
            <div className="banner-container">
                <img className="low-banner" src={lowBanner} alt="banner"/>
            </div>
        </main>
     );
}
 
export default Login;