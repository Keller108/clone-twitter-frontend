import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from '../pages/Auth/Auth';
import { Main } from '../pages/Main/Main';

import './App.css';

export function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/auth" element={<Auth/>} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}