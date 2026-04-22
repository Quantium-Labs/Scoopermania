import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Supporters from './Pages/Supporters.jsx'
import Tickets from './Pages/Tickets.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/Scoopermania">
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/supporters" element={<Supporters />} />
            <Route path="/tickets" element={<Tickets />} />
        </Routes>
    </BrowserRouter>,
)
