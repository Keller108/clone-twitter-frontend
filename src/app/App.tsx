import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from '../pages/Welcome/Welcome';
import { Main } from '../pages/Main';

import './App.css';

export function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/welcome" element={<Welcome/>} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}