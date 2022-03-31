import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import reportWebVitals from './reportWebVitals';
import CountersList from "./components/countersList";

const rootContainer = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootContainer);

root.render(<main className="container"><CountersList/></main>)

reportWebVitals();
