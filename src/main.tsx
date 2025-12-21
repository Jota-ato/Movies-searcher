import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import FullPageMovie from './components/FullPageMovie'
import FullPageSerie from './components/FullPageSerie'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/movie/:id" element={<FullPageMovie />} />
                <Route path="/series/:id" element={<FullPageSerie />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)