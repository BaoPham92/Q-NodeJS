import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routes/AppRouter';
import './index.css';
import './App.css';
import App from './App';

const jsx = (
    <AppRouter>
        <App />
    </AppRouter>
)

ReactDOM.render(jsx, document.getElementById('root'));



