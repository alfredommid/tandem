import React, { useEffect, useContext, useState } from 'react';
import ArticuloContext from '../../../context/articulos/articuloContext';
import {Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap';
import CardContext from '../../../context/card/cardContext';

const AfiliadosCard = () => {
    //const [afiliado, setAfiliado] = useState({ afiliadoId:'' });
    //const{afiliadoId} = afiliado

    const articuloContext = useContext(ArticuloContext);
    const {afiliados, obtenerAfiliados} = articuloContext;

    const cardContext = useContext(CardContext);
    const { idAfiliado, obtenerAfiliadoId } = cardContext;

    const idObtenida = (e) => {
        obtenerAfiliadoId(e.target.id)
        console.log(idAfiliado)
    }

    // eslint-disable-next-line
    useEffect(() => {obtenerAfiliados()}, [])

    //const formChange2 = e => { setAfiliado({ afiliadoId : e.target.id }) }

    return ( 
        <section id="dropdown-section">
            <Row>
                {afiliados
                    ?   afiliados.map( afiliado => 
                        <Col key={afiliado._id} sm="4">
                            <Card body>
                                <CardTitle tag="h5">
                                    {afiliado.nombre}
                                </CardTitle>
                                <CardText>
                                    {afiliado.ciudad}<br></br>
                                    {afiliado.telefono}<br></br>
                                    {afiliado.calleNo}
                                </CardText>
                                <Button id={afiliado._id} onClick={idObtenida}>
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
 
export default AfiliadosCard;