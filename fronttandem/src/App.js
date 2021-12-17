import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import frontView from './components/landpage/frontView';
import Login from './components/auth/login';
import signUp from './components/auth/signUp'
import Venta from './components/Venta/venta';
import Tienda from './components/Tienda/Tienda';
import Perfil from './components/Perfil/perfil';
import Carrito from './components/Carrito/carrito';
import Contacto from './components/Contacto/contacto';

import ArticuloState from './context/articulos/articuloState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';
import AfiliadoState from './context/card/cardState';
import CitasState from './context/citas/citasState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/routes/rutaPrivada';

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
              <Router>
                <Switch>
                  <Route exact path='/' component={frontView}/>
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/signup' component={signUp}/>
                  <RutaPrivada exact path='/venta' component={Venta}/>
                  <RutaPrivada exact path='/tienda' component={Tienda}/>
                  <RutaPrivada exact path='/perfil' component={Perfil}/>
                  <RutaPrivada exact path='/carrito' component={Carrito}/>
                  <RutaPrivada exact path='/contacto' component={Contacto}/>
                </Switch>
              </Router>
            </CitasState>
          </AfiliadoState>
        </ArticuloState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
