import React, { Fragment, useContext, useState, useEffect } from 'react';
import AuthContext from '../../../context/auth/authContext';
import AlertaContext from '../../../context/alertas/alertaContext';
import { Card } from 'reactstrap';

const EditInfo = () => {
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { afiliado, afiliadoAutenticado, editarAfiliado } = authContext;

    const [afiliadoEdit, setAfiliadoEdit] = useState({
        nombre: afiliado.nombre,
        correo: afiliado.correo,
        telefono: afiliado.telefono,
        colonia: afiliado.colonia,
        cp: afiliado.cp,
        calleNo: afiliado.calleNo,
        spinloader: false,
        success: false,
    });

    const [confirmacion, setConfirmacion] = useState(false);

    const {nombre, correo, password, telefono, colonia, cp, calleNo} = afiliadoEdit;
    // eslint-disable-next-line
    useEffect(() => {afiliadoAutenticado()}, []);

    const signupChange = e => {
        setAfiliadoEdit({
            ...afiliado,
            [e.target.name] : e.target.value
        })
    }

    const actualizar = e => {
        e.preventDefault()
        //TODO Pasarlo al action(hacer el .put en la API Actualizar)
        const idAfiliado = afiliado._id
        console.log(idAfiliado)
        editarAfiliado(idAfiliado, {
            nombre,
            correo,
            password,
            telefono,
            colonia,
            cp,
            calleNo
        });
    }

    const revisar = e => {
        e.preventDefault();

        //TODO Validar los campos
        if(nombre.trim() === '' || correo.trim() === '' || telefono.trim() === '' || colonia.trim() === '' || cp.trim() === '' || calleNo.trim() === '' ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        setConfirmacion(true);
    }

    return ( 
        <Fragment>
            {!confirmacion
                ?   <div>
                        <div className="edit-text">
                            <p className="texto-editar">Editar Información Personal</p>
                        </div>
                        <main className="main-editinfo">
                            
                            <form 
                                className="container form-quest"
                                onSubmit={revisar}
                                autoComplete="off" 
                                autoCapitalize="off">
                                <div className="container form-body">
                                    <div className="campos-form campos-aff cont-names">
                                        <p className="container form-titulo">Nombre</p>
                                        <input
                                            type="text"
                                            className="input-box"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Nombre"
                                            autoComplete="off"
                                            value={nombre}
                                            onChange={signupChange}
                                        />
                                    </div>
                                    <div className="campos-form campos-aff">
                                        <p className="container form-titulo">Correo</p>
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
                                        <p className="container form-titulo">Colonia</p>
                                        <input
                                            type="text"
                                            className="input-box input-names"
                                            id="colonia"
                                            name="colonia"
                                            placeholder="Colonia"
                                            autoComplete="off"
                                            value={colonia}
                                            onChange={signupChange}
                                        />
                                    </div>
                                    <div className="campos-form campos-aff">
                                        <p className="container form-titulo">CP</p>
                                        <input
                                            type="text"
                                            className="input-box input-names"
                                            id="cp"
                                            name="cp"
                                            placeholder="CP"
                                            autoComplete="off"
                                            value={cp}
                                            onChange={signupChange}
                                        />
                                    </div>
                                    <div className="campos-form campos-aff">
                                        <p className="container form-titulo">Dirección</p>
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
                                        <p className="container form-titulo">Teléfono</p>
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
                                        <input type="submit" className="btn submit-btn" value="Actualizar"/>
                                    </div>
                                </div>
                            </form>
                        </main>
                        {alerta ? ( <div className={`alerta alerta-mover`}><p className="alerta-text">{alerta.msg}</p></div>) : null}
                    </div>
                :   null
            }
            {confirmacion
                ?   <main className="confirm-edit">
                        <div className="container confirm-title">
                            <h1>¿Todos los datos son correctos?</h1>
                        </div>
                        <Card className="cont-card">
                            <div className="cardbody">
                                <aside className="cont-name">
                                   <p className="container nombre-aff">{nombre}</p> 
                                </aside>
                                <div className="container info-aff">
                                    <div className="container data-aff aff-mail">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-at aff-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="12" cy="12" r="4" />
                                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                                        </svg>
                                        <p className="aff-text big">{correo}</p>
                                    </div>
                                    <div className="container data-aff aff-tel-col">
                                        <div className="aff-2row tel">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone aff-icon mx-1" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                            </svg>
                                            <p className="aff-text small mx-1">{telefono}</p>
                                        </div>
                                        <div className="aff-2row colonia">
                                            <p className="aff-text small mx-1">{colonia}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="container data-aff aff-direccion">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin aff-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="12" cy="11" r="3" />
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                        </svg>
                                        <p className="aff-text big">{`${calleNo} ${cp}`}</p>
                                    </div>
                                    <div className="container data-aff aff-img"></div>       
                                </div>
                            </div>
                            <div className="cardfooter">
                                <input
                                    type="button"
                                    onClick={() => setConfirmacion(false)}
                                    className="btn submit-btn"
                                    value="Atrás"
                                />
                                <input
                                    type="button"
                                    onClick={actualizar}
                                    className="btn submit-btn"
                                    value="Confirmar"
                                />
                            </div>
                        </Card>
                    </main>
                :   null
            }
        </Fragment>
     );
}
 
export default EditInfo;