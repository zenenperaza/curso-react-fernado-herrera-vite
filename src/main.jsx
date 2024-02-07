import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWordApp from './HelloWordApp';
// import {FirstApp} from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 15 }  />
    </React.StrictMode>
);