/* eslint-disable no-unreachable */
import React, { useContext, useEffect} from 'react';
import LoggedHeader from '../Venta/Layout/loggedHeader';
import AuthContext from '../../context/auth/authContext';
import Categorias from './Categorias';
import ArticuloContext from '../../context/articulos/articuloContext';
import ValCards from './valCards';
import CarritoContext from '../../context/carrito/carritoContext';

const Tienda = () => {
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado} = authContext;

    const articuloContext = useContext(ArticuloContext);
    const { articulosVal, obtenerValorados } = articuloContext;

    const carritoContext = useContext(CarritoContext);
    const { catBic } = carritoContext;

    // eslint-disable-next-line
    useEffect(() => {usuarioAutenticado(), obtenerValorados()}, [])
    
    const defCategoria = (arreglo) => {
        // eslint-disable-next-line default-case
        switch(catBic){
            case 'Todas': return <ValCards data={arreglo}/>; break;
            case 'Ruta': return <ValCards data={arreglo.filter(element => element.tipoBicicleta === 'Ruta')}/> ; break;
            case 'Montaña': return <ValCards data={arreglo.filter(element => element.tipoBicicleta === 'Montaña')}/> ; break;
            case 'Urbana': return <ValCards data={arreglo.filter(element => element.tipoBicicleta === 'Urbana')}/> ; break;
            case 'Triatlon': return <ValCards data={arreglo.filter(element => element.tipoBicicleta === 'Triatlon')}/> ; break;
            case 'Otra': return <ValCards data={arreglo.filter(element => element.tipoBicicleta === 'Otra')}/> ; break;
        }
    }

    //<Link to={`/tienda/item._id`}></Link>
    
    return (
        <main className="cont-tienda">
            <LoggedHeader/>
            <div className="cont-artSelected">
                <div className="categorias-tienda">
                    <Categorias/>
                </div>
                <div className="articard-cont valorados"> 
                    {defCategoria(articulosVal)}
                </div>
            </div>
        </main>
     );
}
 
export default Tienda;