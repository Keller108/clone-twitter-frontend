import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Welcome } from '../pages/Welcome/Welcome';
import { Main } from '../pages/Main';
import './App.css';

export const App = observer(() => {
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
});