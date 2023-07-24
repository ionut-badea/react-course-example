import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import './index.css';
import Superhero from './components/superhero';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Header />
        <Superhero />
    </React.StrictMode>
);
