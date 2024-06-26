import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import { CalendarApp } from './CalendarApp';
import './styles.css';
Modal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <CalendarApp />
   </React.StrictMode>
)
