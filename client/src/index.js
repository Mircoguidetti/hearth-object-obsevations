import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import './styles/main.scss';

const root = document.getElementById('app')

if(root){
    ReactDOM.render(
        <App />,
        root
    )
}