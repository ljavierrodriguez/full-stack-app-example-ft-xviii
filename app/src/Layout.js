import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import StoreWrapper from './store/AppContext';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Profile from './views/Profile';
import Register from './views/Register';

function Layout() {
    return (
        <StoreWrapper>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </StoreWrapper>
    )
}

export default Layout