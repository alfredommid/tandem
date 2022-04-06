import React, {useContext, useState} from 'react';
import PerfilAfiliadoContext from '../../../context/perfilAfiliado/perfilAfiliadoContext';
import AlertaContext from '../../../context/alertas/alertaContext';
import 'animate.css';

const FormValorados = () => {
    const perfilAfiliadoContext = useContext(PerfilAfiliadoContext);
    const { artAValorar, afRemoveSelected, afCrearValorado, pendientes } = perfilAfiliadoContext;

    const { tipoEntrada, marca, year, modelo, talla, color, tipoBicicleta, _id } = artAValorar

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const [formVal, setFormVal] = useState({
        tipoEntradaVal: tipoEntrada,
        marcaVal: marca,
        yearVal: year,
        modeloVal: modelo,
        tallaVal: talla,
        colorVal: color,
        tipoBicicletaVal: tipoBicicleta,
        transmisionVal:'',
        cassetteVal:'',
        cuadroVal:'',
        tijeraVal:'',
        tipoLlantasVal:'',
        marcaLlantasVal:'',
        pesoVal:'',
        observacionesVal:'',
        calificacionVal:'',
        precioVal:''
    });

    const { tipoEntradaVal, marcaVal, yearVal, modeloVal, tallaVal, colorVal, tipoBicicletaVal, transmisionVal, cassetteVal, cuadroVal, tijeraVal, tipoLlantasVal, marcaLlantasVal, pesoVal, observacionesVal, calificacionVal, precioVal} = formVal;

    const formChange = e => {
        setFormVal({
            ...formVal,
            [e.target.name]: e.target.value
        })
    }

    const setColor = (e) => {
        console.log(e.target)
    }

    const revisar = e => {
        e.preventDefault();
        //TODO Validar los campos
        if(tipoEntradaVal.trim() === '' || marcaVal.trim() === '' || yearVal === '' || modeloVal.trim() === '' || tallaVal.trim() === '' || colorVal.trim() === '' || tipoBicicletaVal.trim() === '' || transmisionVal.trim() === '' || cassetteVal.trim() === '' || tipoLlantasVal.trim() === '' || cuadroVal.trim() === '' || tijeraVal.trim() === '' || tipoLlantasVal.trim() === '' || marcaLlantasVal.trim() === '' || pesoVal.trim() === '' || observacionesVal.trim() === '' || calificacionVal.trim() === '' || precioVal.trim() === ''){
            mostrarAlerta('Por favor llena todos los campos', 'alerta-error');
            return;
        }
        const idPen = pendientes.pendientes.filter(pendiente => _id === pendiente.articuloId);
        
        afCrearValorado(idPen[0]._id, formVal);
    }
    return ( 
        <main className="container valorar-cont">
            <div className="header-cont">
                <div className="chevron-cont">
                    <button className="btn chevron-action" onClick={afRemoveSelected}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="33" height="33" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="5" y1="12" x2="9" y2="16" />
                            <line x1="5" y1="12" x2="9" y2="8" />
                        </svg>
                        <p className="action-text">Atrás</p>
                    </button>
                    
                </div>
                {alerta ? ( <div className={`alerta alerta-mover alert-cont`}><p className="alerta-text">{alerta.msg}</p></div>) : null}
            </div>
            <div className="container main-cont">
                <div className="fillForm">
                    <div className="title-cont">
                        <select 
                            className="input-boxTipo"
                            id="tipoEntradaVal"
                            name="tipoEntradaVal" 
                            onChange={formChange} 
                            value={tipoEntradaVal}>
                            <option className="opt-form" value="Venta">Venta</option>
                            <option className="opt-form" value="Renta">Renta</option>
                        </select> 
                    </div>
                    <form onSubmit={revisar} className="form-container">
                        <div className="container inpform d-flex">
                            <div className="input-container mx-2">
                                <p className="title-input">Marca</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="marcaVal"
                                    name="marcaVal"
                                    placeholder='Ej. Trek'
                                    value={marcaVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="input-container mx-2">
                                <p className="title-input">Año</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="yearVal"
                                    name="yearVal"
                                    placeholder='Ej. 2019'
                                    value={yearVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="input-container mx-2">
                                <p className="title-input">Modelo</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="modeloVal"
                                    name="modeloVal"
                                    placeholder='Modelo'
                                    value={modeloVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                /> 
                            </div>
                        </div>
                        <div className="container inpform d-flex">
                            <div className="input-container mx-2">
                                <p className="title-input">Talla</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="tallaVal"
                                    name="tallaVal"
                                    placeholder='ej. ML o 56'
                                    value={tallaVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                /> 
                            </div>
                            <div className="input-container mx-2">
                                <p className="title-input">Color</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="colorVal"
                                    name="colorVal"
                                    placeholder='Ej. Negro Matte'
                                    value={colorVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="input-container mx-2">
                                <p className="title-input">Tipo Bicicleta</p>
                                <select 
                                    className="input-box"
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
                        <div className="container inpform d-flex">
                            <div className="input-container mx-2">
                                <p className="title-input">Cassette</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="cassetteVal"
                                    name="cassetteVal"
                                    placeholder='Cassette'
                                    value={cassetteVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="input-container mx-2">
                                <p className="title-input">Transmisión</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="transmisionVal"
                                    name="transmisionVal"
                                    placeholder='Transmisión'
                                    value={transmisionVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                /> 
                            </div>
                            <div className="input-container mx-2">
                                <p className="title-input">Material Cuadro</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="cuadroVal"
                                    name="cuadroVal"
                                    placeholder='Ej. Aluminio'
                                    value={cuadroVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div> 
                        </div>
                        <div className="container inpform d-flex">
                            <div className="input-container mx-2">
                                <p className="title-input">Material Tijera</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="tijeraVal"
                                    name="tijeraVal"
                                    placeholder='Ej. Carbono'
                                    value={tijeraVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                /> 
                            </div>
                            <div className="input-container mx-2">
                                <p className="title-input">Tipo Llantas</p>
                                    <input
                                    type="text"
                                    className="input-box"
                                    id="tipoLlantasVal"
                                    name="tipoLlantasVal"
                                    placeholder='Tipo de Llantas'
                                    value={tipoLlantasVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="input-container mx-2">
                                <p className="title-input">Marca Llantas</p>
                                    <input
                                    type="text"
                                    className="input-box"
                                    id="marcaLlantasVal"
                                    name="marcaLlantasVal"
                                    placeholder='Marca de Llantas'
                                    value={marcaLlantasVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="container inpform d-flex">
                            <div className="input-container mx-2">
                                <p className="title-input">Peso</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="pesoVal"
                                    name="pesoVal"
                                    placeholder='Peso'
                                    value={pesoVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="input-container mx-2">
                                <p className="title-input">Precio</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="precioVal"
                                    name="precioVal"
                                    placeholder='Precio asignado'
                                    value={precioVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="input-container mx-2">
                                
                                <div className="title-input">
                                    <p className="title-inp">Calificación</p>
                                    <p className="number-calif">{calificacionVal/10}/10</p>
                                </div>
                                <input
                                    type="range"
                                    className="input-box"
                                    id="calificacionVal"
                                    name="calificacionVal"
                                    min="0"
                                    max="100"
                                    value={calificacionVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="container inpform observ-cont d-flex ">
                            <div className="input-container mx-2 observ-input">
                                <p className="title-input">Observaciones</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    id="observacionesVal"
                                    name="observacionesVal"
                                    placeholder='Observaciones'
                                    value={observacionesVal}
                                    onChange={formChange}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="container inpform submit-cont">
                            <input type="submit" className="btn btn-submit animate__animated animate__heartBeat animate__delay-2s animate__slower animate__repeat-2	" value="Finalizar"/>
                        </div>
                    </form>
                </div>
            </div>
        </main>
     );
}
 
export default FormValorados;
