/* eslint-disable no-unreachable */
import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Card, CardBody, CardFooter} from 'reactstrap';
import AuthContext from '../../context/auth/authContext';
import ArticuloContext from '../../context/articulos/articuloContext';
import CarritoContext from '../../context/carrito/carritoContext';

const ValCards = (arreglo) => {

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado, usuario } = authContext;

    const articuloContext = useContext(ArticuloContext);
    const { setArtData} = articuloContext;
    
    const carritoContext = useContext(CarritoContext);
    const { cartItems, cargando, agregarCart, eliminarCart } = carritoContext;

    // eslint-disable-next-line
    useEffect(() => {usuarioAutenticado()}, []);

    const itArray = arreglo.data;
    if(!itArray.length) { return <h1>Lo sentimos aún no hay bicicletas de esa categoría valoradas.</h1> }

    const sendInfo = (id ) => {
        const artSeleccionado = itArray.filter((art) => art._id === id);
        const inCart = cartItems.filter((item) => item.id === id);
        if(inCart.length === 0){ agregarCart(artSeleccionado[0]) } else { eliminarCart(id) }
    }

    const handleSelected = (data) => {
        setArtData(data);
    }

    const setColor = (tipo) => {
        // eslint-disable-next-line default-case
        switch(tipo){
            case 'Triatlon': return '#DBE709'; break;
            case 'Ruta': return '#FF6A5D'; break;
            case 'Montaña': return '#894FDA'; break;
            case 'Urbana': return '#F69A11'; break;
            case 'Otra': return '#F5DBE1'; break;
        }
    }

    const setCartIcon = (itemId) => {
        const inCart = cartItems.some(item => {return item.id === itemId});
        if(inCart){
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-x" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff4f56" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
        itArray.map( (item, index) =>
            <Card key={item._id} id={item._id}  onClick={() => handleSelected(item)} className="col-3 mx-2 cont-card">
                <Link  className="link-card" to={`/tienda/${item._id}`}>
                    <CardBody className="cont-cardbody">
                            <div className="cont-color" style={{backgroundColor: setColor(item.tipoBicicleta)}}>
                                <div className="container cont-img"></div>
                            </div>
                            <div className="container cont-info">
                                <div className="container title-sub">
                                    <p className="text-1">{item.modelo}</p>
                                    <p  className="text-2">{item.marca}</p>
                                </div>
                                <div className="container specs">
                                    <p className="text-3">Talla: {item.talla}</p>
                                    <p className="text-3">{item.tipoBicicleta}</p>
                                    <p className="text-3 estatus">{item.tipoEntrada}</p>
                                </div>
                            </div>
                    </CardBody>
                </Link>
                <CardFooter className="cont-cardfooter">
                        <p className="footer-text">${item.precio}</p>
                        {usuario
                            ?   <div className="icons-cont d-flex">
                                    <button onClick={()=>sendInfo(item._id, index)} className="btn add-cart d-flex">
                                        {setCartIcon(item._id)}
                                    </button>
                                    <button onClick={()=>sendInfo(item._id)} className="btn set-fav d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                        </svg>
                                    </button>
                                </div>
                            :   null
                        }
                </CardFooter>
            </Card>
        )
     );
}
 
export default ValCards;