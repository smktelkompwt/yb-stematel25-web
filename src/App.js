import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout'

function App() {
  return (
    <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={Layout} />
        </Switch>
    </HashRouter>
  );
}

export default App;
