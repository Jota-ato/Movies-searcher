import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import FullPageMedia from './components/FullPageMedia'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/movie/:id" element={<FullPageMedia />} />
                <Route path="/tv/:id" element={<FullPageMedia />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)