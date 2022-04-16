import React from 'react';

import { App, AppContext } from './app';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppContext.Provider value={null}>
            <App />
        </AppContext.Provider>
    </React.StrictMode>
);

reportWebVitals();
