/* eslint-disable no-unreachable */
import React, { Fragment, useState, useContext } from 'react';
import CarritoContext from '../../context/carrito/carritoContext';

const Categorias = () => {
    const [ categoria, setCategoria ] = useState({
        catTodas: true,
        catRuta: false,
        catMontaña: false,
        catTriatlon: false,
        catUrbana: false
    });

    const { catTodas, catRuta, catMontaña, catTriatlon, catUrbana } = categoria;
    const carritoContext = useContext(CarritoContext);
    const { defCat } = carritoContext;

    const defCategoria = (e) => {
        const newCat = e.target.id
        defCat(newCat.slice(3))
        const filtArray = Object.entries(categoria).filter(([key,value])  => value === true )
        const switchCat = filtArray[0][0]
        if(newCat && switchCat){setCategoria({...categoria, [newCat]:true, [switchCat]:false})}
        if(newCat === switchCat){setCategoria({...categoria})}
    }

    const setColor = (tipo) => {
        // eslint-disable-next-line default-case
        switch(tipo){
            case 'catTodas': return '#F5DBE1'; break;
            case 'catRuta': return '#FF6A5D'; break;
            case 'catMontaña': return '#894FDA'; break;
            case 'catTriatlon': return '#DBE709'; break;
            case 'catUrbana': return '#F69A11'; break;
            case 'catOtra': return '#F5DBE1'; break;
        }
    }

    return ( 
        <Fragment>
                {catTodas
                    ?   <div className="container grid-cat">
                            <div style={{borderColor: setColor("catTodas")}} id="catTodas" onClick={defCategoria} className="container categoria cont-on todos">
                                <p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div style={{borderColor: setColor("catRuta")}} id="catRuta" onClick={defCategoria} className="container categoria ruta">
                                <p id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div style={{borderColor: setColor("catMontaña")}} id="catMontaña" onClick={defCategoria} className="container categoria mountain">
                                <p id="catMontaña" className="categoria-text text-mountain">Montaña</p></div>
                            <div style={{borderColor: setColor("catTriatlon")}} id="catTriatlon" onClick={defCategoria} className="container categoria triatlon">
                                <p id="catTriatlon" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div style={{borderColor: setColor("catUrbana")}} id="catUrbana" onClick={defCategoria} className="container categoria urbana">
                                <p id="catUrbana" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                        
                    :   null
                }
                {catRuta
                    ?   <div className="container grid-cat">
                            <div style={{borderColor: setColor("catTodas")}} id="catTodas" onClick={defCategoria} className="container categoria todos"><p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div style={{borderColor: setColor("catRuta")}} id="catRuta" onClick={defCategoria} className="container categoria cont-on ruta"><p  id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div style={{borderColor: setColor("catMontaña")}} id="catMontaña" onClick={defCategoria} className="container categoria mountain"><p id="catMontaña" className="categoria-text text-mountain">Montaña</p></div>
                            <div style={{borderColor: setColor("catTriatlon")}} id="catTriatlon" onClick={defCategoria} className="container categoria triatlon"><p id="catTriatlon" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div style={{borderColor: setColor("catUrbana")}} id="catUrbana" onClick={defCategoria} className="container categoria urbana"><p id="catUrbana" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                    :   null
                }
                {catMontaña
                    ?   <div className="container grid-cat">
                            <div style={{borderColor: setColor("catTodas")}} id="catTodas" onClick={defCategoria} className="container categoria todos"><p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div style={{borderColor: setColor("catRuta")}} id="catRuta" onClick={defCategoria} className="container categoria ruta"><p  id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div style={{borderColor: setColor("catMontaña")}} id="catMontaña" onClick={defCategoria} className="container categoria cont-on mountain"><p id="catMontaña" className="categoria-text text-mountain">Montaña</p></div>
                            <div style={{borderColor: setColor("catTriatlon")}} id="catTriatlon" onClick={defCategoria} className="container categoria triatlon"><p id="catTriatlon" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div style={{borderColor: setColor("catUrbana")}} id="catUrbana" onClick={defCategoria} className="container categoria urbana"><p id="catUrbana" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                    :   null
                }
                {catTriatlon
                    ?   <div className="container grid-cat">
                            <div style={{borderColor: setColor("catTodas")}} id="catTodas" onClick={defCategoria} className="container categoria todos"><p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div style={{borderColor: setColor("catRuta")}} id="catRuta" onClick={defCategoria} className="container categoria ruta"><p  id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div style={{borderColor: setColor("catMontaña")}} id="catMontaña" onClick={defCategoria} className="container categoria mountain"><p id="catMontaña" className="categoria-text text-mountain">Montaña</p></div>
                            <div style={{borderColor: setColor("catTriatlon")}} id="catTriatlon" onClick={defCategoria} className="container categoria cont-on triatlon"><p id="catTriatlon" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div style={{borderColor: setColor("catUrbana")}} id="catUrbana" onClick={defCategoria} className="container categoria urbana"><p id="catUrbana" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                    :   null
                }
                {catUrbana
                    ?   <div className="container grid-cat">
                            <div style={{borderColor: setColor("catTodas")}} id="catTodas" onClick={defCategoria} className="container categoria todos"><p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div style={{borderColor: setColor("catRuta")}} id="catRuta" onClick={defCategoria} className="container categoria ruta"><p  id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div style={{borderColor: setColor("catMontaña")}} id="catMontaña" onClick={defCategoria} className="container categoria mountain"><p id="catMontaña" className="categoria-text text-mountain">Montaña</p></div>
                            <div style={{borderColor: setColor("catTriatlon")}} id="catTriatlon" onClick={defCategoria} className="container categoria triatlon"><p id="catTriatlon" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div style={{borderColor: setColor("catUrbana")}} id="catUrbana" onClick={defCategoria} className="container categoria cont-on urbana"><p id="catUrbana" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                    :   null
                }
        </Fragment>
     );
}
 
export default Categorias;