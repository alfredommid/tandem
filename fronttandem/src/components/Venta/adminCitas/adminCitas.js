import React, {useContext, useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import CitasContext from '../../../context/citas/citasContext';
import 'react-calendar/dist/Calendar.css';


const AdminCitas = (data) => {
    // eslint-disable-next-line
    useEffect(() => {obtenerAfiliadoId(data.affiliateId) }, []);

    const citasContext = useContext(CitasContext);
    const {afiliadoInfo,obtenerAfiliadoId, definirHora, definirFecha} = citasContext;

    const horarios = [
        {id:1, hora:'9:00', turno:'Mañana'},
        {id:2, hora:'9:30', turno:'Mañana'},
        {id:3, hora:'10:00', turno:'Mañana'},
        {id:4, hora:'10:30', turno:'Mañana'},
        {id:5, hora:'17:00', turno:'Tarde'},
        {id:6, hora:'17:30', turno:'Tarde'},
        {id:7, hora:'18:00', turno:'Tarde'},
        {id:8, hora:'18:30', turno:'Tarde'}
    ];

    const [value, onChange] = useState(new Date());
    const [elegido, setElegido] = useState({});
    
    const fechaRegex = (fecha) => {
        const arregloFinal = [];
        const arreglo = fecha.split('/');
        for(let i = 0; i < arreglo.length; i++)arregloFinal.push((arreglo[i].length < 2 ? `0${arreglo[i]}` : arreglo[i]));
        return arregloFinal.reverse().join('-');
    }

    fechaRegex(value.toLocaleDateString())

    useEffect(() => {
         definirFecha(fechaRegex(value.toLocaleDateString()))
    }, [value]);

    const handleClick = e => {
        const target = e.target;
        if(target.checked && elegido === target.id === target.checked ){
            target.checked = false;
            setElegido('');
            definirHora('')
        }
    };

    const handleChange = e => {
        const target = e.target;
        if([elegido === target.id] !== target.checked){
            setElegido(target.id);
            definirHora(target.value)
        }
    };

    return ( 
        <section className="container citas-cont d-flex row">
            <div className="container calendario col-5 p-3">
                <Calendar className="calendar" onChange={onChange} value={value}/>
            </div>
            <div className="container citas-info col-7 p-3">
                <div className="container d-flex justify-content-center info-afiliado">
                    <div className="container info-cont d-flex row">
                        <div className="container col-3 af-info text-center">
                            <p className="info-texto-title">Nombre AFiliado</p>
                            {afiliadoInfo
                                ?   <p className="info-texto">{afiliadoInfo.nombre}</p>
                                :   <p className="info-texto">Nombre</p>
                            }
                        </div>
                        <div className="container col-3 af-info text-center">
                            <p className="info-texto-title">Ciudad</p>
                            {afiliadoInfo
                                ?   <p className="info-texto">{afiliadoInfo.ciudad}</p>
                                :   <p className="info-texto">Ciudad</p>
                            }
                        </div>
                        <div className="container col-3 af-info text-center">
                            <p className="info-texto-title">Colonia</p>
                            {afiliadoInfo
                                ?   <p className="info-texto">{afiliadoInfo.colonia}</p>
                                :   <p className="info-texto">Colonia</p>
                            }
                        </div>
                        <div className="container col-3 af-info text-center">
                            <p className="info-texto-title">Teléfono</p>
                            {afiliadoInfo
                                ?   <p className="info-texto">{afiliadoInfo.telefono}</p>
                                :   <p className="info-texto">Teléfono</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="container horarios">
                    <div className="container horarios-cont">
                        <h4 className="container titulo-horarios pt-3 my-2">Mañana</h4>
                        <div className="container horarios-inputs">
                            {horarios
                                ?   horarios
                                        .filter(horario => horario.turno === 'Mañana')
                                        .map( horario => 
                                            <div key={horario.id} id={horario.id} className="container checkbox-cont d-flex align-items-center">
                                                <input type="radio" onClick={handleClick} onChange={handleChange} name="horario" key={horario.id} id={horario.id} className="checkinput" value={horario.hora}/><span className='checkhora'>{horario.hora}</span>
                                            </div>
                                         )
                                :   null
                            }
                        </div>
                    </div>
                    <div className="container horarios-cont">
                        <h4 className="container titulo-horarios pt-3 mt-4">Tarde</h4>
                        <div className="container horarios-inputs">
                            {horarios
                                    ?   horarios
                                            .filter(horario => horario.turno === 'Tarde')
                                            .map( horario => 
                                                <div key={horario.id} className="container checkbox-cont d-flex align-items-center">
                                                    <input type="radio" onClick={handleClick} onChange={handleChange} name="horario" key={horario.id} id={horario.id} className="checkinput" value={horario.hora}/>
                                                    <span className='checkhora'>{horario.hora}</span>
                                                </div>
                                            )
                                    :   null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AdminCitas;