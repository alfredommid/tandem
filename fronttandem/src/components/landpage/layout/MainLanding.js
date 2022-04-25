import React from 'react';
import { Link } from 'react-router-dom'
import Video1 from '../Videos/vert-technical-5917635.mp4';
import Video2 from '../Videos/vert_5058376.mp4';
import Video3 from '../Videos/vert-technical-5911712.mp4';
import Video4 from '../Videos/horizontal-5790261.mp4';
import logo from '../Videos/TANDEM.svg'
import 'animate.css'

const MainLanding = () => {
    return ( 
        <main className="cont-landing">
            <div className="contenedor">
                <div className="cont-video1" >
                    <video className="vid" autoPlay loop muted>
                        <source src={Video1} type="video/mp4"/>
                    </video>
                </div>
                <div className="cont-video2">
                    <video className="vid" autoPlay loop muted>
                        <source src={Video2} type="video/mp4"/>
                    </video>
                </div>
                <div className="cont-quote">
                    <p className="quote">"Every time I see an adult on a bicycle, I no longer despair for the future of the human race." <span className="boldie">H.G. Wells</span></p>
                </div>
                <div className="cont-anim-logo ">
                    <img className="tandem-logo animate__animated animate__headShake animate__delay-1s animate__repeat-3 animate__slow" src={logo} alt="logo" />
                </div>
                <div className="cont-video3">
                    <video className="vid" autoPlay loop muted>
                        <source src={Video3} type="video/mp4"/>
                    </video>
                </div>
                <div className="cont-action-btn">
                    <Link to="/tienda">
                        <input 
                            className="action animate__animated animate__heartBeat animate__slower animate__infinite"
                            type="button"
                            value="¡Vamos!"
                        />
                    </Link>
                    
                </div>
                <div className="cont-video4">
                    <video className="vidh" autoPlay loop muted>
                            <source src={Video4} type="video/mp4"/>
                    </video>
                </div>
                <div className="cont-texto">
                        <p className="texto1">Vende</p>
                        <p className="texto2">Renta</p>
                        <p className="texto3">Compra</p>
                </div>
            </div>
            <div className="cont-carousel"></div>
        </main>
     );
}
 
export default MainLanding;