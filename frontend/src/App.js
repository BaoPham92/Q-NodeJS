import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 

//component imports
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <h1>People's Republic of West Korea</h1>
     <Login />
     <Switch>
        <Route />
        <Route />
        <Route />
     </Switch>


    </div>
  );
}

export default App;



