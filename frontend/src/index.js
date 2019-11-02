import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routes/AppRouter';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const jsx = (<AppRouter />)

ReactDOM.render(jsx, document.getElementById('root'));