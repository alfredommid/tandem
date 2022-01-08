import React, { Fragment, useState } from 'react';

const Categorias = () => {
    const [ categoria, setCategoria ] = useState({
        catTodas: true,
        catRuta: false,
        catMtb: false,
        catTri: false,
        catUrb: false
    });

    const { catTodas, catRuta, catMtb, catTri, catUrb } = categoria;

    const defCategoria = (e) => {
        const newCat = e.target.id
        const filtArray = Object.entries(categoria).filter(([key,value])  => value === true )
        const switchCat = filtArray[0][0]
        if(newCat && switchCat){setCategoria({...categoria, [newCat]:true, [switchCat]:false})}
        if(newCat === switchCat){setCategoria({...categoria})}
    }

    return ( 
        <Fragment>
                {catTodas
                    ?   <div className="container grid-cat">
                            <div id="catTodas" onClick={defCategoria} className="container categoria cont-on todos"><p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div id="catRuta" onClick={defCategoria} className="container categoria ruta"><p id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div id="catMtb" onClick={defCategoria} className="container categoria mountain"><p id="catMtb" className="categoria-text text-mountain">Montaña</p></div>
                            <div id="catTri" onClick={defCategoria} className="container categoria triatlon"><p id="catTri" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div id="catUrb" onClick={defCategoria} className="container categoria urbana"><p id="catUrb" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                        
                    :   null
                }
                {catRuta
                    ?   <div className="container grid-cat">
                            <div id="catTodas" onClick={defCategoria} className="container categoria todos"><p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div id="catRuta" onClick={defCategoria} className="container categoria cont-on ruta"><p  id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div id="catMtb" onClick={defCategoria} className="container categoria mountain"><p id="catMtb" className="categoria-text text-mountain">Montaña</p></div>
                            <div id="catTri" onClick={defCategoria} className="container categoria triatlon"><p id="catTri" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div id="catUrb" onClick={defCategoria} className="container categoria urbana"><p id="catUrb" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                    :   null
                }
                {catMtb
                    ?   <div className="container grid-cat">
                            <div id="catTodas" onClick={defCategoria} className="container categoria todos"><p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div id="catRuta" onClick={defCategoria} className="container categoria ruta"><p  id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div id="catMtb" onClick={defCategoria} className="container categoria cont-on mountain"><p id="catMtb" className="categoria-text text-mountain">Montaña</p></div>
                            <div id="catTri" onClick={defCategoria} className="container categoria triatlon"><p id="catTri" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div id="catUrb" onClick={defCategoria} className="container categoria urbana"><p id="catUrb" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                    :   null
                }
                {catTri
                    ?   <div className="container grid-cat">
                            <div id="catTodas" onClick={defCategoria} className="container categoria todos"><p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div id="catRuta" onClick={defCategoria} className="container categoria ruta"><p  id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div id="catMtb" onClick={defCategoria} className="container categoria mountain"><p id="catMtb" className="categoria-text text-mountain">Montaña</p></div>
                            <div id="catTri" onClick={defCategoria} className="container categoria cont-on triatlon"><p id="catTri" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div id="catUrb" onClick={defCategoria} className="container categoria urbana"><p id="catUrb" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                    :   null
                }
                {catUrb
                    ?   <div className="container grid-cat">
                            <div id="catTodas" onClick={defCategoria} className="container categoria todos"><p id="catTodas" className="categoria-text text-todos">Todas</p></div>
                            <div id="catRuta" onClick={defCategoria} className="container categoria ruta"><p  id="catRuta" className="categoria-text text-ruta">Ruta</p></div>
                            <div id="catMtb" onClick={defCategoria} className="container categoria mountain"><p id="catMtb" className="categoria-text text-mountain">Montaña</p></div>
                            <div id="catTri" onClick={defCategoria} className="container categoria triatlon"><p id="catTri" className="categoria-text text-triatlon">Triatlón</p></div>
                            <div id="catUrb" onClick={defCategoria} className="container categoria cont-on urbana"><p id="catUrb" className="categoria-text text-urbana">Urbana</p></div>
                        </div>
                    :   null
                }
        </Fragment>
     );
}
 
export default Categorias;