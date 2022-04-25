import React, {Fragment, useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import ArticuloContext from '../../context/articulos/articuloContext';
import LoggedHeader from '../Venta/Layout/loggedHeader';
import AuthContext from '../../context/auth/authContext';
import CarritoContext from '../../context/carrito/carritoContext';

const ArtSelected = () => {
    const articuloContext = useContext(ArticuloContext);
    const { artSelected } = articuloContext;

    const authContext = useContext(AuthContext);
    const { usuario } = authContext;
    
    const {marca, modelo, color, calificacion, cassette,cuadro, marcaLlantas, observaciones, peso, precio, talla, tijera, tipoBicicleta, tipoEntrada, tipoLlantas, transmision, year, _id} = artSelected;

    const carritoContext = useContext(CarritoContext);
    const { cartItems, agregarCart, eliminarCart } = carritoContext;

    const [isAdded, setIsAdded] = useState(false);
    
    const sendInfo = () => {if(!isAdded){setIsAdded(true); agregarCart(artSelected)}else{setIsAdded(false); eliminarCart(artSelected)}}

    const setCartIcon = (itemId) => {
        const inCart = cartItems.some(item => {return item.id === itemId});
        if(inCart){
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-x" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff4f56" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" />
                    <path d="M17 3l4 4" />
                    <path d="M21 3l-4 4" />
                </svg>
            )
        }else{
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            )
        };
    }

    return ( 
        <Fragment>
            <LoggedHeader/>
            <main className="art-selected">
                <div className="detail-body">
                    <div className="detailBody-imgCont"></div>
                    <div className="detailBody-info">
                        <div className="breadCrumb">
                            <Link className="linkCrumb" to="/"><span className="spanText">Home / </span></Link><Link className="linkCrumb" to="/tienda"><span className="spanText">/ Tienda /</span></Link><Link className="linkCrumb" to={`/tienda/${_id}`}><span className="spanText">/  {`${modelo}`}</span></Link>
                        </div>
                        <div className="main-info">
                            <p className="main-info-marca">{marca}</p>
                            <p className="main-info-modelo">{modelo}</p>
                        </div>
                        <div className="details">
                            <div className="second-info">
                                <div className="second-precio">
                                    <p className="precio-text">${precio}</p>
                                </div>
                            </div>
                            <div className="second-info double">
                                <div className="extra-info">
                                    <p className="extra-text">Calificación</p>
                                    <p className="extra-calif">{calificacion/10}/10</p>
                                </div>
                                    {usuario
                                        ?   <button className="extra-btn" onClick={() => sendInfo()}>
                                                {setCartIcon(_id)}
                                            </button>
                                        :   <Link className="link-login" to={"/login"}>
                                                <button className="btn login-btn">
                                                    <p className="extra-texto">Iniciar Sesión</p>
                                                </button>
                                            </Link>
                                    }
                                
                            </div>
                        </div>
                        <div className="details second">
                            <div className="last-info-top">
                                <div className="last-info">
                                    <p className="lastInfo-title">Talla</p>
                                    <p className="lastInfo-text">{talla}</p>
                                </div>
                                <div className="last-info">
                                    <p className="lastInfo-title">Año</p>
                                    <p className="lastInfo-text">{year}</p>
                                </div>
                            </div>
                            <div className="last-info-top">
                                <div className="last-info">
                                    <p className="lastInfo-title">Categoría</p>
                                    <p className="lastInfo-text">{tipoBicicleta}</p>
                                </div>
                                <div className="last-info">
                                    <p className="lastInfo-title">Tipo</p>
                                    <p className="lastInfo-text">{tipoEntrada}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detailBody-info detail">
                        <div className="info-allRest">
                            <p className="text-allRest"><span className="allRest-title">Color: </span>{color}</p>
                            <p className="text-allRest"><span className="allRest-title">Peso: </span>{peso}</p>
                            <p className="text-allRest"><span className="allRest-title">Transmisión: </span>{transmision}</p>
                            <p className="text-allRest"><span className="allRest-title">Cassette: </span>{cassette}</p>
                            <p className="text-allRest"><span className="allRest-title">Mat. Cuadro: </span>{cuadro}</p>
                            <p className="text-allRest"><span className="allRest-title">Mat. Tijera: </span>{tijera}</p>
                            <p className="text-allRest"><span className="allRest-title">Llantas: </span>{tipoLlantas}</p>
                            <p className="text-allRest"><span className="allRest-title">Marca Llantas: </span>{marcaLlantas}</p>
                        </div>
                        <div className="info-obs">
                            <p className="obs-title">Observaciones</p>
                            <div className="obs-cont">
                                <p className="obs-text">{observaciones}</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="detail-footer"></div>
            </main>
        </Fragment>    
     );
}
 
export default ArtSelected;