import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';

export default function Router(){
    return(
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}