import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Dashboard from './Dashboard';
import { Private } from './Private';
import { Public } from './Public';

const AppRoutes = () => {
    const [cheking, setCheking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }
            setCheking(false)
        })
    }, [setIsLoggedIn, setCheking])

    if (cheking) {
        return (
            "Cargando..."
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <Public isAutentication={isLoggedIn}>
                        <Login />
                    </Public>
                } />
                <Route path="/register" element={
                    <Public>
                        <Register />
                    </Public>
                } />

                <Route path="/*" element={
                    <Private isAutentication={isLoggedIn}>
                        <Dashboard />
                    </Private>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
