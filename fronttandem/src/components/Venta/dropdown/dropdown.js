import React, { useEffect, useContext, useState } from 'react';
import ArticuloContext from '../../../context/articulos/articuloContext';
import {Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap';

const Dropdown = () => {
    const [afiliado, setAfiliado] = useState({
        afiliadoId:''
    });
    const{afiliadoId} = afiliado
    const articuloContext = useContext(ArticuloContext);
    const {afiliados, obtenerAfiliados} = articuloContext;

    useEffect(() => {
        obtenerAfiliados()
    }, [])

    const formChange2 = e => {
        setAfiliado({
            afiliadoId : e.target.id
        })
    }
    

    return ( 
        <section id="dropdown-section">
            <Row>
                {afiliados
                    ?   afiliados.map( afiliado => 
                        <Col name={afiliadoId} key={afiliado._id} sm="4">
                            <Card body>
                                <CardTitle tag="h5">
                                    {afiliado.nombre}
                                </CardTitle>
                                <CardText>
                                    {afiliado.ciudad}<br></br>
                                    {afiliado.telefono}<br></br>
                                    {afiliado.calleNo}
                                </CardText>
                                <Button id={afiliado._id} onClick={formChange2}>
                                    Elegir
                                </Button>
                            </Card>
                        </Col>
                  )
                    :   null
                }
            </Row>
        </section>
     );
}
 
export default Dropdown;