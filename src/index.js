import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './containers/App'
import 'tachyons';
import './containers/App.css';



const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);