import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
//import Home from './pages/Home'; // Você pode criar este componente posteriormente

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/cadastro">
          <Cadastro setUsuario={setUsuario} />
        </Route>
        <Route path="/login">
          <Login usuario={usuario} />
        </Route>
        <Route path="/home">
          {/* <Home /> */}
        </Route>
        {/* Rota padrão, redireciona para /cadastro */}
        <Route path="/">
          <Cadastro setUsuario={setUsuario} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
