import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../components/Account';
import Excercise from '../components/Excercise';
import Home from '../components/Home';
import Measures from '../components/Measures';
import Subir from '../components/Subir';
import Video from '../components/Video';
import Workout from '../components/Workout';

const Dashboard = () => {
    return (  
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/send" element={<Subir />} />
            <Route path="/measures" element={<Measures />} />
            <Route path="/workout/:nombre" element={<Workout />} />
            <Route path="/:workout/:nombre" element={<Excercise />} />
            <Route path="/:workout/:nombre/video" element={<Video />} />
        </Routes>
    );
};

export default Dashboard;