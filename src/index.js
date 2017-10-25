import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Tabla from './components/tabla.js';


let db=[
    {category: "madera", price:"70 s/.", stocked: true, name:"mesa"},
    {category: "madera", price:"30 s/.", stocked: true, name:"silla"},
    {category: "electro", price:"290 s/.", stocked: true, name:"cocina"},
    {category: "electro", price:"400 s/.", stocked: true, name:"refri"},
    {category: "electro", price:"70 s/.", stocked: true, name:"licuadora"},
    {category: "acero", price:"10 s/.", stocked: true, name:"sarten"}
]





ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Tabla store={db} />, document.getElementById('app'));
registerServiceWorker();
