import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import TWK from '../pages/TWK'
import TIU from '../pages/TIU'
import TKP from '../pages/TKP'
import Materi from '../pages/Materi'
import Test from '../pages/Test'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/twk" element={<TWK />} />
            <Route path="/tiu" element={<TIU />} />
            <Route path="/tkp" element={<TKP />} />
            <Route path="/materi/:id" element={<Materi />} />
            <Route path="/test/:id" element={<Test />} />
        </Routes>
    )
}