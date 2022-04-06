import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import frontView from './components/landpage/frontView';
import Login from './components/auth/login';
import LoginAfiliado from './components/auth/loginAfiliado';
import SignUpAff from './components/auth/signUpAff';
import Venta from './components/Venta/venta';
import Tienda from './components/Tienda/Tienda';
import Perfil from './components/Perfil/perfil';
import Dashboard from './components/Afiliados/dashboard';
import Carrito from './components/Carrito/carrito';
import Contacto from './components/Contacto/contacto';
import ArtSelected from './components/Tienda/ArtSelect';

import ArticuloState from './context/articulos/articuloState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';
import AfiliadoState from './context/card/cardState';
import CitasState from './context/citas/citasState';
import PerfilState from './context/perfil/perfilState';
import PerfilAfiliadoState from './context/perfilAfiliado/perfilAfiliadoState';

import CarritoState from './context/carrito/carritoState';

import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/routes/rutaPrivada';
import RutaPrivAff from './components/routes/rutaPrivAff';




//TODO check for token Fn
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {
  return (
    <AlertaState>
      <AuthState>
        <ArticuloState>
          <AfiliadoState>
            <CitasState>
              <PerfilState>
                <PerfilAfiliadoState>
                  <CarritoState>
                    <Router>
                      <Switch>
                        <Route exact path='/' component={frontView}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/login/afiliados' component={LoginAfiliado}/>
                        <Route exact path='/signup' component={SignUpAff}/>
                        <RutaPrivada exact path='/venta' component={Venta}/>
                        <Route exact path='/tienda' component={Tienda}/>
                        <Route exact path='/tienda/:id' component={ArtSelected}/>
                        <RutaPrivada exact path='/perfil' component={Perfil}/>
                        <RutaPrivAff exact path='/afiliado/dashboard' component={Dashboard}/>
                        <RutaPrivada exact path='/carrito' component={Carrito}/>
                        <RutaPrivada exact path='/contacto' component={Contacto}/>
                      </Switch>
                    </Router>
                  </CarritoState>
                </PerfilAfiliadoState>
              </PerfilState>
            </CitasState>
          </AfiliadoState>
        </ArticuloState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
