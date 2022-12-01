import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Componente({titulo, children }) {  //destructuring assignment desde entrada    
  return (
    <div className='contenedor'>
      <h1>{titulo}</h1>
      <div>
        {children}
      </div>
    </div>
  )
} 

root.render(  
  <App />
); //*/