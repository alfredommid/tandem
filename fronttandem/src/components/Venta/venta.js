import React, { Fragment, useEffect, useState, useContext } from 'react';
import LoggedHeader from './Layout/loggedHeader';
import AuthContext from '../../context/auth/authContext';
import ArticuloContext from '../../context/articulos/articuloContext';
import CardContext from '../../context/card/cardContext';
import AlertaContext from '../../context/alertas/alertaContext';
import AfiliadosCard from './Card/card'


const Venta = (props) => {

    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const articuloContext = useContext(ArticuloContext);
    const { inicio, tipo, info, taller, fin, registrado, principioFn, inicioFn, tipoFn, infoFn, tallerFn, registrarArticulo } = articuloContext;
    //TODO extraer del state para mostrar cada uno de los forms ( info, taller, imgs)

    const cardContext = useContext(CardContext);
    const {idAfiliado} = cardContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    //TODO En lugar de hacer el .push a /tienda se tiene que quitar el true de publicado una vez que se publique y después ya hacer el .push a /tienda.
    useEffect(() => {
        if(registrado){
            props.history.push('/tienda');
        }
        if(idAfiliado){
            setEntrada({
                ...entrada,
                afiliadoId: idAfiliado
            })
        }
    }, [registrado, props.history, idAfiliado])

    const [entrada, setEntrada] =useState({
        tipoEntrada:'',
        marca:'',
        year:'',
        modelo:'',
        talla:'',
        color:'',
        tipoBicicleta:'',
        afiliadoId:''
    });

    const [isChecked, setIsChecked] = useState([
        false,
        false
    ]);

    // const handleOnChange = (e) => {
    //     setIsChecked(
    //         ...isChecked,
    //         [e.target.name] = !isChecked);
    //     console.log(e.target.value)}

    /*const [images, setImages] = useState();
    const [ preview, setPreview] = useState();

    useEffect(() => {
        if(images){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(images)
        } else {
            setPreview(null);
        }
    }, [images])*/

    const {tipoEntrada, marca, year, modelo, talla, color, tipoBicicleta, afiliadoId} = entrada;
    

    const formChange = e => {
        setEntrada({
            ...entrada,
            [e.target.name]: e.target.value
        })
    }

    const handleOnChange = (position) => {
        const updatedCheckedState = isChecked.map((item, index) =>
            index === position ? !item : item
        );
        
        setIsChecked(updatedCheckedState);
        if(updatedCheckedState[0]) { setEntrada({...entrada, tipoEntrada:'Venta'}) }
        if(updatedCheckedState[1]) { setEntrada({...entrada, tipoEntrada:'Renta'}) }
        if(!updatedCheckedState[0] && !updatedCheckedState[1]) { setEntrada({...entrada, tipoEntrada:''}) }
    };

    const onClickInicio = e => { e.preventDefault(); inicioFn(); }
    const onClickInfo = e => { e.preventDefault();
        if (marca.trim() === '' || year.trim() === '' || modelo.trim() === '' || talla.trim() === '' || color.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error'); return;} infoFn(); }
    const onClickTipo = e => { e.preventDefault();if (tipoEntrada.trim() === ''){ mostrarAlerta('Todos los campos son obligatorios', 'alerta-error'); return;} tipoFn(); }
    const onClickTaller= e => { e.preventDefault();if (afiliadoId.trim() === ''){ mostrarAlerta('Todos los campos son obligatorios', 'alerta-error'); return;} tallerFn(); }

    /*const imageChange= e => {
        const img = e.target.files[0];
        if(img){
            setImages(img);
        } else {
            setImages(null);
        }
    }*/

    const formSubmit = e => {
        e.preventDefault();

        // Pasarlo al action
        registrarArticulo({
            tipoEntrada,
            marca,
            year,
            modelo,
            talla,
            color,
            tipoBicicleta,
            afiliadoId
        })
    }

    return ( 
        <Fragment>
            <LoggedHeader/>
            <div className="conteneform">
                <div className="container-fluid row d-flex align-items-start cont-card">
                    {inicio 
                        ?   <div className="cont-steps">
                                <p className="step step-off d-flex justify-content-start">¿Venta o Renta?</p>
                                <p className="step step-off d-flex justify-content-start">Información Básica</p>
                                <p className="step step-off d-flex justify-content-start">Taller Afiliado</p>
                                <p className="step step-off d-flex justify-content-start">Imágenes</p>
                            </div>
                        :   null
                    }
                    {tipo 
                        ?   <div className="cont-steps">
                                {tipoEntrada !== ''
                                    ?   <p className="step step-on d-flex justify-content-start">&#10004; ¿Venta o Renta?</p>
                                    :   <p className="step step-on d-flex justify-content-start">¿Venta o Renta?</p>
                                }
                                <p className="step d-flex justify-content-start">Información Básica</p>
                                <p className="step d-flex justify-content-start">Taller Afiliado</p>
                                <p className="step d-flex justify-content-start">Imágenes</p>
                            </div>
                        :   null
                    }
                    {info 
                        ?   <div className="cont-steps">
                                <p className="step step-on d-flex justify-content-start">&#10004; ¿Venta o Renta?</p>
                                {tipoEntrada !== '' && marca !== '' && year !== '' && modelo !== '' && talla !== '' && color !== ''
                                    ?   <p className="step step-on d-flex justify-content-start">&#10004; Información Básica</p>
                                    :   <p className="step step-on d-flex justify-content-start">Información Básica</p>
                                }
                                <p className="step d-flex justify-content-start">Taller Afiliado</p>
                                <p className="step d-flex justify-content-start">Imágenes</p>
                            </div>
                        :   null
                    }
                    {taller
                        ?   <div className="cont-steps">
                                <p className="step step-on d-flex justify-content-start">&#10004; ¿Venta o Renta?</p>
                                <p className="step step-on d-flex justify-content-start">&#10004; Información Básica</p>
                                {afiliadoId !== ''
                                    ?   <p className="step step-on d-flex justify-content-start">&#10004; Taller Afiliado</p>
                                    :   <p className="step step-on d-flex justify-content-start">Taller Afiliado</p>
                                }
                                <p className="step step d-flex justify-content-start">Imágenes</p>
                            </div>
                        :   null
                    }
                    {fin
                        ?   <div className="cont-steps">
                        <p className="step step-on d-flex justify-content-start">&#10004; ¿Venta o Renta?</p>
                        <p className="step step-on d-flex justify-content-start">&#10004; Información Básica</p>
                        <p className="step step-on d-flex justify-content-start">&#10004; Taller Afiliado</p>
                        <p className="step step-on d-flex justify-content-start">&#10004; Imágenes</p>
                    </div>
                        :   null
                    }
                    
                    <div className="cont-logo"></div>
                    {/* <img className="checkmark" src="https://img.icons8.com/nolan/64/checkmark.png"/> */}
                </div>
                <form 
                    className="container form-cont"
                    onSubmit={formSubmit}>
                        {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> : null}
                    {inicio
                    ?   <main className="container principal-form">
                            <div className="container sec-form inicio">
                                {usuario
                                    ?   <p className="intro-text">
                                            Hola <span className="nombre-usuario">{usuario.nombre}</span>, gracias por confiar en Tandem<br></br> 
                                            para vender o rentar tu bicicleta.</p>
                                        
                                    :   <p className="intro-text">
                                            Hola, gracias por confiar en Tandem<br></br> para vender o Rentar tu bicicleta.<br></br></p>
                                }
                                <p className="intro-text">
                                            Nuestra misión es ofrecer bicicletas<br></br> totalmente evaluadas y a un precio justo,<br></br>
                                            tanto para el vendedor como para el comprador.<br></br></p>
                                <p className="intro-text">
                                    Por lo que va a ser necesario que lleves tu bicicleta<br></br>
                                    a evaluar a una de las tiendas de nuestros afiliados.<br></br></p>
                                <p className="intro-text">
                                    Una vez evaluada tu bicicleta, nuestro afiliado<br></br> 
                                    le asignará un precio y una calificación<br></br> dependiendo del estado general.<br></br></p>
                                <p className="intro-text">
                                    ¡Muchas gracias por confiar en<br></br>
                                    Tandem!
                                </p>
                            </div>
                            <button className="btn intro btn-step" onClick={onClickInicio}>
                                    Empezar
                            </button>
                        </main>
                    :   null
                    }
                    {tipo 
                        ?   <main className="container principal-form cont-tipo">
                                <div className="container title-form">
                                    <h2>¿Quieres vender o rentar tu bicicleta?</h2>
                                </div>
                                <div className="cont-checboxes">
                                    <div className="container sec-form tipo uno">
                                        {tipoEntrada === 'Venta'
                                            ?   <input className="check-input" defaultChecked type="checkbox" id="venta" onClick={() => handleOnChange(0)} name="Venta" value="Venta"/>
                                            :   null
                                        }
                                        {tipoEntrada === 'Renta'
                                            ?   <input className="check-input" disabled type="checkbox" id="venta" onClick={() => handleOnChange(0)} name="Venta" value="Venta"/>
                                            :   null
                                        }
                                        {tipoEntrada === ''
                                            ?   <input className="check-input" type="checkbox" id="venta" onClick={() => handleOnChange(0)} name="Venta" value="Venta"/>
                                            :   null
                                        }
                                        <div className="contenido-tipo"></div>
                                    </div>
                                    <div className="container sec-form tipo dos">
                                    {tipoEntrada === 'Renta'
                                            ?   <input className="check-input" defaultChecked type="checkbox" id="renta" onClick={() => handleOnChange(1)} name="Renta" value="Renta"/>
                                            :   null
                                        }
                                        {tipoEntrada === 'Venta'
                                            ?   <input className="check-input" disabled type="checkbox" id="renta" onClick={() => handleOnChange(1)} name="Renta" value="Renta"/>
                                            :   null
                                        }
                                        {tipoEntrada === ''
                                            ?   <input className="check-input" type="checkbox" id="renta" onClick={() => handleOnChange(1)} name="Renta" value="Renta"/>
                                            :   null
                                        }
                                        <div className="contenido-tipo"></div>
                                    </div>
                                </div>
                                <div className="cont-buttons">
                                    <button className="btn btn-step" onClick={() => {principioFn()}}>
                                        Atrás
                                    </button>
                                    <button className="btn btn-step" onClick={onClickTipo}>
                                        Siguiente
                                    </button>
                                </div>
                                
                            </main>
                        :   null
                    }
                    {info
                        ?   <main className="container principal-form">
                                <div className="container title-form">
                                    <h2>Cuéntanos un poco de tu bicicleta.</h2>
                                </div>
                                <div className="container cont-sec-form">
                                    <div className="container sec-form info">
                                        <label htmlFor="marca">Marca</label>
                                        <input
                                            type="text"
                                            className="input-box mx-5"
                                            id="marca"
                                            name="marca"
                                            placeholder="Trek"
                                            value={marca}
                                            onChange={formChange}
                                            autoComplete="off"
                                        />    
                                    </div>
                                    <div className="container sec-form info">
                                        <label htmlFor="year">Año</label>
                                        <input
                                            type="text"
                                            className="input-box mx-5"
                                            id="year"
                                            name="year"
                                            placeholder="ej. 2019"
                                            value={year}
                                            onChange={formChange}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className="container cont-sec-form">
                                    <div className="container sec-form info">
                                        <label htmlFor="modelo">Modelo</label>
                                        <input
                                            type="text"
                                            className="input-box mx-5"
                                            id="modelo"
                                            name="modelo"
                                            placeholder="Modelo"
                                            value={modelo}
                                            onChange={formChange}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="container sec-form info">
                                        <label htmlFor="talla">Talla</label>
                                        <input
                                            type="text"
                                            className="input-box mx-5"
                                            id="talla"
                                            name="talla"
                                            placeholder="Ej. 54 o M"
                                            value={talla}
                                            onChange={formChange}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className="container cont-sec-form">
                                    <div className="container sec-form info">
                                        <label htmlFor="especificaciones">Color</label>
                                        <input
                                            type="text"
                                            className="input-box mx-5"
                                            id="color"
                                            name="color"
                                            placeholder="Color"
                                            value={color}
                                            onChange={formChange}
                                            autoComplete="off"
                                        ></input>
                                    </div>
                                    <div className="container info sec-form tipoBicicleta">
                                        <label htmlFor="tipoBicicleta">Tipo de Bicicleta</label>
                                        <select 
                                            className="input-box mx-5"
                                            id="tipoBicicleta"
                                            name="tipoBicicleta" 
                                            onChange={formChange} 
                                            value={tipoBicicleta}>
                                            <option className="opt-form" value="" defaultValue hidden>Seleccionar</option>
                                            <option className="opt-form" value="Triatlon">Triatlón</option>
                                            <option className="opt-form" value="Ruta">Ruta</option>
                                            <option className="opt-form" value="Montaña">Montaña</option>
                                            <option className="opt-form" value="Urbana">Urbana</option>
                                            <option className="opt-form" value="Otra">Otra</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cont-buttons">
                                    <button className="btn btn-step" onClick={onClickInicio}>
                                    Atrás
                                    </button>
                                    <button className="btn btn-step" onClick={onClickInfo}>
                                    Siguiente
                                    </button>
                                </div>
                            </main>
                        :   null
                    }
                    {taller
                        ?   <main className="container principal-form">
                                <div className="container title-form">
                                    <h2>¿Dónde quieres que evalúen tu bicicleta?</h2>
                                 </div>
                                {/*<div className="container sec-form afiliado">
                                    <label htmlFor="afiliadoId">Taller de Evaluación</label>
                                    <select 
                                        className="input-box mx-5"
                                        id="afiliadoId"
                                        name="afiliadoId" 
                                        onChange={formChange} 
                                        value={afiliadoId}>
                                        <option value="" defaultValue className="option-taller" hidden>Seleccionar</option>
                                        {afiliados
                                            ?   afiliados.map( afiliado => <option className="option-taller" key={afiliado._id} value={afiliado._id}>{afiliado.nombre}</option> )
                                            :   null
                                        }
                                    </select>
                                </div> */}
                                <AfiliadosCard/>
                                <div className="cont-buttons">
                                    <button className="btn btn-step" onClick={onClickTipo}>
                                        Atrás
                                    </button>
                                    <button className="btn btn-step" onClick={onClickTaller}>
                                        Siguiente
                                    </button>
                                </div>
                                
                            </main>
                        :   null
                    }
                    {fin 
                        ?   <main className="container principal-form">
                                <div className="ontainer title-form">
                                    <h2 className="text-center">¿Está lista tu publicación?</h2>
                                </div>
                                <div className="cont-buttons">
                                    <button className="btn btn-step" onClick={onClickInfo}>Atrás</button>
                                    <input type="submit" className="btn btn-step" value="¡Listo!"/>
                                </div>
                            </main>
                        :   null
                    }

                    {/*<div className="cont-input7">
                        <label htmlFor="img">Imágenes</label>
                        <input
                            type="file"
                            className="input-box"
                            id="img"
                            name="img"
                            multiple
                            accept="image/*"
                            onChange={imageChange}
                        />
                        <div className="preview">
                            <img src={preview} alt="preview" />
                        </div>
                    </div>*/}
                </form>
            </div>
        </Fragment>
     );
}
 
export default Venta;