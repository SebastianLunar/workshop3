import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from '../components/Login';
import Register from '../components/Register';
import Sliders from '../components/Sliders';
import Splash from '../components/Splash';
import Dashboard from './Dashboard';
import { Private } from './Private';
import { Public } from './Public';
import logo from '../assets/Logo.png'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'

const DIV = styled.div`
    display: flex; flex-direction: column;
    gap: 1rem; justify-content: center;
    align-items: center;
    width: 100vw; height: 100vh;
`
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
            <DIV>
                <img width="281px" src={logo} alt="" />
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </DIV>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Public>
                        <Splash />
                    </Public>
                } />
                <Route path="/sliders" element={
                    <Public>
                        <Sliders />
                    </Public>
                } />
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