import React, {Fragment, useContext, useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import CarritoContext from '../../context/carrito/carritoContext';
import LoggedHeader from '../Venta/Layout/loggedHeader';


const Carrito = () => {

    const carritoContext = useContext(CarritoContext);
    const { cartItems, eliminarCart } = carritoContext;

    const [resumen, setResumen] = useState({
        initialValue : 0,
        impuestos : 0,
        envio : 0,
        cargando:false,
    })

    const {initialValue, impuestos, envio, cargando} = resumen;

    const currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    const getTotal = (cartArray) => {
        const total = cartArray.reduce((totalCost, item) => totalCost + item.precioBic, 0);
        return total.toLocaleString(undefined, currencyOptions)
    }

    const cartReducer = (state, action) => {
        switch(action.type) {
            case 'add':
                return[...state, action.producto];
            case 'delete':
                const productIndex = state.findIndex(item => item._id === action.producto.id);
                if(productIndex < 0){return state}
                const update = [...state];
                update.splice(productIndex, 1)
                return update
            default:
                return state;
        }
    }
    const DisplayCartITems = (arreglo) => {
        /*const addTax = arreglo.forEach(item => {setResumen({...resumen, impuestos: item.precio*0.16})});*/

        const addTax = (infoData) => {
            let impuestosA = 0
            infoData.forEach(item => impuestosA += Number(item.precioBic)*0.02);
            setResumen({...resumen, impuestos:impuestosA});
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(() => {if(impuestos === 0 && cartItems.length > 0 && !cargando){ addTax(arreglo)}}, []);

        
        const sumaItems = (infoData) => { 
            let sumaItems = 0;
            infoData.forEach(item => sumaItems += Number(item.precioBic) )
            return sumaItems;
        }
        const total = arreglo.reduce((acc, item) => acc + Number(item.precioBic) + impuestos + envio, initialValue);

        const seleccionarEnvio = () => {
            if(envio === 0){setResumen({...resumen, envio : 425})}else{setResumen({...resumen, envio : 0})}
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        //useEffect(() => {addTax(arreglo)}, [])

        const deleteUpdtade = (id) => {
            setResumen({...resumen, cargando:true});
            eliminarCart(id);
            setInterval(() => {
                setResumen({...resumen, cargando:false})
            }, 500);
        }

        return ( 
            <main className="cart-container">
                <div className="item-sum-cont">
                    {arreglo.map( item => 
                    <Card key={item.id} className="card-cont">
                        <CardBody className="cardBody-cont">
                            <Link to={`/tienda/${item.id}`} className="link-cont">
                                <div className="img-cont"></div>
                            </Link>
                            <div className="sum-cont">
                                <div className="cont-princ">
                                    <p className="text text-modelo">{item.modeloBic}</p>
                                    <p className="text text-marca">{item.marcaBic}</p>
                                </div>
                                <div className="cont-sec">
                                    <p className="text text-year">{item.yearBic}</p>
                                    <p className="text text-color">{item.colorBic}</p>
                                    <p className="text text-precio">${item.precioBic}</p>
                                </div>
                            </div>
                            <div className="delete-btn-cont">
                                <button onClick={() => deleteUpdtade(item.id)} className="btn btn-delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="4" y1="7" x2="20" y2="7" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                </button>
                            </div>
                        </CardBody>
                    </Card>)}
                </div>
                <div className="summary-cont">
                    <div className="envio-cont">
                        <p className="text-title">Envío</p>
                        
                            {envio === 0
                                ?   <div className="opc-env-cont">
                                        <button onClick={() => seleccionarEnvio()} className="btn btn-on text text-free">Gratis</button>
                                        <button onClick={() => seleccionarEnvio()} className="btn text text-costo">Express: $425.00</button>
                                    </div>
                                :   <div className="opc-env-cont">
                                        <button onClick={() => seleccionarEnvio()} className="btn text text-free">Gratis</button>
                                        <button onClick={() => seleccionarEnvio()} className="btn btn-on text text-costo">Express: $425.00</button>
                                    </div>
                            }
                        <p className="estimado-envio">Envío gratis de 5 a 10 días hábiles.</p>
                        <p className="estimado-envio">Envío express 3 días hábiles.</p>
                    </div>
                    <div className="resumen-cont">
                        <p className="text-title">Resumen</p>
                        <div className="res-text-cont">
                            <div className="subtotal">
                                <p className="text-res text-precio">Subtotal</p>
                                <p className="text-res text-precio">${sumaItems(arreglo)}</p>
                            </div>
                            <div className="envio">
                                <p className="text-res text-envio">Envío</p>
                                <p className="text-res text-envio">${envio}.00</p>
                            </div>
                            <div className="impuestos">
                                <p className="text-res text-impuestos">Impuestos</p>
                                <p className="text-res text-impuestos">${impuestos}</p>
                            </div>
                        </div>
                    </div>
                    <div className="total-cont">
                        <p className="total-text">Total</p>
                        <p className="total-final">${total}</p>
                    </div>
                </div>
            </main>
        )
    }

    const emptyCart = () => {
        return (
            <main className="cart-container ">
                <div className="item-sum-cont d-flex justify-content-center align-items-center">
                    <h1>Aún no tienes productos en tu carrito.</h1>
                </div>
                <div className="summary-cont"></div>
            </main>
        )
    }

    return ( 
        <Fragment>
            <LoggedHeader/>
            {cartItems.length > 0 
                ?   DisplayCartITems(cartItems)
                :   emptyCart()
            }
        </Fragment>
     );
}
 
export default Carrito;