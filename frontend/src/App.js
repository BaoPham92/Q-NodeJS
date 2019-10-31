import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 

//component imports
import './App.css';
import Login from './components/Login';
import HomeWrapper from './components/HomeWrapper.js';

function App() {
  return (
    <div className="App">
     <h1>Democratic People's Republic of North Korea</h1>
     <HomeWrapper />
     <Switch>
        <Route />
        <Route />
        <Route />
     </Switch>


    </div>
  );
}

export default App;



